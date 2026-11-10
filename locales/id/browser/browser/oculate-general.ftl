# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = profil saat ini
unified-extensions-description = Ekstensi digunakan untuk menambahkan fungsi ekstra ke { -brand-short-name }.
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] Reset Tab Esensial ke URL awal
           *[false] Reset Tab Sematan ke URL awal
        }
    .accesskey = R
tab-context-oculate-add-essential = 
    .label = Tambahkan ke Esensial
    .accesskey = E
tab-context-oculate-add-essential-badge = { $num } / { $max } slot terisi
tab-context-oculate-remove-essential = 
    .label = Hapus dari Esensial
    .accesskey = R
tab-context-oculate-edit-pinned-page = 
    .label =
        { $isEssential ->
            [true] Edit URL Esensial
           *[false] Edit URL Tab Sematan
        }
    .accesskey = P
tab-context-oculate-replace-pinned-url-with-current = 
    .label = Ganti dengan URL Saat Ini
    .accesskey = C
tab-context-oculate-edit-pinned-url = 
    .label = Edit…
    .accesskey = E
tab-context-oculate-edit-title = 
    .label = Ubah Label...
tab-context-oculate-edit-icon = 
    .label = Ubah Ikon...
oculate-themes-corrupted = Tidak dapat memuat file tema { -brand-short-name } Anda karena rusak. File tersebut telah diatur ulang ke tema default.
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification =
    Bilah URL baru telah diaktifkan, menghapus kebutuhan untuk halaman tab baru.<br/><br/>
    Coba buka tab baru untuk melihat bilah URL baru beraksi!
oculate-disable = Nonaktifkan
pictureinpicture-minimize-btn = 
    .aria-label = Minimalkan
    .tooltip = Minimalkan
oculate-panel-ui-gradient-generator-custom-color = Warna Kustom
oculate-copy-current-url-confirmation = URL Disalin!
oculate-copy-current-url-as-markdown-confirmation = URL disalin sebagai Markdown!
oculate-general-cancel-label = 
    .label = Batalkan
oculate-general-confirm = 
    .label = Konfirmasi
oculate-pinned-tab-replaced = URL awal dari tab yang disematkan telah diganti dengan URL saat ini.
oculate-pinned-tab-url-edited = URL tab sematan telah diperbarui!
oculate-pinned-tab-url-invalid = That doesn't look like a valid URL.
oculate-pinned-tab-edit-url-title = Edit URL Tab Sematan
oculate-pinned-tab-edit-url-label = Enter the URL this pinned tab should point to:
oculate-tabs-renamed = Tab telah berhasil diubah namanya!
oculate-background-tab-opened-toast = Tab baru telah terbuka di latar belakang!
oculate-workspace-renamed-toast = Ruang Kerja telah berhasil diubah namanya!
oculate-split-view-limit-toast = Tidak dapat menambah panel lagi ke tampilan belah!
oculate-sidebar-drag-collapsed-toast = Sidebar hidden! Use <span>{ $shortcut }</span> to bring the sidebar back.
oculate-toggle-compact-mode-button = 
    .label = Mode Ringkas
    .tooltiptext = Aktifkan/Sembunyikan Mode Ringkas

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = Pelajari Lebih Lanjut
oculate-close-label = Tutup
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = Cari...
oculate-icons-picker-emoji = 
    .label = Emoji
oculate-icons-picker-svg = 
    .label = Ikon
oculate-emojis-picker-search = 
    .placeholder = Search emojis
urlbar-search-mode-oculate_actions = Aksi
oculate-site-data-settings = Pengaturan
oculate-generic-manage = Kelola
oculate-generic-more = Selengkapnya
oculate-generic-next = Lanjut
oculate-essentials-promo-label = Tambahkan ke Esensial
oculate-essentials-promo-sublabel = Akses tab favorit Anda hanya dengan sekali klik
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = Diizinkan
oculate-site-data-setting-block = Diblokir
oculate-site-data-protections-enabled = Diaktifkan
oculate-site-data-protections-disabled = Dinonaktifkan
oculate-site-data-security-info-extension = 
    .label = Ekstensi
oculate-site-data-security-info-secure = 
    .label = Aman
oculate-site-data-security-info-not-secure = 
    .label = Tidak Aman
oculate-site-data-manage-addons = 
    .label = Kelola Ekstensi
oculate-site-data-get-addons = 
    .label = Tambahkan Ekstensi
oculate-site-data-site-settings = 
    .label = Semua Pengaturan Situs
oculate-site-data-header-share = 
    .tooltiptext = Bagikan Halaman Ini
oculate-site-data-header-boost = 
    .tooltiptext = Create a Boost
oculate-site-data-header-reader-mode = 
    .tooltiptext = Masuki Mode Membaca
oculate-site-data-header-screenshot = 
    .tooltiptext = Ambil Tangkapan Layar
oculate-site-data-header-bookmark = 
    .tooltiptext = Markahi Laman Ini
oculate-urlbar-copy-url-button = 
    .tooltiptext = Salin URL
oculate-site-data-setting-site-protection = Perlindungan Pelacakan

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = Rumah baru untuk add-on, izin, dan lainnya
oculate-site-data-panel-feature-callout-subtitle = Klik ikon untuk mengelola pengaturan situs, melihat info keamanan, mengakses ekstensi, dan melakukan tindakan umum.
oculate-open-link-in-glance = 
    .label = Buka Tautan di Glance
    .accesskey = G
oculate-sidebar-notification-updated-heading = Pembaruan Selesai!

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = Apa yang baru di { -brand-short-name }
oculate-sidebar-notification-updated-tooltip = 
    .title = Lihat Catatan Rilis
oculate-sidebar-notification-restart-safe-mode-label = Ada yang rusak?
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = Mulai Ulang dalam Mode Aman
oculate-window-sync-migration-dialog-title = Jaga Jendela Anda Tetap Sinkron
oculate-window-sync-migration-dialog-message = Oculate kini menyinkronkan jendela pada perangkat yang sama, sehingga perubahan di satu jendela akan langsung terlihat di jendela lainnya.
oculate-window-sync-migration-dialog-accept = Oke!
oculate-appmenu-new-blank-window = 
    .label = Jendela Kosong Baru
