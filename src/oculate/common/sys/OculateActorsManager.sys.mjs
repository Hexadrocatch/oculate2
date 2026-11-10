// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// Utility to register JSWindowActors

import { ActorManagerParent } from "resource://gre/modules/ActorManagerParent.sys.mjs";

/**
 * Fission-compatible JSProcess implementations.
 * Each actor options object takes the form of a ProcessActorOptions dictionary.
 * Detailed documentation of these options is in dom/docs/ipc/jsactors.rst,
 * available at https://firefox-source-docs.mozilla.org/dom/ipc/jsactors.html
 */
let JSPROCESSACTORS = {};

/**
 * Fission-compatible JSWindowActor implementations.
 * Detailed documentation of these options is in dom/docs/ipc/jsactors.rst,
 * available at https://firefox-source-docs.mozilla.org/dom/ipc/jsactors.html
 */
let JSWINDOWACTORS = {
  OculateModsMarketplace: {
    parent: {
      esModuleURI: "resource:///actors/OculateModsMarketplaceParent.sys.mjs",
    },
    child: {
      esModuleURI: "resource:///actors/OculateModsMarketplaceChild.sys.mjs",
      events: {
        DOMContentLoaded: {},
      },
    },
    safeForUntrustedWebProcess: true,
    matches: ["about:preferences"],
  },
  OculateGlance: {
    parent: {
      esModuleURI: "resource:///actors/OculateGlanceParent.sys.mjs",
    },
    child: {
      esModuleURI: "resource:///actors/OculateGlanceChild.sys.mjs",
      events: {
        mousedown: {
          capture: true,
        },
        keydown: {
          capture: true,
        },
        click: {
          capture: true,
        },
      },
    },
    remoteTypes: ["web", "file"],
    safeForUntrustedWebProcess: true,
    enablePreference: "oculate.glance.enabled",
  },
  OculateWindowDrag: {
    parent: {
      esModuleURI: "resource:///actors/OculateWindowDragParent.sys.mjs",
    },
    child: {
      esModuleURI: "resource:///actors/OculateWindowDragChild.sys.mjs",
      events: {
        mousedown: {
          mozSystemGroup: true,
        },
      },
    },
    messageManagerGroups: ["browsers"],
    remoteTypes: ["web", "file"],
    safeForUntrustedWebProcess: true,
    enablePreference: "oculate.view.drag-window-from-content",
  },
};

if (!Services.appinfo.inSafeMode) {
  JSWINDOWACTORS.OculateBoosts = {
    parent: {
      esModuleURI: "resource:///actors/OculateBoostsParent.sys.mjs",
    },
    child: {
      esModuleURI: "resource:///actors/OculateBoostsChild.sys.mjs",
      events: {
        DOMDocElementInserted: {},
      },
    },
    safeForUntrustedWebProcess: true,
    remoteTypes: ["web", "file"],
    enablePreference: "oculate.boosts.enabled",
  };
}

export let gOculateActorsManager = {
  init() {
    ActorManagerParent.addJSProcessActors(JSPROCESSACTORS);
    ActorManagerParent.addJSWindowActors(JSWINDOWACTORS);
  },
};
