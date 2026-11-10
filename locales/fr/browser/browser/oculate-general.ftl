# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = profil actuel
unified-extensions-description = Les extensions sont utilisées pour ajouter plus de fonctionnalités à { -brand-short-name }.
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] Réinitialiser l'onglet Essential
           *[false] Réinitialiser l'onglet épinglé
        }
    .accesskey = R
tab-context-oculate-add-essential = 
    .label = Ajouter aux Essentials
    .accesskey = E
tab-context-oculate-add-essential-badge = { $num } / { $max }
tab-context-oculate-remove-essential = 
    .label = Retirer des Essentials
    .accesskey = R
tab-context-oculate-edit-pinned-page = 
    .label =
        { $isEssential ->
            [true] Modifier l'URL de l'Essential
           *[false] Modifier de l'URL de l'onglet épinglé
        }
    .accesskey = P
tab-context-oculate-replace-pinned-url-with-current = 
    .label = Remplacer par l'URL actuelle
    .accesskey = C
tab-context-oculate-edit-pinned-url = 
    .label = Modifier…
    .accesskey = E
tab-context-oculate-edit-title = 
    .label = Changer le libellé...
tab-context-oculate-edit-icon = 
    .label = Changer l'icône...
oculate-themes-corrupted = Votre fichier de thèmes { -brand-short-name } est corrompu. Il a été réinitialisé au thème par défaut.
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification =
    La nouvelle barre d’adresse a été activée, supprimant la nécessité de nouvelles pages d’onglets.<br/><br/>
    Essayez d’ouvrir un nouvel onglet pour voir la nouvelle barre d’adresse en action !
oculate-disable = Désactiver
pictureinpicture-minimize-btn = 
    .aria-label = Minimiser
    .tooltip = Minimiser
oculate-panel-ui-gradient-generator-custom-color = Couleur personnalisée
oculate-copy-current-url-confirmation = URL actuelle copiée !
oculate-copy-current-url-as-markdown-confirmation = URL actuelle copiée en tant que Markdown !
oculate-general-cancel-label = 
    .label = Annuler
oculate-general-confirm = 
    .label = Confirmer
oculate-pinned-tab-replaced = L’adresse de l'onglet épinglé a été remplacée par l’adresse actuelle.
oculate-pinned-tab-url-edited = L'URL de l'onglet épinglé a été mise à jour !
oculate-pinned-tab-url-invalid = Cela ne ressemble pas à une URL valide.
oculate-pinned-tab-edit-url-title = Modifier l'URL épinglée
oculate-pinned-tab-edit-url-label = Entrer l'URL à laquelle cet onglet épinglé devrait pointer :
oculate-tabs-renamed = L’onglet a été renommé avec succès !
oculate-background-tab-opened-toast = Nouvel onglet ouvert en arrière-plan !
oculate-workspace-renamed-toast = L'espace de travail a été renommé avec succès !
oculate-split-view-limit-toast = Impossible d'ajouter d'autres panneaux à la vue fractionnée !
oculate-sidebar-drag-collapsed-toast = La barre latérale est masquée ! Utilisez <span>{ $shortcut }</span> pour la faire réapparaître.
oculate-toggle-compact-mode-button = 
    .label = Mode compact
    .tooltiptext = Activer/Désactiver le mode compact

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = En savoir plus
oculate-close-label = Fermer
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = Rechercher...
oculate-icons-picker-emoji = 
    .label = Émojis
oculate-icons-picker-svg = 
    .label = Icônes
oculate-emojis-picker-search = 
    .placeholder = Rechercher des émojis
urlbar-search-mode-oculate_actions = Actions
oculate-site-data-settings = Paramètres
oculate-generic-manage = Gérer
oculate-generic-more = Plus
oculate-generic-next = Suivant
oculate-essentials-promo-label = Ajouter aux Essentials
oculate-essentials-promo-sublabel = Accédez à vos onglets favoris en un clic
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = Autorisé
oculate-site-data-setting-block = Bloqué
oculate-site-data-protections-enabled = Activé
oculate-site-data-protections-disabled = Désactivé
oculate-site-data-security-info-extension = 
    .label = Extension
oculate-site-data-security-info-secure = 
    .label = Sécurisé
oculate-site-data-security-info-not-secure = 
    .label = Non sécurisé
oculate-site-data-manage-addons = 
    .label = Gérer les extensions
oculate-site-data-get-addons = 
    .label = Ajouter des extensions
oculate-site-data-site-settings = 
    .label = Tous les paramètres du site
oculate-site-data-header-share = 
    .tooltiptext = Partager cette page
oculate-site-data-header-boost = 
    .tooltiptext = Créer un Boost
oculate-site-data-header-reader-mode = 
    .tooltiptext = Entrer en mode lecture
oculate-site-data-header-screenshot = 
    .tooltiptext = Prendre une capture d'écran
oculate-site-data-header-bookmark = 
    .tooltiptext = Marquer cette page
oculate-urlbar-copy-url-button = 
    .tooltiptext = Copier l'URL
oculate-site-data-setting-site-protection = Protection contre le pistage

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = Un nouvel endroit pour vos extensions, permissions et plus encore
oculate-site-data-panel-feature-callout-subtitle = Cliquez sur l'icône pour gérer les paramètres du site, afficher les infos de sécurité, accéder aux extensions et effectuer d'autres actions.
oculate-open-link-in-glance = 
    .label = Ouvrir le lien dans Glance
    .accesskey = G
oculate-sidebar-notification-updated-heading = Mise à jour terminée !

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = Quoi de neuf dans { -brand-short-name } ?
oculate-sidebar-notification-updated-tooltip = 
    .title = Voir les notes de version
oculate-sidebar-notification-restart-safe-mode-label = Un problème est survenu ?
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = Redémarrer en mode de dépannage
oculate-window-sync-migration-dialog-title = Gardez vos fenêtres synchronisées
oculate-window-sync-migration-dialog-message = Oculate synchronise désormais les fenêtres sur le même appareil, de sorte que les modifications apportées à une fenêtre sont instantanément répercutées sur les autres.
oculate-window-sync-migration-dialog-accept = J'ai compris
oculate-appmenu-new-blank-window = 
    .label = Nouvelle fenêtre vide
