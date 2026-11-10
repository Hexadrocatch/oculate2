# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# The engine this build is based on, not meant to be translated.
-oculate-engine-name = Firefox
oculate-about-dialog-title = 
    .title = O { -brand-full-name }
oculate-about-app-name = { -brand-full-name }
# Variables:
#   $version (String): Oculate version, e.g. 1.24b
#   $arch (String): CPU architecture, e.g. 64-bit or aarch64
oculate-about-version = Wersja { $version } ({ $arch })
# Variables:
#   $version (String): Oculate version, e.g. 1.25t
#   $isodate (String): build date in ISO format, e.g. 2026-10-29
#   $arch (String): CPU architecture, e.g. 64-bit or aarch64
oculate-about-version-twilight = Wersja { $version } ({ $isodate }) ({ $arch })
oculate-about-version-button = 
    .title = Skopiuj informacje o buildzie
oculate-about-copied = Skopiowano
# Variables:
#   $firefoxVersion (String): engine version this build is based on, e.g. 159.0
oculate-about-firefox-version = Bazuje na { -oculate-engine-name } { $firefoxVersion }

## Update status

oculate-about-update-check = Sprawdź aktualizacje
oculate-about-update-try-again = Spróbuj ponownie
oculate-about-update-checking = Sprawdzanie aktualizacji…
oculate-about-update-up-to-date = { -brand-short-name } jest aktualny
# Variables:
#   $version (String): the version that can be downloaded, e.g. 1.25b
oculate-about-update-available = { -brand-short-name } { $version } jest dostępny
oculate-about-update-download = Pobierz i zainstaluj
# Variables:
#   $transfer (String): download progress, e.g. 12.3 of 90.1 MB
oculate-about-update-downloading = Pobieranie aktualizacji — { $transfer }
oculate-about-update-applying = Trwa instalowanie aktualizacji…
oculate-about-update-ready = Aktualizacja jest gotowa do zainstalowania
oculate-about-update-restart = Zrestartuj by zaktualizować
oculate-about-update-restarting = Restartowanie…
oculate-about-update-download-failed = Nie udało się pobrać aktualizacji.
oculate-about-update-checking-failed = Nie udało się sprawdzić dostępności aktualizacji
oculate-about-update-internal-error = Aktualizacje nie są dostępne z powodu wewnętrznego błędu
oculate-about-update-download-manually = Pobierz ręcznie
oculate-about-update-manual = Nowa wersja jest dostępna na stronie pobierania
oculate-about-update-policy-disabled = Aktualizacje są wyłączone przez Twoją organizację
oculate-about-update-other-instance = { -brand-short-name } jest aktualizowany przez inną instancję
oculate-about-update-unsupported = Ten system nie może dłużej otrzymywać aktualizacji
oculate-about-update-learn-more = Dowiedz się więcej

## Links

oculate-about-release-notes = Co nowego
oculate-about-report-issue = Zgłoś problem
oculate-about-community = { -brand-short-name } jest darmowym i otwartym oprogramowaniem, zbudowany na { -oculate-engine-name } przez <a data-l10n-name="github-link">społeczność twórców</a>.
oculate-about-license = Licencja
oculate-about-rights = Twoja prawa
