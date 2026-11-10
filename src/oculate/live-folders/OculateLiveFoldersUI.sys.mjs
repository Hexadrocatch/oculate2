// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import { OculateUIComponent } from "resource:///modules/oculate/ui/OculateUIComponent.sys.mjs";

const lazy = {};

ChromeUtils.defineLazyGetter(
  lazy,
  "relativeTimeFormat",
  () =>
    new Intl.RelativeTimeFormat(Services.locale.appLocaleAsBCP47, {
      numeric: "auto",
    })
);

ChromeUtils.defineESModuleGetters(lazy, {
  OculateLiveFoldersManager:
    "resource:///modules/oculate/OculateLiveFoldersManager.sys.mjs",
});

const MINUTE_MS = 60 * 1000;
const HOUR_MS = 60 * MINUTE_MS;

/**
 * Per-window UI for live folders.
 */
export class OculateLiveFoldersUI extends OculateUIComponent {
  init() {
    this.window.gOculateLiveFoldersUI = this;
    this.#optionsElement
      .querySelector("menupopup")
      .addEventListener("command", this);

    Promise.all([
      this.window.gOculateWorkspaces.promiseInitialized,
      lazy.OculateLiveFoldersManager.stateRestored.promise,
    ]).then(() => {
      for (const liveFolder of lazy.OculateLiveFoldersManager.liveFolders.values()) {
        this.#restoreUIStateForLiveFolder(liveFolder);
      }
    });
  }

  get #optionsElement() {
    return this.document.getElementById("context_oculateLiveFolderOptions");
  }

  on_command(event) {
    const option = event.target;
    const folderId = option.getAttribute("option-folder");
    if (!folderId) {
      return;
    }
    const folder = lazy.OculateLiveFoldersManager.getFolder(folderId);
    if (folder && typeof folder.onOptionTrigger === "function") {
      folder.onOptionTrigger(option);
    }
  }

  #restoreUIStateForLiveFolder(liveFolder) {
    const folder = this.window.gOculateWorkspaces.allTabGroups.find(
      x => x.id === liveFolder.id
    );
    if (!folder) {
      return;
    }

    const btn = folder.resetButton;
    if (!btn) {
      return;
    }

    for (const { itemId, label } of liveFolder.tabsState) {
      const tab = folder.tabs.find(
        t => t.getAttribute("oculate-live-folder-item-id") === itemId
      );
      if (tab && label) {
        const tabLabel = tab.querySelector(".oculate-tab-sublabel");
        tab.setAttribute("oculate-show-sublabel", label);

        this.document.l10n.setArgs(tabLabel, {
          tabSubtitle: label,
        });
      }
    }

    const errorId = liveFolder.state.lastErrorId;
    if (errorId) {
      btn.setAttribute("data-l10n-id", errorId);
      btn.setAttribute("live-folder-action", liveFolder.id);
      return;
    }

    btn.setAttribute("data-l10n-id", "oculate-folders-unload-all-tooltip");
    btn.removeAttribute("live-folder-action");
  }

  #applyMenuItemAttributes(menuItem, option, folderId) {
    menuItem.setAttribute("data-l10n-id", option.l10nId);

    if (option.checked !== undefined) {
      menuItem.setAttribute("type", option.type ?? "checkbox");
      if (option.checked === true) {
        menuItem.setAttribute("checked", "true");
      }
    }

    if (option.l10nArgs) {
      menuItem.setAttribute("data-l10n-args", JSON.stringify(option.l10nArgs));
    }

    menuItem.setAttribute("option-folder", folderId);
    menuItem.setAttribute("option-key", option.key);
    if (option.disabled) {
      menuItem.setAttribute("disabled", "true");
    }
    if (option.hidden) {
      menuItem.setAttribute("hidden", "true");
    }
  }

  #appendOptions(parentPopup, options, folderId) {
    for (const option of options) {
      if (option.type === "separator") {
        parentPopup.appendChild(
          this.document.createXULElement("menuseparator")
        );
        continue;
      }

      if (option.options) {
        const menu = this.document.createXULElement("menu");
        this.#applyMenuItemAttributes(menu, option, folderId);

        const subPopup = this.document.createXULElement("menupopup");
        this.#appendOptions(subPopup, option.options, folderId);

        menu.appendChild(subPopup);
        parentPopup.appendChild(menu);
        continue;
      }

      const menuItem = this.document.createXULElement("menuitem");
      this.#applyMenuItemAttributes(menuItem, option, folderId);

      if (option.value !== undefined) {
        menuItem.setAttribute("option-value", option.value);
      }

      parentPopup.appendChild(menuItem);
    }
  }

  /**
   * Builds the fetch interval choices offered in the context menu.
   *
   * @param {object} liveFolder - The live folder the menu is shown for.
   * @returns {object[]} Radio menu item descriptions.
   */
  #intervalOptions(liveFolder) {
    const intervals = [];
    for (let mins = 15; mins <= 30; mins *= 2) {
      intervals.push({ mins });
    }
    for (let hours = 1; hours <= 8; hours *= 2) {
      intervals.push({ hours });
    }

    return intervals.map(entry => {
      const ms =
        "mins" in entry ? entry.mins * MINUTE_MS : entry.hours * HOUR_MS;

      return {
        l10nId:
          "mins" in entry
            ? "oculate-live-folder-fetch-interval-mins"
            : "oculate-live-folder-fetch-interval-hours",
        l10nArgs: entry,

        type: "radio",
        checked: liveFolder.state.interval === ms,

        key: "setInterval",
        value: ms,
      };
    });
  }

  buildContextMenu(folder) {
    const optionsElement = this.#optionsElement;

    let hidden = true;
    if (folder.isLiveFolder) {
      const popup = optionsElement.querySelector("menupopup");
      const liveFolder = lazy.OculateLiveFoldersManager.getFolder(folder.id);

      const contextMenuItems = [
        {
          key: "lastFetched",
          l10nId:
            liveFolder.state.lastErrorId || "oculate-live-folder-last-fetched",
          l10nArgs: { time: this.#timeAgo(liveFolder.state.lastFetched) },
          disabled: true,
        },
        {
          key: "setInterval",
          l10nId: "oculate-live-folder-option-fetch-interval",
          options: this.#intervalOptions(liveFolder),
        },
        {
          key: "refresh",
          l10nId: "oculate-live-folder-refresh",
        },
        { type: "separator" },
        ...liveFolder.options,
      ];

      popup.innerHTML = "";

      this.#appendOptions(popup, contextMenuItems, folder.id);
      hidden = false;
    }

    optionsElement.hidden = hidden;
    this.document.getElementById("live-folder-separator").hidden = hidden;
  }

  #timeAgo(date) {
    if (date === 0) {
      return "-";
    }

    const rtf = lazy.relativeTimeFormat;
    const secondsDiff = (date - Date.now()) / 1000;
    const absSeconds = Math.abs(secondsDiff);

    const ranges = {
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1,
    };

    if (Number.isFinite(secondsDiff)) {
      for (const [key, value] of Object.entries(ranges)) {
        if (absSeconds >= value) {
          return rtf.format(Math.round(secondsDiff / value), key);
        }
      }

      return rtf.format(Math.round(secondsDiff), "second");
    }

    return "-";
  }
}
