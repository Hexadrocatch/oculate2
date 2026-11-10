/* Any copyright is dedicated to the Public Domain.
   https://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

const { gOculateSpaceRoutingManager } = ChromeUtils.importESModule(
  "resource:///modules/oculate/spacerouting/OculateSpaceRoutingManager.sys.mjs"
);

function clearAllRoutes() {
  for (const route of gOculateSpaceRoutingManager.getAllRoutes()) {
    gOculateSpaceRoutingManager.removeRoute(route.id);
  }
}

function addRoute({
  reference = "",
  openIn = "most-recent-space",
  matchType = "contains",
} = {}) {
  const route = gOculateSpaceRoutingManager.createNewRoute();
  route.reference = reference;
  route.openIn = openIn;
  route.matchType = matchType;
  gOculateSpaceRoutingManager.updateRoute(route);
  return route;
}

function makeFakeWindow({
  ready = true,
  workspaces = [],
  workspaceEnabled = true,
} = {}) {
  return {
    gOculateStartup: { isReady: ready },
    gOculateWorkspaces: {
      workspaceEnabled,
      moveCalls: [],
      changeCalls: [],
      lastSelectedWorkspaceTabs: {},
      getWorkspaceFromId(id) {
        return workspaces.find(w => w.uuid === id) || null;
      },
      moveTabToWorkspace(tab, uuid) {
        this.moveCalls.push({ tab, uuid });
      },
      changeWorkspace(workspace) {
        this.changeCalls.push(workspace);
        return Promise.resolve();
      },
    },
  };
}

async function flushEventLoop() {
  for (let i = 0; i < 5; i++) {
    await new Promise(resolve => Services.tm.dispatchToMainThread(resolve));
  }
}
