/* Any copyright is dedicated to the Public Domain.
   https://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

let initialWorkspace;

const SPACE_DOC = {
  version: "1",
  shared: {
    type: "space",
    name: "Imported Space",
    theme: {
      type: "gradient",
      gradientColors: [
        { c: [217, 105, 24], type: "explicit", isPrimary: true },
        { c: [16, 32, 48], type: "custom", isCustom: true },
      ],
    },
    items: [
      {
        type: "folder",
        name: "Research",
        icon: "chrome://browser/skin/oculate-icons/selectable/star.svg",
        items: [
          { type: "tab", url: "https://example.com/sub", label: "Sub tab" },
          {
            type: "folder",
            name: "Papers",
            items: [
              {
                type: "tab",
                url: "https://example.com/paper",
                label: "Paper",
              },
            ],
          },
        ],
      },
      {
        type: "tab",
        url: "https://example.com/pinned",
        label: "Pinned tab",
        isPinned: true,
      },
      {
        type: "splitView",
        tabs: [
          {
            type: "tab",
            url: "https://example.com/left",
            label: "Left",
            isPinned: true,
          },
          {
            type: "tab",
            url: "https://example.com/right",
            label: "Right",
            isPinned: true,
          },
        ],
      },
      { type: "tab", url: "https://example.com/loose", label: "Loose" },
    ],
  },
};

add_setup(async function () {
  initialWorkspace = gOculateWorkspaces.activeWorkspace;
  await SpecialPowers.pushPrefEnv({
    set: [["oculate.view.show-newtab-button-top", true]],
  });
  registerCleanupFunction(() => cleanupSpaces(initialWorkspace));
});

add_task(async function test_overlay_preview() {
  const restore = stubSharePreview(SPACE_DOC, "John Oculate");
  const { tab, overlay } = await openShareOverlay(
    `${SHARE_BASE}/space/${SHARE_ID}`
  );

  Assert.ok(
    tab.linkedBrowser.hasAttribute("oculate-share-overlay-showing"),
    "the share page is visually hidden behind the overlay"
  );
  Assert.equal(
    overlay.querySelector(".oculate-share-overlay-badge-title").textContent,
    "Imported Space"
  );
  Assert.ok(
    tab.hasAttribute("oculate-show-sublabel"),
    "the host tab gets the shared-by sublabel"
  );

  // Navigating away tears the overlay down and clears the sublabel.
  const loaded = BrowserTestUtils.browserLoaded(tab.linkedBrowser);
  BrowserTestUtils.startLoadingURIString(
    tab.linkedBrowser,
    "https://example.com/"
  );
  await loaded;
  await TestUtils.waitForCondition(
    () => !tab.linkedBrowser._oculateShareOverlay,
    "overlay is removed on navigation"
  );
  Assert.ok(
    !tab.hasAttribute("oculate-show-sublabel"),
    "the sublabel is cleared on navigation"
  );

  BrowserTestUtils.removeTab(tab);
  restore();
});

add_task(async function test_import_space() {
  const restore = stubSharePreview(SPACE_DOC, "John Oculate");
  let sweepPlayed = false;
  const restoreSweep = stubMethod(
    gOculateStartup,
    "playWindowSweepAnimation",
    () => (sweepPlayed = true)
  );

  const { tab, overlay } = await openShareOverlay(
    `${SHARE_BASE}/space/${SHARE_ID}`
  );
  await importFromOverlay(tab, overlay);
  await TestUtils.waitForCondition(
    () => gOculateWorkspaces.activeWorkspace !== initialWorkspace,
    "the imported space becomes active"
  );

  const workspace = gOculateWorkspaces.getActiveWorkspaceFromCache();
  Assert.equal(workspace.name, "Imported Space", "the shared name wins");
  Assert.deepEqual(
    workspace.theme.gradientColors[0].c,
    [217, 105, 24],
    "the shared theme is applied"
  );
  Assert.equal(
    workspace.theme.gradientColors[1].c,
    "rgb(16, 32, 48)",
    "custom colors go back to css strings locally"
  );
  Assert.ok(sweepPlayed, "importing a space plays the startup sweep");

  const element = gOculateWorkspaces.workspaceElement(workspace.uuid);
  const pinnedKinds = [...element.pinnedTabsContainer.children]
    .map(child => {
      if (child.matches?.("oculate-folder")) {
        return "folder:" + child.label;
      }
      if (child.matches?.("tab-group[split-view-group]")) {
        return "split";
      }
      return gBrowser.isTab(child) ? "tab:" + child.label : null;
    })
    .filter(Boolean);
  Assert.deepEqual(
    pinnedKinds,
    ["folder:Research", "tab:Pinned tab", "split"],
    "pinned items import in document order despite the new-tab-top pref"
  );

  const folder = element.querySelector("oculate-folder");
  Assert.ok(folder.collapsed, "imported folders start collapsed");
  const subfolder = folder.querySelector("oculate-folder");
  Assert.equal(subfolder?.label, "Papers", "nested folders import");
  Assert.ok(subfolder.collapsed, "nested folders start collapsed too");
  Assert.ok(folder.collapsed, "adding a subfolder does not expand the parent");
  Assert.deepEqual(
    folder.allItemsRecursive
      .filter(
        item => gBrowser.isTab(item) && !item.hasAttribute("oculate-empty-tab")
      )
      .map(tab => tab.label),
    ["Sub tab", "Paper"],
    "lazy folder tabs keep their shared labels"
  );
  Assert.equal(
    folder.iconURL,
    "chrome://browser/skin/oculate-icons/selectable/star.svg",
    "the folder icon is restored"
  );

  const split = element.pinnedTabsContainer.querySelector(
    "tab-group[split-view-group]"
  );
  Assert.ok(
    split.tabs.every(t => t.pinned),
    "an all-pinned shared split imports pinned"
  );

  const loose = [...element.tabsContainer.children].find(
    child => gBrowser.isTab(child) && child.label === "Loose"
  );
  Assert.ok(loose, "unpinned tabs land in the normal section");
  Assert.ok(!loose.pinned, "and stay unpinned");

  restoreSweep();
  restore();
  await cleanupSpaces(initialWorkspace);
});

add_task(async function test_dead_link_shows_error() {
  const restore = stubMethod(OculateShareClient, "fetchSharePreview", async () => {
    throw new OculateShareError("not-found", "share not found");
  });
  const tab = gBrowser.addTrustedTab(`${SHARE_BASE}/space/${SHARE_ID}`, {
    inBackground: false,
  });
  gBrowser.selectedTab = tab;
  await TestUtils.waitForCondition(() => {
    const status = tab.linkedBrowser._oculateShareOverlay?.querySelector(
      ".oculate-share-overlay-status"
    );
    return (
      status?.getAttribute("data-l10n-id") ===
      "oculate-share-import-error-dead-description"
    );
  }, "the dead-link message shows in the overlay");
  BrowserTestUtils.removeTab(tab);
  restore();
});
