# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

pane-oculate-looks-title = Look and Feel
category-oculate-looks =
    .tooltiptext = { pane-oculate-looks-title }

oculate-warning-language = Changing the default language could make it easier for Websites to track you.

oculate-vertical-tabs-layout-header = Browser Layout
oculate-vertical-tabs-layout-description = Choose the layout that suits you best

oculate-layout-single-toolbar = Only Sidebar
oculate-layout-multiple-toolbar = Sidebar and Top Toolbar
oculate-layout-collapsed-toolbar = Collapsed Sidebar

sync-currently-syncing-workspaces = Workspaces
sync-engine-workspaces =
    .label = Workspaces
    .tooltiptext = Sync your workspaces across devices
    .accesskey = W

oculate-glance-title = Glance
oculate-glance-header = General settings for glance
oculate-glance-description = Get a quick overview of your links without opening them in a new tab
oculate-glance-trigger-label = Trigger method
oculate-glance-enabled =
    .label = Enable Glance

oculate-glance-trigger-ctrl-click =
    .label = { PLATFORM() ->
        [macos] ⌃ + Click
       *[other] Ctrl + Click
    }
    .aria-label = { PLATFORM() ->
        [macos] Control + Click
       *[other] Ctrl + Click
    }
oculate-glance-trigger-alt-click =
    .label = { PLATFORM() ->
        [macos] ⌥ + Click
       *[other] Alt + Click
    }
    .aria-label = { PLATFORM() ->
        [macos] Option + Click
       *[other] Alt + Click
    }
oculate-glance-trigger-shift-click =
    .label = { PLATFORM() ->
        [macos] ⇧ + Click
       *[other] Shift + Click
    }
    .aria-label = Shift + Click
oculate-glance-trigger-meta-click =
    .label = { PLATFORM() ->
        [macos] ⌘ + Click
       *[other] Meta (Command) + Click
    }
    .aria-label = { PLATFORM() ->
        [macos] Command + Click
       *[other] Meta (Command) + Click
    }

oculate-look-and-feel-compact-view-header = Show in compact view
oculate-look-and-feel-compact-view-description = Only show the toolbars you use!
oculate-look-and-feel-compact-view-enabled =
    .label = Enable { -brand-short-name }'s compact mode

oculate-look-and-feel-compact-view-top-toolbar =
    .label = Hide the top toolbar as well in compact mode

oculate-look-and-feel-compact-toolbar-flash-popup =
    .label = Briefly make the toolbar popup when switching or opening new tabs in compact mode

oculate-look-and-feel-window-drag-header = Window dragging
oculate-look-and-feel-window-drag-description = Move the window by dragging empty space at the top of websites, just like the titlebar.
oculate-window-drag-enabled =
    .label = Allow dragging the window from web pages

pane-oculate-tabs-title = Tab Management
category-oculate-workspaces =
    .tooltiptext = { pane-oculate-tabs-title }
pane-settings-workspaces-title = Workspaces

oculate-tabs-select-recently-used-on-close =
    .label = When closing a tab, switch to the most recently used tab instead of the next tab

oculate-tabs-close-on-back-with-no-history =
    .label = Close tab and switch to its owner tab (or most recently used tab) when going back with no history

oculate-settings-workspaces-sync =
    .label = Sync your sidebar across devices
    .description = Keep your workspaces, pinned tabs and folders in sync on all your devices through your Mozilla account.

oculate-settings-normal-tabs-sync =
    .label = Include unpinned tabs
    .description = Also sync the regular tabs of each space, not just your pinned tabs and folders.

oculate-settings-workspaces-sync-unpinned-tabs =
    .label = Sync only pinned tabs in workspaces

oculate-tabs-cycle-by-attribute =
  .label = Ctrl+Tab cycles within Essential or Workspace tabs only
oculate-tabs-cycle-ignore-pending-tabs =
  .label = Ignore Pending tabs when cycling with Ctrl+Tab
oculate-tabs-cycle-by-attribute-warning = Ctrl+Tab will cycle by recently used order, as it is enabled

oculate-look-and-feel-compact-toolbar-themed =
    .label = Use themed background for compact toolbar

oculate-workspace-continue-where-left-off =
    .label = Continue where you left off

pane-oculate-pinned-tab-manager-title = Pinned Tabs
oculate-pinned-tab-manager-header = General settings for pinned tabs
oculate-pinned-tab-manager-description = Manage additional behavior of pinned tabs
oculate-pinned-tab-manager-restore-pinned-tabs-to-pinned-url =
    .label = Restore pinned tabs to their originally pinned URL on startup
oculate-pinned-tab-manager-container-specific-essentials-enabled =
    .label = Enable container-specific essentials
oculate-pinned-tab-manager-close-shortcut-behavior-label = Close Tab Shortcut Behavior
oculate-pinned-tab-manager-reset-unload-switch-close-shortcut-option =
    .label = Reset URL, unload and switch to next tab
oculate-pinned-tab-manager-unload-switch-close-shortcut-option =
    .label = Unload and switch to next tab
oculate-pinned-tab-manager-reset-switch-close-shortcut-option =
    .label = Reset URL and switch to next tab
oculate-pinned-tab-manager-switch-close-shortcut-option =
    .label = Switch to next tab
oculate-pinned-tab-manager-reset-close-shortcut-option =
    .label = Reset URL
oculate-pinned-tab-manager-close-close-shortcut-option =
    .label = Close tab

pane-oculate-workspaces-header = Workspaces
oculate-settings-workspaces-header = General settings for workspaces
oculate-settings-workspaces-description = With workspaces, you can have multiple browsing sessions at once!
oculate-settings-workspaces-enabled =
    .label = Enable Workspaces
oculate-settings-workspaces-hide-default-container-indicator =
    .label = Hide the default container indicator in the tab bar

pane-oculate-theme-title = Theme Settings

oculate-vertical-tabs-title = Sidebar and tabs layout
oculate-vertical-tabs-header = Vertical Tabs
oculate-vertical-tabs-description = Manage your tabs in a vertical layout
oculate-vertical-tabs-show-expand-button =
    .label = Show Expand Button
oculate-vertical-tabs-newtab-on-tab-list =
    .label = Show New Tab Button on Tab List
oculate-vertical-tabs-newtab-top-button-up =
    .label = Move the new tab button to the top

oculate-vertical-tabs-expand-tabs-by-default = Expand Tabs by Default
oculate-vertical-tabs-dont-expand-tabs-by-default = Don't Expand Tabs by Default
oculate-vertical-tabs-expand-tabs-on-hover = Expand Tabs on Hover (Won't work on compact mode)

oculate-vertical-tabs-expand-tabs-header = How to expand tabs
oculate-vertical-tabs-expand-tabs-description = Choose how to expand tabs in the sidebar

oculate-theme-marketplace-header = Oculate Mods
oculate-theme-disable-all-enabled =
    .title = Disable all mods
oculate-theme-disable-all-disabled =
    .title = Enable all mods
oculate-theme-marketplace-remove-button =
    .label = Remove mod
oculate-theme-marketplace-import-button=
    .label = Import mods
oculate-theme-marketplace-export-button =
    .label = Export Mods
oculate-theme-marketplace-import-success = Mods imported successfully
oculate-theme-marketplace-import-failure = There was an error importing the mods
oculate-theme-marketplace-export-success = Mods exported successfully
oculate-theme-marketplace-export-failure = There was an error exporting the mods
oculate-theme-marketplace-toggle-enabled-button =
    .title = Disable mod
oculate-theme-marketplace-toggle-disabled-button =
    .title = Enable mod
oculate-theme-marketplace-remove-confirmation = Are you sure you want to remove this mod?
oculate-theme-marketplace-close-modal = Close
oculate-theme-marketplace-theme-header-title =
    .title = CSS Selector: { $name }
oculate-theme-marketplace-dropdown-default-label =
    .label = None
oculate-theme-marketplace-input-default-placeholder =
    .placeholder = Type something...
pane-oculate-marketplace-title = Oculate Mods

oculate-settings-workspaces-force-container-tabs-to-workspace =
    .label = Switch to workspace where container is set as default when opening container tabs

oculate-dark-theme-styles-header = Dark Theme Styles
oculate-dark-theme-styles-description = Customize the dark theme to your liking

oculate-dark-theme-styles-amoled = Night Theme
oculate-dark-theme-styles-default = Default Dark Theme
oculate-dark-theme-styles-colorful = Colorful Dark Theme

oculate-compact-mode-styles-left = Hide Tab bar
oculate-compact-mode-styles-top = Hide Top bar
oculate-compact-mode-styles-both = Hide Both

pane-oculate-CKS-title = Keyboard Shortcuts
category-oculate-CKS =
    .tooltiptext = { pane-oculate-CKS-title }

category-oculate-marketplace =
    .tooltiptext = Oculate Mods

oculateCKSOption-group-oculate-compact-mode = Compact Mode
oculateCKSOption-group-oculate-workspace = Workspaces
oculateCKSOption-group-oculate-other = Other Oculate Features
oculateCKSOption-group-oculate-split-view = Split View

oculate-text-action-copy-url-shortcut = Copy current URL
oculate-text-action-copy-url-markdown-shortcut = Copy current URL as Markdown
oculate-toggle-pin-tab-shortcut = Toggle Pin Tab

oculate-compact-mode-shortcut-show-sidebar = Toggle Floating Sidebar
oculate-compact-mode-shortcut-toggle = Toggle Compact Mode
oculate-glance-expand = Expand Glance
oculate-workspace-shortcut-switch-1 = Switch to Workspace 1
oculate-workspace-shortcut-switch-2 = Switch to Workspace 2
oculate-workspace-shortcut-switch-3 = Switch to Workspace 3
oculate-workspace-shortcut-switch-4 = Switch to Workspace 4
oculate-workspace-shortcut-switch-5 = Switch to Workspace 5
oculate-workspace-shortcut-switch-6 = Switch to Workspace 6
oculate-workspace-shortcut-switch-7 = Switch to Workspace 7
oculate-workspace-shortcut-switch-8 = Switch to Workspace 8
oculate-workspace-shortcut-switch-9 = Switch to Workspace 9
oculate-workspace-shortcut-switch-10 = Switch to Workspace 10
oculate-workspace-shortcut-create = Create New Workspace
oculate-sidebar-shortcut-toggle = Toggle Sidebar's Width
oculate-library-shortcut-toggle = Toggle Library
oculate-pinned-tab-shortcut-reset = Reset Pinned Tab to Pinned URL
oculate-split-view-shortcut-grid = Toggle Split View Grid
oculate-split-view-shortcut-vertical = Toggle Split View Vertical
oculate-split-view-shortcut-horizontal = Toggle Split View Horizontal
oculate-split-view-shortcut-unsplit = Close Split View
oculate-new-empty-split-view-shortcut = New Empty Split View
oculate-close-all-unpinned-tabs-shortcut = Close All Unpinned Tabs
oculate-duplicate-tab-shortcut = Duplicate Tab
