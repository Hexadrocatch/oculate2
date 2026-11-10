# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-toolbar-context-tabs-right = 
    .label = Faner til høyre
    .accesskey = R
oculate-toolbar-context-compact-mode = 
    .label = Kompaktmodus
oculate-toolbar-context-compact-mode-enable = 
    .label = Aktiver kompaktmodus
    .accesskey = D
oculate-toolbar-context-compact-mode-just-tabs = 
    .label = Skjul sidepanelet
oculate-toolbar-context-compact-mode-just-toolbar = 
    .label = Skjul verktøylinjen
oculate-toolbar-context-compact-mode-hide-both = 
    .label = Skjul begge
    .accesskey = H
oculate-toolbar-context-move-to-folder = 
    .label = Flytt til mappe...
    .accesskey = Flytt
oculate-toolbar-context-new-folder = 
    .label = Ny mappe
    .accesskey = N
oculate-tabs-newtab-paste-and-search = 
    .label = Paste & Search
oculate-scroll-to-selected-tab = 
    .tooltiptext = Scroll to the selected tab
    .aria-label = Scroll to the selected tab
sidebar-oculate-expand = 
    .label = Utvid sidepanelet
sidebar-oculate-create-new = 
    .label = Opprett ny...
tabbrowser-unload-tab-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Avlast og bytt til fane
           *[other] Avlast { $tabCount } faner og bytt til den første
        }
tabbrowser-reset-pin-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Tilbakestill og fest fane
           *[other] Tilbakestill og fest { $tabCount } faner
        }
oculate-tab-sublabel =
    { $tabSubtitle ->
        [oculate-default-pinned] Tilbake til festet nettadresse
        [oculate-default-pinned-cmd] Separer fra festet nettadresse
       *[other] { $tabSubtitle }
    }
