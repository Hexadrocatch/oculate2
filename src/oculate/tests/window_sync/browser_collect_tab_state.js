/* Any copyright is dedicated to the Public Domain.
   https://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

const { OculateSessionStore } = ChromeUtils.importESModule(
  "resource:///modules/oculate/OculateSessionManager.sys.mjs"
);

const SYNC_ID = "oculate-test-tab-14004";
const PAGE = "https://example.com/14004";

function windowWith(extras, url) {
  return {
    tabs: [
      {
        oculateSyncId: SYNC_ID,
        index: 1,
        entries: [{ url, title: "A page" }],
        ...extras,
      },
    ],
  };
}

function collected() {
  return OculateSessionStore.getSidebarData().tabs.find(
    tab => tab.oculateSyncId === SYNC_ID
  );
}

add_task(async function test_blankCopyNeverWins() {
  OculateSessionStore.saveState(
    {
      windows: [
        windowWith({ _oculateIsActiveTab: true }, "about:blank"),
        windowWith({}, PAGE),
      ],
    },
    true
  );
  Assert.equal(
    collected()?.entries[0].url,
    PAGE,
    "The copy holding the page is kept over a blank one that claims to be active"
  );

  OculateSessionStore.saveState(
    {
      windows: [
        windowWith({}, PAGE),
        windowWith({ _oculateIsActiveTab: true }, "about:blank"),
      ],
    },
    true
  );
  Assert.equal(
    collected()?.entries[0].url,
    PAGE,
    "The blank copy doesn't take over when it comes last either"
  );
});

add_task(async function test_activeCopyStillWins() {
  const other = "https://example.com/14004-stale";
  OculateSessionStore.saveState(
    {
      windows: [
        windowWith({}, other),
        windowWith({ _oculateIsActiveTab: true }, PAGE),
      ],
    },
    true
  );
  Assert.equal(
    collected()?.entries[0].url,
    PAGE,
    "The copy the user is looking at is the one that counts"
  );
});

add_task(async function test_blankTabWithNoSyncIdIsNotCollected() {
  OculateSessionStore.saveState(
    {
      windows: [
        {
          tabs: [
            { index: 1, entries: [{ url: "about:blank" }] },
            { index: 1, entries: [] },
            { oculateSyncId: SYNC_ID, index: 1, entries: [{ url: PAGE }] },
          ],
        },
      ],
    },
    true
  );
  const tabs = OculateSessionStore.getSidebarData().tabs;
  info(
    `collected: ${JSON.stringify(
      tabs.map(tab => ({
        id: tab.oculateSyncId,
        url: tab.entries?.[0]?.url ?? null,
      }))
    )}`
  );
  Assert.ok(
    !tabs.some(tab => !tab.oculateSyncId),
    "A blank tab that window sync never tracked should not reach the session"
  );
});
