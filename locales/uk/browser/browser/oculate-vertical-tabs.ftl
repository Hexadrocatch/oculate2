# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-toolbar-context-tabs-right = 
    .label = Вкладки праворуч
    .accesskey = Р
oculate-toolbar-context-compact-mode = 
    .label = Компактний режим
oculate-toolbar-context-compact-mode-enable = 
    .label = Увімкнути компактний режим
    .accesskey = Ре
oculate-toolbar-context-compact-mode-just-tabs = 
    .label = Приховати бічну панель
oculate-toolbar-context-compact-mode-just-toolbar = 
    .label = Приховати панель інструментів
oculate-toolbar-context-compact-mode-hide-both = 
    .label = Приховувати обидві
    .accesskey = Н
oculate-toolbar-context-move-to-folder = 
    .label = Перемістити до теки...
    .accesskey = M
oculate-toolbar-context-new-folder = 
    .label = Нова тека
    .accesskey = N
oculate-tabs-newtab-paste-and-search = 
    .label = Paste & Search
oculate-scroll-to-selected-tab = 
    .tooltiptext = Scroll to the selected tab
    .aria-label = Scroll to the selected tab
sidebar-oculate-expand = 
    .label = Розгорнути бічну панель
sidebar-oculate-create-new = 
    .label = Створити новий...
tabbrowser-unload-tab-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Вивантажити й перемкнутися на вкладку
            [few] Вивантажити { $tabCount } вкладки й перемкнутися до першої
           *[other] Вивантажити { $tabCount } вкладок й перемкнутися до першої
        }
tabbrowser-reset-pin-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Скинути та закріпити вкладку
            [few] Скинути та закріпити { $tabCount } вкладки
           *[other] Скинути та закріпити { $tabCount } вкладок
        }
oculate-tab-sublabel =
    { $tabSubtitle ->
        [oculate-default-pinned] Назад до закріпленої URL-адреси
        [oculate-default-pinned-cmd] Відокремити від закріпленої вкладки
       *[other] { $tabSubtitle }
    }
