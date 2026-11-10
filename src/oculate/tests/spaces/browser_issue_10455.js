/* Any copyright is dedicated to the Public Domain.
   https://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

add_task(async function test_Issue_10455() {
  await SpecialPowers.pushPrefEnv({
    set: [
      ["browser.tabs.closeWindowWithLastTab", true],
      ["oculate.testing.enabled", false],
      ["oculate.window-sync.enabled", false],
    ],
  });

  let newWindow = await BrowserTestUtils.openNewBrowserWindow();
  await newWindow.gOculateWorkspaces.promiseInitialized;

  const unloadEvent = BrowserTestUtils.waitForEvent(newWindow, "unload");
  Assert.greaterOrEqual(
    newWindow.gBrowser.tabs.length,
    2,
    "New window should have at least two tabs to close"
  );
  newWindow.BrowserCommands.closeTabOrWindow();
  newWindow.BrowserCommands.closeTabOrWindow();
  await unloadEvent;

  ok(newWindow.closed, "Window should be closing");
  await SpecialPowers.popPrefEnv();
});

add_task(async function test_Issue_10455_Dont_Close() {
  await SpecialPowers.pushPrefEnv({
    set: [
      ["browser.tabs.closeWindowWithLastTab", false],
      ["oculate.testing.enabled", false],
      ["oculate.window-sync.enabled", false],
    ],
  });

  let newWindow = await BrowserTestUtils.openNewBrowserWindow();
  await newWindow.gOculateWorkspaces.promiseInitialized;

  Assert.greaterOrEqual(
    newWindow.gBrowser.tabs.length,
    2,
    "New window should have at least two tabs to close"
  );
  newWindow.BrowserCommands.closeTabOrWindow();
  newWindow.BrowserCommands.closeTabOrWindow();
  Assert.strictEqual(
    newWindow.gBrowser.tabs.length,
    1,
    "Window should still have one tab"
  );
  ok(
    newWindow.gBrowser.selectedTab.hasAttribute("oculate-empty-tab"),
    "Tab should be a oculate empty tab"
  );
  ok(!newWindow.closing, "Window should be closing");

  await BrowserTestUtils.closeWindow(newWindow);
  await SpecialPowers.popPrefEnv();
});
