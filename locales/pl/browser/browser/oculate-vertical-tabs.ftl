# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-toolbar-context-tabs-right = 
    .label = Karty po prawej
    .accesskey = R
oculate-toolbar-context-compact-mode = 
    .label = Tryb kompaktowy
oculate-toolbar-context-compact-mode-enable = 
    .label = Włącz tryb kompaktowy
    .accesskey = D
oculate-toolbar-context-compact-mode-just-tabs = 
    .label = Ukryj panel boczny
oculate-toolbar-context-compact-mode-just-toolbar = 
    .label = Ukryj pasek narzędzi
oculate-toolbar-context-compact-mode-hide-both = 
    .label = Ukryj oba
    .accesskey = H
oculate-toolbar-context-move-to-folder = 
    .label = Przenieś do folderu...
    .accesskey = M
oculate-toolbar-context-new-folder = 
    .label = Nowy folder
    .accesskey = N
oculate-tabs-newtab-paste-and-search = 
    .label = Wklej i szukaj
oculate-scroll-to-selected-tab = 
    .tooltiptext = Przewiń do wybranej karty
    .aria-label = Przewiń do wybranej karty
sidebar-oculate-expand = 
    .label = Rozwiń panel boczny
sidebar-oculate-create-new = 
    .label = Utwórz nową...
tabbrowser-unload-tab-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Wyładuj i przełącz na kartę
            [few] Wyładuj { $tabCount } karty i przełącz na pierwszą
           *[other] Wyładuj { $tabCount } kart i przełącz na pierwszą
        }
tabbrowser-reset-pin-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Zresetuj i przypnij kartę
            [few] Zresetuj i przypnij { $tabCount } karty
           *[other] Zresetuj i przypnij { $tabCount } kart
        }
oculate-tab-sublabel =
    { $tabSubtitle ->
        [oculate-default-pinned] Cofnij do przypiętego adresu URL
        [oculate-default-pinned-cmd] Oddziel od przypiętej karty
       *[other] { $tabSubtitle }
    }
