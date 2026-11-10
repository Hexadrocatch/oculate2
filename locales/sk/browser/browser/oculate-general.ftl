# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = aktuálny profil
unified-extensions-description = Rozšírenia slúžia na pridanie ďalších funkcií do { -brand-short-name }.
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] Reset Essential Tab
           *[false] Reset Pinned Tab
        }
    .accesskey = R
tab-context-oculate-add-essential = 
    .label = Pridať medzi hlavné
    .accesskey = E
tab-context-oculate-add-essential-badge = Využité pozície: { $num } / { $max }
tab-context-oculate-remove-essential = 
    .label = Odstrániť z hlavných
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
    .label = Zmeniť Označenie...
tab-context-oculate-edit-icon = 
    .label = Zmeniť Ikonu...
oculate-themes-corrupted = Váš súbor módov { -brand-short-name } je poškodený. Témy boli resetované na predvolené.
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification = Nový panel adries bol aktivovaný, takže stránky novej karty už nie sú potrebné.<br/><br/>Skúste otvoriť novú kartu a pozrite si nový panel adries v akcii!
oculate-disable = Zakázať
pictureinpicture-minimize-btn = 
    .aria-label = Minimalizovať
    .tooltip = Minimalizovať
oculate-panel-ui-gradient-generator-custom-color = Vlastná Farba
oculate-copy-current-url-confirmation = Aktuálna URL skopírovaná!
oculate-copy-current-url-as-markdown-confirmation = Copied current URL as Markdown!
oculate-general-cancel-label = 
    .label = Zrušiť
oculate-general-confirm = 
    .label = Potvrdiť
oculate-pinned-tab-replaced = URL pripnutej karty bola nahradená aktuálnou URL!
oculate-pinned-tab-url-edited = Pinned tab URL has been updated!
oculate-pinned-tab-url-invalid = That doesn't look like a valid URL.
oculate-pinned-tab-edit-url-title = Edit Pinned URL
oculate-pinned-tab-edit-url-label = Enter the URL this pinned tab should point to:
oculate-tabs-renamed = Karta bola úspešne premenovaná!
oculate-background-tab-opened-toast = Nová karta otvorená na pozadí!
oculate-workspace-renamed-toast = Pracovný priestor bol úspešne premenovaný!
oculate-split-view-limit-toast = Can't add more panels to the split view!
oculate-sidebar-drag-collapsed-toast = Sidebar hidden! Use <span>{ $shortcut }</span> to bring the sidebar back.
oculate-toggle-compact-mode-button = 
    .label = Kompaktný Režim
    .tooltiptext = Prepnúť Kompaktný Režim

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = Zistiť Viac
oculate-close-label = Zatvoriť
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = Hľadať...
oculate-icons-picker-emoji = 
    .label = Emoji
oculate-icons-picker-svg = 
    .label = Ikony
oculate-emojis-picker-search = 
    .placeholder = Search emojis
urlbar-search-mode-oculate_actions = Akcie
oculate-site-data-settings = Nastavenia
oculate-generic-manage = Spravovať
oculate-generic-more = Viac
oculate-generic-next = Ďalšie
oculate-essentials-promo-label = Pridať do Hlavných
oculate-essentials-promo-sublabel = Majte svoje obľúbené karty na dosah jediným kliknutím
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = Povolené
oculate-site-data-setting-block = Zablokované
oculate-site-data-protections-enabled = Zapnuté
oculate-site-data-protections-disabled = Vypnuté
oculate-site-data-security-info-extension = 
    .label = Rozšírenie
oculate-site-data-security-info-secure = 
    .label = Zabezpečené
oculate-site-data-security-info-not-secure = 
    .label = Nezabezpečené
oculate-site-data-manage-addons = 
    .label = Spravovať Rozšírenia
oculate-site-data-get-addons = 
    .label = Pridať Rozšírenia
oculate-site-data-site-settings = 
    .label = Všetky Nastavenia Webov
oculate-site-data-header-share = 
    .tooltiptext = Zdieľať Túto Stránku
oculate-site-data-header-boost = 
    .tooltiptext = Create a Boost
oculate-site-data-header-reader-mode = 
    .tooltiptext = Prejsť do Režimu Čítačky
oculate-site-data-header-screenshot = 
    .tooltiptext = Vytvoriť Snímku Obrazovky
oculate-site-data-header-bookmark = 
    .tooltiptext = Pridať Túto Stránku k Záložkám
oculate-urlbar-copy-url-button = 
    .tooltiptext = Kopírovať URL adresu
oculate-site-data-setting-site-protection = Ochrana pred Sledovaním

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = Nové miesto pre doplnky, povolenia a ďalšie funkcie
oculate-site-data-panel-feature-callout-subtitle = Kliknutím na túto ikonu môžete spravovať nastavenia webu, zobraziť informácie o zabezpečení, pristupovať k rozšíreniam a vykonávať bežné akcie.
oculate-open-link-in-glance = 
    .label = Otvoriť odkaz v Glance
    .accesskey = G
oculate-sidebar-notification-updated-heading = Aktualizácia Dokončená!

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = Čo je nové v { -brand-short-name }
oculate-sidebar-notification-updated-tooltip = 
    .title = Zobraziť Poznámky k Vydaniu
oculate-sidebar-notification-restart-safe-mode-label = Niečo sa pokazilo?
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = Reštartovať v Núdzovom Režime
oculate-window-sync-migration-dialog-title = Majte svoje okná synchronizované
oculate-window-sync-migration-dialog-message = Oculate teraz synchronizuje okná v rámci jedného zariadenia, takže zmeny v jednom okne sa okamžite prejavia vo všetkých ostatných.
oculate-window-sync-migration-dialog-accept = Rozumiem
oculate-appmenu-new-blank-window = 
    .label = New blank window
