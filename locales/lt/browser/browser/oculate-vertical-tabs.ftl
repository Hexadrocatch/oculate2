# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-toolbar-context-tabs-right = 
    .label = Kortelės dešinėje
    .accesskey = R
oculate-toolbar-context-compact-mode = 
    .label = Kompaktinis režimas
oculate-toolbar-context-compact-mode-enable = 
    .label = Įjungti kompaktinį režimą
    .accesskey = D
oculate-toolbar-context-compact-mode-just-tabs = 
    .label = Slėpti šoninę juostą
oculate-toolbar-context-compact-mode-just-toolbar = 
    .label = Slėpti įrankių juostą
oculate-toolbar-context-compact-mode-hide-both = 
    .label = Slėpti abi
    .accesskey = H
oculate-toolbar-context-move-to-folder = 
    .label = Perkelti į aplanką...
    .accesskey = M
oculate-toolbar-context-new-folder = 
    .label = Naujas aplankas
    .accesskey = N
oculate-tabs-newtab-paste-and-search = 
    .label = Paste & Search
oculate-scroll-to-selected-tab = 
    .tooltiptext = Scroll to the selected tab
    .aria-label = Scroll to the selected tab
sidebar-oculate-expand = 
    .label = Išskleisti šoninę juostą
sidebar-oculate-create-new = 
    .label = Kurti naują...
tabbrowser-unload-tab-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Iškelti { $tabCount } kortelę ir perjungti į pirmąją
            [few] Iškelti { $tabCount } korteles ir perjungti į pirmąją
            [many] Iškelti { $tabCount } kortelės ir perjungti į pirmąją
           *[other] Iškelti { $tabCount } kortelių ir perjungti į pirmąją
        }
tabbrowser-reset-pin-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Atkurti ir prisegti { $tabCount } kortelę
            [few] Atkurti ir prisegti { $tabCount } korteles
            [many] Atkurti ir prisegti { $tabCount } kortelės
           *[other] Atkurti ir prisegti { $tabCount } kortelių
        }
oculate-tab-sublabel =
    { $tabSubtitle ->
        [oculate-default-pinned] Atgal į prisegtą URL
        [oculate-default-pinned-cmd] Atskirti nuo prisegtos kortelės
       *[other] { $tabSubtitle }
    }
