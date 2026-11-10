/* Any copyright is dedicated to the Public Domain.
   https://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

add_task(async function test_ApplySkippedWhileOptionOff() {
  await gOculateWorkspaces.promiseInitialized;
  const id = "test-spaces-sync-normal-off";
  const failed = await OculateSpacesSyncApplier.applyBatch([
    tabRecord(id, { pinned: false }),
  ]);
  Assert.deepEqual(
    failed,
    [],
    "A skipped normal-tab record should not be reported as failed"
  );
  Assert.ok(
    !document.getElementById(id),
    "No tab should materialize while the option is off"
  );
});

add_task(async function test_ApplyCreatesUnpinnedTab() {
  await SpecialPowers.pushPrefEnv({ set: [[NORMAL_TABS_PREF, true]] });
  const id = "test-spaces-sync-normal-on";
  const failed = await OculateSpacesSyncApplier.applyBatch([
    tabRecord(id, { pinned: false }),
  ]);
  Assert.deepEqual(failed, [], "The record should apply cleanly");

  const tab = document.getElementById(id);
  Assert.ok(gBrowser.isTab(tab), "The tab should materialize");
  Assert.ok(!tab.pinned, "The tab should not be pinned");
  Assert.equal(
    tab.getAttribute("oculate-workspace-id"),
    gOculateWorkspaces.activeWorkspace,
    "The tab should land in the record's workspace"
  );
  Assert.ok(
    !tab._oculatePinnedInitialState,
    "A normal tab should carry no pin identity"
  );

  OculateSpacesSyncModel.noteApplied(id, null);
  BrowserTestUtils.removeTab(tab);
  await SpecialPowers.popPrefEnv();
});

add_task(async function test_UpdateRetargetsUnloadedNormalTab() {
  await SpecialPowers.pushPrefEnv({ set: [[NORMAL_TABS_PREF, true]] });
  const id = "test-spaces-sync-retarget";
  let failed = await OculateSpacesSyncApplier.applyBatch([
    tabRecord(id, { pinned: false, url: "https://example.com/first" }),
  ]);
  Assert.deepEqual(failed, [], "The record should apply cleanly");
  const tab = document.getElementById(id);
  Assert.ok(!tab.linkedPanel, "The synced tab should stay unloaded");

  failed = await OculateSpacesSyncApplier.applyBatch([
    tabRecord(id, { pinned: false, url: "https://example.com/second" }),
  ]);
  Assert.deepEqual(failed, [], "The navigation record should apply cleanly");
  Assert.ok(!tab.linkedPanel, "The tab should stay unloaded after retarget");
  const state = JSON.parse(SessionStore.getTabState(tab));
  Assert.equal(
    state.entries.at(-1)?.url,
    "https://example.com/second",
    "The unloaded tab's state should point at the new url"
  );

  OculateSpacesSyncModel.noteApplied(id, null);
  BrowserTestUtils.removeTab(tab);
  await SpecialPowers.popPrefEnv();
});

add_task(async function test_UpdateRetargetsDiscardedNormalTab() {
  await SpecialPowers.pushPrefEnv({ set: [[NORMAL_TABS_PREF, true]] });
  const tab = await openSyncableTab("https://example.com/?loadedfirst");
  const id = tab.id;
  await BrowserTestUtils.switchTab(gBrowser, gBrowser.tabs[0]);
  gBrowser.discardBrowser(tab);
  Assert.ok(!tab.linkedPanel, "The tab should be discarded");

  const failed = await OculateSpacesSyncApplier.applyBatch([
    tabRecord(id, { pinned: false, url: "https://example.com/?remotenav" }),
  ]);
  Assert.deepEqual(failed, [], "The navigation record should apply cleanly");
  Assert.ok(!tab.linkedPanel, "The tab should stay unloaded after retarget");
  const state = JSON.parse(SessionStore.getTabState(tab));
  Assert.equal(
    state.entries.at(-1)?.url,
    "https://example.com/?remotenav",
    "The discarded tab's state should point at the new url"
  );

  OculateSpacesSyncModel.noteApplied(id, null);
  BrowserTestUtils.removeTab(tab);
  await SpecialPowers.popPrefEnv();
});

add_task(async function test_ApplyPinStateTransition() {
  await SpecialPowers.pushPrefEnv({ set: [[NORMAL_TABS_PREF, true]] });
  const id = "test-spaces-sync-transition";
  let failed = await OculateSpacesSyncApplier.applyBatch([
    tabRecord(id, { pinned: true }),
  ]);
  Assert.deepEqual(failed, [], "The pinned record should apply cleanly");
  const tab = document.getElementById(id);
  Assert.ok(gBrowser.isTab(tab), "The tab should materialize");
  Assert.ok(tab.pinned, "A pinned record should materialize pinned");
  await TestUtils.waitForCondition(
    () => tab._oculatePinnedInitialState,
    "waiting for the pin identity to settle"
  );

  failed = await OculateSpacesSyncApplier.applyBatch([
    tabRecord(id, { pinned: false }),
  ]);
  Assert.deepEqual(failed, [], "The demoting record should apply cleanly");
  Assert.ok(!tab.pinned, "A record demotion should unpin the tab");
  Assert.ok(
    !tab._oculatePinnedInitialState,
    "Demotion should clear the pin identity"
  );

  OculateSpacesSyncModel.noteApplied(id, null);
  BrowserTestUtils.removeTab(tab);
  await SpecialPowers.popPrefEnv();
});

add_task(async function test_ApplySyncsTabLabel() {
  await SpecialPowers.pushPrefEnv({ set: [[NORMAL_TABS_PREF, true]] });
  const id = "test-spaces-sync-label";
  let failed = await OculateSpacesSyncApplier.applyBatch([
    tabRecord(id, { pinned: false, title: "Remote title" }),
  ]);
  Assert.deepEqual(failed, [], "The record should apply cleanly");
  const tab = document.getElementById(id);
  Assert.ok(!tab.linkedPanel, "The synced tab should stay unloaded");
  Assert.equal(
    tab.label,
    "Remote title",
    "The synced title should be the unloaded tab's label"
  );

  failed = await OculateSpacesSyncApplier.applyBatch([
    tabRecord(id, { pinned: false, title: "Retitled remotely" }),
  ]);
  Assert.deepEqual(failed, [], "The retitling record should apply cleanly");
  Assert.equal(
    tab.label,
    "Retitled remotely",
    "A later title change should reach the label"
  );

  OculateSpacesSyncModel.noteApplied(id, null);
  BrowserTestUtils.removeTab(tab);
  await SpecialPowers.popPrefEnv();
});
