# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-toolbar-context-tabs-right = 
    .label = Tabs rechts anzeigen
    .accesskey = R
oculate-toolbar-context-compact-mode = 
    .label = Kompaktmodus
oculate-toolbar-context-compact-mode-enable = 
    .label = Kompaktmodus einschalten
    .accesskey = D
oculate-toolbar-context-compact-mode-just-tabs = 
    .label = Nur Seitenleiste ausblenden
oculate-toolbar-context-compact-mode-just-toolbar = 
    .label = Nur Symbolleiste ausblenden
oculate-toolbar-context-compact-mode-hide-both = 
    .label = Beides ausblenden
    .accesskey = B
oculate-toolbar-context-move-to-folder = 
    .label = In Ordner verschieben...
    .accesskey = O
oculate-toolbar-context-new-folder = 
    .label = Neuer Ordner
    .accesskey = N
oculate-tabs-newtab-paste-and-search = 
    .label = Paste & Search
oculate-scroll-to-selected-tab = 
    .tooltiptext = Scroll to the selected tab
    .aria-label = Scroll to the selected tab
sidebar-oculate-expand = 
    .label = Seitenleiste ausklappen
sidebar-oculate-create-new = 
    .label = Neu erstellen...
tabbrowser-unload-tab-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Tab entladen und wechseln
           *[other] { $tabCount } Tabs entladen und zum ersten wechseln
        }
tabbrowser-reset-pin-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Tab zurücksetzen und anheften
           *[other] { $tabCount } Tabs zurücksetzen und anheften
        }
oculate-tab-sublabel =
    { $tabSubtitle ->
        [oculate-default-pinned] Zurück zur angehefteten URL
        [oculate-default-pinned-cmd] Vom angehefteten Tab lösen
       *[other] { $tabSubtitle }
    }
