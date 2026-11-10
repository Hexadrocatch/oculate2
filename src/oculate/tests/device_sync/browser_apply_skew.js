/* Any copyright is dedicated to the Public Domain.
   https://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

add_task(async function test_AppliedCreateNotTombstonedBeforeCollection() {
  await gOculateWorkspaces.promiseInitialized;
  await collectProjections();

  const id = "test-skew-create";
  OculateSpacesSyncModel.noteApplied(id, tabRecord(id, { pinned: true }).cleartext);
  Assert.ok(
    !OculateSpacesSyncModel.itemExists(id),
    "the id is acknowledged but not yet projected (the skew window)"
  );

  const changes = OculateSpacesSyncModel.computeChangedIDs();
  Assert.ok(
    !(id in changes),
    "a just-applied create is not tombstoned before the projection catches up"
  );

  OculateSpacesSyncModel.noteApplied(id, null);
});

add_task(async function test_AppliedDeletionNotResurrectedBeforeCollection() {
  await gOculateWorkspaces.promiseInitialized;

  const tab = await openSyncableTab("https://example.com/?skew-delete", {
    pinned: true,
  });
  const id = tab.id;
  await collectProjections();
  OculateSpacesSyncModel.markUploaded([id]);
  Assert.ok(
    !(id in OculateSpacesSyncModel.computeChangedIDs()),
    "the uploaded tab is clean before the deletion"
  );

  const failed = await OculateSpacesSyncApplier.applyBatch([tombstone(id)]);
  Assert.deepEqual(failed, [], "the tombstone applies cleanly");
  Assert.ok(!document.getElementById(id), "the tab is removed");

  const changes = OculateSpacesSyncModel.computeChangedIDs();
  Assert.ok(
    !(id in changes),
    "a just-applied deletion is not re-uploaded before the projection catches up"
  );

  OculateSpacesSyncModel.noteApplied(id, null);
});
