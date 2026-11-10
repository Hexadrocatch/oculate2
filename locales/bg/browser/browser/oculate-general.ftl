# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = текущ профил
unified-extensions-description = Разширенията се използват за добавяне на допълнителна функционалност към { -brand-short-name }.
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] Reset Essential Tab
           *[false] Reset Pinned Tab
        }
    .accesskey = R
tab-context-oculate-add-essential = 
    .label = Добавяне към Основни
    .accesskey = E
tab-context-oculate-add-essential-badge = Запълнени слотове: { $num } / { $max }
tab-context-oculate-remove-essential = 
    .label = Премахване от Основни
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
    .label = Промени етикета...
tab-context-oculate-edit-icon = 
    .label = Промени иконата...
oculate-themes-corrupted = Файлът с модификации на { -brand-short-name } е повреден. Те бяха нулирани до темата по подразбиране.
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification =
    Новата адресна лента е активирана, което премахва нуждата от страници за нов раздел.<br/><br/>
    Опитай да отвориш нов раздел, за да видиш новата адресна лента в действие!
oculate-disable = Изключи
pictureinpicture-minimize-btn = 
    .aria-label = Минимизирай
    .tooltip = Минимизирай
oculate-panel-ui-gradient-generator-custom-color = Персонализиран цвят
oculate-copy-current-url-confirmation = Текущият адрес е копиран!
oculate-copy-current-url-as-markdown-confirmation = Copied current URL as Markdown!
oculate-general-cancel-label = 
    .label = Отказ
oculate-general-confirm = 
    .label = Потвърди
oculate-pinned-tab-replaced = Адресът на закачения раздел беше заменен с текущия адрес!
oculate-pinned-tab-url-edited = Pinned tab URL has been updated!
oculate-pinned-tab-url-invalid = That doesn't look like a valid URL.
oculate-pinned-tab-edit-url-title = Edit Pinned URL
oculate-pinned-tab-edit-url-label = Enter the URL this pinned tab should point to:
oculate-tabs-renamed = Разделът беше успешно преименуван!
oculate-background-tab-opened-toast = Отворен е нов раздел на заден план!
oculate-workspace-renamed-toast = Работното пространство беше преименувано успешно!
oculate-split-view-limit-toast = Can't add more panels to the split view!
oculate-sidebar-drag-collapsed-toast = Sidebar hidden! Use <span>{ $shortcut }</span> to bring the sidebar back.
oculate-toggle-compact-mode-button = 
    .label = Компактен изглед
    .tooltiptext = Превключи компактен режим

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = Научи повече
oculate-close-label = Затвори
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = Търси...
oculate-icons-picker-emoji = 
    .label = Емоджита
oculate-icons-picker-svg = 
    .label = Икони
oculate-emojis-picker-search = 
    .placeholder = Search emojis
urlbar-search-mode-oculate_actions = Действия
oculate-site-data-settings = Настройки
oculate-generic-manage = Управление
oculate-generic-more = Повече
oculate-generic-next = Напред
oculate-essentials-promo-label = Добави към Основни
oculate-essentials-promo-sublabel = Дръж любимите си раздели само на един клик разстояние
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = Позволено
oculate-site-data-setting-block = Блокирани
oculate-site-data-protections-enabled = Включено
oculate-site-data-protections-disabled = Изключено
oculate-site-data-security-info-extension = 
    .label = Разширение
oculate-site-data-security-info-secure = 
    .label = Защитено
oculate-site-data-security-info-not-secure = 
    .label = Няма защита
oculate-site-data-manage-addons = 
    .label = Управление на разширения
oculate-site-data-get-addons = 
    .label = Добавяне на разширения
oculate-site-data-site-settings = 
    .label = Всички настройки за сайтове
oculate-site-data-header-share = 
    .tooltiptext = Сподели тази страница
oculate-site-data-header-boost = 
    .tooltiptext = Create a Boost
oculate-site-data-header-reader-mode = 
    .tooltiptext = Отвори режим на четене
oculate-site-data-header-screenshot = 
    .tooltiptext = Направи екранна снимка
oculate-site-data-header-bookmark = 
    .tooltiptext = Добави тази страница в отметки
oculate-urlbar-copy-url-button = 
    .tooltiptext = Копирай адрес
oculate-site-data-setting-site-protection = Защита от проследяване

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = Ново място за добавки, разширения и още
oculate-site-data-panel-feature-callout-subtitle = Натисни върху иконата, за да управляваш настройките на сайта, да видиш информацията за сигурността, да получиш достъп до разширенията и да извършваш често използвани действия.
oculate-open-link-in-glance = 
    .label = Отвори връзката в Glance
    .accesskey = Ж
oculate-sidebar-notification-updated-heading = Актуализацията е завършена!

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = Какво е ново в { -brand-short-name }
oculate-sidebar-notification-updated-tooltip = 
    .title = Виж бележките към изданието
oculate-sidebar-notification-restart-safe-mode-label = Има проблем?
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = Рестартирай в безопасен режим
oculate-window-sync-migration-dialog-title = Синхронизирай прозорците си
oculate-window-sync-migration-dialog-message = Oculate вече синхронизира прозорците на едно и също устройство, така че промените в един прозорец се отразяват незабавно във всички останали.
oculate-window-sync-migration-dialog-accept = Добре
oculate-appmenu-new-blank-window = 
    .label = New blank window
