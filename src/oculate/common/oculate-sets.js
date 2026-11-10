// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

{
  const lazy = {};

  ChromeUtils.defineESModuleGetters(
    lazy,
    {
      OculateLibrary: "moz-src:///oculate/library/OculateLibrary.mjs",
    },
    { global: "current" }
  );

  ChromeUtils.defineESModuleGetters(lazy, {
    OculateLiveFoldersManager:
      "resource:///modules/oculate/OculateLiveFoldersManager.sys.mjs",
  });

  const OCULATE_LIBRARY_TARGETS = {
    "Browser:ShowAllHistory": "history",
    key_gotoHistory: "history",
    "Tools:Downloads": "downloads",
  };

  const WORKSPACE_SWITCH_COMMAND_PREFIX = "cmd_oculateWorkspaceSwitch";

  /**
   * Handlers for the <command> elements of <commandset id="oculateCommandSet">
   */
  const OCULATE_COMMANDS = {
    // Compact mode
    cmd_oculateCompactModeToggle: () => gOculateCompactModeManager.toggle(),
    cmd_toggleCompactModeIgnoreHover: () => gOculateCompactModeManager.toggle(true),
    cmd_oculateCompactModeShowSidebar: () => gOculateCompactModeManager.toggleSidebar(),

    // Spaces
    cmd_oculateWorkspaceForward: () => gOculateWorkspaces.changeWorkspaceShortcut(),
    cmd_oculateWorkspaceBackward: () => gOculateWorkspaces.changeWorkspaceShortcut(-1),
    cmd_oculateChangeWorkspaceTab: event =>
      gOculateWorkspaces.changeTabWorkspace(
        event.sourceEvent.target.getAttribute("oculate-workspace-id")
      ),
    cmd_oculateCtxDeleteWorkspace: event =>
      gOculateWorkspaces.contextDeleteWorkspace(event),
    cmd_oculateCtxShareWorkspace: () => gOculateWorkspaces.contextShareWorkspace(),
    cmd_oculateChangeWorkspaceName: () =>
      gOculateTabRenamer.start({
        target: gOculateWorkspaces.activeWorkspaceIndicator.querySelector(
          ".oculate-current-workspace-indicator-name"
        ),
      }),
    cmd_oculateChangeWorkspaceIcon: () => gOculateWorkspaces.changeWorkspaceIcon(),
    cmd_oculateManageWorkspaces: () => lazy.OculateLibrary.toggle("spaces"),
    cmd_oculateOpenWorkspaceCreation: () => gOculateWorkspaces.openWorkspaceCreation(),
    cmd_oculateCloseUnpinnedTabs: () => gOculateWorkspaces.closeAllUnpinnedTabs(),
    cmd_oculateUnloadWorkspace: () => gOculateWorkspaces.unloadWorkspace(),
    cmd_oculateUnloadAllOtherWorkspace: () =>
      gOculateWorkspaces.unloadAllOtherWorkspaces(),
    cmd_oculateOpenSpaceRoutingSettings: () =>
      gOculateSpaceRoutingManager.openSpaceRoutingSettings(window),

    // Split view
    cmd_oculateSplitViewGrid: () => gOculateViewSplitter.toggleShortcut("grid"),
    cmd_oculateSplitViewVertical: () => gOculateViewSplitter.toggleShortcut("vsep"),
    cmd_oculateSplitViewHorizontal: () => gOculateViewSplitter.toggleShortcut("hsep"),
    cmd_oculateSplitViewUnsplit: () => gOculateViewSplitter.toggleShortcut("unsplit"),
    cmd_oculateSplitViewContextMenu: () => gOculateViewSplitter.contextSplitTabs(),
    cmd_oculateCtxShareSplitView: () => gOculateViewSplitter.contextShareSplitView(),
    cmd_oculateSplitViewLinkInNewTab: () => gOculateViewSplitter.splitLinkInNewTab(),
    cmd_oculateNewEmptySplit: () => {
      setTimeout(() => {
        gOculateViewSplitter.createEmptySplit();
      }, 0);
    },

    // Pinned tabs and essentials
    cmd_oculatePinnedTabReset: () =>
      gOculatePinnedTabManager.resetPinnedTab(gBrowser.selectedTab),
    cmd_oculatePinnedTabResetNoTab: () => gOculatePinnedTabManager.resetPinnedTab(),
    cmd_oculateReplacePinnedUrlWithCurrent: () =>
      gOculatePinnedTabManager.replacePinnedUrlWithCurrent(),
    cmd_oculateEditPinnedUrl: () => gOculatePinnedTabManager.editPinnedUrl(),
    cmd_contextOculateAddToEssentials: () => gOculatePinnedTabManager.addToEssentials(),
    cmd_contextOculateRemoveFromEssentials: () =>
      gOculatePinnedTabManager.removeEssentials(),
    cmd_oculateTogglePinTab: () => {
      const currentTab = gOculateGlanceManager.getTabOrGlanceParent(
        gBrowser.selectedTab
      );
      if (!currentTab || currentTab.hasAttribute("oculate-empty-tab")) {
        return;
      }
      if (currentTab.pinned) {
        gBrowser.unpinTab(currentTab);
      } else {
        gBrowser.pinTab(currentTab);
      }
    },

    // Tabs
    cmd_oculateCopyCurrentURL: () => gOculateCommonActions.copyCurrentURLToClipboard(),
    cmd_oculateCopyCurrentURLMarkdown: () =>
      gOculateCommonActions.copyCurrentURLAsMarkdownToClipboard(),

    // Folders
    cmd_oculateOpenFolderCreation: () =>
      gOculateFolders.createFolder([], { renameFolder: true }),
    cmd_oculateNewLiveFolder: event =>
      lazy.OculateLiveFoldersManager.handleEvent(event),

    // Sidebar, theme and windows
    cmd_oculateToggleSidebar: () => gOculateVerticalTabsManager.toggleExpand(),
    cmd_oculateToggleTabsOnRight: () => gOculateVerticalTabsManager.toggleTabsOnRight(),
    cmd_oculateOpenOculateThemePicker: event => gOculateThemePicker.openThemePicker(event),
    cmd_oculateNewNavigatorUnsynced: () =>
      OpenBrowserWindow({ oculateSyncedWindow: false }),
    cmd_oculateToggleLibrary: () => lazy.OculateLibrary.toggle(),
  };

  function handleOculateCommand(event) {
    if (event.target.getAttribute("disabled") === "true") {
      return;
    }
    const id = event.target.id;
    const handler = OCULATE_COMMANDS[id];
    if (handler) {
      handler(event);
      return;
    }
    if (id.startsWith(WORKSPACE_SWITCH_COMMAND_PREFIX)) {
      const index =
        parseInt(id.replace(WORKSPACE_SWITCH_COMMAND_PREFIX, ""), 10) - 1;
      gOculateWorkspaces.shortcutSwitchTo(index);
      return;
    }
    gOculateGlanceManager.handleMainCommandSet(event);
  }

  document.addEventListener(
    "command",
    event => {
      const tab = OCULATE_LIBRARY_TARGETS[event.target.id];
      if (!tab || !Services.prefs.getBoolPref("oculate.library.enabled")) {
        return;
      }
      event.stopPropagation();
      lazy.OculateLibrary.toggle(tab);
    },
    true
  );

  document.addEventListener(
    "MozBeforeInitialXULLayout",
    () => {
      // <commandset id="mainCommandSet"> defined in browser-sets.inc
      document
        .getElementById("oculateCommandSet")
        .addEventListener("command", handleOculateCommand);
    },
    { once: true }
  );
}
