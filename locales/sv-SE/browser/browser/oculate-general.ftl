# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = nuvarande profil
unified-extensions-description = Tillägg används för att få fler extra funktioner i { -brand-short-name }.
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] Återställ Essential flik
           *[false] Återställ fäst flik
        }
    .accesskey = R
tab-context-oculate-add-essential = 
    .label = Lägg till Essentials
    .accesskey = E
tab-context-oculate-add-essential-badge = { $num } / { $max } platser fyllda
tab-context-oculate-remove-essential = 
    .label = Ta bort från Essentials
    .accesskey = R
tab-context-oculate-edit-pinned-page = 
    .label =
        { $isEssential ->
            [true] Redigera Essential URL
           *[false] Redigera fäst URL
        }
    .accesskey = P
tab-context-oculate-replace-pinned-url-with-current = 
    .label = Ersätt med nuvarande URL
    .accesskey = C
tab-context-oculate-edit-pinned-url = 
    .label = Redigera…
    .accesskey = E
tab-context-oculate-edit-title = 
    .label = Ändra etikett...
tab-context-oculate-edit-icon = 
    .label = Ändra ikon...
oculate-themes-corrupted = Din { -brand-short-name } modds-fil är skadad. De har återställts till standardtemat.
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification =
    Det nya adressfältet har aktiverats, vilket eliminerar behovet av nya fliksidor.<br/><br/>
    Försök att öppna en ny flik för att se det nya adressfältet användas!
oculate-disable = Inaktivera
pictureinpicture-minimize-btn = 
    .aria-label = Minimera
    .tooltip = Minimera
oculate-panel-ui-gradient-generator-custom-color = Anpassad färg
oculate-copy-current-url-confirmation = Kopierade nuvarande URL!
oculate-copy-current-url-as-markdown-confirmation = Kopierade nuvarande webbadress som Markdown!
oculate-general-cancel-label = 
    .label = Avbryt
oculate-general-confirm = 
    .label = Bekräfta
oculate-pinned-tab-replaced = Den fästa flikens URL har ersatts med den aktuella URL!
oculate-pinned-tab-url-edited = Fäst flik URL har uppdaterats!
oculate-pinned-tab-url-invalid = Det ser inte ut som en giltig URL.
oculate-pinned-tab-edit-url-title = Redigera fäst URL
oculate-pinned-tab-edit-url-label = Ange den URL som den fästa fliken ska peka till:
oculate-tabs-renamed = Fliken har fått nytt namn!
oculate-background-tab-opened-toast = Ny bakgrundsflik öppnad!
oculate-workspace-renamed-toast = Arbetsytan har fått ett nytt namn!
oculate-split-view-limit-toast = Kan inte lägga till fler paneler till delad vy!
oculate-sidebar-drag-collapsed-toast = Sidofältet dolt! Använd <span>{$shortcut }</span> för att få tillbaka sidofältet.
oculate-toggle-compact-mode-button = 
    .label = Kompakt läge
    .tooltiptext = Växla kompakt läge

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = Läs mer
oculate-close-label = Stäng
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = Sök...
oculate-icons-picker-emoji = 
    .label = Emojis
oculate-icons-picker-svg = 
    .label = Ikoner
oculate-emojis-picker-search = 
    .placeholder = Sök emojis
urlbar-search-mode-oculate_actions = Åtgärder
oculate-site-data-settings = Inställningar
oculate-generic-manage = Hantera
oculate-generic-more = Mer
oculate-generic-next = Nästa
oculate-essentials-promo-label = Lägg till Essentials
oculate-essentials-promo-sublabel = Behåll dina favoritflikar bara ett klick bort
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = Tillåtet
oculate-site-data-setting-block = Blockerade
oculate-site-data-protections-enabled = Aktiverad
oculate-site-data-protections-disabled = Inaktiverad
oculate-site-data-security-info-extension = 
    .label = Tillägg
oculate-site-data-security-info-secure = 
    .label = Säker
oculate-site-data-security-info-not-secure = 
    .label = Inte säker
oculate-site-data-manage-addons = 
    .label = Hantera tillägg
oculate-site-data-get-addons = 
    .label = Lägg till tillägg
oculate-site-data-site-settings = 
    .label = Alla webbplatsinställningar
oculate-site-data-header-share = 
    .tooltiptext = Dela denna sida
oculate-site-data-header-boost = 
    .tooltiptext = Skapa en Boost
oculate-site-data-header-reader-mode = 
    .tooltiptext = Öppna läsläge
oculate-site-data-header-screenshot = 
    .tooltiptext = Ta en skärmdump
oculate-site-data-header-bookmark = 
    .tooltiptext = Bokmärk denna sida
oculate-urlbar-copy-url-button = 
    .tooltiptext = Kopiera URL
oculate-site-data-setting-site-protection = Spårningsskydd

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = Ett nytt hem för tillägg, behörigheter och mer
oculate-site-data-panel-feature-callout-subtitle = Klicka på ikonen för att hantera webbplatsinställningar, visa säkerhetsinformation, öppna tillägg och utföra vanliga åtgärder.
oculate-open-link-in-glance = 
    .label = Öppna länk i Glance
    .accesskey = G
oculate-sidebar-notification-updated-heading = Uppdatering slutförd!

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = Vad är nytt i { -brand-short-name }
oculate-sidebar-notification-updated-tooltip = 
    .title = Visa versionsfakta
oculate-sidebar-notification-restart-safe-mode-label = Har något gått sönder?
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = Starta om i felsäkert läge
oculate-window-sync-migration-dialog-title = Behåll dina fönster i Sync
oculate-window-sync-migration-dialog-message = Oculate synkroniserar nu fönster på samma enhet, så ändringar i ett fönster återspeglas direkt i de andra.
oculate-window-sync-migration-dialog-accept = Jag förstår
oculate-appmenu-new-blank-window = 
    .label = Nytt blankt fönster
