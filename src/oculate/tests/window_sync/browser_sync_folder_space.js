/* Any copyright is dedicated to the Public Domain.
   https://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

add_task(async function test_MirroredFolderKeepsItsOwnSpace() {
  await gOculateWorkspaces.promiseInitialized;
  const spaceA = await gOculateWorkspaces.createAndSaveWorkspace("space A");
  const spaceB = await gOculateWorkspaces.createAndSaveWorkspace("space B");

  try {
    await withNewSyncedWindow(async win => {
      await gOculateWorkspaces.changeWorkspace(spaceB);
      await win.gOculateWorkspaces.changeWorkspace(spaceA);
      Assert.equal(
        win.gOculateWorkspaces.activeWorkspace,
        spaceA.uuid,
        "The other window shows a different space"
      );

      const tab = BrowserTestUtils.addTab(gBrowser, "data:text/html,folder");
      const folder = await gOculateFolders.createFolder([tab], {
        renameFolder: false,
        label: "mirrored",
      });
      Assert.equal(
        folder.getAttribute("oculate-workspace-id"),
        spaceB.uuid,
        "The folder is created in the space its window shows"
      );

      await TestUtils.waitForCondition(
        () => gOculateWindowSync.getItemFromWindow(win, folder.id),
        "the folder is mirrored into the other window"
      );
      const mirror = gOculateWindowSync.getItemFromWindow(win, folder.id);

      Assert.equal(
        mirror.getAttribute("oculate-workspace-id"),
        spaceB.uuid,
        "The copy keeps the space the folder was created in"
      );
      Assert.notEqual(
        mirror.getAttribute("oculate-workspace-id"),
        win.gOculateWorkspaces.activeWorkspace,
        "and not the space the mirroring window happened to show"
      );

      const stored = win.gOculateFolders
        .storeDataForSessionStore()
        .find(f => f.id === folder.id);
      Assert.equal(
        stored?.workspaceId,
        spaceB.uuid,
        "The other window would store the right space for it"
      );

      await folder.delete();
    });
  } finally {
    await gOculateWorkspaces.removeWorkspace(spaceA.uuid);
    await gOculateWorkspaces.removeWorkspace(spaceB.uuid);
  }
});

add_task(async function test_MirroredFolderKeepsTheLiveFlag() {
  await gOculateWorkspaces.promiseInitialized;

  await withNewSyncedWindow(async win => {
    const folder = await gOculateFolders.createFolder([], {
      renameFolder: false,
      label: "live",
      isLiveFolder: true,
    });
    Assert.ok(folder.isLiveFolder, "The folder is a live folder");

    await TestUtils.waitForCondition(
      () => gOculateWindowSync.getItemFromWindow(win, folder.id),
      "the live folder is mirrored into the other window"
    );
    const mirror = gOculateWindowSync.getItemFromWindow(win, folder.id);
    Assert.ok(mirror.isLiveFolder, "The copy is a live folder too");

    await folder.delete();
  });
});
