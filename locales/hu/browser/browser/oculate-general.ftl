# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = jelenlegi profil
unified-extensions-description = A bővítmények a { -brand-short-name }-t új funkciókkal látják el.
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] Alapvető lap visszaállítása
           *[false] Rögzített lap visszaállítása
        }
    .accesskey = R
tab-context-oculate-add-essential = 
    .label = Felvétel az alapvetőkbe
    .accesskey = E
tab-context-oculate-add-essential-badge = { $num } / { $max } hely foglalt
tab-context-oculate-remove-essential = 
    .label = Eltávolítás az alapvetőkből
    .accesskey = R
tab-context-oculate-edit-pinned-page = 
    .label =
        { $isEssential ->
            [true] Alapvető URL módosítása
           *[false] Rögzített URL módosítása
        }
    .accesskey = P
tab-context-oculate-replace-pinned-url-with-current = 
    .label = Csere az aktuális URL-re
    .accesskey = C
tab-context-oculate-edit-pinned-url = 
    .label = Módosítás…
    .accesskey = E
tab-context-oculate-edit-title = 
    .label = Címke módosítása...
tab-context-oculate-edit-icon = 
    .label = Ikon módosítása...
oculate-themes-corrupted = A te { -brand-short-name } mod fájljaid károsodtak. Vissza lettek állítva az eredeti témára.
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification =
    Az új URL sáv engedélyezve lett, így nincs szükség új lapokra.<br/><br/>
    Próbáljon ki egy új lapot nyitni, hogy láthassa az új URL-sávot működés közben!
oculate-disable = Kikapcsolás
pictureinpicture-minimize-btn = 
    .aria-label = Minimalizálás
    .tooltip = Minimalizálás
oculate-panel-ui-gradient-generator-custom-color = Egyedi szín
oculate-copy-current-url-confirmation = Jelenlegi URL másolva!
oculate-copy-current-url-as-markdown-confirmation = Jelenlegi URL másolva Markdownként!
oculate-general-cancel-label = 
    .label = Mégsem
oculate-general-confirm = 
    .label = Megerősítés
oculate-pinned-tab-replaced = A rögzített lap URL címe helyébe az aktuális URL cím lépett!
oculate-pinned-tab-url-edited = A rögzített lap URL-je frissült!
oculate-pinned-tab-url-invalid = Ez nem tűnik érvényes URL-nek.
oculate-pinned-tab-edit-url-title = Rögzített URL módosítása
oculate-pinned-tab-edit-url-label = Írja be azt az URL-címet, amelyre ennek a rögzített lapnak mutatnia kell:
oculate-tabs-renamed = A lap sikeresen át lett nevezve!
oculate-background-tab-opened-toast = Új lap megnyitva!
oculate-workspace-renamed-toast = A munkakörnyezet sikeresen át lett nevezve!
oculate-split-view-limit-toast = Nem lehet további paneleket hozzáadni az osztott nézethez!
oculate-sidebar-drag-collapsed-toast = Sidebar hidden! Use <span>{ $shortcut }</span> to bring the sidebar back.
oculate-toggle-compact-mode-button = 
    .label = Kompakt mód
    .tooltiptext = Kompakt mód ki-/bekapcsolása

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = Tudjon meg többet
oculate-close-label = Bezárás
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = Keresés...
oculate-icons-picker-emoji = 
    .label = Emojik
oculate-icons-picker-svg = 
    .label = Ikonok
oculate-emojis-picker-search = 
    .placeholder = Emojik keresése
urlbar-search-mode-oculate_actions = Műveletek
oculate-site-data-settings = Beállítások
oculate-generic-manage = Kezelés
oculate-generic-more = Több
oculate-generic-next = Következő
oculate-essentials-promo-label = Felvétel az alapvetőkbe
oculate-essentials-promo-sublabel = Tartsd kedvenc lapjaid egy kattintásnyira
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = Engedélyezve
oculate-site-data-setting-block = Blokkolva
oculate-site-data-protections-enabled = Engedélyezve
oculate-site-data-protections-disabled = Letiltva
oculate-site-data-security-info-extension = 
    .label = Kiegészítő
oculate-site-data-security-info-secure = 
    .label = Biztonságos
oculate-site-data-security-info-not-secure = 
    .label = Nem biztonságos
oculate-site-data-manage-addons = 
    .label = Kiegészítők kezelése
oculate-site-data-get-addons = 
    .label = Kiegészítő hozzáadása
oculate-site-data-site-settings = 
    .label = Minden webhelybeállítás
oculate-site-data-header-share = 
    .tooltiptext = Oldal megosztása
oculate-site-data-header-boost = 
    .tooltiptext = Create a Boost
oculate-site-data-header-reader-mode = 
    .tooltiptext = Olvasó módba lépés
oculate-site-data-header-screenshot = 
    .tooltiptext = Képernyőkép készítése
oculate-site-data-header-bookmark = 
    .tooltiptext = Oldal mentése a könyvjelzők közé
oculate-urlbar-copy-url-button = 
    .tooltiptext = URL másolása
oculate-site-data-setting-site-protection = Nyomkövetés védelem

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = Új hely az add-onok, engedélyek és egyéb elemek számára
oculate-site-data-panel-feature-callout-subtitle = Kattints az ikonra a webhely beállításainak kezeléséhez, a biztonsági információk megtekintéséhez, a kiegészítők eléréséhez és a gyakori műveletek végrehajtásához.
oculate-open-link-in-glance = 
    .label = Link megnyitása a bepillantóban
    .accesskey = G
oculate-sidebar-notification-updated-heading = Frissítés befejezve!

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = { -brand-short-name } újdonságai
oculate-sidebar-notification-updated-tooltip = 
    .title = Változások listájának megtekintése
oculate-sidebar-notification-restart-safe-mode-label = Valami elromlott?
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = Újraindítás biztonságos módban
oculate-window-sync-migration-dialog-title = Tartsad szinkronban az ablakaid
oculate-window-sync-migration-dialog-message = A Oculate mostantól szinkronizálja az ugyanazon eszközön található ablakokat, így az egyik ablakban végzett módosítások azonnal megjelennek a többiben is.
oculate-window-sync-migration-dialog-accept = Értettem
oculate-appmenu-new-blank-window = 
    .label = Új üres ablak
