/* Any copyright is dedicated to the Public Domain.
   https://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

add_task(async function test_Private_Mode() {
  await SpecialPowers.pushPrefEnv({
    set: [
      ["privacy.userContext.enabled", true],
      ["oculate.testing.enabled", false],
      ["oculate.urlbar.open-on-startup", false],
    ],
  });

  let privateWindow = await BrowserTestUtils.openNewBrowserWindow({
    private: true,
  });
  await privateWindow.gOculateWorkspaces.promiseInitialized;

  Assert.ok(
    privateWindow.gBrowser.selectedTab.hasAttribute("oculate-empty-tab"),
    "Private window should start with a oculate empty tab"
  );

  Assert.ok(
    !privateWindow.gOculateWorkspaces.shouldShowContainers,
    "Containers/profiles should not be shown in private windows"
  );

  const popup = privateWindow.document.getElementById(
    "oculateWorkspaceMoreActions"
  );
  privateWindow.gOculateWorkspaces.updateWorkspaceActionsMenu({
    target: popup,
  });

  const openInContainerMenuItem = privateWindow.document.getElementById(
    "context_oculateWorkspacesOpenInContainerTab"
  );
  Assert.ok(
    openInContainerMenuItem.hidden,
    "Set Profile menu should be hidden in private window"
  );

  await BrowserTestUtils.closeWindow(privateWindow);
  await SpecialPowers.popPrefEnv();
});
