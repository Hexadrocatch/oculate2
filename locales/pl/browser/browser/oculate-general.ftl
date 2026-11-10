# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = aktualny profil
unified-extensions-description = Rozszerzenia są używane, aby zapewnić dodatkową funkcjonalność w { -brand-short-name }.
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] Zresetuj niezbędną kartę
           *[false] Zresetuj przypiętą kartę
        }
    .accesskey = R
tab-context-oculate-add-essential = 
    .label = Dodaj do niezbędnych
    .accesskey = E
tab-context-oculate-add-essential-badge = { $num } / { $max }
tab-context-oculate-remove-essential = 
    .label = Usuń z niezbędnych
    .accesskey = R
tab-context-oculate-edit-pinned-page = 
    .label =
        { $isEssential ->
            [true] Edytuj niezbędny adres URL
           *[false] Edytuj przypięty adres URL
        }
    .accesskey = P
tab-context-oculate-replace-pinned-url-with-current = 
    .label = Zastąp bieżącym adresem URL
    .accesskey = C
tab-context-oculate-edit-pinned-url = 
    .label = Edytuj…
    .accesskey = E
tab-context-oculate-edit-title = 
    .label = Zmień nazwę...
tab-context-oculate-edit-icon = 
    .label = Zmień ikonę...
oculate-themes-corrupted = Twój plik modyfikacji { -brand-short-name } jest uszkodzony. Został on zresetowany do domyślnego stanu.
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification =
    Włączono nowy pasek adresu URL, dzięki czemu nie ma już potrzeby korzystania ze strony nowej karty.<br/><br/>
    Spróbuj otworzyć nową kartę, aby zobaczyć, jak działa nowy pasek adresu URL!
oculate-disable = Deaktywuj
pictureinpicture-minimize-btn = 
    .aria-label = Zminimalizuj
    .tooltip = Zminimalizuj
oculate-panel-ui-gradient-generator-custom-color = Niestandardowy kolor
oculate-copy-current-url-confirmation = Skopiowano bieżący URL!
oculate-copy-current-url-as-markdown-confirmation = Skopiowano bieżący adres URL jako Markdown!
oculate-general-cancel-label = 
    .label = Anuluj
oculate-general-confirm = 
    .label = Potwierdź
oculate-pinned-tab-replaced = URL przypiętej karty został zastąpiony bieżącym adresem!
oculate-pinned-tab-url-edited = Adres URL przypiętej karty został zaktualizowany!
oculate-pinned-tab-url-invalid = To nie wygląda na prawidłowy adres URL.
oculate-pinned-tab-edit-url-title = Edytuj przypięty adres URL
oculate-pinned-tab-edit-url-label = Wprowadź adres URL, do którego ma prowadzić ta przypięta karta:
oculate-tabs-renamed = Nazwa karty została pomyślnie zmieniona!
oculate-background-tab-opened-toast = Nowa karta została otworzona w tle!
oculate-workspace-renamed-toast = Zmieniono nazwę przestrzeni roboczej!
oculate-split-view-limit-toast = Nie można dodać kolejnych paneli do widoku podzielonego!
oculate-sidebar-drag-collapsed-toast = Pasek boczny ukryty! Użyj <span>{ $shortcut }</span>, aby przywrócić pasek boczny.
oculate-toggle-compact-mode-button = 
    .label = Tryb kompaktowy
    .tooltiptext = Przełącz tryb kompaktowy

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = Dowiedz się więcej
oculate-close-label = Zamknij
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = Szukaj...
oculate-icons-picker-emoji = 
    .label = Emotikony
oculate-icons-picker-svg = 
    .label = Ikony
oculate-emojis-picker-search = 
    .placeholder = Szukaj emoji
urlbar-search-mode-oculate_actions = Akcje
oculate-site-data-settings = Ustawienia
oculate-generic-manage = Zarządzaj
oculate-generic-more = Więcej
oculate-generic-next = Następne
oculate-essentials-promo-label = Dodaj do niezbędnych
oculate-essentials-promo-sublabel = Utrzymuj swoje ulubione karty w zasięgu myszki
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = Dozwolone
oculate-site-data-setting-block = Zablokowane
oculate-site-data-protections-enabled = Włączone
oculate-site-data-protections-disabled = Wyłączone
oculate-site-data-security-info-extension = 
    .label = Rozszerzenie
oculate-site-data-security-info-secure = 
    .label = Zabezpieczone
oculate-site-data-security-info-not-secure = 
    .label = Niezabezpieczone
oculate-site-data-manage-addons = 
    .label = Zarządzaj rozszerzeniami
oculate-site-data-get-addons = 
    .label = Dodaj rozszerzenia
oculate-site-data-site-settings = 
    .label = Wszystkie ustawienia strony
oculate-site-data-header-share = 
    .tooltiptext = Udostępnij tę stronę
oculate-site-data-header-boost = 
    .tooltiptext = Utwórz nowy Boost
oculate-site-data-header-reader-mode = 
    .tooltiptext = Przejdź do trybu czytania
oculate-site-data-header-screenshot = 
    .tooltiptext = Zrzut ekranu
oculate-site-data-header-bookmark = 
    .tooltiptext = Dodaj tę stronę do zakładek
oculate-urlbar-copy-url-button = 
    .tooltiptext = Kopiuj URL
oculate-site-data-setting-site-protection = Ochrona przed śledzeniem

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = Nowy dom dla dodatków, uprawnień i więcej
oculate-site-data-panel-feature-callout-subtitle = Kliknij ikonę, aby zarządzać ustawieniami witryny, wyświetlić informacje o zabezpieczeniach, rozszerzeniach i wykonać akcje.
oculate-open-link-in-glance = 
    .label = Otwórz link w szybkim podglądzie
    .accesskey = G
oculate-sidebar-notification-updated-heading = Aktualizacja ukończona!

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = Co nowego w { -brand-short-name }
oculate-sidebar-notification-updated-tooltip = 
    .title = Zobacz informacje o aktualizacji
oculate-sidebar-notification-restart-safe-mode-label = Coś się zepsuło?
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = Zrestartuj w trybie bezpiecznym
oculate-window-sync-migration-dialog-title = Utrzymuj synchronizację okien
oculate-window-sync-migration-dialog-message = Oculate synchronizuje teraz okna na tym samym urządzeniu, dzięki czemu zmiany wprowadzone w jednym oknie są natychmiast odzwierciedlane w pozostałych.
oculate-window-sync-migration-dialog-accept = Rozumiem
oculate-appmenu-new-blank-window = 
    .label = Nowe puste okno
