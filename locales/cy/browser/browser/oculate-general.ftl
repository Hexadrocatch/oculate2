# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = y proffil cyfredol
unified-extensions-description = Mae estyniadau'n cael ei defnyddio er mwyn ychwanegu fwy o swyddogaeth i { -brand-short-name }.
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] Ailosod y Tab Hanfodol
           *[false] Ailosod y Tab wedi'i Binio
        }
    .accesskey = A
tab-context-oculate-add-essential = 
    .label = Ychwanegu at Hanfodion
    .accesskey = H
tab-context-oculate-add-essential-badge = { $num } / { $max } slotiau wedi'u llenwi
tab-context-oculate-remove-essential = 
    .label = Dileu o'r Hanfodion
    .accesskey = D
tab-context-oculate-edit-pinned-page = 
    .label =
        { $isEssential ->
            [true] Golygu URL Hanfodol
           *[false] Golygu URL wedi'i Binio
        }
    .accesskey = P
tab-context-oculate-replace-pinned-url-with-current = 
    .label = Amnewid gyda'r URL Cyfredol
    .accesskey = P
tab-context-oculate-edit-pinned-url = 
    .label = Golygu…
    .accesskey = G
tab-context-oculate-edit-title = 
    .label = Newid Label…
tab-context-oculate-edit-icon = 
    .label = Newid Eicon…
oculate-themes-corrupted = Mae eich ffeil addasiadau { -brand-short-name } wedi'i llygru. Maen nhw wedi cael eu hailosod i'r thema rhagosodedig.
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification =
    Mae'r bar URL newydd wedi'i alluogi, sydd yn dileu'r angen am dudalennau tab newydd.<br/><br/>
    Ceisiwch agor tab newydd i weld y bar URL newydd ar waith!
oculate-disable = Analluogi
pictureinpicture-minimize-btn = 
    .aria-label = Lleihau
    .tooltip = Lleihau
oculate-panel-ui-gradient-generator-custom-color = Lliw Cyfaddas
oculate-copy-current-url-confirmation = Wedi copïo'r URL cyfredol!
oculate-copy-current-url-as-markdown-confirmation = Wedi copïo'r URL cyfredol fel Markdown!
oculate-general-cancel-label = 
    .label = Na
oculate-general-confirm = 
    .label = Cadarnhau
oculate-pinned-tab-replaced = Mae URL y tab wedi'i binio wedi'i newid i'r URL gyfredol!
oculate-pinned-tab-url-edited = Mae URL tab wedi'i binio wedi'i ddiweddaru!
oculate-pinned-tab-url-invalid = Dyw hwn ddim yn edrych fel URL dilys.
oculate-pinned-tab-edit-url-title = Golygu URL wedi'u Pinio
oculate-pinned-tab-edit-url-label = Rhowch y URL dylai'r tab pinio hwn bwyntio at:
oculate-tabs-renamed = Mae'r tab wedi cael ei ailenwi'n llwyddiannus!
oculate-background-tab-opened-toast = Tab cefndir newydd wedi'i agor!
oculate-workspace-renamed-toast = Mae'r Man Gwaith wedi cael ei ailenwi'n llwyddiannus!
oculate-split-view-limit-toast = Methu ychwanegu mwy o baneli at y golwg hollt!
oculate-sidebar-drag-collapsed-toast = Sidebar hidden! Use <span>{ $shortcut }</span> to bring the sidebar back.
oculate-toggle-compact-mode-button = 
    .label = Modd Cryno
    .tooltiptext = Togglo Modd Cryno

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = Dysgu Rhagor
oculate-close-label = Cau
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = Chwilio...
oculate-icons-picker-emoji = 
    .label = Emojis
oculate-icons-picker-svg = 
    .label = Eiconau
oculate-emojis-picker-search = 
    .placeholder = Chwilio emojis
urlbar-search-mode-oculate_actions = Gweithredoedd
oculate-site-data-settings = Gosodiadau
oculate-generic-manage = Rheoli
oculate-generic-more = Rhagor
oculate-generic-next = Nesaf
oculate-essentials-promo-label = Ychwanegu at Hanfodion
oculate-essentials-promo-sublabel = Cadwch eich hoff dabiau dim ond un clic i ffwrdd
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = Caniatawyd
oculate-site-data-setting-block = Rhwystrwyd
oculate-site-data-protections-enabled = Galluogwyd
oculate-site-data-protections-disabled = Analluogwyd
oculate-site-data-security-info-extension = 
    .label = Estyniad
oculate-site-data-security-info-secure = 
    .label = Diogel
oculate-site-data-security-info-not-secure = 
    .label = Ddim yn Ddiogel
oculate-site-data-manage-addons = 
    .label = Rheoli Estyniadau
oculate-site-data-get-addons = 
    .label = Ychwanegu Estyniadau
oculate-site-data-site-settings = 
    .label = Pob Gosodiad Gwefan
oculate-site-data-header-share = 
    .tooltiptext = Rhannu'r Dudalen Hon
oculate-site-data-header-boost = 
    .tooltiptext = Create a Boost
oculate-site-data-header-reader-mode = 
    .tooltiptext = Mynd i'r Modd Darllenydd
oculate-site-data-header-screenshot = 
    .tooltiptext = Cymryd Llun Sgrin
oculate-site-data-header-bookmark = 
    .tooltiptext = Nodi'r Dudalen Hon
oculate-urlbar-copy-url-button = 
    .tooltiptext = Copïo URL
oculate-site-data-setting-site-protection = Diogelu Rhag Tracio

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = Cartref newydd ar gyfer ychwanegiadau, caniatâd, a mwy
oculate-site-data-panel-feature-callout-subtitle = Cliciwch yr eicon i reoli gosodiadau'r wefan, gweld manylion diogelwch, cael mynediad at estyniadau, a chyflawni gweithredoedd cyffredin.
oculate-open-link-in-glance = 
    .label = Agor y Ddolen yn Cipolwg
    .accesskey = C
oculate-sidebar-notification-updated-heading = Diweddariad Wedi'i Gwblhau!

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = Beth sy'n newydd yn { -brand-short-name }
oculate-sidebar-notification-updated-tooltip = 
    .title = Gweld Nodiadau Rhyddhau
oculate-sidebar-notification-restart-safe-mode-label = Rhywbeth wedi torri?
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = Ailgychwyn yn y Modd Diogel
oculate-window-sync-migration-dialog-title = Cadw Eich Ffenestr Wedi'u Cydweddu
oculate-window-sync-migration-dialog-message = Mae Oculate bellach yn cydweddu ffenestri ar yr un ddyfais, felly mae newidiadau mewn un ffenestr yn cael eu dangos ar y lleill yn syth.
oculate-window-sync-migration-dialog-accept = Iawn
oculate-appmenu-new-blank-window = 
    .label = Ffenestr wag newydd
