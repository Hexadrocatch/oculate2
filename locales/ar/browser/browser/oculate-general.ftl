# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = الملف الشخصي الحالي
unified-extensions-description = تستخدم الإضافات لجلب المزيد من الوظائف الإضافية إلى { -brand-short-name }.
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] إعادة تعيين علامة التبويب الأساسية
           *[false] إعادة تعيين التبويب المثبت
        }
    .accesskey = ر
tab-context-oculate-add-essential = 
    .label = أضف إلى الأساسيات
    .accesskey = E
tab-context-oculate-add-essential-badge = { $num } / { $max } مملؤة
tab-context-oculate-remove-essential = 
    .label = إزالة من الأساسيات
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
    .label = تغيير الاسم...
tab-context-oculate-edit-icon = 
    .label = تغيير الأيقونة...
oculate-themes-corrupted = ملف التعديل { -brand-short-name } الخاص بك تالف. تم إعادة تعيينه إلى السمة الافتراضية.
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification =
    تم تمكين شريط URL الجديد، بإزالة الحاجة إلى صفحات علامة تبويب جديدة.<br/><br/>
    حاول فتح علامة تبويب جديدة لمشاهدة شريط URL الجديد قيد العمل!
oculate-disable = تعطيل
pictureinpicture-minimize-btn = 
    .aria-label = تقليص
    .tooltip = تقليص
oculate-panel-ui-gradient-generator-custom-color = لون مخصص
oculate-copy-current-url-confirmation = تم نسخ الرابط الحالي!
oculate-copy-current-url-as-markdown-confirmation = نسخ الرابط الحالي كـ Markdown!
oculate-general-cancel-label = 
    .label = إلغاء
oculate-general-confirm = 
    .label = تأكيد
oculate-pinned-tab-replaced = Pinned tab URL has been replaced with the current URL.
oculate-pinned-tab-url-edited = Pinned tab URL has been updated!
oculate-pinned-tab-url-invalid = That doesn't look like a valid URL.
oculate-pinned-tab-edit-url-title = Edit Pinned URL
oculate-pinned-tab-edit-url-label = Enter the URL this pinned tab should point to:
oculate-tabs-renamed = تم تغيير اسم التبويب بنجاح!
oculate-background-tab-opened-toast = تم فتح علامة تبويب خلفية جديدة!
oculate-workspace-renamed-toast = تم تغيير اسم مساحة العمل بنجاح!
oculate-split-view-limit-toast = Can't add more panels to the split view!
oculate-sidebar-drag-collapsed-toast = Sidebar hidden! Use <span>{ $shortcut }</span> to bring the sidebar back.
oculate-toggle-compact-mode-button = 
    .label = الوضع المدمج
    .tooltiptext = تبديل الوضع المدمج

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = إلى المزيد تعرف
oculate-close-label = أغلق
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = ابحث...
oculate-icons-picker-emoji = 
    .label = ايموجي
oculate-icons-picker-svg = 
    .label = الأيقونات
oculate-emojis-picker-search = 
    .placeholder = Search emojis
urlbar-search-mode-oculate_actions = الإجراءات
oculate-site-data-settings = الاعدادات
oculate-generic-manage = إدارة
oculate-generic-more = المزيد
oculate-generic-next = التالي
oculate-essentials-promo-label = أضف إلى الأساسيات
oculate-essentials-promo-sublabel = إبقاء علامات التبويب المفضلة لديك فقط بنقرة
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = مسموح
oculate-site-data-setting-block = محظور
oculate-site-data-protections-enabled = مفعّل
oculate-site-data-protections-disabled = معطَّل
oculate-site-data-security-info-extension = 
    .label = ملحق
oculate-site-data-security-info-secure = 
    .label = آمن
oculate-site-data-security-info-not-secure = 
    .label = غير آمن
oculate-site-data-manage-addons = 
    .label = إدارة الملحقات
oculate-site-data-get-addons = 
    .label = إضافة ملحق
oculate-site-data-site-settings = 
    .label = جميع إعدادات الموقع
oculate-site-data-header-share = 
    .tooltiptext = شارك هذه الصفحة
oculate-site-data-header-boost = 
    .tooltiptext = Create a Boost
oculate-site-data-header-reader-mode = 
    .tooltiptext = أدخل وضع القارئ
oculate-site-data-header-screenshot = 
    .tooltiptext = التقاط الشاشة
oculate-site-data-header-bookmark = 
    .tooltiptext = ضع إشارة مرجعية على هذه الصفحة
oculate-urlbar-copy-url-button = 
    .tooltiptext = نسخ الرابط
oculate-site-data-setting-site-protection = حماية التتبع

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = منزل جديد للإضافات والأذونات والمزيد
oculate-site-data-panel-feature-callout-subtitle = انقر على أيقونة لإدارة إعدادات الموقع، وعرض معلومات الأمان، والوصول إلى الملحقات، وتنفيذ الإجراءات الشائعة.
oculate-open-link-in-glance = 
    .label = فتح الرابط بلمحة
    .accesskey = G
oculate-sidebar-notification-updated-heading = اكتمل التحديث!

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = ما الجديد في { -brand-short-name }
oculate-sidebar-notification-updated-tooltip = 
    .title = عرض ملاحظات الإصدار
oculate-sidebar-notification-restart-safe-mode-label = شيء معطل؟
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = إعادة التشغيل في الوضع الآمن
oculate-window-sync-migration-dialog-title = حافظ على تزامن نوافذك
oculate-window-sync-migration-dialog-message = يقوم Oculate الآن بمزامنة النوافذ على نفس الجهاز، لذا فإن التغييرات في نافذة واحدة تنعكس في النوافذ الأخرى على الفور.
oculate-window-sync-migration-dialog-accept = فهمت
oculate-appmenu-new-blank-window = 
    .label = نافذة فارغة جديدة
