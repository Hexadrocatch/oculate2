# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = текущий профиль
unified-extensions-description = Расширения дополняют функционал { -brand-short-name }.
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] Сбросить важную вкладку
           *[false] Сбросить закрепленную вкладку
        }
    .accesskey = К
tab-context-oculate-add-essential = 
    .label = Добавить в важное
    .accesskey = У
tab-context-oculate-add-essential-badge = { $num }/{ $max } мест занято
tab-context-oculate-remove-essential = 
    .label = Удалить из важного
    .accesskey = К
tab-context-oculate-edit-pinned-page = 
    .label =
        { $isEssential ->
            [true] Изменить URL-адрес из важного
           *[false] Изменить закрепленный URL-адрес
        }
    .accesskey = З
tab-context-oculate-replace-pinned-url-with-current = 
    .label = Заменить текущим URL-адресом
    .accesskey = С
tab-context-oculate-edit-pinned-url = 
    .label = Редактировать…
    .accesskey = У
tab-context-oculate-edit-title = 
    .label = Переименовать...
tab-context-oculate-edit-icon = 
    .label = Изменить значок...
oculate-themes-corrupted = Файл модов { -brand-short-name } повреждён. Тема сброшена к стандартной.
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification =
    Новая адресная строка активирована, теперь нет необходимости использовать отдельные страницы для новых вкладок.<br/><br/>
    Попробуйте открыть новую вкладку, чтобы увидеть новую адресную строку в действии!
oculate-disable = Выключить
pictureinpicture-minimize-btn = 
    .aria-label = Свернуть
    .tooltip = Свернуть
oculate-panel-ui-gradient-generator-custom-color = Свой цвет
oculate-copy-current-url-confirmation = Адрес скопирован!
oculate-copy-current-url-as-markdown-confirmation = Текущий адрес скопирован как Markdown!
oculate-general-cancel-label = 
    .label = Отменить
oculate-general-confirm = 
    .label = Подтвердить
oculate-pinned-tab-replaced = Адрес закреплённой вкладки заменён на текущий адрес!
oculate-pinned-tab-url-edited = Ссылка на закрепленную вкладку обновлена!
oculate-pinned-tab-url-invalid = Это не похоже на допустимый URL.
oculate-pinned-tab-edit-url-title = Редактировать прикрепленный URL
oculate-pinned-tab-edit-url-label = Введите URL на который должна вести эта вкладка:
oculate-tabs-renamed = Вкладка успешно переименована!
oculate-background-tab-opened-toast = Открыта новая фоновая вкладка!
oculate-workspace-renamed-toast = Пространство успешно переименовано!
oculate-split-view-limit-toast = Невозможно добавить больше панелей в раздельный вид!
oculate-sidebar-drag-collapsed-toast = Sidebar hidden! Use <span>{ $shortcut }</span> to bring the sidebar back.
oculate-toggle-compact-mode-button = 
    .label = Компактный режим
    .tooltiptext = Переключить компактный режим

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = Узнать больше
oculate-close-label = Закрыть
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = Найти...
oculate-icons-picker-emoji = 
    .label = Эмодзи
oculate-icons-picker-svg = 
    .label = Иконки
oculate-emojis-picker-search = 
    .placeholder = Поиск эмодзи
urlbar-search-mode-oculate_actions = Действия
oculate-site-data-settings = Настройки
oculate-generic-manage = Изменить
oculate-generic-more = Ещё
oculate-generic-next = Далее
oculate-essentials-promo-label = Добавить в важное
oculate-essentials-promo-sublabel = Доступ к любимым вкладкам в один клик
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = Разрешено
oculate-site-data-setting-block = Запрещено
oculate-site-data-protections-enabled = Включено
oculate-site-data-protections-disabled = Отключено
oculate-site-data-security-info-extension = 
    .label = Расширение
oculate-site-data-security-info-secure = 
    .label = Безопасно
oculate-site-data-security-info-not-secure = 
    .label = Небезопасно
oculate-site-data-manage-addons = 
    .label = Управление расширениями
oculate-site-data-get-addons = 
    .label = Добавить расширения
oculate-site-data-site-settings = 
    .label = Все настройки сайта
oculate-site-data-header-share = 
    .tooltiptext = Поделиться страницей
oculate-site-data-header-boost = 
    .tooltiptext = Create a Boost
oculate-site-data-header-reader-mode = 
    .tooltiptext = Режим чтения
oculate-site-data-header-screenshot = 
    .tooltiptext = Сделать снимок экрана
oculate-site-data-header-bookmark = 
    .tooltiptext = Добавить в закладки
oculate-urlbar-copy-url-button = 
    .tooltiptext = Скопировать URL
oculate-site-data-setting-site-protection = Защита от отслеживания

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = Новый дом для расширений, разрешений и всего остального
oculate-site-data-panel-feature-callout-subtitle = Нажмите на значок для доступа к настройкам сайта, параметрам безопасности, расширениям и прочим действиям.
oculate-open-link-in-glance = 
    .label = Открыть ссылку в предпросмотре
    .accesskey = П
oculate-sidebar-notification-updated-heading = Обновление завершено!

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = Что нового в { -brand-short-name }
oculate-sidebar-notification-updated-tooltip = 
    .title = Примечания к выпуску
oculate-sidebar-notification-restart-safe-mode-label = Что-то пошло не так?
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = Перезапустить в безопасном режиме
oculate-window-sync-migration-dialog-title = Синхронизируйте окна
oculate-window-sync-migration-dialog-message = Теперь Oculate синхронизирует окна на одном устройстве, поэтому изменения в одном окне будут мгновенно отображаться в других.
oculate-window-sync-migration-dialog-accept = Понятно
oculate-appmenu-new-blank-window = 
    .label = Новое пустое окно
