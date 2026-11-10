# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-toolbar-context-tabs-right = 
    .label = Onglets à droite
    .accesskey = R
oculate-toolbar-context-compact-mode = 
    .label = Mode compact
oculate-toolbar-context-compact-mode-enable = 
    .label = Activer le mode compact
    .accesskey = D
oculate-toolbar-context-compact-mode-just-tabs = 
    .label = Masquer la barre latérale
oculate-toolbar-context-compact-mode-just-toolbar = 
    .label = Masquer la barre d’outils
oculate-toolbar-context-compact-mode-hide-both = 
    .label = Masquer les deux
    .accesskey = H
oculate-toolbar-context-move-to-folder = 
    .label = Déplacer vers le dossier...
    .accesskey = M
oculate-toolbar-context-new-folder = 
    .label = Nouveau dossier
    .accesskey = N
oculate-tabs-newtab-paste-and-search = 
    .label = Coller & Rechercher
oculate-scroll-to-selected-tab = 
    .tooltiptext = Défiler vers l'onglet sélectionné
    .aria-label = Défiler vers l'onglet sélectionné
sidebar-oculate-expand = 
    .label = Étendre la barre latérale
sidebar-oculate-create-new = 
    .label = Créer...
tabbrowser-unload-tab-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Décharger et passer à l’onglet
           *[other] Décharger les { $tabCount } onglets et passer au premier
        }
tabbrowser-reset-pin-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Rétablir et épingler l'onglet
           *[other] Rétablir et épingler { $tabCount } onglets
        }
oculate-tab-sublabel =
    { $tabSubtitle ->
        [oculate-default-pinned] Retour à l'URL épinglée
        [oculate-default-pinned-cmd] Séparer de l'onglet épinglé
       *[other] { $tabSubtitle }
    }
