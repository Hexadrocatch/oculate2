# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# The engine this build is based on, not meant to be translated.
-oculate-engine-name = Firefox
oculate-about-dialog-title = 
    .title = À propos de { -brand-full-name }
oculate-about-app-name = { -brand-full-name }
# Variables:
#   $version (String): Oculate version, e.g. 1.24b
#   $arch (String): CPU architecture, e.g. 64-bit or aarch64
oculate-about-version = Version { $version } ({ $arch})
# Variables:
#   $version (String): Oculate version, e.g. 1.25t
#   $isodate (String): build date in ISO format, e.g. 2026-10-29
#   $arch (String): CPU architecture, e.g. 64-bit or aarch64
oculate-about-version-twilight = Version { $version } ({ $isodate }) ({ $arch})
oculate-about-version-button = 
    .title = Copier les informations de build
oculate-about-copied = Copié
# Variables:
#   $firefoxVersion (String): engine version this build is based on, e.g. 159.0
oculate-about-firefox-version = Basé sur { -oculate-engine-name } { $firefoxVersion}

## Update status

oculate-about-update-check = Rechercher les mises à jour
oculate-about-update-try-again = Réessayer
oculate-about-update-checking = Recherche de mises à jour…
oculate-about-update-up-to-date = { -brand-short-name } est à jour
# Variables:
#   $version (String): the version that can be downloaded, e.g. 1.25b
oculate-about-update-available = { -brand-short-name } { $version } est disponible
oculate-about-update-download = Télécharger et installer
# Variables:
#   $transfer (String): download progress, e.g. 12.3 of 90.1 MB
oculate-about-update-downloading = Téléchargement de la mise à jour — { $transfer}
oculate-about-update-applying = Application de la mise à jour…
oculate-about-update-ready = La mise à jour est prête à être installée
oculate-about-update-restart = Redémarrer pour mettre à jour
oculate-about-update-restarting = Redémarrage…
oculate-about-update-download-failed = Impossible de télécharger la mise à jour
oculate-about-update-checking-failed = Impossible de vérifier les mises à jour disponibles
oculate-about-update-internal-error = Les mises à jour ne sont pas disponibles en raison d'une erreur interne
oculate-about-update-download-manually = Télécharger manuellement
oculate-about-update-manual = Une nouvelle version est disponible sur la page de téléchargement
oculate-about-update-policy-disabled = Les mises à jour sont désactivées par votre organisation
oculate-about-update-other-instance = { -brand-short-name } est en cours de mise à jour par une autre instance
oculate-about-update-unsupported = Ce système ne peut plus recevoir de mises à jour
oculate-about-update-learn-more = En savoir plus

## Links

oculate-about-release-notes = Quoi de neuf
oculate-about-report-issue = Signaler un problème
oculate-about-community = { -brand-short-name } est un logiciel libre et open source, développé à partir de { -oculate-engine-name } par une <a data-l10n-name="github-link">communauté de contributeurs</a>.
oculate-about-license = Licence
oculate-about-rights = Vos droits
