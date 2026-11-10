# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = mevcut profil
unified-extensions-description = Uzantılar { -brand-short-name }'e daha fazla ek işlevsellik kazandırmak için kullanılır.
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] Temel sekmeyi sıfırla
           *[false] Sabitlenmiş sekmeyi sıfırla
        }
    .accesskey = R
tab-context-oculate-add-essential = 
    .label = Temel sekmelere ekle
    .accesskey = E
tab-context-oculate-add-essential-badge = { $num } / { $max }
tab-context-oculate-remove-essential = 
    .label = Temel sekmelerden kaldır
    .accesskey = R
tab-context-oculate-edit-pinned-page = 
    .label =
        { $isEssential ->
            [true] Temel sekme adresini düzenle
           *[false] Sabitlenmiş sekme adresini düzenle
        }
    .accesskey = P
tab-context-oculate-replace-pinned-url-with-current = 
    .label = Mevcut adresle değiştir
    .accesskey = C
tab-context-oculate-edit-pinned-url = 
    .label = Düzenle…
    .accesskey = E
tab-context-oculate-edit-title = 
    .label = Etiketi değiştir…
tab-context-oculate-edit-icon = 
    .label = Simgeyi değiştir…
oculate-themes-corrupted = { -brand-short-name } adlı modun dosyaları hatalı. Varsayılan temaya sıfırlandılar.
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification =
    Yeni adres çubuğu etkinleştirildi ve yeni sekme sayfalarına olan ihtiyaç ortadan kalktı.<br/><br/>
    Yeni adres çubuğunu çalışırken görmek için yeni bir sekme açmayı dene!
oculate-disable = Devre dışı bırak
pictureinpicture-minimize-btn = 
    .aria-label = Küçült
    .tooltip = Küçült
oculate-panel-ui-gradient-generator-custom-color = Özel renk
oculate-copy-current-url-confirmation = Geçerli URL kopyalandı!
oculate-copy-current-url-as-markdown-confirmation = Geçerli URL Markdown olarak kopyalandı!
oculate-general-cancel-label = 
    .label = İptal
oculate-general-confirm = 
    .label = Onayla
oculate-pinned-tab-replaced = Sabitlenmiş sekmenin URL’si, mevcut URL ile değiştirildi!
oculate-pinned-tab-url-edited = Sabitlenmiş sekme adresi güncellendi!
oculate-pinned-tab-url-invalid = Bu geçerli bir adres gibi görünmüyor.
oculate-pinned-tab-edit-url-title = Sabitlenmiş sekme adresini düzenle
oculate-pinned-tab-edit-url-label = Bu sabitlenmiş sekmenin yönlendirileceği adresi girin:
oculate-tabs-renamed = Sekme başarıyla yeniden adlandırıldı!
oculate-background-tab-opened-toast = Yeni arka plan sekmesi açıldı!
oculate-workspace-renamed-toast = Çalışma alanı başarıyla yeniden adlandırıldı!
oculate-split-view-limit-toast = Bölünmüş görünüme daha fazla panel eklenemiyor!
oculate-sidebar-drag-collapsed-toast = Kenar çubuğu gizlendi! Kenar çubuğunu yeniden açmak için <span>{ $shortcut }</span> tuşunu kullanın.
oculate-toggle-compact-mode-button = 
    .label = Kompakt mod
    .tooltiptext = Kompakt modu aç/kapat

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = Daha fazla bilgi
oculate-close-label = Kapat
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = Ara...
oculate-icons-picker-emoji = 
    .label = Emojiler
oculate-icons-picker-svg = 
    .label = Simgeler
oculate-emojis-picker-search = 
    .placeholder = Emojilerde ara
urlbar-search-mode-oculate_actions = Eylemler
oculate-site-data-settings = Ayarlar
oculate-generic-manage = Yönet
oculate-generic-more = Daha
oculate-generic-next = Sonraki
oculate-essentials-promo-label = Temel sekmelere ekle
oculate-essentials-promo-sublabel = Favori sekmelerinize tek tıkla erişin
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = İzin verildi
oculate-site-data-setting-block = Engellendi
oculate-site-data-protections-enabled = Etkinleştirildi
oculate-site-data-protections-disabled = Devre dışı bırakıldı
oculate-site-data-security-info-extension = 
    .label = Uzantı
oculate-site-data-security-info-secure = 
    .label = Güvenli
oculate-site-data-security-info-not-secure = 
    .label = Güvenli değil
oculate-site-data-manage-addons = 
    .label = Uzantıları yönet
oculate-site-data-get-addons = 
    .label = Uzantı ekle
oculate-site-data-site-settings = 
    .label = Tüm site ayarları
oculate-site-data-header-share = 
    .tooltiptext = Bu sayfayı paylaş
oculate-site-data-header-boost = 
    .tooltiptext = Bir Boost oluştur
oculate-site-data-header-reader-mode = 
    .tooltiptext = Okuyucu moduna gir
oculate-site-data-header-screenshot = 
    .tooltiptext = Ekran görüntüsü al
oculate-site-data-header-bookmark = 
    .tooltiptext = Bu sayfayı yer imlerine ekle
oculate-urlbar-copy-url-button = 
    .tooltiptext = URL'yi kopyala
oculate-site-data-setting-site-protection = İzleme koruması

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = Eklentiler, izinler ve daha fazlası için yeni bir alan
oculate-site-data-panel-feature-callout-subtitle = Site ayarlarını yönetmek, güvenlik bilgilerini görüntülemek, uzantılara erişmek ve yaygın işlemleri gerçekleştirmek için simgeye tıklayın.
oculate-open-link-in-glance = 
    .label = Bağlantıyı hızlı görünümde aç
    .accesskey = G
oculate-sidebar-notification-updated-heading = Güncelleme tamamlandı!

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = { -brand-short-name }'de neler yeni
oculate-sidebar-notification-updated-tooltip = 
    .title = Sürüm Notlarını Görüntüle
oculate-sidebar-notification-restart-safe-mode-label = Bir sorun mu oluştu?
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = Güvenli Modda Yeniden Başlat
oculate-window-sync-migration-dialog-title = Pencerelerinizi Senkronize Tutun
oculate-window-sync-migration-dialog-message = Oculate artık aynı cihazdaki pencereleri senkronize ediyor; böylece bir pencerede yapılan değişiklikler anında diğer pencerelere yansıyor.
oculate-window-sync-migration-dialog-accept = Anladım
oculate-appmenu-new-blank-window = 
    .label = Yeni boş pencere
