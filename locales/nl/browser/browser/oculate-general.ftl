# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = huidig profiel
unified-extensions-description = Extensies worden gebruikt om extra functionaliteit toe te voegen aan { -brand-short-name }.
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] Essential-tabblad herstellen
           *[false] Vastgezet tabblad herstellen
        }
    .accesskey = R
tab-context-oculate-add-essential = 
    .label = Toevoegen aan Essentials
    .accesskey = E
tab-context-oculate-add-essential-badge = { $num } / { $max } plekken bezet
tab-context-oculate-remove-essential = 
    .label = Verwijderen uit Essentials
    .accesskey = R
tab-context-oculate-edit-pinned-page = 
    .label =
        { $isEssential ->
            [true] URL van Essential aanpassen
           *[false] URL van vastgezette tab aanpassen
        }
    .accesskey = V
tab-context-oculate-replace-pinned-url-with-current = 
    .label = Vervang door huidige URL
    .accesskey = C
tab-context-oculate-edit-pinned-url = 
    .label = Bewerken…
    .accesskey = B
tab-context-oculate-edit-title = 
    .label = Naam veranderen...
tab-context-oculate-edit-icon = 
    .label = Icoon veranderen...
oculate-themes-corrupted = Je { -brand-short-name } mods bestand is beschadigd. Ze zijn gereset naar het standaard thema.
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification =
    De nieuwe URL-balk is ingeschakeld, waardoor nieuwe tabbladen niet meer nodig zijn.<br/><br/>
    Probeer een nieuw tabblad te openen om de nieuwe URL-balk in actie te zien!
oculate-disable = Uitschakelen
pictureinpicture-minimize-btn = 
    .aria-label = Minimaliseren
    .tooltip = Minimaliseren
oculate-panel-ui-gradient-generator-custom-color = Aangepaste kleur
oculate-copy-current-url-confirmation = Huidige URL gekopieerd!
oculate-copy-current-url-as-markdown-confirmation = Huidige URL gekopieerd als Markdown!
oculate-general-cancel-label = 
    .label = Annuleren
oculate-general-confirm = 
    .label = Bevestigen
oculate-pinned-tab-replaced = Vastgemaakte tabblad URL is vervangen met de huidige URL!
oculate-pinned-tab-url-edited = URL van vastgezette tab is bijgewerkt!
oculate-pinned-tab-url-invalid = Dat lijkt niet op een geldige URL.
oculate-pinned-tab-edit-url-title = Vastgezette URL bewerken
oculate-pinned-tab-edit-url-label = Voer de URL in waar dit vastgezette tabblad naar moet verwijzen:
oculate-tabs-renamed = Tabblad is succesvol hernoemd!
oculate-background-tab-opened-toast = Nieuw achtergrondtabblad geopend!
oculate-workspace-renamed-toast = Werkruimte succesvol is hernoemd!
oculate-split-view-limit-toast = Kan geen panelen meer toevoegen aan de gesplitste weergave!
oculate-sidebar-drag-collapsed-toast = Zijbalk verborgen! Gebruik <span>{ $shortcut }</span> om de zijbalk terug te halen.
oculate-toggle-compact-mode-button = 
    .label = Compacte modus
    .tooltiptext = Compacte modus togglen

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = Meer leren
oculate-close-label = Sluiten
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = Zoeken…
oculate-icons-picker-emoji = 
    .label = Emoji's
oculate-icons-picker-svg = 
    .label = Iconen
oculate-emojis-picker-search = 
    .placeholder = Emoji zoeken
urlbar-search-mode-oculate_actions = Acties
oculate-site-data-settings = Instellingen
oculate-generic-manage = Beheren
oculate-generic-more = Meer
oculate-generic-next = Volgende
oculate-essentials-promo-label = Toevoegen aan Essentials
oculate-essentials-promo-sublabel = Krijg in één klik toegang tot je favoriete tabbladen
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = Toegestaan
oculate-site-data-setting-block = Geblokkeerd
oculate-site-data-protections-enabled = Ingeschakeld
oculate-site-data-protections-disabled = Uitgeschakeld
oculate-site-data-security-info-extension = 
    .label = Extensie
oculate-site-data-security-info-secure = 
    .label = Beveiligd
oculate-site-data-security-info-not-secure = 
    .label = Niet beveiligd
oculate-site-data-manage-addons = 
    .label = Extensies beheren
oculate-site-data-get-addons = 
    .label = Extensies toevoegen
oculate-site-data-site-settings = 
    .label = Alle site-instellingen
oculate-site-data-header-share = 
    .tooltiptext = Deze pagina delen
oculate-site-data-header-boost = 
    .tooltiptext = Maak een Boost
oculate-site-data-header-reader-mode = 
    .tooltiptext = Leesmodus openen
oculate-site-data-header-screenshot = 
    .tooltiptext = Maak een schermafbeelding
oculate-site-data-header-bookmark = 
    .tooltiptext = Bladwijzer toevoegen voor deze pagina
oculate-urlbar-copy-url-button = 
    .tooltiptext = URL kopiëren
oculate-site-data-setting-site-protection = Tracking bescherming

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = Een nieuw thuis voor add-ons, machtigingen en meer
oculate-site-data-panel-feature-callout-subtitle = Klik op het icoon om de site-instellingen te beheren, beveiligingsinfo te bekijken, extensies te openen en gemeenschappelijke acties uit te voeren.
oculate-open-link-in-glance = 
    .label = Link openen in Glance
    .accesskey = G
oculate-sidebar-notification-updated-heading = Update voltooid!

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = Wat is er veranderd in { -brand-short-name }
oculate-sidebar-notification-updated-tooltip = 
    .title = Versie-informatie bekijken
oculate-sidebar-notification-restart-safe-mode-label = Werkt er iets niet?
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = Herstarten in veilige modus
oculate-window-sync-migration-dialog-title = Hou je vensters gesynchroniseerd
oculate-window-sync-migration-dialog-message = Vanaf nu synchroniseert Oculate alle vensters op hetzelfde apparaat, dus aanpassingen in het ene venster worden tegelijkertijd op het andere venster toegepast.
oculate-window-sync-migration-dialog-accept = Begrepen
oculate-appmenu-new-blank-window = 
    .label = Nieuw blanco venster
