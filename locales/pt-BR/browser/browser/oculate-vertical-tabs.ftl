# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-toolbar-context-tabs-right = 
    .label = Abas à direita
    .accesskey = R
oculate-toolbar-context-compact-mode = 
    .label = Modo compacto
oculate-toolbar-context-compact-mode-enable = 
    .label = Ativar modo compacto
    .accesskey = D
oculate-toolbar-context-compact-mode-just-tabs = 
    .label = Ocultar barra lateral
oculate-toolbar-context-compact-mode-just-toolbar = 
    .label = Ocultar barra de ferramentas
oculate-toolbar-context-compact-mode-hide-both = 
    .label = Esconder os dois
    .accesskey = A
oculate-toolbar-context-move-to-folder = 
    .label = Mover para Pasta...
    .accesskey = M
oculate-toolbar-context-new-folder = 
    .label = Nova Pasta
    .accesskey = N
oculate-tabs-newtab-paste-and-search = 
    .label = Colar e Pesquisar
oculate-scroll-to-selected-tab = 
    .tooltiptext = Rolar até a aba selecionada
    .aria-label = Rolar até a aba selecionada
sidebar-oculate-expand = 
    .label = Expandir barra lateral
sidebar-oculate-create-new = 
    .label = Criar Novo...
tabbrowser-unload-tab-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Suspender e alternar para a aba
           *[other] Suspender { $tabCount } abas e alternar para a primeira
        }
tabbrowser-reset-pin-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Redefinir e fixar aba
           *[other] Redefinir e fixar { $tabCount } abas
        }
oculate-tab-sublabel =
    { $tabSubtitle ->
        [oculate-default-pinned] Voltar para url fixada
        [oculate-default-pinned-cmd] Separar da aba fixada
       *[other] { $tabSubtitle }
    }
