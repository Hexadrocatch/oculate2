/* Any copyright is dedicated to the Public Domain.
   https://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

add_task(async function test_Create_Workspace_Without_Containers() {
  await SpecialPowers.pushPrefEnv({
    set: [["privacy.userContext.ui.enabled", false]],
  });
  const originalWorkspace = gOculateWorkspaces.getActiveWorkspace();

  const essentialTab = BrowserTestUtils.addTab(gBrowser, "about:blank", {
    skipAnimation: true,
  });
  gOculatePinnedTabManager.addToEssentials(essentialTab);
  const essentialsContainer = essentialTab.parentNode;

  await gOculateWorkspaces.openWorkspaceCreation();
  const creationForm = document.querySelector("oculate-workspace-creation");
  ok(
    creationForm.inputProfile.parentNode.hidden,
    "Container picker is hidden when containers are disabled"
  );
  creationForm.inputName.value = "No Containers";
  await creationForm.onCreateButtonCommand();

  const workspace = gOculateWorkspaces.getActiveWorkspace();
  Assert.strictEqual(
    workspace.containerTabId,
    0,
    "New workspace should use the default container"
  );
  ok(
    BrowserTestUtils.isVisible(essentialsContainer),
    "Essentials are shown in the new workspace"
  );

  await gOculateWorkspaces.changeWorkspace(originalWorkspace);
  await gOculateWorkspaces.removeWorkspace(workspace.uuid);
  await BrowserTestUtils.removeTab(essentialTab);
  await SpecialPowers.popPrefEnv();
});

add_task(async function test_Restore_Workspace_Without_Container() {
  const originalWorkspace = gOculateWorkspaces.getActiveWorkspace();

  const essentialTab = BrowserTestUtils.addTab(gBrowser, "about:blank", {
    skipAnimation: true,
  });
  gOculatePinnedTabManager.addToEssentials(essentialTab);

  await gOculateWorkspaces.createAndSaveWorkspace("Missing Container");
  const workspace = gOculateWorkspaces.getActiveWorkspace();
  // Same shape as a session saved before the creation form was fixed
  delete workspace.containerTabId;

  const win = await BrowserTestUtils.openNewBrowserWindow();
  await win.gOculateWorkspaces.promiseInitialized;
  const restoredWorkspace = win.gOculateWorkspaces.getWorkspaceFromId(
    workspace.uuid
  );
  Assert.strictEqual(
    restoredWorkspace.containerTabId,
    0,
    "Restored workspace should fall back to the default container"
  );

  is(
    win.gOculateWorkspaces.activeWorkspace,
    workspace.uuid,
    "New window opens on the restored workspace"
  );
  ok(
    BrowserTestUtils.isVisible(
      win.document.querySelector('.oculate-essentials-container[container="0"]')
    ),
    "Essentials are shown in the restored workspace"
  );
  await BrowserTestUtils.closeWindow(win);

  await gOculateWorkspaces.changeWorkspace(originalWorkspace);
  await gOculateWorkspaces.removeWorkspace(workspace.uuid);
  await BrowserTestUtils.removeTab(essentialTab);
});
