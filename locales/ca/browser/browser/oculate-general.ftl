# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = perfil actual
unified-extensions-description = Les extensions aporten funcionalitats addicionals a { -brand-short-name }.
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] Restableix la pestanya essencial
           *[false] Restableix la pestanya fixada
        }
    .accesskey = R
tab-context-oculate-add-essential = 
    .label = Afegeix als essencials
    .accesskey = E
tab-context-oculate-add-essential-badge = { $num } / { $max }
tab-context-oculate-remove-essential = 
    .label = Elimina dels essencials
    .accesskey = R
tab-context-oculate-edit-pinned-page = 
    .label =
        { $isEssential ->
            [true] Edita l'URL essencial
           *[false] Edita l'URL fixada
        }
    .accesskey = P
tab-context-oculate-replace-pinned-url-with-current = 
    .label = Substitueix amb l'URL actual
    .accesskey = C
tab-context-oculate-edit-pinned-url = 
    .label = Edita…
    .accesskey = E
tab-context-oculate-edit-title = 
    .label = Canvia l'etiqueta...
tab-context-oculate-edit-icon = 
    .label = Canvia la icona...
oculate-themes-corrupted = El vostre fitxer de modificacions { -brand-short-name } està malmès. S'ha restablert al tema per defecte.
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification =
    La nova barra d'URL s'ha activat, eliminant la necessitat de noves pàgines de pestanya.<br/><br/>
    Proveu d'obrir una pestanya nova per veure la nova barra d'URL en acció!
oculate-disable = Deshabilita
pictureinpicture-minimize-btn = 
    .aria-label = Minimitza
    .tooltip = Minimitza
oculate-panel-ui-gradient-generator-custom-color = Color personalitzat
oculate-copy-current-url-confirmation = L'URL actual s'ha copiat.
oculate-copy-current-url-as-markdown-confirmation = L'URL actual s'ha copiat com a Markdown!
oculate-general-cancel-label = 
    .label = Cancel·la
oculate-general-confirm = 
    .label = Confirma
oculate-pinned-tab-replaced = L'URL de la pestanya fixada s'ha substituït per l'URL actual.
oculate-pinned-tab-url-edited = L'URL de la pestanya fixada s'ha actualitzat!
oculate-pinned-tab-url-invalid = Això no sembla una URL vàlida.
oculate-pinned-tab-edit-url-title = Edita l'URL fixada
oculate-pinned-tab-edit-url-label = Introduïu l'URL a la qual ha d'apuntar aquesta pestanya fixada:
oculate-tabs-renamed = S'ha canviat el nom de la pestanya correctament
oculate-background-tab-opened-toast = S'ha obert una nova pestanya de fons
oculate-workspace-renamed-toast = S'ha canviat el nom de l'espai de treball correctament
oculate-split-view-limit-toast = No es poden afegir més panells a la vista dividida!
oculate-sidebar-drag-collapsed-toast = Barra lateral oculta! Utilitzeu <span>{ $shortcut }</span> per tornar-la a mostrar.
oculate-toggle-compact-mode-button = 
    .label = Mode compacte
    .tooltiptext = Commuta el mode compacte

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = Més informació
oculate-close-label = Tanca
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = Cerca...
oculate-icons-picker-emoji = 
    .label = Emojis
oculate-icons-picker-svg = 
    .label = Icones
oculate-emojis-picker-search = 
    .placeholder = Cerca emojis
urlbar-search-mode-oculate_actions = Accions
oculate-site-data-settings = Configuració
oculate-generic-manage = Gestiona
oculate-generic-more = Més
oculate-generic-next = Següent
oculate-essentials-promo-label = Afegeix als essencials
oculate-essentials-promo-sublabel = Mantingueu les vostres pestanyes preferides a només un clic de distància
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = Permès
oculate-site-data-setting-block = Bloquejat
oculate-site-data-protections-enabled = Habilitat
oculate-site-data-protections-disabled = Deshabilitat
oculate-site-data-security-info-extension = 
    .label = Extensió
oculate-site-data-security-info-secure = 
    .label = Segur
oculate-site-data-security-info-not-secure = 
    .label = No és segur
oculate-site-data-manage-addons = 
    .label = Gestiona les extensions
oculate-site-data-get-addons = 
    .label = Afegeix extensions
oculate-site-data-site-settings = 
    .label = Totes les configuracions del lloc
oculate-site-data-header-share = 
    .tooltiptext = Comparteix aquesta pàgina
oculate-site-data-header-boost = 
    .tooltiptext = Creu una millora
oculate-site-data-header-reader-mode = 
    .tooltiptext = Accedeix al mode lectura
oculate-site-data-header-screenshot = 
    .tooltiptext = Fes una captura de pantalla
oculate-site-data-header-bookmark = 
    .tooltiptext = Afegeix la pàgina a les adreces d'interès
oculate-urlbar-copy-url-button = 
    .tooltiptext = Copia l'URL
oculate-site-data-setting-site-protection = Protecció contra el seguiment

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = Una nova ubicació per a les extenions, permisos i molt més
oculate-site-data-panel-feature-callout-subtitle = Feu clic a la icona per gestionar la configuració del lloc, veure la informació de seguretat, accedir a les extensions i dur a terme accions habituals.
oculate-open-link-in-glance = 
    .label = Obre l'enllaç en un cop d'ull
    .accesskey = G
oculate-sidebar-notification-updated-heading = Actualització completada!

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = Novetats a { -brand-short-name }
oculate-sidebar-notification-updated-tooltip = 
    .title = Mostra les notes de la versió
oculate-sidebar-notification-restart-safe-mode-label = Alguna cosa no funciona?
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = Reinici en mode segur
oculate-window-sync-migration-dialog-title = Mantingueu les finestres sincronitzades
oculate-window-sync-migration-dialog-message = El Oculate ara sincronitza les finestres del mateix dispositiu, de manera que els canvis en una finestra es reflecteixen a les altres a l'instant.
oculate-window-sync-migration-dialog-accept = D'acord
oculate-appmenu-new-blank-window = 
    .label = Nova finestra en blanc
