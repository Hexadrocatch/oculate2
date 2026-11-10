# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = profilul curent
unified-extensions-description = Extensiile sunt folosite pentru a aduce funcționalități suplimentare în { -brand-short-name }.
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] Resetare Filă Esențială
           *[false] Resetare Filă Fixată
        }
    .accesskey = R
tab-context-oculate-add-essential = 
    .label = Adaugă la Esențiale
    .accesskey = E
tab-context-oculate-add-essential-badge = { $num } / { $max }
tab-context-oculate-remove-essential = 
    .label = Elimină din Esențiale
    .accesskey = R
tab-context-oculate-edit-pinned-page = 
    .label =
        { $isEssential ->
            [true] Editează URL-ul filei esențiale
           *[false] Editează URL-ul filei fixate
        }
    .accesskey = P
tab-context-oculate-replace-pinned-url-with-current = 
    .label = Înlocuiește cu URL-ul curent
    .accesskey = C
tab-context-oculate-edit-pinned-url = 
    .label = Editează…
    .accesskey = E
tab-context-oculate-edit-title = 
    .label = Change Label...
tab-context-oculate-edit-icon = 
    .label = Change Icon...
oculate-themes-corrupted = Fișierul tău de moduri { -brand-short-name } este corupt. Acestea au fost resetate la tema implicită.
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification =
    Noua bară URL a fost activată, eliminând necesitatea pentru paginile cu file noi.<br/><br/>
    Încearcă să deschizi o filă nouă pentru a vedea noua bară URL în acțiune!
oculate-disable = Dezactivează
pictureinpicture-minimize-btn = 
    .aria-label = Minimizează
    .tooltip = Minimizează
oculate-panel-ui-gradient-generator-custom-color = Culoare Personalizată
oculate-copy-current-url-confirmation = URL-ul curent a fost copiat!
oculate-copy-current-url-as-markdown-confirmation = URL-ul curent a fost copiat ca Markdown!
oculate-general-cancel-label = 
    .label = Anulează
oculate-general-confirm = 
    .label = Confirmă
oculate-pinned-tab-replaced = URL-ul filei fixate a fost înlocuit cu URL-ul curent!
oculate-pinned-tab-url-edited = URL-ul filei fixate a fost actualizat!
oculate-pinned-tab-url-invalid = Nu pare a fi un URL valid.
oculate-pinned-tab-edit-url-title = Editare URL fixat
oculate-pinned-tab-edit-url-label = Introdu URL-ul pe care această filă trebuie să-l indice:
oculate-tabs-renamed = Fila a fost redenumită cu succes!
oculate-background-tab-opened-toast = Filă nouă de fundal deschisă!
oculate-workspace-renamed-toast = Spațiul de Lucru a fost redenumit cu succes!
oculate-split-view-limit-toast = Nu se mai pot adăuga panouri noi la vizualizarea împărțită!
oculate-sidebar-drag-collapsed-toast = Sidebar hidden! Use <span>{ $shortcut }</span> to bring the sidebar back.
oculate-toggle-compact-mode-button = 
    .label = Modul Compact
    .tooltiptext = Comută Modul Compact

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = Află mai multe
oculate-close-label = Închide
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = Caută...
oculate-icons-picker-emoji = 
    .label = Emoji-uri
oculate-icons-picker-svg = 
    .label = Iconițe
oculate-emojis-picker-search = 
    .placeholder = Caută Emoji
urlbar-search-mode-oculate_actions = Acțiuni
oculate-site-data-settings = Setări
oculate-generic-manage = Gestionează
oculate-generic-more = Mai multe
oculate-generic-next = Următorul
oculate-essentials-promo-label = Adaugă la Esențiale
oculate-essentials-promo-sublabel = Ține filele tale preferate la un click distanță
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = Permis
oculate-site-data-setting-block = Blocat
oculate-site-data-protections-enabled = Activat
oculate-site-data-protections-disabled = Dezactivat
oculate-site-data-security-info-extension = 
    .label = Extensie
oculate-site-data-security-info-secure = 
    .label = Securizat
oculate-site-data-security-info-not-secure = 
    .label = Nesecurizat
oculate-site-data-manage-addons = 
    .label = Gestionează Extensiile
oculate-site-data-get-addons = 
    .label = Adaugă Extensii
oculate-site-data-site-settings = 
    .label = Toate Setările Site-ului
oculate-site-data-header-share = 
    .tooltiptext = Distribuie Această Pagină
oculate-site-data-header-boost = 
    .tooltiptext = Create a Boost
oculate-site-data-header-reader-mode = 
    .tooltiptext = Intră în Modul Cititor
oculate-site-data-header-screenshot = 
    .tooltiptext = Fă o Captură Ecran
oculate-site-data-header-bookmark = 
    .tooltiptext = Marchează Această Pagină
oculate-urlbar-copy-url-button = 
    .tooltiptext = Copiază URL-ul
oculate-site-data-setting-site-protection = Protecție împotriva Urmăririi

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = O casă nouă pentru Suplimente, Permisiuni și multe altele
oculate-site-data-panel-feature-callout-subtitle = Apasă pe iconiță pentru a gestiona setările site-ului, pentru a vizualiza informațiile de securitate, accesul extensiilor și pentru a efectua acțiuni comune.
oculate-open-link-in-glance = 
    .label = Deschide link-ul în Glance
    .accesskey = G
oculate-sidebar-notification-updated-heading = Actualizare finalizată!

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = Ce este nou în { -brand-short-name }
oculate-sidebar-notification-updated-tooltip = 
    .title = Vezi Notele de Lansare
oculate-sidebar-notification-restart-safe-mode-label = S-a stricat ceva?
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = Repornește în Modul Sigur
oculate-window-sync-migration-dialog-title = Păstrează-ți Ferestrele Sincronizate
oculate-window-sync-migration-dialog-message = Oculate sincronizează ferestrele pe același dispozitiv, deci modificările dintr-o fereastră sunt reflectate instantaneu la celelalte ferestre.
oculate-window-sync-migration-dialog-accept = Am înțeles
oculate-appmenu-new-blank-window = 
    .label = Fereastră Nouă Goală
