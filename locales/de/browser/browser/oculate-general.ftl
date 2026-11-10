# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = Dein aktuelles Profil
unified-extensions-description = Mit Erweiterungen kannst du { -brand-short-name } um zusätzliche Funktionen erweitern.
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] Essential-Tab zurücksetzen
           *[false] Angehefteten Tab zurücksetzen
        }
    .accesskey = R
tab-context-oculate-add-essential = 
    .label = Zu Essentials hinzufügen
    .accesskey = E
tab-context-oculate-add-essential-badge = { $num } / { $max } Plätzen belegt
tab-context-oculate-remove-essential = 
    .label = Aus Essentials entfernen
    .accesskey = R
tab-context-oculate-edit-pinned-page = 
    .label =
        { $isEssential ->
            [true] Essentials URL bearbeiten
           *[false] Angeheftete URL bearbeiten
        }
    .accesskey = P
tab-context-oculate-replace-pinned-url-with-current = 
    .label = Mit aktueller URL ersetzen
    .accesskey = C
tab-context-oculate-edit-pinned-url = 
    .label = Bearbeiten...
    .accesskey = E
tab-context-oculate-edit-title = 
    .label = Titel ändern...
tab-context-oculate-edit-icon = 
    .label = Symbol ändern...
oculate-themes-corrupted = Deine { -brand-short-name }-Mods-Datei ist beschädigt. Sie wurde auf das Standard-Design zurückgesetzt.
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification =
    Die neue Adressleiste wurde aktiviert und macht neue Tab-Seiten überflüssig.<br/><br/>
    Öffne einfach einen neuen Tab, um die neue Adressleiste auszuprobieren!
oculate-disable = Deaktivieren
pictureinpicture-minimize-btn = 
    .aria-label = Minimieren
    .tooltip = Minimieren
oculate-panel-ui-gradient-generator-custom-color = Eigene Farbe
oculate-copy-current-url-confirmation = URL kopiert!
oculate-copy-current-url-as-markdown-confirmation = URL als Markdown kopiert!
oculate-general-cancel-label = 
    .label = Abbrechen
oculate-general-confirm = 
    .label = Bestätigen
oculate-pinned-tab-replaced = Die URL des angehefteten Tabs wurde aktualisiert!
oculate-pinned-tab-url-edited = Angeheftete URL wurde aktualisiert!
oculate-pinned-tab-url-invalid = Das sieht nicht nach einer gültigen URL aus.
oculate-pinned-tab-edit-url-title = Angeheftete URL bearbeiten
oculate-pinned-tab-edit-url-label = Gib die URL an, auf die der angeheftete Tab verweisen soll:
oculate-tabs-renamed = Tab umbenannt!
oculate-background-tab-opened-toast = Neuer Tab im Hintergrund geöffnet!
oculate-workspace-renamed-toast = Arbeitsbereich umbenannt!
oculate-split-view-limit-toast = Diese Split View kann keine weiteren Panels aufnehmen!
oculate-sidebar-drag-collapsed-toast = Sidebar hidden! Use <span>{ $shortcut }</span> to bring the sidebar back.
oculate-toggle-compact-mode-button = 
    .label = Kompakter Modus
    .tooltiptext = Kompakten Modus umschalten

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = Mehr erfahren
oculate-close-label = Schließen
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = Suchen...
oculate-icons-picker-emoji = 
    .label = Emojis
oculate-icons-picker-svg = 
    .label = Symbole
oculate-emojis-picker-search = 
    .placeholder = Emojis durchsuchen
urlbar-search-mode-oculate_actions = Aktionen
oculate-site-data-settings = Einstellungen
oculate-generic-manage = Verwalten
oculate-generic-more = Mehr
oculate-generic-next = Weiter
oculate-essentials-promo-label = Zu Essentials hinzufügen
oculate-essentials-promo-sublabel = Deine Lieblings-Tabs, immer nur einen Klick entfernt
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = Erlaubt
oculate-site-data-setting-block = Blockiert
oculate-site-data-protections-enabled = Aktiviert
oculate-site-data-protections-disabled = Deaktiviert
oculate-site-data-security-info-extension = 
    .label = Erweiterung
oculate-site-data-security-info-secure = 
    .label = Sicher
oculate-site-data-security-info-not-secure = 
    .label = Nicht sicher
oculate-site-data-manage-addons = 
    .label = Erweiterungen verwalten
oculate-site-data-get-addons = 
    .label = Erweiterungen hinzufügen
oculate-site-data-site-settings = 
    .label = Alle Website-Einstellungen
oculate-site-data-header-share = 
    .tooltiptext = Diese Seite teilen
oculate-site-data-header-boost = 
    .tooltiptext = Create a Boost
oculate-site-data-header-reader-mode = 
    .tooltiptext = Lesemodus aktivieren
oculate-site-data-header-screenshot = 
    .tooltiptext = Bildschirmfoto erstellen
oculate-site-data-header-bookmark = 
    .tooltiptext = Diese Seite als Lesezeichen speichern
oculate-urlbar-copy-url-button = 
    .tooltiptext = URL kopieren
oculate-site-data-setting-site-protection = Tracking-Schutz

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = Hier findest du Add-ons, Berechtigungen und mehr
oculate-site-data-panel-feature-callout-subtitle = Klicke auf das Symbol, um Website-Einstellungen anzupassen, Sicherheitsinfos anzuzeigen, auf Erweiterungen zuzugreifen und häufige Aktionen auszuführen.
oculate-open-link-in-glance = 
    .label = Link in Schnellansicht öffnen
    .accesskey = G
oculate-sidebar-notification-updated-heading = Update abgeschlossen!

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = Was in { -brand-short-name } neu ist
oculate-sidebar-notification-updated-tooltip = 
    .title = Versionshinweise anzeigen
oculate-sidebar-notification-restart-safe-mode-label = Funktioniert etwas nicht?
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = Im abgesicherten Modus neu starten
oculate-window-sync-migration-dialog-title = Halte deine Fenster synchron
oculate-window-sync-migration-dialog-message = Oculate synchronisiert jetzt Fenster auf demselben Gerät, sodass Änderungen in einem Fenster sofort in den anderen übernommen werden.
oculate-window-sync-migration-dialog-accept = Verstanden
oculate-appmenu-new-blank-window = 
    .label = Neues leeres Fenster
