# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = nuværende profil
unified-extensions-description = Udvidelser bruges til at bringe ekstra funktionalitet ind i { -brand-short-name }.
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] Reset Essential Tab
           *[false] Reset Pinned Tab
        }
    .accesskey = R
tab-context-oculate-add-essential = 
    .label = Add to Essentials
    .accesskey = E
tab-context-oculate-add-essential-badge = { $num } / { $max } slots filled
tab-context-oculate-remove-essential = 
    .label = Fjern fra Essentielle
    .accesskey = R
tab-context-oculate-edit-pinned-page = 
    .label =
        { $isEssential ->
            [true] Edit Essential URL
           *[false] Edit Pinned URL
        }
    .accesskey = P
tab-context-oculate-replace-pinned-url-with-current = 
    .label = Replace with Current URL
    .accesskey = C
tab-context-oculate-edit-pinned-url = 
    .label = Edit…
    .accesskey = E
tab-context-oculate-edit-title = 
    .label = Change Label...
tab-context-oculate-edit-icon = 
    .label = Change Icon...
oculate-themes-corrupted = Din { -brand-short-name } mods-fil er beskadiget. De er blevet nulstillet til standardtemaet.
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification =
    Den nye URL-linje er aktiveret og fjerner dermed behovet for nye fanesider.<br/><br/>
    Prøv at åbne en ny fane for at se den i aktion!
oculate-disable = Deaktiver
pictureinpicture-minimize-btn = 
    .aria-label = Minimer
    .tooltip = Minimer
oculate-panel-ui-gradient-generator-custom-color = Brugerdefineret Farve
oculate-copy-current-url-confirmation = Kopieret nuværende URL!
oculate-copy-current-url-as-markdown-confirmation = Kopierede nuværende URL som Markdown!
oculate-general-cancel-label = 
    .label = Annuller
oculate-general-confirm = 
    .label = Bekræft
oculate-pinned-tab-replaced = Den fastgjorte fane-URL blev erstattet med den aktuelle.
oculate-pinned-tab-url-edited = Pinned tab URL has been updated!
oculate-pinned-tab-url-invalid = That doesn't look like a valid URL.
oculate-pinned-tab-edit-url-title = Edit Pinned URL
oculate-pinned-tab-edit-url-label = Enter the URL this pinned tab should point to:
oculate-tabs-renamed = Fanen blev omdøbt!
oculate-background-tab-opened-toast = Ny baggrundsfane åbnet!
oculate-workspace-renamed-toast = Arbejdsområde blev omdøbt!
oculate-split-view-limit-toast = Kan ikke tilføje flere paneler til denne delte visning!
oculate-sidebar-drag-collapsed-toast = Sidebar hidden! Use <span>{ $shortcut }</span> to bring the sidebar back.
oculate-toggle-compact-mode-button = 
    .label = Kompakt tilstand
    .tooltiptext = Kompakt tilstand til/fra

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = Lær mere
oculate-close-label = Luk
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = Søg...
oculate-icons-picker-emoji = 
    .label = Emojis
oculate-icons-picker-svg = 
    .label = Ikoner
oculate-emojis-picker-search = 
    .placeholder = Search emojis
urlbar-search-mode-oculate_actions = Handlinger
oculate-site-data-settings = Indstillinger
oculate-generic-manage = Administrer
oculate-generic-more = Mere
oculate-generic-next = Næste
oculate-essentials-promo-label = Add to Essentials
oculate-essentials-promo-sublabel = Hold dine yndlings faner et klik væk
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = Tilladt
oculate-site-data-setting-block = Blokeret
oculate-site-data-protections-enabled = Aktiveret
oculate-site-data-protections-disabled = Deaktiveret
oculate-site-data-security-info-extension = 
    .label = Udvidelse
oculate-site-data-security-info-secure = 
    .label = Sikker
oculate-site-data-security-info-not-secure = 
    .label = Ikke sikker
oculate-site-data-manage-addons = 
    .label = Administrer udvidelser
oculate-site-data-get-addons = 
    .label = Tilføj udvidelser
oculate-site-data-site-settings = 
    .label = Alle Side Indstillinger
oculate-site-data-header-share = 
    .tooltiptext = Del Denne Side
oculate-site-data-header-boost = 
    .tooltiptext = Create a Boost
oculate-site-data-header-reader-mode = 
    .tooltiptext = Åben Læsertilstand
oculate-site-data-header-screenshot = 
    .tooltiptext = Tag et Skærmbillede
oculate-site-data-header-bookmark = 
    .tooltiptext = Tilføj Side til Bogmærker
oculate-urlbar-copy-url-button = 
    .tooltiptext = Kopiér URL
oculate-site-data-setting-site-protection = Sporingsbeskyttelse

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = Et nyt hjem for tilføjelser, tilladelser og mere
oculate-site-data-panel-feature-callout-subtitle = Klik ikonet for at administrere side indstillinger, se sikkerhedsoplysninger, tilgå udvidelser, og udføre almindelige handlinger.
oculate-open-link-in-glance = 
    .label = Open Link in Glance
    .accesskey = G
oculate-sidebar-notification-updated-heading = Opdatering Fuldført!

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = Hvad er nyt i { -brand-short-name }
oculate-sidebar-notification-updated-tooltip = 
    .title = Se Udgivelsesnoter
oculate-sidebar-notification-restart-safe-mode-label = Noget der ikke virker?
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = Genstart i Beskyttet Tilstand
oculate-window-sync-migration-dialog-title = Hold Dine Vinduer Synkroniseret
oculate-window-sync-migration-dialog-message = Oculate synkroniserer nu vinduer på samme enhed, så ændringer i et vindue afspejles øjeblikkeligt på tværs af de andre.
oculate-window-sync-migration-dialog-accept = Forstået
oculate-appmenu-new-blank-window = 
    .label = Nyt tomt vindue
