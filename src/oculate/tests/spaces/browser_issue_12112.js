/* Any copyright is dedicated to the Public Domain.
   https://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

add_setup(async function () {
  await SpecialPowers.pushPrefEnv({
    set: [["oculate.urlbar.replace-newtab", false]],
  });
  registerCleanupFunction(async () => {
    await SpecialPowers.popPrefEnv();
  });
});

add_task(
  async function test_focuses_urlbar_on_startup_without_replace_newtab() {
    await gOculateWorkspaces.promiseInitialized;
    Assert.ok(
      !gOculateVerticalTabsManager._canReplaceNewTab,
      "Precondition: oculate.urlbar.replace-newtab is disabled"
    );

    const originalTab = gBrowser.selectedTab;
    const originalOpenLocation = window.openLocation;
    const originalTestingEnabled = gOculateUIManager.testingEnabled;

    let openLocationCalls = 0;
    window.openLocation = () => {
      openLocationCalls++;
    };

    // selectStartPage() and selectEmptyTab() are both no-ops while testing mode
    // is enabled; temporarily disable it to exercise the real startup path.
    gOculateUIManager.testingEnabled = false;

    // The tab the startup page leaves selected, which Oculate wants to replace.
    const tabToRemove = BrowserTestUtils.addTab(gBrowser, "about:blank", {
      skipAnimation: true,
    });
    gBrowser.selectedTab = tabToRemove;
    gOculateWorkspaces._tabToRemoveForEmpty = tabToRemove;
    delete gOculateWorkspaces._tabToSelect;
    delete gOculateWorkspaces._shouldOverrideTabs;
    delete gOculateWorkspaces._initialTab;

    try {
      await gOculateWorkspaces.selectStartPage();

      await TestUtils.waitForCondition(
        () => openLocationCalls > 0,
        "openLocation() should be called to focus the address bar"
      );

      Assert.equal(
        openLocationCalls,
        1,
        "The address bar was focused via openLocation()"
      );
      Assert.ok(
        !gBrowser.selectedTab.hasAttribute("oculate-empty-tab"),
        "A fallback homepage tab is selected (no oculate-empty-tab attribute), so " +
          "the focus decision came from initialTabWasEmpty, not shownEmptyTab"
      );
      Assert.ok(
        !gBrowser.tabs.includes(tabToRemove),
        "The empty tab added by the startup page was removed"
      );
    } finally {
      window.openLocation = originalOpenLocation;
      gOculateUIManager.testingEnabled = originalTestingEnabled;
      delete gOculateWorkspaces._tabToRemoveForEmpty;

      // Remove any tab created by the startup path, then restore the original.
      for (const tab of [...gBrowser.tabs]) {
        if (tab !== originalTab && !tab.hasAttribute("oculate-empty-tab")) {
          BrowserTestUtils.removeTab(tab);
        }
      }
      if (!originalTab.closing) {
        gBrowser.selectedTab = originalTab;
      }
    }
  }
);
