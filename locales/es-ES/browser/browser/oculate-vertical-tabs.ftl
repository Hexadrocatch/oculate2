# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-toolbar-context-tabs-right = 
    .label = Pestañas a la derecha
    .accesskey = R
oculate-toolbar-context-compact-mode = 
    .label = Modo compacto
oculate-toolbar-context-compact-mode-enable = 
    .label = Habilitar modo compacto
    .accesskey = D
oculate-toolbar-context-compact-mode-just-tabs = 
    .label = Ocultar barra lateral
oculate-toolbar-context-compact-mode-just-toolbar = 
    .label = Ocultar barra de herramientas
oculate-toolbar-context-compact-mode-hide-both = 
    .label = Ocultar ambas
    .accesskey = H
oculate-toolbar-context-move-to-folder = 
    .label = Mover a la carpeta...
    .accesskey = M
oculate-toolbar-context-new-folder = 
    .label = Nueva carpeta
    .accesskey = N
oculate-tabs-newtab-paste-and-search = 
    .label = Pegar y buscar
oculate-scroll-to-selected-tab = 
    .tooltiptext = Desplazar hasta la pestaña seleccionada
    .aria-label = Desplazar hasta la pestaña seleccionada
sidebar-oculate-expand = 
    .label = Expandir barra lateral
sidebar-oculate-create-new = 
    .label = Crear nuevo...
tabbrowser-unload-tab-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Suspender y cambiar de pestaña
           *[other] Suspender { $tabCount } pestañas y cambiar a la primera
        }
tabbrowser-reset-pin-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Restablecer y fijar pestaña
           *[other] Restablecer y fijar { $tabCount } pestañas
        }
oculate-tab-sublabel =
    { $tabSubtitle ->
        [oculate-default-pinned] Volver a la URL fijada
        [oculate-default-pinned-cmd] Separar de la pestaña fijada
       *[other] { $tabSubtitle }
    }
