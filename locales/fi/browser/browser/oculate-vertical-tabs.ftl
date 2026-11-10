# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-toolbar-context-tabs-right = 
    .label = Välilehdet oikealla puolella
    .accesskey = R
oculate-toolbar-context-compact-mode = 
    .label = Kompakti tila
oculate-toolbar-context-compact-mode-enable = 
    .label = Ota kompakti tila käyttöön
    .accesskey = D
oculate-toolbar-context-compact-mode-just-tabs = 
    .label = Piilota sivupalkki
oculate-toolbar-context-compact-mode-just-toolbar = 
    .label = Piilota työkalupalkki
oculate-toolbar-context-compact-mode-hide-both = 
    .label = Piilota molemmat
    .accesskey = H
oculate-toolbar-context-move-to-folder = 
    .label = Move to Folder...
    .accesskey = M
oculate-toolbar-context-new-folder = 
    .label = Uusi kansio
    .accesskey = N
oculate-tabs-newtab-paste-and-search = 
    .label = Paste & Search
oculate-scroll-to-selected-tab = 
    .tooltiptext = Scroll to the selected tab
    .aria-label = Scroll to the selected tab
sidebar-oculate-expand = 
    .label = Laajenna sivupalkkia
sidebar-oculate-create-new = 
    .label = Luo uusi...
tabbrowser-unload-tab-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Pura ja vaihda välilehteen
           *[other] Pura { $tabCount } välilehdet ja vaihda ensimmäiseen
        }
tabbrowser-reset-pin-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Nollaa ja kiinnitä välilehti
           *[other] Nollaa ja kiinnitä { $tabCount } välilehdet
        }
oculate-tab-sublabel =
    { $tabSubtitle ->
        [oculate-default-pinned] Back to pinned url
        [oculate-default-pinned-cmd] Separate from pinned tab
       *[other] { $tabSubtitle }
    }
