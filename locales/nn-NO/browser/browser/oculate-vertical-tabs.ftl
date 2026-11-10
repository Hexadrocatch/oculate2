# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-toolbar-context-tabs-right = 
    .label = Tabs on the right
    .accesskey = R
oculate-toolbar-context-compact-mode = 
    .label = Compact mode
oculate-toolbar-context-compact-mode-enable = 
    .label = Enable compact mode
    .accesskey = D
oculate-toolbar-context-compact-mode-just-tabs = 
    .label = Hide sidebar
oculate-toolbar-context-compact-mode-just-toolbar = 
    .label = Hide toolbar
oculate-toolbar-context-compact-mode-hide-both = 
    .label = Hide both
    .accesskey = H
oculate-toolbar-context-move-to-folder = 
    .label = Move to Folder...
    .accesskey = M
oculate-toolbar-context-new-folder = 
    .label = New Folder
    .accesskey = N
oculate-tabs-newtab-paste-and-search = 
    .label = Paste & Search
oculate-scroll-to-selected-tab = 
    .tooltiptext = Scroll to the selected tab
    .aria-label = Scroll to the selected tab
sidebar-oculate-expand = 
    .label = Expand Sidebar
sidebar-oculate-create-new = 
    .label = Create New...
tabbrowser-unload-tab-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Unload and switch to tab
           *[other] Unload { $tabCount } tabs and switch to the first
        }
tabbrowser-reset-pin-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Reset and pin tab
           *[other] Reset and pin { $tabCount } tabs
        }
oculate-tab-sublabel =
    { $tabSubtitle ->
        [oculate-default-pinned] Back to pinned url
        [oculate-default-pinned-cmd] Separate from pinned tab
       *[other] { $tabSubtitle }
    }
