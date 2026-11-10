# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# The engine this build is based on, not meant to be translated.
-oculate-engine-name = Firefox
oculate-about-dialog-title = 
    .title = Quant al { -brand-full-name }
oculate-about-app-name = { -brand-full-name }
# Variables:
#   $version (String): Oculate version, e.g. 1.24b
#   $arch (String): CPU architecture, e.g. 64-bit or aarch64
oculate-about-version = Versió { $version } ({ $arch })
# Variables:
#   $version (String): Oculate version, e.g. 1.25t
#   $isodate (String): build date in ISO format, e.g. 2026-10-29
#   $arch (String): CPU architecture, e.g. 64-bit or aarch64
oculate-about-version-twilight = Versió { $version } ({ $isodate }) ({ $arch })
oculate-about-version-button = 
    .title = Copia la informació de la compilació
oculate-about-copied = Copiat
# Variables:
#   $firefoxVersion (String): engine version this build is based on, e.g. 159.0
oculate-about-firefox-version = Basat en { -oculate-engine-name } { $firefoxVersion }

## Update status

oculate-about-update-check = Cerca actualitzacions
oculate-about-update-try-again = Torna-ho a provar
oculate-about-update-checking = S'està comprovant si hi ha actualitzacions…
oculate-about-update-up-to-date = El { -brand-short-name } està actualitzat
# Variables:
#   $version (String): the version that can be downloaded, e.g. 1.25b
oculate-about-update-available = El { -brand-short-name } { $version } està disponible
oculate-about-update-download = Baixa i instal·la
# Variables:
#   $transfer (String): download progress, e.g. 12.3 of 90.1 MB
oculate-about-update-downloading = S'està baixant l'actualització: { $transfer }
oculate-about-update-applying = S'està aplicant l'actualització…
oculate-about-update-ready = L'actualització està a punt per instal·lar-se
oculate-about-update-restart = Reinicia per actualitzar
oculate-about-update-restarting = S'està reiniciant…
oculate-about-update-download-failed = No s'ha pogut baixar l'actualització
oculate-about-update-checking-failed = No s'ha pogut comprovar les actualitzacions
oculate-about-update-internal-error = Les actualitzacions no estan disponibles a causa d'un error intern
oculate-about-update-download-manually = Baixa manualment
oculate-about-update-manual = Hi ha una nova versió disponible a la pàgina de baixades
oculate-about-update-policy-disabled = Les actualitzacions estan desactivades per la vostra organització
oculate-about-update-other-instance = { -brand-short-name } està sent actualitzat per una altra instància
oculate-about-update-unsupported = Aquest sistema ja no pot rebre actualitzacions
oculate-about-update-learn-more = Més informació

## Links

oculate-about-release-notes = Novetats
oculate-about-report-issue = Notifica un problema
oculate-about-community = { -brand-short-name } és programari lliure i de codi obert, construït sobre { -oculate-engine-name } per una <a data-l10n-name="github-link">comunitat de col·laboradors</a>.
oculate-about-license = Llicència
oculate-about-rights = Els vostres drets
