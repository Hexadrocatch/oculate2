# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

<menupopup id="oculateCreateNewPopup">
  <menuitem data-l10n-id="oculate-panel-ui-workspaces-create" command="cmd_oculateOpenWorkspaceCreation" image="chrome://browser/skin/oculate-icons/duplicate-tab.svg" />
  <menuitem data-l10n-id="oculate-panel-ui-folder-create" command="cmd_oculateOpenFolderCreation" image="chrome://browser/skin/oculate-icons/folder.svg" />
  <menuseparator/>
  <menuitem data-l10n-id="oculate-panel-ui-new-empty-split" command="cmd_oculateNewEmptySplit" image="chrome://browser/skin/oculate-icons/split.svg" />
  <menuitem data-l10n-id="tabs-toolbar-new-tab" command="cmd_newNavigatorTab" image="chrome://browser/skin/oculate-icons/plus.svg" />
</menupopup>

<menupopup id="oculateWorkspaceMoreActions">
  <menuitem id="context_oculateEditWorkspace" data-l10n-id="oculate-workspaces-panel-change-name" command="cmd_oculateChangeWorkspaceName"/>
  <menuitem id="context_oculateEditWorkspaceIcon" data-l10n-id="oculate-workspaces-panel-change-icon" command="cmd_oculateChangeWorkspaceIcon"/>
  <menuitem class="oculateToolbarThemePicker"
          id="context_oculateChangeWorkspaceTheme"
          data-l10n-id="oculate-workspaces-change-theme"
          command="cmd_oculateOpenOculateThemePicker"/>
  <menu id="context_oculateWorkspacesOpenInContainerTab"
    data-l10n-id="oculate-workspaces-panel-context-default-profile"
    selection-type="single"
    node-type="link"
    hide-if-private-browsing="true"
    hide-if-usercontext-disabled="true">
    <menupopup />
  </menu>
  <menuseparator id="context_oculateWorkspacesSeparator"/>
  <menuseparator/>
  <menuitem id="context_oculateManageWorkspaces" data-l10n-id="oculate-workspaces-panel-context-manage" command="cmd_oculateManageWorkspaces"/>
  <menuitem id="context_oculateUnloadWorkspace" data-l10n-id="oculate-workspaces-panel-unload" command="cmd_oculateUnloadWorkspace"/>
  <menuitem id="context_oculateUnloadAllOtherWorkspace" data-l10n-id="oculate-workspaces-panel-unload-others" command="cmd_oculateUnloadAllOtherWorkspace"/>
  <menuseparator/>
  <menuitem data-l10n-id="oculate-panel-ui-workspaces-create" command="cmd_oculateOpenWorkspaceCreation"/>
  <menuitem id="context_oculateShareWorkspace" data-l10n-id="oculate-share-space" command="cmd_oculateCtxShareWorkspace"/>
  <menuitem id="context_oculateDeleteWorkspace" data-l10n-id="oculate-workspaces-panel-context-delete" command="cmd_oculateCtxDeleteWorkspace"/>
  <menuseparator/>
  <menuitem id="context_oculateSpaceRoutingSettings" data-l10n-id="oculate-space-routing-settings" command="cmd_oculateOpenSpaceRoutingSettings"/>
</menupopup>

<menupopup id="oculateFolderActions">
  <menu id="context_oculateLiveFolderOptions"
    data-l10n-id="oculate-live-folder-options"
    hidden="true">
    <menupopup />
  </menu>
  <menuseparator id="live-folder-separator" hidden="true"/>
  <menuitem id="context_oculateFolderRename" data-l10n-id="oculate-folders-panel-rename-folder"/>
  <menuitem id="context_oculateFolderChangeIcon" data-l10n-id="tab-context-oculate-edit-icon"/>
  <menuseparator />
  <menuitem id="context_oculateFolderUnloadAll" data-l10n-id="oculate-folders-unload-folder"/>
  <menuitem id="context_oculateFolderNewSubfolder" data-l10n-id="oculate-folders-new-subfolder"/>
  <menuseparator />
  <menu id="context_oculateChangeFolderSpace"
    data-l10n-id="oculate-folders-panel-change-folder-space">
    <menupopup />
  </menu>
  <menuitem id="context_oculateFolderToSpace" data-l10n-id="oculate-folders-panel-convert-folder-to-space" />
  <menuitem id="context_oculateShareFolder" data-l10n-id="oculate-share-folder"/>
  <menuseparator />
  <menuitem id="context_oculateFolderUnpack" data-l10n-id="oculate-folders-panel-unpack-folder"/>
  <menuitem id="context_oculateFolderDelete" data-l10n-id="oculate-folders-panel-delete-folder"/>
</menupopup>

<menupopup id="oculateSiteDataActions">
  <menuitem id="context_oculateClearSiteData" data-l10n-id="identity-clear-site-data"/>
  <menuseparator />
  <menuitem command="Tools:Addons" data-l10n-id="oculate-site-data-manage-addons"/>
  <menuitem id="context_oculateOpenGetAddons" data-l10n-id="oculate-site-data-get-addons"/>
  <menuseparator />
  <menuitem id="context_oculateOpenSiteSettings" data-l10n-id="oculate-site-data-site-settings"/>
</menupopup>

<menupopup id="oculateMoveTabsToSyncedWorkspacePopup">
# Popup to move tabs to a synced workspace.
# This would be automatically populated with the list of available synced workspaces.
</menupopup>
