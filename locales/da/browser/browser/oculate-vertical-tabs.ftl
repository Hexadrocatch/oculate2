# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-toolbar-context-tabs-right = 
    .label = Faner til højre
    .accesskey = R
oculate-toolbar-context-compact-mode = 
    .label = Kompakt tilstand
oculate-toolbar-context-compact-mode-enable = 
    .label = Aktivér kompakt tilstand
    .accesskey = D
oculate-toolbar-context-compact-mode-just-tabs = 
    .label = Skjul sidepanel
oculate-toolbar-context-compact-mode-just-toolbar = 
    .label = Skjul værktøjslinje
oculate-toolbar-context-compact-mode-hide-both = 
    .label = Skjul begge
    .accesskey = H
oculate-toolbar-context-move-to-folder = 
    .label = Move to Folder...
    .accesskey = M
oculate-toolbar-context-new-folder = 
    .label = Ny mappe
    .accesskey = N
oculate-tabs-newtab-paste-and-search = 
    .label = Paste & Search
oculate-scroll-to-selected-tab = 
    .tooltiptext = Scroll to the selected tab
    .aria-label = Scroll to the selected tab
sidebar-oculate-expand = 
    .label = Udvid Sidepanel
sidebar-oculate-create-new = 
    .label = Opret ny...
tabbrowser-unload-tab-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Stop indlæsning og skift til fane
           *[other] Stop indlæsning af { $tabCount } faner og skift til den første
        }
tabbrowser-reset-pin-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Nulstil og fastgør fane
           *[other] Nulstil og fastgør { $tabCount } faner
        }
oculate-tab-sublabel =
    { $tabSubtitle ->
        [oculate-default-pinned] Tilbage til fastgjort url
        [oculate-default-pinned-cmd] Adskil fra fastgjort fane
       *[other] { $tabSubtitle }
    }
