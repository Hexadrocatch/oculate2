/* Any copyright is dedicated to the Public Domain.
   https://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

const HOMEPAGES = "https://example.com/|https://example.org/";

add_setup(async function () {
  await SpecialPowers.pushPrefEnv({
    set: [
      ["oculate.urlbar.open-on-startup", false],
      ["oculate.window-sync.enabled", false],
    ],
  });
});

add_task(async function test_fallback_opens_first_homepage() {
  // selectStartPage() only runs once per window, so use a new one.
  const win = await BrowserTestUtils.openNewBrowserWindow();
  await win.gOculateWorkspaces.promiseInitialized;
  await SpecialPowers.pushPrefEnv({
    set: [
      ["oculate.urlbar.replace-newtab", false],
      ["browser.startup.homepage", HOMEPAGES],
    ],
  });

  // The tab Oculate marks as empty at startup. selectStartPage() removes it and
  // falls back to selectEmptyTab().
  const tab = BrowserTestUtils.addTab(win.gBrowser, "https://example.com/", {
    skipAnimation: true,
  });
  win.gBrowser.selectedTab = tab;
  win.gOculateWorkspaces._tabToRemoveForEmpty = tab;

  // selectStartPage() and selectEmptyTab() are no-ops while testing mode is
  // enabled.
  const originalTestingEnabled = win.gOculateUIManager.testingEnabled;
  win.gOculateUIManager.testingEnabled = false;
  try {
    await win.gOculateWorkspaces.selectStartPage();
  } finally {
    win.gOculateUIManager.testingEnabled = originalTestingEnabled;
  }

  const fallbackTab = win.gBrowser.selectedTab;
  Assert.notEqual(fallbackTab, tab, "A fallback homepage tab was opened");
  await TestUtils.waitForCondition(
    () => fallbackTab.linkedBrowser.currentURI.spec === "https://example.com/",
    "The fallback tab opens the first homepage URL, not the whole pref"
  );
  await BrowserTestUtils.closeWindow(win);
  await SpecialPowers.popPrefEnv();
});
