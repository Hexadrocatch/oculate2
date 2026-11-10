/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

let gBaselineTabs = null;

add_setup(function () {
  gBaselineTabs = new Set(gBrowser.tabs);
});

registerCleanupFunction(function () {
  for (const tab of gBrowser.tabs.filter(t => !gBaselineTabs.has(t))) {
    if (tab.isConnected) {
      BrowserTestUtils.removeTab(tab);
    }
  }
});

async function withNewSyncedWindow(action) {
  await gOculateWorkspaces.promiseInitialized;
  const win = await BrowserTestUtils.openNewBrowserWindow();
  await win.gOculateWorkspaces.promiseInitialized;
  try {
    await action(win);
  } finally {
    await BrowserTestUtils.closeWindow(win);
  }
}

async function runSyncAction(action, callback, type) {
  await new Promise((resolve, reject) => {
    window.gOculateWindowSync.addSyncHandler(async function handler(aEvent) {
      if (aEvent.type === type) {
        window.gOculateWindowSync.removeSyncHandler(handler);
        try {
          await callback(aEvent);
          resolve();
        } catch (e) {
          reject(e);
        }
      }
    });
    action();
  });
}

function getTabState(tab) {
  return JSON.parse(SessionStore.getTabState(tab));
}

async function withNewTabAndWindow(action) {
  let newTab = null;
  await withNewSyncedWindow(async win => {
    await runSyncAction(
      () => {
        newTab = gBrowser.addTrustedTab("https://example.com/", {
          inBackground: true,
        });
      },
      async aEvent => {
        Assert.equal(aEvent.type, "TabOpen", "Event type should be TabOpen");
        await TestUtils.waitForCondition(
          () => gOculateWindowSync.getItemFromWindow(win, newTab.id),
          "the opened tab is mirrored into the synced window"
        );
        await action(newTab, win);
      },
      "TabOpen"
    );
  });
  let portalTabClosing = BrowserTestUtils.waitForTabClosing(newTab);
  BrowserTestUtils.removeTab(newTab);
  await portalTabClosing;
}
