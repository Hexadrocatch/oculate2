# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-toolbar-context-tabs-right = 
    .label = Вкладки справа
    .accesskey = Р
oculate-toolbar-context-compact-mode = 
    .label = Компактный вид
oculate-toolbar-context-compact-mode-enable = 
    .label = Включить компактный вид
    .accesskey = В
oculate-toolbar-context-compact-mode-just-tabs = 
    .label = Скрыть боковую панель
oculate-toolbar-context-compact-mode-just-toolbar = 
    .label = Скрыть панель инструментов
oculate-toolbar-context-compact-mode-hide-both = 
    .label = Скрыть оба
    .accesskey = Н
oculate-toolbar-context-move-to-folder = 
    .label = Переместить в папку...
    .accesskey = M
oculate-toolbar-context-new-folder = 
    .label = Новая папка
    .accesskey = Т
oculate-tabs-newtab-paste-and-search = 
    .label = Paste & Search
oculate-scroll-to-selected-tab = 
    .tooltiptext = Scroll to the selected tab
    .aria-label = Scroll to the selected tab
sidebar-oculate-expand = 
    .label = Развернуть боковую панель
sidebar-oculate-create-new = 
    .label = Создать новый...
tabbrowser-unload-tab-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Выгрузить и переключиться на вкладку
           *[other] Выгрузить { $tabCount } вкладки(-ок) и переключиться на первую
        }
tabbrowser-reset-pin-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Сбросить и закрепить вкладку
           *[other] Сбросить и закрепить { $tabCount } вкладки(-ок)
        }
oculate-tab-sublabel =
    { $tabSubtitle ->
        [oculate-default-pinned] Назад к закрепленному адресу
        [oculate-default-pinned-cmd] Отделить от закреплённой вкладки
       *[other] { $tabSubtitle }
    }
