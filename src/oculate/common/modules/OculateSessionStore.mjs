// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import { nsOculatePreloadedFeature } from "chrome://browser/content/oculate-components/OculateCommonUtils.mjs";

class OculateSessionStore extends nsOculatePreloadedFeature {
  #initialized = Promise.withResolvers();

  init() {
    SessionStore.promiseInitialized.then(() => this.#initialized.resolve());
  }

  /**
   * Resolves once Firefox's SessionStore has finished initializing.
   */
  get promiseInitialized() {
    return this.#initialized.promise;
  }

  restoreInitialTabData(tab, tabData) {
    if (tabData.oculateWorkspace) {
      tab.setAttribute("oculate-workspace-id", tabData.oculateWorkspace);
    }
    if (tabData.oculateLiveFolderItemId) {
      tab.setAttribute("oculate-live-folder-item-id", tabData.oculateLiveFolderItemId);
    }
    // Keep for now, for backward compatibility for window sync to work.
    if (tabData.oculateSyncId || tabData.oculatePinnedId) {
      tab.setAttribute("id", tabData.oculateSyncId || tabData.oculatePinnedId);
    }
    if (typeof tabData.oculateStaticLabel === "string") {
      tab.oculateStaticLabel = tabData.oculateStaticLabel;
    }
    if (tabData.oculateHasStaticIcon && tabData.image) {
      tab.oculateStaticIcon = tabData.image;
    }
    if (tabData.oculateEssential) {
      tab.setAttribute("oculate-essential", "true");
    }
    if (tabData.oculateDefaultUserContextId) {
      tab.setAttribute("oculateDefaultUserContextId", "true");
    }
    if (tabData._oculatePinnedInitialState) {
      tab._oculatePinnedInitialState = tabData._oculatePinnedInitialState;
    }
  }
}

window.gOculateSessionStore = new OculateSessionStore();
