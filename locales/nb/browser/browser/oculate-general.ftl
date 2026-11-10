# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = gjeldende profil
unified-extensions-description = Utvidelser brukes for å bringe ekstra funksjonalitet til { -brand-short-name }.
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] Nullstill Essential fane
           *[false] Nullstill festet fane
        }
    .accesskey = R
tab-context-oculate-add-essential = 
    .label = Legg til i Essentials
    .accesskey = E
tab-context-oculate-add-essential-badge = { $num } / { $max }
tab-context-oculate-remove-essential = 
    .label = Fjern fra Essentials
    .accesskey = R
tab-context-oculate-edit-pinned-page = 
    .label =
        { $isEssential ->
            [true] Rediger Essential nettadresse
           *[false] Rediger Festet nettadresse
        }
    .accesskey = P
tab-context-oculate-replace-pinned-url-with-current = 
    .label = Erstatt med gjeldende nettadresse
    .accesskey = C
tab-context-oculate-edit-pinned-url = 
    .label = Rediger...
    .accesskey = E
tab-context-oculate-edit-title = 
    .label = Endre etikett...
tab-context-oculate-edit-icon = 
    .label = Endre ikon...
oculate-themes-corrupted = Din { -brand-short-name }-mods fil er skadet. De har blitt tilbakestilt til standardtemaet.
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification =
    Det nye nettadressefeltet har blitt aktivert, som tar vekk behovet for nye fanesider.<br/><br/>
    Prøv å åpne en ny fane for å se det nye nettadressefeltet i action!
oculate-disable = Deaktiver
pictureinpicture-minimize-btn = 
    .aria-label = Minimer
    .tooltip = Minimer
oculate-panel-ui-gradient-generator-custom-color = Tilpasset Farge
oculate-copy-current-url-confirmation = Kopierte gjeldende nettadresse!
oculate-copy-current-url-as-markdown-confirmation = Kopierte gjeldende nettadresse som Markdown!
oculate-general-cancel-label = 
    .label = Avbryt
oculate-general-confirm = 
    .label = Bekreft
oculate-pinned-tab-replaced = Festet fanes nettadresse har blit erstattet med gjeldende nettadresse!
oculate-pinned-tab-url-edited = Festet fane-nettadresse har blitt oppdatert!
oculate-pinned-tab-url-invalid = Det ser ikke ut som en gyldig nettadresse.
oculate-pinned-tab-edit-url-title = Rediger festet nettadresse
oculate-pinned-tab-edit-url-label = Skriv inn nettadressen som denne festede fanen skal peke til:
oculate-tabs-renamed = Fanen har fått nytt navn!
oculate-background-tab-opened-toast = Ny bakgrunnsfane åpnet!
oculate-workspace-renamed-toast = Arbeidsområdet har fått nytt navn!
oculate-split-view-limit-toast = Kan ikke legge til flere paneler i delt visning!
oculate-sidebar-drag-collapsed-toast = Sidebar hidden! Use <span>{ $shortcut }</span> to bring the sidebar back.
oculate-toggle-compact-mode-button = 
    .label = Kompakt modus
    .tooltiptext = Veksle kompakt modus

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = Lær mer
oculate-close-label = Lukk
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = Søk...
oculate-icons-picker-emoji = 
    .label = Emojier
oculate-icons-picker-svg = 
    .label = Ikoner
oculate-emojis-picker-search = 
    .placeholder = Søk emojier
urlbar-search-mode-oculate_actions = Handlinger
oculate-site-data-settings = Innstillinger
oculate-generic-manage = Behandle
oculate-generic-more = Mer
oculate-generic-next = Neste
oculate-essentials-promo-label = Legg til i Essentials
oculate-essentials-promo-sublabel = Hold favorittfanene dine bare et klikk unna
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = Tillat
oculate-site-data-setting-block = Blokker
oculate-site-data-protections-enabled = Aktivert
oculate-site-data-protections-disabled = Deaktivert
oculate-site-data-security-info-extension = 
    .label = Utvidelse
oculate-site-data-security-info-secure = 
    .label = Sikker
oculate-site-data-security-info-not-secure = 
    .label = Ikke sikker
oculate-site-data-manage-addons = 
    .label = Behandle Utvidelser
oculate-site-data-get-addons = 
    .label = Legg til utvidelser
oculate-site-data-site-settings = 
    .label = Alle nettstedsinnstillinger
oculate-site-data-header-share = 
    .tooltiptext = Del denne siden
oculate-site-data-header-boost = 
    .tooltiptext = Create a Boost
oculate-site-data-header-reader-mode = 
    .tooltiptext = Gå til lesermodus
oculate-site-data-header-screenshot = 
    .tooltiptext = Ta et skjermbilde
oculate-site-data-header-bookmark = 
    .tooltiptext = Bokmerk denne siden
oculate-urlbar-copy-url-button = 
    .tooltiptext = Kopier nettadresse
oculate-site-data-setting-site-protection = Sporingsbeskyttelse

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = Et nytt hjem for tillegg, tillatelser, og mer
oculate-site-data-panel-feature-callout-subtitle = Klikk på ikonet for å behandle nettstedsinnstillinger, se sikkerhetsinformasjon, behandle utvidelser, og utføre vanlige handlinger.
oculate-open-link-in-glance = 
    .label = Åpne lenke i Glance
    .accesskey = G
oculate-sidebar-notification-updated-heading = Oppdatering fullført!

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = Hva er nytt i { -brand-short-name }
oculate-sidebar-notification-updated-tooltip = 
    .title = Se versjonsnotater
oculate-sidebar-notification-restart-safe-mode-label = Er noe ødelagt?
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = Start på nytt i sikker modus
oculate-window-sync-migration-dialog-title = Hold vinduene dine synkronisert
oculate-window-sync-migration-dialog-message = Oculate synkroniserer nå vinduer på samme enhet, så endringer i ett vindu blir reflekterte på tvers de andre med en gang.
oculate-window-sync-migration-dialog-accept = Skjønner
oculate-appmenu-new-blank-window = 
    .label = Nytt tomt vindu
