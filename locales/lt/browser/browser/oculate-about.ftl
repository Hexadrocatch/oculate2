# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# The engine this build is based on, not meant to be translated.
-oculate-engine-name = Firefox
oculate-about-dialog-title = 
    .title = Apie „{ -brand-full-name }“
oculate-about-app-name = „{ -brand-full-name }“
# Variables:
#   $version (String): Oculate version, e.g. 1.24b
#   $arch (String): CPU architecture, e.g. 64-bit or aarch64
oculate-about-version = Versija { $version } ({ $arch }).
# Variables:
#   $version (String): Oculate version, e.g. 1.25t
#   $isodate (String): build date in ISO format, e.g. 2026-10-29
#   $arch (String): CPU architecture, e.g. 64-bit or aarch64
oculate-about-version-twilight = Versija { $version } ({ $isodate }) ({ $arch }).
oculate-about-version-button = 
    .title = Kopijuoti darinio informaciją
oculate-about-copied = Nukopijuota.
# Variables:
#   $firefoxVersion (String): engine version this build is based on, e.g. 159.0
oculate-about-firefox-version = Remiantis „{ -oculate-engine-name }“ { $firefoxVersion }.

## Update status

oculate-about-update-check = Tikrinti dėl atnaujinimų
oculate-about-update-try-again = Bandyti dar kartą
oculate-about-update-checking = Tikrinama dėl atnaujinimų…
oculate-about-update-up-to-date = „{ -brand-short-name }“ yra atnaujinta.
# Variables:
#   $version (String): the version that can be downloaded, e.g. 1.25b
oculate-about-update-available = „{ -brand-short-name }“ { $version } pasiekiama.
oculate-about-update-download = Atsisiųsti ir įdiegti
# Variables:
#   $transfer (String): download progress, e.g. 12.3 of 90.1 MB
oculate-about-update-downloading = Atsisiunčiamas atnaujinimas – { $transfer }
oculate-about-update-applying = Taikomas atnaujinimas…
oculate-about-update-ready = Atnaujinimas parengtas įdiegti.
oculate-about-update-restart = Paleiskite iš naujo, kad atnaujintumėte.
oculate-about-update-restarting = Paleidžiama iš naujo…
oculate-about-update-download-failed = Nepavyko atsisiųsti atnaujinimo.
oculate-about-update-checking-failed = Nepavyko patikrinti atnaujinimų.
oculate-about-update-internal-error = Atnaujinimai nepasiekiami dėl vidinės klaidos.
oculate-about-update-download-manually = Atsisiųsti rankiniu būdu
oculate-about-update-manual = Nauja versija pasiekiama atsisiuntimo puslapyje.
oculate-about-update-policy-disabled = Jūsų organizacija išjungė atnaujinimus.
oculate-about-update-other-instance = „{ -brand-short-name }“ šiuo metu atnaujinamas kito serverio.
oculate-about-update-unsupported = Ši sistema nebegali gauti atnaujinimų
oculate-about-update-learn-more = Sužinoti daugiau

## Links

oculate-about-release-notes = Kas naujo
oculate-about-report-issue = Pranešti apie problemą
oculate-about-community = „{ -brand-short-name }“ yra nemokama ir atvirojo kodo, sukurta „{ -oculate-engine-name }“ pagrindu <a data-l10n-name="github-link">talkininkų bendruomenės</a>.
oculate-about-license = Licencija
oculate-about-rights = Jūsų teisės
