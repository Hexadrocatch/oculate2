# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-toolbar-context-tabs-right = 
    .label = Panely napravo
    .accesskey = R
oculate-toolbar-context-compact-mode = 
    .label = Kompaktní režim
oculate-toolbar-context-compact-mode-enable = 
    .label = Povolit kompaktní režim
    .accesskey = D
oculate-toolbar-context-compact-mode-just-tabs = 
    .label = Skrýt boční panel
oculate-toolbar-context-compact-mode-just-toolbar = 
    .label = Skrýt panel nástrojů
oculate-toolbar-context-compact-mode-hide-both = 
    .label = Skrýt obojí
    .accesskey = H
oculate-toolbar-context-move-to-folder = 
    .label = Přesunout do složky...
    .accesskey = M
oculate-toolbar-context-new-folder = 
    .label = Nová složka
    .accesskey = N
oculate-tabs-newtab-paste-and-search = 
    .label = Paste & Search
oculate-scroll-to-selected-tab = 
    .tooltiptext = Scroll to the selected tab
    .aria-label = Scroll to the selected tab
sidebar-oculate-expand = 
    .label = Zvětšit boční panel
sidebar-oculate-create-new = 
    .label = Vytvořit nový...
tabbrowser-unload-tab-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Uspat a přepnout na panel
            [few] Uspat { $tabCount } panely a přepnout na první
           *[other] Uspat { $tabCount } panelů a přepnout na první
        }
tabbrowser-reset-pin-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Resetovat a připnout kartu
            [few] Resetovat a připnout { $tabCount } panely
           *[other] Resetovat a připnout { $tabCount } panelů
        }
oculate-tab-sublabel =
    { $tabSubtitle ->
        [oculate-default-pinned] Back to pinned url
        [oculate-default-pinned-cmd] Separate from pinned tab
       *[other] { $tabSubtitle }
    }
