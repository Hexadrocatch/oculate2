# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-toolbar-context-tabs-right = 
    .label = Karty vpravo
    .accesskey = R
oculate-toolbar-context-compact-mode = 
    .label = Kompaktný Režim
oculate-toolbar-context-compact-mode-enable = 
    .label = Povoliť kompaktný režim
    .accesskey = D
oculate-toolbar-context-compact-mode-just-tabs = 
    .label = Skryť bočný panel
oculate-toolbar-context-compact-mode-just-toolbar = 
    .label = Skryť panel nástrojov
oculate-toolbar-context-compact-mode-hide-both = 
    .label = Skryť oboje
    .accesskey = H
oculate-toolbar-context-move-to-folder = 
    .label = Move to Folder...
    .accesskey = M
oculate-toolbar-context-new-folder = 
    .label = Nový Priečinok
    .accesskey = N
oculate-tabs-newtab-paste-and-search = 
    .label = Paste & Search
oculate-scroll-to-selected-tab = 
    .tooltiptext = Scroll to the selected tab
    .aria-label = Scroll to the selected tab
sidebar-oculate-expand = 
    .label = Rozšíriť Bočný Panel
sidebar-oculate-create-new = 
    .label = Vytvoriť nové...
tabbrowser-unload-tab-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Uvoľniť z pamäte a prepnúť na kartu
            [few] Uvoľniť { $tabCount } karty z pamäte a prepnúť na prvú
           *[other] Uvoľniť { $tabCount } kariet z pamäte a prepnúť na prvú
        }
tabbrowser-reset-pin-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Resetovať a pripnúť kartu
            [few] Resetovať a pripnúť { $tabCount } karty
           *[other] Resetovať a pripnúť { $tabCount } kariet
        }
oculate-tab-sublabel =
    { $tabSubtitle ->
        [oculate-default-pinned] Back to pinned url
        [oculate-default-pinned-cmd] Separate from pinned tab
       *[other] { $tabSubtitle }
    }
