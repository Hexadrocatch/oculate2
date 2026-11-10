/* Any copyright is dedicated to the Public Domain.
   https://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

const SOURCE_CONTAINER = 11;
const TARGET_CONTAINER = 22;
const CHOSEN_CONTAINER = 33;

function fakeWindowWithActiveContainer(containerTabId) {
  return {
    gOculateWorkspaces: {
      workspaceEnabled: true,
      getActiveWorkspaceFromCache: () => ({ containerTabId }),
    },
  };
}

add_setup(async function () {
  clearAllRoutes();
  registerCleanupFunction(() => clearAllRoutes());
});

add_task(async function test_inherited_container_is_replaced() {
  const win = fakeWindowWithActiveContainer(SOURCE_CONTAINER);

  ok(
    gOculateSpaceRoutingManager.shouldUseRouteContainer(
      SOURCE_CONTAINER,
      false,
      win
    ),
    "A container inherited from the source space gives way to the route's"
  );
});

add_task(async function test_deliberate_container_is_kept() {
  const win = fakeWindowWithActiveContainer(SOURCE_CONTAINER);

  ok(
    !gOculateSpaceRoutingManager.shouldUseRouteContainer(
      CHOSEN_CONTAINER,
      false,
      win
    ),
    "A container the user picked explicitly is left alone"
  );
});

add_task(async function test_no_container_and_external_still_route() {
  const win = fakeWindowWithActiveContainer(SOURCE_CONTAINER);

  ok(
    gOculateSpaceRoutingManager.shouldUseRouteContainer(undefined, false, win),
    "A tab with no container of its own takes the route's container"
  );
  ok(
    gOculateSpaceRoutingManager.shouldUseRouteContainer(
      CHOSEN_CONTAINER,
      true,
      win
    ),
    "External links keep taking the route's container"
  );
});

add_task(async function test_containerless_source_space() {
  const win = fakeWindowWithActiveContainer(0);

  ok(
    gOculateSpaceRoutingManager.shouldUseRouteContainer(0, false, win),
    "No container on either side still counts as inherited"
  );
  ok(
    !gOculateSpaceRoutingManager.shouldUseRouteContainer(
      CHOSEN_CONTAINER,
      false,
      win
    ),
    "...but an explicit container is still respected"
  );
});

add_task(async function test_workspaces_disabled_keeps_the_container() {
  const win = { gOculateWorkspaces: { workspaceEnabled: false } };

  ok(
    !gOculateSpaceRoutingManager.shouldUseRouteContainer(
      SOURCE_CONTAINER,
      false,
      win
    ),
    "With spaces disabled the inherited container is untouched"
  );
  ok(
    gOculateSpaceRoutingManager.shouldUseRouteContainer(undefined, false, win),
    "...unless there was no container to begin with"
  );
});

add_task(async function test_route_container_reaches_a_real_tab() {
  await gOculateWorkspaces.promiseInitialized;

  const identity = ContextualIdentityService.create(
    "SR Container Test",
    "fingerprint",
    "purple"
  );
  const sourceWorkspace = gOculateWorkspaces.getActiveWorkspace();
  let targetWorkspace;
  try {
    targetWorkspace = await gOculateWorkspaces.createAndSaveWorkspace(
      "SR Container Target",
      undefined,
      false,
      identity.userContextId
    );
    await gOculateWorkspaces.changeWorkspace(sourceWorkspace);

    addRoute({
      reference: "example.com",
      matchType: "contains",
      openIn: targetWorkspace.uuid,
    });

    // The container the clicked link would inherit from its opener.
    const sourceContainerId = sourceWorkspace.containerTabId ?? 0;
    const result = gOculateSpaceRoutingManager.onBeforeAddTab(
      "https://example.com/gh-15620",
      {},
      window
    );

    Assert.ok(result.isRouteFound, "The link matches a route");
    Assert.equal(
      result.userContextId,
      identity.userContextId,
      "The route resolves to the destination space's container"
    );
    Assert.ok(
      gOculateSpaceRoutingManager.shouldUseRouteContainer(
        sourceContainerId,
        false,
        window
      ),
      "...and that container replaces the one inherited from the source space"
    );
  } finally {
    clearAllRoutes();
    await gOculateWorkspaces.changeWorkspace(sourceWorkspace);
    if (targetWorkspace) {
      await gOculateWorkspaces.removeWorkspace(targetWorkspace.uuid);
    }
    ContextualIdentityService.remove(identity.userContextId);
  }
});
