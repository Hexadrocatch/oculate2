# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# The engine this build is based on, not meant to be translated.
-oculate-engine-name = Firefox
oculate-about-dialog-title = 
    .title = Om { -brand-full-name }
oculate-about-app-name = { -brand-full-name }
# Variables:
#   $version (String): Oculate version, e.g. 1.24b
#   $arch (String): CPU architecture, e.g. 64-bit or aarch64
oculate-about-version = Version { $version } ({ $arch })
# Variables:
#   $version (String): Oculate version, e.g. 1.25t
#   $isodate (String): build date in ISO format, e.g. 2026-10-29
#   $arch (String): CPU architecture, e.g. 64-bit or aarch64
oculate-about-version-twilight = Version { $version } ({ $isodate }) ({ $arch })
oculate-about-version-button = 
    .title = Kopiera bygginformation
oculate-about-copied = Kopierat
# Variables:
#   $firefoxVersion (String): engine version this build is based on, e.g. 159.0
oculate-about-firefox-version = Baserat på { -oculate-engine-name } { $firefoxVersion}

## Update status

oculate-about-update-check = Sök efter uppdateringar
oculate-about-update-try-again = Försök igen
oculate-about-update-checking = Söker efter uppdateringar…
oculate-about-update-up-to-date = { -brand-short-name } är uppdaterad
# Variables:
#   $version (String): the version that can be downloaded, e.g. 1.25b
oculate-about-update-available = { -brand-short-name } { $version } är tillgänglig
oculate-about-update-download = Ladda ner och installera
# Variables:
#   $transfer (String): download progress, e.g. 12.3 of 90.1 MB
oculate-about-update-downloading = Laddar ner uppdatering — { $transfer}
oculate-about-update-applying = Tillämpar uppdatering…
oculate-about-update-ready = Uppdateringen är redo att installera
oculate-about-update-restart = Starta om för att uppdatera
oculate-about-update-restarting = Startar om…
oculate-about-update-download-failed = Uppdateringen kunde inte laddas ner
oculate-about-update-checking-failed = Kunde inte söka efter uppdateringar
oculate-about-update-internal-error = Uppdateringar är inte tillgängliga på grund av ett internt fel
oculate-about-update-download-manually = Ladda ner manuellt
oculate-about-update-manual = En ny version finns tillgänglig på nedladdningssidan
oculate-about-update-policy-disabled = Uppdateringar är inaktiverade av din organisation
oculate-about-update-other-instance = { -brand-short-name } uppdateras av en annan instans
oculate-about-update-unsupported = Detta system kan inte längre ta emot uppdateringar
oculate-about-update-learn-more = Läs mer

## Links

oculate-about-release-notes = Vad är nytt
oculate-about-report-issue = Rapportera ett problem
oculate-about-community = { -brand-short-name } är fri och öppen källkod, byggd på { -oculate-engine-name } av en <a data-l10n-name="github-link">gemenskap av bidragsgivare</a>.
oculate-about-license = Licens
oculate-about-rights = Dina rättigheter
