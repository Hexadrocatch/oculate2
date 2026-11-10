/* Any copyright is dedicated to the Public Domain.
   https://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

add_task(async function test_Change_To_Empty() {
  // eslint-disable-next-line no-unused-vars
  const currentWorkspaceUUID = gOculateWorkspaces.activeWorkspace;
  await gOculateWorkspaces.createAndSaveWorkspace("Test Workspace 2");
  const workspaces = gOculateWorkspaces.getWorkspaces();
  const secondWorkspace = workspaces.workspaces[1];

  await gOculateWorkspaces.changeWorkspace(secondWorkspace.uuid);
  Assert.strictEqual(
    gBrowser.selectedTab,
    gOculateWorkspaces._emptyTab,
    "The empty tab should be selected."
  );

  await gOculateWorkspaces.removeWorkspace(gOculateWorkspaces.activeWorkspace);
  Assert.notStrictEqual(
    gBrowser.selectedTab,
    gOculateWorkspaces._emptyTab,
    "The empty tab should not be selected anymore."
  );

  const workspacesAfterRemove = gOculateWorkspaces.getWorkspaces();
  Assert.strictEqual(
    workspacesAfterRemove.length,
    1,
    "One workspace should exist."
  );
  Assert.strictEqual(gBrowser.tabs.length, 2, "There should be two tabs.");
});
