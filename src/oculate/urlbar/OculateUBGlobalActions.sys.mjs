/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { XPCOMUtils } from "resource://gre/modules/XPCOMUtils.sys.mjs";

const lazy = {};

XPCOMUtils.defineLazyPreferenceGetter(
  lazy,
  "currentTheme",
  "oculate.view.window.scheme",
  2
);

XPCOMUtils.defineLazyPreferenceGetter(
  lazy,
  "libraryEnabled",
  "oculate.library.enabled",
  true
);

ChromeUtils.defineLazyGetter(lazy, "l10n", () => {
  return new Localization(["browser/oculate-command-palette.ftl"], true);
});

ChromeUtils.defineESModuleGetters(lazy, {
  SessionStore:
    "moz-src:///browser/components/sessionstore/SessionStore.sys.mjs",
});

function isNotEmptyTab(window) {
  return !window.gBrowser.selectedTab.hasAttribute("oculate-empty-tab");
}

const globalActionsTemplate = [
  {
    l10nId: "oculate-action-toggle-compact-mode",
    command: "cmd_toggleCompactModeIgnoreHover",
    icon: "chrome://browser/skin/oculate-icons/sidebar.svg",
  },
  {
    l10nId: "oculate-action-open-theme-picker",
    command: "cmd_oculateOpenOculateThemePicker",
    icon: "chrome://browser/skin/oculate-icons/paintbrush-fill.svg",
  },
  {
    l10nId: "oculate-action-open-library",
    command: "cmd_oculateToggleLibrary",
    icon: "chrome://browser/skin/oculate-icons/library.svg",
    isAvailable: () => {
      return lazy.libraryEnabled;
    },
  },
  {
    l10nId: "oculate-action-new-split-view",
    command: "cmd_oculateNewEmptySplit",
    icon: "chrome://browser/skin/oculate-icons/split.svg",
  },
  {
    l10nId: "oculate-action-unsplit-view",
    command: "cmd_oculateSplitViewUnsplit",
    icon: "chrome://browser/skin/oculate-icons/split.svg",
    isAvailable: window => {
      return window.gOculateViewSplitter.splitViewActive;
    },
  },
  {
    l10nId: "oculate-action-new-space",
    command: "cmd_oculateOpenWorkspaceCreation",
    icon: "chrome://browser/skin/oculate-icons/plus.svg",
  },
  {
    l10nId: "oculate-action-new-folder",
    command: "cmd_oculateOpenFolderCreation",
    icon: "chrome://browser/skin/oculate-icons/folder.svg",
  },
  {
    l10nId: "oculate-action-collapse-all-folders",
    command: window => window.gOculateFolders.collapseAllFolders(),
    icon: "chrome://browser/skin/oculate-icons/arrows-collapse.svg",
    isAvailable: window => {
      return !!window.gOculateFolders?.activeSpaceFolders.some(
        folder => !folder.collapsed
      );
    },
  },
  {
    l10nId: "oculate-action-expand-all-folders",
    command: window => window.gOculateFolders.expandAllFolders(),
    icon: "chrome://browser/skin/oculate-icons/arrows-expand.svg",
    isAvailable: window => {
      return !!window.gOculateFolders?.activeSpaceFolders.some(
        folder => folder.collapsed
      );
    },
  },
  {
    l10nId: "oculate-action-copy-current-url",
    command: "cmd_oculateCopyCurrentURL",
    icon: "chrome://browser/skin/oculate-icons/link.svg",
  },
  {
    l10nId: "oculate-action-settings",
    command: window => window.openPreferences(),
    icon: "chrome://browser/skin/oculate-icons/settings.svg",
  },
  {
    l10nId: "oculate-action-open-private-window",
    command: "Tools:PrivateBrowsing",
    icon: "chrome://browser/skin/oculate-icons/private-window.svg",
  },
  {
    l10nId: "oculate-action-open-new-window",
    command: "cmd_newNavigator",
    icon: "chrome://browser/skin/oculate-icons/window.svg",
  },
  {
    l10nId: "oculate-action-new-blank-window",
    command: "cmd_oculateNewNavigatorUnsynced",
    icon: "chrome://browser/skin/oculate-icons/window.svg",
  },
  {
    l10nId: "oculate-action-pin-tab",
    command: "cmd_oculateTogglePinTab",
    icon: "chrome://browser/skin/oculate-icons/pin.svg",
    isAvailable: window => {
      const tab = window.gBrowser.selectedTab;
      return !tab.hasAttribute("oculate-empty-tab") && !tab.pinned;
    },
  },
  {
    l10nId: "oculate-action-unpin-tab",
    command: "cmd_oculateTogglePinTab",
    icon: "chrome://browser/skin/oculate-icons/unpin.svg",
    isAvailable: window => {
      const tab = window.gBrowser.selectedTab;
      return !tab.hasAttribute("oculate-empty-tab") && tab.pinned;
    },
  },
  {
    l10nId: "oculate-action-open-space-routing",
    command: "cmd_oculateOpenSpaceRoutingSettings",
    icon: "chrome://browser/skin/oculate-icons/selectable/airplane.svg",
  },
  {
    l10nId: "oculate-action-new-boost",
    icon: "chrome://browser/skin/oculate-icons/boost.svg",
    isAvailable: window => {
      if (!isNotEmptyTab(window)) {
        return false;
      }

      // Keep this action consistent with the rest of the Boosts UI.
      if (!Services.prefs.getBoolPref("oculate.boosts.enabled", false)) {
        return false;
      }

      const uri = window.gBrowser.currentURI;
      return !!uri?.schemeIs && (uri.schemeIs("http") || uri.schemeIs("https"));
    },
    command: window => {
      const uri = window.gBrowser.currentURI;
      if (!uri?.schemeIs || !(uri.schemeIs("http") || uri.schemeIs("https"))) {
        return;
      }

      let domain = "";
      try {
        domain = uri.host;
      } catch {
        return;
      }

      if (!domain) {
        return;
      }

      const { gOculateBoostsManager } = ChromeUtils.importESModule(
        "resource:///modules/oculate/boosts/OculateBoostsManager.sys.mjs"
      );
      const boost = gOculateBoostsManager.createNewBoost(domain);
      if (!boost) {
        return;
      }
      gOculateBoostsManager.openBoostWindow(window, boost, uri);
    },
  },
  {
    l10nId: "oculate-action-next-space",
    command: "cmd_oculateWorkspaceForward",
    icon: "chrome://browser/skin/oculate-icons/forward.svg",
    isAvailable: window => {
      return window.gOculateWorkspaces._workspaceCache.length > 1;
    },
  },
  {
    l10nId: "oculate-action-previous-space",
    command: "cmd_oculateWorkspaceBackward",
    icon: "chrome://browser/skin/oculate-icons/back.svg",
    isAvailable: window => {
      // This also covers the case of being in private mode
      return window.gOculateWorkspaces._workspaceCache.length > 1;
    },
  },
  {
    l10nId: "oculate-action-close-tab",
    command: "cmd_close",
    icon: "chrome://browser/skin/oculate-icons/close.svg",
    isAvailable: window => {
      return isNotEmptyTab(window);
    },
  },
  {
    l10nId: "oculate-action-reopen-closed-tab",
    command: "History:RestoreLastClosedTabOrWindowOrSession",
    icon: "chrome://browser/skin/oculate-icons/history.svg",
    isAvailable: window => {
      return !!lazy.SessionStore.getClosedTabCount({
        sourceWindow: window,
      }).length;
    },
  },
  {
    l10nId: "oculate-action-duplicate-tab",
    command: "Browser:DuplicateTab",
    icon: "chrome://browser/skin/oculate-icons/duplicate-tab.svg",
    isAvailable: window => {
      return isNotEmptyTab(window);
    },
  },
  {
    l10nId: "oculate-action-reset-pinned-tab",
    command: "cmd_oculatePinnedTabReset",
    icon: "chrome://browser/skin/oculate-icons/arrow-rotate-anticlockwise.svg",
    isAvailable: window => {
      const tab = window.gBrowser.selectedTab;
      return tab.pinned && tab.hasAttribute("oculate-pinned-changed");
    },
  },
  {
    l10nId: "oculate-action-reload-tab",
    command: "Browser:Reload",
    icon: "chrome://browser/skin/oculate-icons/reload.svg",
  },
  {
    l10nId: "oculate-action-reload-tab-without-cache",
    command: "Browser:ReloadSkipCache",
    icon: "chrome://browser/skin/oculate-icons/reload.svg",
  },
  {
    l10nId: "oculate-action-next-tab",
    command: "Browser:NextTab",
    icon: "chrome://browser/skin/oculate-icons/forward.svg",
  },
  {
    l10nId: "oculate-action-previous-tab",
    command: "Browser:PrevTab",
    icon: "chrome://browser/skin/oculate-icons/back.svg",
  },
  {
    l10nId: "oculate-action-capture-screenshot",
    command: "Browser:Screenshot",
    icon: "chrome://browser/skin/oculate-icons/screenshot.svg",
    isAvailable: window => {
      return isNotEmptyTab(window);
    },
  },
  {
    l10nId: "oculate-action-toggle-tabs-on-right",
    command: "cmd_oculateToggleTabsOnRight",
    icon: "chrome://browser/skin/oculate-icons/sidebars-right.svg",
  },
  {
    l10nId: "oculate-action-add-to-essentials",
    command: window =>
      window.gOculatePinnedTabManager.addToEssentials(window.gBrowser.selectedTab),
    isAvailable: window => {
      return (
        window.gOculatePinnedTabManager.canEssentialBeAdded(
          window.gBrowser.selectedTab
        ) && !window.gBrowser.selectedTab.hasAttribute("oculate-essential")
      );
    },
    icon: "chrome://browser/skin/oculate-icons/essential-add.svg",
  },
  {
    l10nId: "oculate-action-remove-from-essentials",
    command: window =>
      window.gOculatePinnedTabManager.removeEssentials(window.gBrowser.selectedTab),
    isAvailable: window =>
      window.gBrowser.selectedTab.hasAttribute("oculate-essential"),
    icon: "chrome://browser/skin/oculate-icons/essential-remove.svg",
  },
  {
    l10nId: "oculate-action-find-in-page",
    command: "cmd_find",
    icon: "chrome://browser/skin/oculate-icons/search-page.svg",
    isAvailable: window => {
      return isNotEmptyTab(window);
    },
  },
  {
    l10nId: "oculate-action-manage-extensions",
    command: "Tools:Addons",
    icon: "chrome://browser/skin/oculate-icons/extension.svg",
  },
  {
    l10nId: "oculate-action-switch-to-automatic-appearance",
    command: () => Services.prefs.setIntPref("oculate.view.window.scheme", 2),
    icon: "chrome://browser/skin/oculate-icons/sparkles.svg",
    isAvailable: () => {
      return lazy.currentTheme !== 2;
    },
  },
  {
    l10nId: "oculate-action-switch-to-light-mode",
    command: () => Services.prefs.setIntPref("oculate.view.window.scheme", 1),
    icon: "chrome://browser/skin/oculate-icons/face-sun.svg",
    isAvailable: () => {
      return lazy.currentTheme !== 1;
    },
  },
  {
    l10nId: "oculate-action-switch-to-dark-mode",
    command: () => Services.prefs.setIntPref("oculate.view.window.scheme", 0),
    icon: "chrome://browser/skin/oculate-icons/moon-stars.svg",
    isAvailable: () => {
      return lazy.currentTheme !== 0;
    },
  },
  {
    l10nId: "oculate-action-print",
    command: "cmd_print",
    icon: "chrome://browser/skin/oculate-icons/print.svg",
    isAvailable: window => {
      return isNotEmptyTab(window);
    },
  },
];

export function formatValueSync(l10nId) {
  return lazy.l10n.formatValueSync(l10nId);
}

const labels = new Map();

Services.obs.addObserver(() => labels.clear(), "intl:app-locales-changed");

/**
 * @param {string} l10nId - The message holding an action's text
 * @returns {string} What it says, in the language in use
 */
export function labelFor(l10nId) {
  let label = labels.get(l10nId);
  if (label === undefined) {
    label = formatValueSync(l10nId);
    if (label) {
      labels.set(l10nId, label);
    }
  }
  return label;
}

export const globalActions = globalActionsTemplate.map(action => ({
  isAvailable: window => {
    return (
      window.document
        .getElementById(action.command)
        ?.getAttribute("disabled") !== "true"
    );
  },
  commandId:
    typeof action.command === "string"
      ? action.command
      : `oculate:global-action-${action.l10nId.replace("oculate-action-", "")}`,
  extraPayload: {},
  ...action,
  get label() {
    return labelFor(action.l10nId);
  },
}));
