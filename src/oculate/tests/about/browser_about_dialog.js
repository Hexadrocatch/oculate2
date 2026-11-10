/* Any copyright is dedicated to the Public Domain.
   https://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

const { AppUpdater } = ChromeUtils.importESModule(
  "resource://gre/modules/AppUpdater.sys.mjs"
);

const kAboutURL =
  "chrome://browser/content/oculate-components/windows/oculate-about.xhtml";

function countAboutWindows() {
  let count = 0;
  for (const win of Services.wm.getEnumerator("Browser:About")) {
    if (!win.closed) {
      count++;
    }
  }
  return count;
}

async function closeAboutWindows() {
  for (const win of Services.wm.getEnumerator("Browser:About")) {
    if (!win.closed) {
      await BrowserTestUtils.closeWindow(win);
    }
  }
}

async function openOculateAboutDialog() {
  // A task that failed midway may have left its window behind, and
  // openAboutDialog() would focus that one instead of opening a new one.
  await closeAboutWindows();
  const opened = BrowserTestUtils.domWindowOpenedAndLoaded(
    null,
    win => win.location.href == kAboutURL
  );
  openAboutDialog();
  const win = await opened;
  await win.document.l10n.ready;
  // The dialog starts a real update check on open; keep the test in control
  // of the status row instead.
  win.oculateAboutDialog.stopUpdateChecks();
  return win;
}

registerCleanupFunction(closeAboutWindows);

add_task(async function test_about_window_opens_once() {
  const win = await openOculateAboutDialog();
  const root = win.document.documentElement;
  is(
    root.getAttribute("windowtype"),
    "Browser:About",
    "Oculate owns the about window"
  );

  const version = win.document.getElementById("oculate-about-version-text");
  ok(
    version.textContent.includes(AppConstants.MOZ_APP_VERSION_DISPLAY),
    `Version label "${version.textContent}" names the display version`
  );
  const firefoxVersion = win.document.getElementById(
    "oculate-about-firefox-version"
  );
  ok(
    firefoxVersion.textContent.includes(AppConstants.OCULATE_FIREFOX_VERSION),
    `Firefox label "${firefoxVersion.textContent}" names the engine version`
  );

  openAboutDialog();
  is(countAboutWindows(), 1, "Opening again reuses the existing window");

  await BrowserTestUtils.closeWindow(win);
  is(countAboutWindows(), 0, "The about window is gone after closing");
});

add_task(async function test_about_links() {
  const win = await openOculateAboutDialog();
  const doc = win.document;

  is(
    doc.getElementById("oculate-about-issues").href,
    "https://github.com/Hexadrocatch/oculate2/issues",
    "Issues link points at the tracker"
  );
  const releaseNotes = doc.getElementById("oculate-about-release-notes");
  ok(
    !releaseNotes || releaseNotes.href.startsWith("http"),
    `Release notes link is either dropped or external: ${releaseNotes?.href}`
  );

  const tabOpened = BrowserTestUtils.waitForNewTab(
    gBrowser,
    "about:license",
    true
  );
  EventUtils.synthesizeMouseAtCenter(
    doc.querySelector('#oculate-about-legal a[href="about:license"]'),
    {},
    win
  );
  const tab = await tabOpened;
  is(
    win.location.href,
    kAboutURL,
    "Clicking a link opens it in the browser instead of navigating the dialog"
  );

  BrowserTestUtils.removeTab(tab);
  await BrowserTestUtils.closeWindow(win);
});

add_task(async function test_about_update_states() {
  const win = await openOculateAboutDialog();
  const doc = win.document;
  const dialog = win.oculateAboutDialog;
  const section = doc.getElementById("oculate-about-update");
  const text = doc.getElementById("oculate-about-update-text");
  const button = doc.getElementById("oculate-about-update-button");

  if (!AppConstants.MOZ_UPDATER) {
    ok(section.hidden, "Builds without an updater hide the update row");
    await BrowserTestUtils.closeWindow(win);
    return;
  }

  dialog.onUpdateStatus(AppUpdater.STATUS.CHECKING);
  is(section.dataset.state, "checking", "Checking state is reflected");
  is(
    text.getAttribute("data-l10n-id"),
    "oculate-about-update-checking",
    "Checking text is shown"
  );
  ok(button.hidden, "No action while checking");

  dialog.onUpdateStatus(AppUpdater.STATUS.DOWNLOADING, 25, 100);
  is(section.dataset.state, "downloading", "Downloading state is reflected");
  ok(
    doc.l10n.getAttributes(text).args.transfer,
    "Downloading text carries the transfer amount"
  );

  dialog.onUpdateStatus(AppUpdater.STATUS.READY_FOR_RESTART);
  is(section.dataset.state, "ready", "Ready state is reflected");
  ok(!button.hidden, "Restart button is offered");
  is(
    button.getAttribute("data-l10n-id"),
    "oculate-about-update-restart",
    "Restart button is labelled"
  );
  ok(button.classList.contains("primary"), "Restart is the primary action");
  is(doc.activeElement, button, "Restart button takes focus so Enter works");

  dialog.onUpdateStatus(AppUpdater.STATUS.DOWNLOAD_FAILED);
  is(section.dataset.state, "failed", "Failed state is reflected");
  is(
    button.getAttribute("data-l10n-id"),
    "oculate-about-update-download-manually",
    "A failed download offers the manual download"
  );
  ok(!button.classList.contains("primary"), "Manual download is secondary");

  dialog.onUpdateStatus(AppUpdater.STATUS.NO_UPDATES_FOUND);
  await TestUtils.waitForCondition(
    () => section.dataset.state == "up-to-date",
    "Up to date state shows once the minimum checking time passes"
  );
  ok(button.hidden, "Up to date offers no further action");

  dialog.onUpdateStatus(AppUpdater.STATUS.NO_UPDATER);
  ok(section.hidden, "No updater hides the update row");

  await BrowserTestUtils.closeWindow(win);
});

add_task(async function test_about_escape_closes() {
  const win = await openOculateAboutDialog();
  const closed = BrowserTestUtils.windowClosed(win);
  EventUtils.synthesizeKey("KEY_Escape", {}, win);
  await closed;
  is(countAboutWindows(), 0, "Escape closes the about window");
});
