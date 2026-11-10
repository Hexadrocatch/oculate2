/* Any copyright is dedicated to the Public Domain.
   https://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

const { TabStateFlusher } = ChromeUtils.importESModule(
  "moz-src:///browser/components/sessionstore/TabStateFlusher.sys.mjs"
);

async function makeNewEmptyTab() {
  let tab = await BrowserTestUtils.openNewForegroundTab(
    gBrowser,
    "about:blank"
  );
  gBrowser.selectedTab = tab;
  return tab;
}

add_task(async function test_Restore_Pinned_Tab() {
  await BrowserTestUtils.withNewTab(
    {
      gBrowser,
      url: "https://example.com/",
    },
    async function (browser) {
      let tab = gBrowser.getTabForBrowser(browser);
      gBrowser.pinTab(tab);
      ok(tab.pinned, "The tab should be pinned after being created");
      await BrowserTestUtils.removeTab(tab);
      await TabStateFlusher.flushWindow(window);
      const before = gBrowser.selectedTab;
      SessionWindowUI.restoreLastClosedTabOrWindowOrSession(window);
      await TestUtils.waitForCondition(
        () => gBrowser.selectedTab !== before && gBrowser.selectedTab.pinned,
        "the restored tab is selected and pinned"
      );
      tab = gBrowser.selectedTab;
      ok(tab.pinned, "The tab should be pinned after restore");
      ok(
        tab.parentElement.closest(".oculate-workspace-pinned-tabs-section"),
        "The tab should be in the pinned tabs section after restore"
      );
      await makeNewEmptyTab();
      await BrowserTestUtils.removeTab(tab);
    }
  );
});

add_task(async function test_Restore_Essential_Tab() {
  await BrowserTestUtils.withNewTab(
    {
      gBrowser,
      url: "https://example.com/",
    },
    async function (browser) {
      let tab = gBrowser.getTabForBrowser(browser);
      gOculatePinnedTabManager.addToEssentials(tab);
      ok(
        tab.hasAttribute("oculate-essential"),
        "The tab should be marked as essential after being created"
      );
      await BrowserTestUtils.removeTab(tab);
      await TabStateFlusher.flushWindow(window);
      const before = gBrowser.selectedTab;
      SessionWindowUI.restoreLastClosedTabOrWindowOrSession(window);
      await TestUtils.waitForCondition(
        () =>
          gBrowser.selectedTab !== before &&
          gBrowser.selectedTab.hasAttribute("oculate-essential"),
        "the restored tab is selected and essential"
      );
      tab = gBrowser.selectedTab;
      ok(
        tab.hasAttribute("oculate-essential"),
        "The tab should be marked as essential after restore"
      );
      ok(
        tab.parentElement.closest(".oculate-essentials-container"),
        "The tab should be in the essentials tabs section after restore"
      );
      await BrowserTestUtils.removeTab(tab);
    }
  );
});
