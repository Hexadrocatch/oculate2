# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-toolbar-context-tabs-right = 
    .label = علامات التبويب على اليسار
    .accesskey = ر
oculate-toolbar-context-compact-mode = 
    .label = الوضع المدمج
oculate-toolbar-context-compact-mode-enable = 
    .label = تمكين الوضع المدمج
    .accesskey = د
oculate-toolbar-context-compact-mode-just-tabs = 
    .label = إخفاء الشريط الجانبي
oculate-toolbar-context-compact-mode-just-toolbar = 
    .label = إخفاء شريط الأدوات
oculate-toolbar-context-compact-mode-hide-both = 
    .label = إخفاء كليهما
    .accesskey = خ
oculate-toolbar-context-move-to-folder = 
    .label = Move to Folder...
    .accesskey = M
oculate-toolbar-context-new-folder = 
    .label = مجلّد جديد
    .accesskey = ن
oculate-tabs-newtab-paste-and-search = 
    .label = Paste & Search
oculate-scroll-to-selected-tab = 
    .tooltiptext = Scroll to the selected tab
    .aria-label = Scroll to the selected tab
sidebar-oculate-expand = 
    .label = توسيع الشريط الجانبي
sidebar-oculate-create-new = 
    .label = إنشاء جديد...
tabbrowser-unload-tab-button = 
    .tooltiptext =
        { $tabCount ->
            [one] تفريغ والتبديل إلى علامة التبويب
           *[other] تفريغ { $tabCount } علامات التبويب والتبديل إلى الأولى
        }
tabbrowser-reset-pin-button = 
    .tooltiptext =
        { $tabCount ->
            [one] إعادة تعيين علامة التبويب وتثبيتها
           *[other] إعادة تعيين وتثبيت { $tabCount }
        }
oculate-tab-sublabel =
    { $tabSubtitle ->
        [oculate-default-pinned] العودة إلى الرابط المثبت
        [oculate-default-pinned-cmd] فصل عن علامة التبويب المثبتة
       *[other] { $tabSubtitle }
    }
