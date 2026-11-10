/* Any copyright is dedicated to the Public Domain.
   https://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

add_setup(async function () {
  await SpecialPowers.pushPrefEnv({
    set: [
      ["oculate.urlbar.open-on-startup", false],
      ["oculate.window-sync.enabled", false],
    ],
  });
});

// selectStartPage() only runs once per window, so every case uses a new one.
async function runStartPage(startupURI) {
  const win = await BrowserTestUtils.openNewBrowserWindow();
  await win.gOculateWorkspaces.promiseInitialized;

  // The tab Oculate marks as empty at startup, which Firefox then loads the first
  // startup URL into.
  const tab = BrowserTestUtils.addTab(win.gBrowser, "https://example.com/", {
    skipAnimation: true,
  });
  win.gBrowser.selectedTab = tab;
  win.gOculateWorkspaces._tabToRemoveForEmpty = tab;
  Object.defineProperty(win.gBrowserInit, "uriToLoadPromise", {
    value: startupURI,
    configurable: true,
    writable: true,
  });

  // selectStartPage() and selectEmptyTab() are no-ops while testing mode is
  // enabled.
  const originalTestingEnabled = win.gOculateUIManager.testingEnabled;
  win.gOculateUIManager.testingEnabled = false;
  try {
    await win.gOculateWorkspaces.selectStartPage();
  } finally {
    win.gOculateUIManager.testingEnabled = originalTestingEnabled;
  }
  return { win, tab };
}

add_task(async function test_keeps_first_homepage_tab() {
  const { win, tab } = await runStartPage(
    "https://example.com/|https://example.org/"
  );
  Assert.ok(
    win.gBrowser.tabs.includes(tab),
    "The tab holding the first homepage URL was kept"
  );
  Assert.equal(
    win.gBrowser.selectedTab,
    tab,
    "The first homepage tab is selected"
  );
  await BrowserTestUtils.closeWindow(win);
});

add_task(async function test_removes_tab_without_startup_page() {
  const { win, tab } = await runStartPage(null);
  Assert.ok(
    !win.gBrowser.tabs.includes(tab),
    "The empty startup tab is still removed when nothing was loaded into it"
  );
  await BrowserTestUtils.closeWindow(win);
});
