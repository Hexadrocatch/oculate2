# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = oraingo profila
unified-extensions-description = Gehigarriek funtzioak eransten dizkiote { -brand-short-name }i.
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] Berrezarri Funtsezko Fitxa
           *[false] Berrezarri Ainguratutako Fitxa
        }
    .accesskey = R
tab-context-oculate-add-essential = 
    .label = Funtsezko fitxetara Gehitu
    .accesskey = E
tab-context-oculate-add-essential-badge = { $num } / { $max } hutsune beteta
tab-context-oculate-remove-essential = 
    .label = Funtsezko fitxetatik Kendu
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
    .label = Etiketa aldatu...
tab-context-oculate-edit-icon = 
    .label = Ikonoa aldatu...
oculate-themes-corrupted = Zure { -brand-short-name }eko mod-artxiboa kaltetuta dago. Lehenetsitako gaia berrezarri da.
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification =
    URL-barra berria gaitu da. Jada ez dira beharrezkoa fitxa berriak.<br/><br/>
    Saiatu fitxa berri bat zabaltzen URL-barra berria ikusteko!
oculate-disable = Desgaitu
pictureinpicture-minimize-btn = 
    .aria-label = Ikonotu
    .tooltip = Ikonotu
oculate-panel-ui-gradient-generator-custom-color = Neurrirako kolorea
oculate-copy-current-url-confirmation = Oraingo esteka kopiatu da!
oculate-copy-current-url-as-markdown-confirmation = Oraingo esteka kopiatu da Markdown gisa!
oculate-general-cancel-label = 
    .label = Ezeztatu
oculate-general-confirm = 
    .label = Baieztatu
oculate-pinned-tab-replaced = Oraingo estekak ordezkatu du ainguratutako fitxarena!
oculate-pinned-tab-url-edited = Pinned tab URL has been updated!
oculate-pinned-tab-url-invalid = That doesn't look like a valid URL.
oculate-pinned-tab-edit-url-title = Edit Pinned URL
oculate-pinned-tab-edit-url-label = Enter the URL this pinned tab should point to:
oculate-tabs-renamed = Fitxaren izena ongi aldatu da!
oculate-background-tab-opened-toast = Fitxa berri bat zabaldu da bigarren planoan!
oculate-workspace-renamed-toast = Lan-eremuaren izena ongi aldatu da!
oculate-split-view-limit-toast = Can't add more panels to the split view!
oculate-sidebar-drag-collapsed-toast = Sidebar hidden! Use <span>{ $shortcut }</span> to bring the sidebar back.
oculate-toggle-compact-mode-button = 
    .label = Modu Trinkoa
    .tooltiptext = Modu Trinkoa Aktibatu/Desaktibatu

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = Gehiago ikasi
oculate-close-label = Itxi
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = Bilatu...
oculate-icons-picker-emoji = 
    .label = Emojiak
oculate-icons-picker-svg = 
    .label = Ikonoak
oculate-emojis-picker-search = 
    .placeholder = Search emojis
urlbar-search-mode-oculate_actions = Ekintzak
oculate-site-data-settings = Ezarpenak
oculate-generic-manage = Kudeatu
oculate-generic-more = Gehiago
oculate-generic-next = Hurrengoa
oculate-essentials-promo-label = Funtsezkoetara Gehitu
oculate-essentials-promo-sublabel = Izan zure fitxa gogokoenak klik bakar batera
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = Baimenduta
oculate-site-data-setting-block = Blokeatuta
oculate-site-data-protections-enabled = Gaituta
oculate-site-data-protections-disabled = Ezgaituta
oculate-site-data-security-info-extension = 
    .label = Gehigarria
oculate-site-data-security-info-secure = 
    .label = Segurua
oculate-site-data-security-info-not-secure = 
    .label = Ez segurua
oculate-site-data-manage-addons = 
    .label = Gehigarriak Kudeatu
oculate-site-data-get-addons = 
    .label = Gehigarriak Erantsi
oculate-site-data-site-settings = 
    .label = Webgunearen Ezarpen Guztiak
oculate-site-data-header-share = 
    .tooltiptext = Orri Hau Partekatu
oculate-site-data-header-boost = 
    .tooltiptext = Create a Boost
oculate-site-data-header-reader-mode = 
    .tooltiptext = Irakurle-moduan Sartu
oculate-site-data-header-screenshot = 
    .tooltiptext = Pantaila-argazkia Atera
oculate-site-data-header-bookmark = 
    .tooltiptext = Gehitu Orria Laster-marketara
oculate-urlbar-copy-url-button = 
    .tooltiptext = Esteka Kopiatu
oculate-site-data-setting-site-protection = Tracking Protection

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = A new home for add-ons, permissions, and more
oculate-site-data-panel-feature-callout-subtitle = Click the icon to manage site settings, view security info, access extensions, and perform common actions.
oculate-open-link-in-glance = 
    .label = Open Link in Glance
    .accesskey = G
oculate-sidebar-notification-updated-heading = Update Complete!

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = What's new in { -brand-short-name }
oculate-sidebar-notification-updated-tooltip = 
    .title = View Release Notes
oculate-sidebar-notification-restart-safe-mode-label = Something broke?
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = Restart in Safe Mode
oculate-window-sync-migration-dialog-title = Keep Your Windows in Sync
oculate-window-sync-migration-dialog-message = Oculate now syncs windows on the same device, so changes in one window are reflected across the others instantly.
oculate-window-sync-migration-dialog-accept = Got It
oculate-appmenu-new-blank-window = 
    .label = New blank window
