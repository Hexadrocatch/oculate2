# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# The engine this build is based on, not meant to be translated.
-oculate-engine-name = Firefox
oculate-about-dialog-title = 
    .title = 關於 { -brand-full-name }
oculate-about-app-name = { -brand-full-name }
# Variables:
#   $version (String): Oculate version, e.g. 1.24b
#   $arch (String): CPU architecture, e.g. 64-bit or aarch64
oculate-about-version = 版本 { $version } ({ $arch })
# Variables:
#   $version (String): Oculate version, e.g. 1.25t
#   $isodate (String): build date in ISO format, e.g. 2026-10-29
#   $arch (String): CPU architecture, e.g. 64-bit or aarch64
oculate-about-version-twilight = 版本 { $version } ({ $isodate }) ({ $arch })
oculate-about-version-button = 
    .title = 複製版本資訊
oculate-about-copied = 已複製
# Variables:
#   $firefoxVersion (String): engine version this build is based on, e.g. 159.0
oculate-about-firefox-version = 基於 { -oculate-engine-name } { $firefoxVersion }

## Update status

oculate-about-update-check = 檢查更新
oculate-about-update-try-again = 再試一次
oculate-about-update-checking = 正在檢查更新…
oculate-about-update-up-to-date = { -brand-short-name } 已是最新版本
# Variables:
#   $version (String): the version that can be downloaded, e.g. 1.25b
oculate-about-update-available = { -brand-short-name } { $version } 可供更新
oculate-about-update-download = 下載並安裝
# Variables:
#   $transfer (String): download progress, e.g. 12.3 of 90.1 MB
oculate-about-update-downloading = 正在下載更新 — { $transfer }
oculate-about-update-applying = 安裝更新中…
oculate-about-update-ready = 新版本已可供安裝
oculate-about-update-restart = 重新啟動以更新
oculate-about-update-restarting = 重新啟動中…
oculate-about-update-download-failed = 無法下載更新
oculate-about-update-checking-failed = 無法檢查更新
oculate-about-update-internal-error = 因內部錯誤，無法提供更新
oculate-about-update-download-manually = 手動下載
oculate-about-update-manual = 下載頁面中已有新版本
oculate-about-update-policy-disabled = 更新已由您的機構停用
oculate-about-update-other-instance = { -brand-short-name } 正由另一程序更新中
oculate-about-update-unsupported = 此作業系統已無法再接收更新
oculate-about-update-learn-more = 了解更多

## Links

oculate-about-release-notes = 新功能
oculate-about-report-issue = 問題回報
oculate-about-community = { -brand-short-name } 免費且開源，由<a data-l10n-name="github-link">社群貢獻者</a>基於{ -oculate-engine-name }所打造。
oculate-about-license = 授權資訊
oculate-about-rights = 使用條款
