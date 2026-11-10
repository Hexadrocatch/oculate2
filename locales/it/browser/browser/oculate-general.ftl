# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = profilo in uso
unified-extensions-description = Le estensioni sono usate per portare più funzionalità in { -brand-short-name }.
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] Resetta Scheda Essenziale
           *[false] Resetta Scheda Bloccata
        }
    .accesskey = R
tab-context-oculate-add-essential = 
    .label = Aggiungi agli Essenziali
    .accesskey = E
tab-context-oculate-add-essential-badge = { $num } / { $max } slot riempiti
tab-context-oculate-remove-essential = 
    .label = Rimuovi dagli Essenziali
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
    .label = Cambia Etichetta...
tab-context-oculate-edit-icon = 
    .label = Cambia icona...
oculate-themes-corrupted = Il tuo file { -brand-short-name } mods è danneggiato. Sono stati reimpostati al tema predefinito.
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification = La nuova barra degli indirizzi è stata abilitata, eliminando la necessità della pagina di una nuova scheda.<br/><br/>Prova ad aprire una nuova scheda per vedere la nuova barra degli indirizzi in azione!
oculate-disable = Disabilita
pictureinpicture-minimize-btn = 
    .aria-label = Minimizza
    .tooltip = Minimizza
oculate-panel-ui-gradient-generator-custom-color = Colore personalizzato
oculate-copy-current-url-confirmation = L'URL corrente è stato copiato!
oculate-copy-current-url-as-markdown-confirmation = URL corrente copiato come Markdown!
oculate-general-cancel-label = 
    .label = Annulla
oculate-general-confirm = 
    .label = Conferma
oculate-pinned-tab-replaced = L'URL della scheda bloccata è stato sostituito con l'URL attuale.
oculate-pinned-tab-url-edited = Pinned tab URL has been updated!
oculate-pinned-tab-url-invalid = That doesn't look like a valid URL.
oculate-pinned-tab-edit-url-title = Edit Pinned URL
oculate-pinned-tab-edit-url-label = Enter the URL this pinned tab should point to:
oculate-tabs-renamed = La scheda è stata rinominata con successo!
oculate-background-tab-opened-toast = Nuova scheda aperta in background!
oculate-workspace-renamed-toast = Il Workspace è stato rinominato con successo!
oculate-split-view-limit-toast = Impossibile aggiungere altri pannelli alla vista divisa!
oculate-sidebar-drag-collapsed-toast = Sidebar hidden! Use <span>{ $shortcut }</span> to bring the sidebar back.
oculate-toggle-compact-mode-button = 
    .label = Modalità compatta
    .tooltiptext = Attiva/disattiva Modalità compatta

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = Scopri di più
oculate-close-label = Chiudi
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = Cerca...
oculate-icons-picker-emoji = 
    .label = Emoji
oculate-icons-picker-svg = 
    .label = Icone
oculate-emojis-picker-search = 
    .placeholder = Search emojis
urlbar-search-mode-oculate_actions = Azioni
oculate-site-data-settings = Impostazioni
oculate-generic-manage = Gestisci
oculate-generic-more = Altro
oculate-generic-next = Successivo
oculate-essentials-promo-label = Aggiungi agli Essenziali
oculate-essentials-promo-sublabel = Mantieni le tue schede preferite a un clic di distanza
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = Consentito
oculate-site-data-setting-block = Bloccato
oculate-site-data-protections-enabled = Attivato
oculate-site-data-protections-disabled = Disattivato
oculate-site-data-security-info-extension = 
    .label = Estensione
oculate-site-data-security-info-secure = 
    .label = Sicuro
oculate-site-data-security-info-not-secure = 
    .label = Non sicuro
oculate-site-data-manage-addons = 
    .label = Gestisci estensioni
oculate-site-data-get-addons = 
    .label = Aggiungi estensioni
oculate-site-data-site-settings = 
    .label = Tutte le impostazioni del sito
oculate-site-data-header-share = 
    .tooltiptext = Condividi questa pagina
oculate-site-data-header-boost = 
    .tooltiptext = Create a Boost
oculate-site-data-header-reader-mode = 
    .tooltiptext = Entra nella Modalità Lettura
oculate-site-data-header-screenshot = 
    .tooltiptext = Cattura schermata
oculate-site-data-header-bookmark = 
    .tooltiptext = Aggiungi questa pagina ai segnalibri
oculate-urlbar-copy-url-button = 
    .tooltiptext = Copia URL
oculate-site-data-setting-site-protection = Protezione Tracciamento

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = Una nuova casa per componenti aggiuntivi, permessi, e altro ancora
oculate-site-data-panel-feature-callout-subtitle = Clicca l'icona per gestire le impostazioni del sito, visualizzare informazioni di sicurezza, accedere alle estensioni, ed eseguire azioni comuni.
oculate-open-link-in-glance = 
    .label = Apri collegamento in Sguardo
    .accesskey = G
oculate-sidebar-notification-updated-heading = Aggiornamento completato!

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = Cosa c'è di nuovo in { -brand-short-name }
oculate-sidebar-notification-updated-tooltip = 
    .title = Vedi Note di Rilascio
oculate-sidebar-notification-restart-safe-mode-label = Si è rotto qualcosa?
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = Riavvia in Modalità Provvisoria
oculate-window-sync-migration-dialog-title = Mantieni le tue Finestre sincronizzate
oculate-window-sync-migration-dialog-message = Oculate ora sincronizza le finestre sullo stesso dispositivo, quindi le modifiche in una finestra si riflettono istantaneamente sulle altre.
oculate-window-sync-migration-dialog-accept = Ho capito
oculate-appmenu-new-blank-window = 
    .label = Nuova finestra vuota
