# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# The engine this build is based on, not meant to be translated.
-oculate-engine-name = Firefox
oculate-about-dialog-title = 
    .title = { -brand-full-name } Hakkında
oculate-about-app-name = { -brand-full-name }
# Variables:
#   $version (String): Oculate version, e.g. 1.24b
#   $arch (String): CPU architecture, e.g. 64-bit or aarch64
oculate-about-version = Sürüm { $version } ({ $arch })
# Variables:
#   $version (String): Oculate version, e.g. 1.25t
#   $isodate (String): build date in ISO format, e.g. 2026-10-29
#   $arch (String): CPU architecture, e.g. 64-bit or aarch64
oculate-about-version-twilight = Sürüm { $version } ({ $isodate }) ({ $arch })
oculate-about-version-button = 
    .title = Yapı bilgilerini kopyala
oculate-about-copied = Kopyalandı
# Variables:
#   $firefoxVersion (String): engine version this build is based on, e.g. 159.0
oculate-about-firefox-version = { -oculate-engine-name } { $firefoxVersion } tabanlı

## Update status

oculate-about-update-check = Güncellemeleri kontrol et
oculate-about-update-try-again = Tekrar dene
oculate-about-update-checking = Güncellemeler kontrol ediliyor…
oculate-about-update-up-to-date = { -brand-short-name } güncel
# Variables:
#   $version (String): the version that can be downloaded, e.g. 1.25b
oculate-about-update-available = { -brand-short-name } { $version } mevcut
oculate-about-update-download = İndir ve yükle
# Variables:
#   $transfer (String): download progress, e.g. 12.3 of 90.1 MB
oculate-about-update-downloading = Güncelleme indiriliyor — { $transfer }
oculate-about-update-applying = Güncelleme uygulanıyor…
oculate-about-update-ready = Güncelleme yüklenmeye hazır
oculate-about-update-restart = Güncellemek için yeniden başlat
oculate-about-update-restarting = Yeniden başlatılıyor…
oculate-about-update-download-failed = Güncelleme indirilemedi
oculate-about-update-checking-failed = Güncellemeler kontrol edilemedi
oculate-about-update-internal-error = İç hata nedeniyle güncellemeler kullanılamıyor
oculate-about-update-download-manually = El ile indir
oculate-about-update-manual = İndirme sayfasında yeni bir sürüm mevcut
oculate-about-update-policy-disabled = Güncellemeler kuruluşunuz tarafından devre dışı bırakıldı
oculate-about-update-other-instance = { -brand-short-name } başka bir örnek tarafından güncelleniyor
oculate-about-update-unsupported = Bu sistem artık güncelleme alamıyor
oculate-about-update-learn-more = Daha fazla bilgi alın

## Links

oculate-about-release-notes = Yenilikler
oculate-about-report-issue = Sorun bildir
oculate-about-community = { -brand-short-name }, <a data-l10n-name="github-link">katkıda bulunan topluluk</a> tarafından { -oculate-engine-name } üzerinde oluşturulmuş, ücretsiz ve açık kaynaklı bir yazılımdır.
oculate-about-license = Lisans
oculate-about-rights = Haklarınız
