// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

const lazy = {};

ChromeUtils.defineESModuleGetters(lazy, {
  gOculateBoostsManager: "resource:///modules/oculate/boosts/OculateBoostsManager.sys.mjs",
});

export class OculateBoostsParent extends JSWindowActorParent {
  #zapBar = null;

  static OBSERVERS = [
    "oculate-boosts-update",
    "oculate-space-gradient-update",
    "oculate-boosts-disable-zap",
    "oculate-boosts-disable-picker",
  ];

  // Topics the content child is allowed to forward to the observer service.
  // Anything outside this set is rejected to prevent content-triggered
  // notifications on unrelated chrome observers.
  static ALLOWED_NOTIFY_TOPICS = new Set([
    "zap-state-update",
    "zap-list-update",
    "selector-picker-state-update",
    "selector-picker-picked",
  ]);

  /**
   * Creates a new OculateBoostsParent actor instance and sets up an observer
   * for boost update notifications.
   */
  constructor() {
    super();

    this._observe = this.observe.bind(this);
    OculateBoostsParent.OBSERVERS.forEach(observe => {
      Services.obs.addObserver(this._observe, observe);
    });
  }

  /**
   * Called when the actor is destroyed. Cleans up the observer.
   */
  didDestroy() {
    OculateBoostsParent.OBSERVERS.forEach(observe => {
      Services.obs.removeObserver(this._observe, observe);
    });
    this.#setZapBarVisible(false);
  }

  /**
   * Shows or removes the zap bar in the chrome of the zapped browser.
   *
   * @param {boolean} visible - Whether the bar should be shown.
   */
  #setZapBarVisible(visible) {
    if (!visible) {
      this.#zapBar?.remove();
      this.#zapBar = null;
      return;
    }
    if (this.#zapBar) {
      return;
    }

    const browsingContext = this.browsingContext;
    const browser = browsingContext?.top.embedderElement;
    // Zap mode only runs on top-level documents.
    if (!browser || browsingContext.parent) {
      return;
    }
    const bar = browser.ownerDocument.createElement("oculate-zap-bar");
    bar.browser = browser;
    bar.actor = this;
    browser.parentNode.insertAdjacentElement("afterend", bar);
    this.#zapBar = bar;
  }

  /**
   * Observer callback that handles boost update notifications.
   * Sends a message to child actors when boosts are updated.
   *
   * @param {object} subject - The subject of the notification.
   * @param {string} topic - The topic of the notification.
   */
  observe(subject, topic) {
    switch (topic) {
      case "oculate-boosts-update":
      case "oculate-space-gradient-update":
        this.sendAsyncMessage("OculateBoost:BoostDataUpdated", {
          unloadStyles: true,
        });
        break;
      case "oculate-boosts-disable-zap":
        this.sendAsyncMessage("OculateBoost:DisableZapMode");
        break;
      case "oculate-boosts-disable-picker":
        this.sendAsyncMessage("OculateBoost:DisablePickerMode");
        break;
    }
  }

  /**
   * Updates the boost size override on webpage
   *
   * @param {number} sizeOverride - The size to apply on the webpage as a override
   * @param {boolean} disable - Whether to disable the override (sets override to the default 1)
   */
  updateBoostSizeOverride(sizeOverride, disable = false) {
    if (
      sizeOverride &&
      isFinite(sizeOverride) &&
      (sizeOverride !== 1 || disable)
    ) {
      const fullZoom = this.browsingContext.topChromeWindow.FullZoom;
      fullZoom.setZoom(sizeOverride, this.browsingContext.top.embedderElement);
    }
  }

  /**
   * Handles messages received from child actors.
   * Retrieves boost data for a domain when requested.
   *
   * @param {object} message - The message object containing name and data.
   * @returns {Promise<object | null>} A promise that resolves to the boost data or null.
   */
  async receiveMessage(message) {
    switch (message.name) {
      case "OculateBoost:OpenInspector": {
        const { require } = ChromeUtils.importESModule(
          "resource://devtools/shared/loader/Loader.sys.mjs"
        );

        const { gDevTools } = require("devtools/client/framework/devtools");

        let win = Services.wm.getMostRecentWindow("navigator:browser");
        let tab = win.gBrowser.selectedTab;

        let toolbox = gDevTools.getToolboxForTab(tab);

        if (toolbox) {
          await gDevTools.closeToolboxForTab(tab);
        } else {
          await gDevTools.showToolboxForTab(tab, "inspector");
        }
        break;
      }
      case "OculateBoost:Notify": {
        const { topic, msg } = message.data ?? {};
        if (!OculateBoostsParent.ALLOWED_NOTIFY_TOPICS.has(topic)) {
          console.warn(
            `[OculateBoostsParent]: Rejected notify for disallowed topic: ${topic}`
          );
          break;
        }
        Services.obs.notifyObservers(null, topic, msg);
        break;
      }
      case "OculateBoost:ZapSelector": {
        const data = message.data;

        if (!data.action) {
          break;
        }
        if (!data.selector) {
          break;
        }
        if (!data.domain) {
          break;
        }

        const mode = data.mode === "focus" ? "focus" : "zap";
        if (data.action == "add") {
          lazy.gOculateBoostsManager.addZapSelectorToActive(
            data.selector,
            data.domain,
            mode
          );
        } else if (data.action == "remove") {
          lazy.gOculateBoostsManager.removeZapSelectorToActive(
            data.selector,
            data.domain,
            mode
          );
        } else if (data.action == "clear") {
          const selectors = Array.isArray(data.selectors)
            ? data.selectors.filter(entry => typeof entry === "string")
            : null;
          lazy.gOculateBoostsManager.clearZapSelectorsForActive(
            data.domain,
            data.mode ? mode : null,
            selectors
          );
        }
        break;
      }
      case "OculateBoost:GetBoostForDomain": {
        const domain = message.data;
        const embedder = this.browsingContext.top.embedderElement;

        if (!embedder || !domain) {
          break;
        }

        const exists = lazy.gOculateBoostsManager.registeredBoostForDomain(domain);
        if (!exists) {
          break;
        }

        const boost = lazy.gOculateBoostsManager.loadActiveBoostFromStore(domain);
        let workspaceGradient = [];
        if (boost.boostEntry.boostData.autoTheme) {
          const currentWorkspace =
            await this.browsingContext.topChromeWindow.gOculateWorkspaces.getActiveWorkspace();
          workspaceGradient = currentWorkspace.theme.gradientColors;
        }

        const styleData =
          await lazy.gOculateBoostsManager.getStyleSheetForBoost(domain);

        return {
          ...boost,
          workspaceGradient,
          styleSheet: styleData
            ? {
                uuid: styleData.uuid,
                uri: styleData.uri.spec,
              }
            : null,
        };
      }
      case "OculateBoost:UpdateBoostSize": {
        const { sizeOverride } = message.data;
        this.updateBoostSizeOverride(sizeOverride);
        break;
      }
      case "OculateBoost:ZapBarState": {
        this.#setZapBarVisible(!!message.data?.visible);
        break;
      }
      case "OculateBoost:ZapBarUpdate": {
        const entries = (message.data?.entries ?? [])
          .filter(entry => typeof entry?.selector === "string")
          .map(({ selector, count }) => ({
            selector,
            count: Number.isFinite(count) ? count : 0,
          }));
        if (this.#zapBar) {
          this.#zapBar.entries = entries;
        }
        break;
      }
      default: {
        console.warn(`[OculateBoostsParent]: Unknown message: ${message.name}`);
        break;
      }
    }

    return null;
  }
}
