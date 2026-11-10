# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-toolbar-context-tabs-right = 
    .label = Pestanyes a la dreta
    .accesskey = R
oculate-toolbar-context-compact-mode = 
    .label = Mode compacte
oculate-toolbar-context-compact-mode-enable = 
    .label = Habilita el mode compacte
    .accesskey = D
oculate-toolbar-context-compact-mode-just-tabs = 
    .label = Amaga la barra lateral
oculate-toolbar-context-compact-mode-just-toolbar = 
    .label = Amaga la barra d'eines
oculate-toolbar-context-compact-mode-hide-both = 
    .label = Amaga les dues
    .accesskey = H
oculate-toolbar-context-move-to-folder = 
    .label = Mou a la carpeta...
    .accesskey = M
oculate-toolbar-context-new-folder = 
    .label = Carpeta nova
    .accesskey = N
oculate-tabs-newtab-paste-and-search = 
    .label = Enganxa i cerca
oculate-scroll-to-selected-tab = 
    .tooltiptext = Desplaceu-vos fins a la pestanya seleccionada
    .aria-label = Desplaceu-vos fins a la pestanya seleccionada
sidebar-oculate-expand = 
    .label = Expandeix la barra lateral
sidebar-oculate-create-new = 
    .label = Crea una nova...
tabbrowser-unload-tab-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Hiberna i canvia a la pestanya
           *[other] Hiberna { $tabCount } pestanyes i canvia a la primera
        }
tabbrowser-reset-pin-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Restableix i fixa la pestanya
           *[other] Restableix i fixa les { $tabCount } pestanyes
        }
oculate-tab-sublabel =
    { $tabSubtitle ->
        [oculate-default-pinned] Torna a l'URL fixat
        [oculate-default-pinned-cmd] Separa de la pestanya fixada
       *[other] { $tabSubtitle }
    }
