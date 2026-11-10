# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = nykyinen profiili
unified-extensions-description = Laajennuksia käytetään tuomaan enemmän ylimääräisiä toimintoja { -brand-short-name }.
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] Reset Essential Tab
           *[false] Reset Pinned Tab
        }
    .accesskey = R
tab-context-oculate-add-essential = 
    .label = Lisää olennaisiin
    .accesskey = E
tab-context-oculate-add-essential-badge = { $num } / { $max } täytetty paikka
tab-context-oculate-remove-essential = 
    .label = Poista olennaisista
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
oculate-themes-corrupted = { -brand-short-name } modejasi tiedosto on vioittunut. Ne on palautettu oletusteemaan.
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification =
    Uusi URL-palkki on otettu käyttöön, uusia välilehtisivuja ei enää tarvita.<br/><br/>
    Kokeile avata uusi välilehti nähdäksesi uuden URL-palkin toiminnassa!
oculate-disable = Poista käytöstä
pictureinpicture-minimize-btn = 
    .aria-label = Minimoi
    .tooltip = Minimoi
oculate-panel-ui-gradient-generator-custom-color = Muokattu Väri
oculate-copy-current-url-confirmation = Nykyinen URL-osoite kopioitu!
oculate-copy-current-url-as-markdown-confirmation = Copied current URL as Markdown!
oculate-general-cancel-label = 
    .label = Peruuta
oculate-general-confirm = 
    .label = Vahvista
oculate-pinned-tab-replaced = Pinned tab URL has been replaced with the current URL.
oculate-pinned-tab-url-edited = Pinned tab URL has been updated!
oculate-pinned-tab-url-invalid = That doesn't look like a valid URL.
oculate-pinned-tab-edit-url-title = Edit Pinned URL
oculate-pinned-tab-edit-url-label = Enter the URL this pinned tab should point to:
oculate-tabs-renamed = Välilehti on nimetty uudelleen!
oculate-background-tab-opened-toast = Uusi taustavälilehti avattu!
oculate-workspace-renamed-toast = Työtila on nimetty uudelleen!
oculate-split-view-limit-toast = Can't add more panels to the split view!
oculate-sidebar-drag-collapsed-toast = Sidebar hidden! Use <span>{ $shortcut }</span> to bring the sidebar back.
oculate-toggle-compact-mode-button = 
    .label = Kompakti Tila
    .tooltiptext = Ota käyttöön Kompakti tila

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = Lue Lisää
oculate-close-label = Sulje
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = Hae...
oculate-icons-picker-emoji = 
    .label = Emojit
oculate-icons-picker-svg = 
    .label = Kuvakkeet
oculate-emojis-picker-search = 
    .placeholder = Search emojis
urlbar-search-mode-oculate_actions = Toiminnot
oculate-site-data-settings = Asetukset
oculate-generic-manage = Hallitse
oculate-generic-more = Lisää
oculate-generic-next = Seuraava
oculate-essentials-promo-label = Add to Essentials
oculate-essentials-promo-sublabel = Keep your favorite tabs just a click away
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = Sallittu
oculate-site-data-setting-block = Estetty
oculate-site-data-protections-enabled = Käytössä
oculate-site-data-protections-disabled = Pois käytöstä
oculate-site-data-security-info-extension = 
    .label = Laajennus
oculate-site-data-security-info-secure = 
    .label = Turvallinen
oculate-site-data-security-info-not-secure = 
    .label = Ei turvallinen
oculate-site-data-manage-addons = 
    .label = Hallita Laajennuksia
oculate-site-data-get-addons = 
    .label = Lisää Laajennuksia
oculate-site-data-site-settings = 
    .label = Kaikki Sivuston Asetukset
oculate-site-data-header-share = 
    .tooltiptext = Jaa Tämä Sivu
oculate-site-data-header-boost = 
    .tooltiptext = Create a Boost
oculate-site-data-header-reader-mode = 
    .tooltiptext = Siirry lukutilaan
oculate-site-data-header-screenshot = 
    .tooltiptext = Ota kuvakaappaus
oculate-site-data-header-bookmark = 
    .tooltiptext = Lisää Tämä Sivu Kirjanmerkkeihin
oculate-urlbar-copy-url-button = 
    .tooltiptext = Kopioi URL
oculate-site-data-setting-site-protection = Seuranta Suojaus

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = Uusi koti lisäosille, käyttöoikeuksille ja paljon muuta
oculate-site-data-panel-feature-callout-subtitle = Klikkaa kuvaketta hallitaksesi sivuston asetuksia, tarkastella tietoturvatietoja, käyttää laajennuksia ja suorittaa yhteisiä toimintoja.
oculate-open-link-in-glance = 
    .label = Avaa linkki vilkaisussa
    .accesskey = G
oculate-sidebar-notification-updated-heading = Päivitys valmis!

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = Mitä uutta { -brand-short-name }
oculate-sidebar-notification-updated-tooltip = 
    .title = Katso Julkaisutiedot
oculate-sidebar-notification-restart-safe-mode-label = Jotain rikki?
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = Käynnistä uudelleen vianmääritystilassa
oculate-window-sync-migration-dialog-title = Keep Your Windows in Sync
oculate-window-sync-migration-dialog-message = Oculate now syncs windows on the same device, so changes in one window are reflected across the others instantly.
oculate-window-sync-migration-dialog-accept = Got It
oculate-appmenu-new-blank-window = 
    .label = New blank window
