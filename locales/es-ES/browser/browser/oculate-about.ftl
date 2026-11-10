# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# The engine this build is based on, not meant to be translated.
-oculate-engine-name = Firefox
oculate-about-dialog-title = 
    .title = Acerca de { -brand-full-name }
oculate-about-app-name = { -brand-full-name }
# Variables:
#   $version (String): Oculate version, e.g. 1.24b
#   $arch (String): CPU architecture, e.g. 64-bit or aarch64
oculate-about-version = Versión { $version } ({ $arch })
# Variables:
#   $version (String): Oculate version, e.g. 1.25t
#   $isodate (String): build date in ISO format, e.g. 2026-10-29
#   $arch (String): CPU architecture, e.g. 64-bit or aarch64
oculate-about-version-twilight = Versión { $version } ({ $isodate }) ({ $arch })
oculate-about-version-button = 
    .title = Copiar información de compilación
oculate-about-copied = Copiado
# Variables:
#   $firefoxVersion (String): engine version this build is based on, e.g. 159.0
oculate-about-firefox-version = Basado en { -oculate-engine-name } { $firefoxVersion }

## Update status

oculate-about-update-check = Buscar actualizaciones
oculate-about-update-try-again = Volver a intentarlo
oculate-about-update-checking = Buscando actualizaciones…
oculate-about-update-up-to-date = { -brand-short-name } está actualizado
# Variables:
#   $version (String): the version that can be downloaded, e.g. 1.25b
oculate-about-update-available = { -brand-short-name } { $version } está disponible
oculate-about-update-download = Descargar e instalar
# Variables:
#   $transfer (String): download progress, e.g. 12.3 of 90.1 MB
oculate-about-update-downloading = Descargando actualización — { $transfer }
oculate-about-update-applying = Aplicando actualización…
oculate-about-update-ready = La actualización está lista para instalar
oculate-about-update-restart = Reiniciar para actualizar
oculate-about-update-restarting = Reiniciando…
oculate-about-update-download-failed = No se pudo descargar la actualización
oculate-about-update-checking-failed = No se pudieron buscar actualizaciones
oculate-about-update-internal-error = Las actualizaciones no están disponibles debido a un error interno
oculate-about-update-download-manually = Descargar manualmente
oculate-about-update-manual = Una nueva versión está disponible en la página de descarga
oculate-about-update-policy-disabled = Las actualizaciones están deshabilitadas por su organización
oculate-about-update-other-instance = { -brand-short-name } está siendo actualizado por otra instancia
oculate-about-update-unsupported = Este sistema ya no puede recibir actualizaciones
oculate-about-update-learn-more = Más información

## Links

oculate-about-release-notes = Novedades
oculate-about-report-issue = Informar de un problema
oculate-about-community = { -brand-short-name } es gratuito y de código abierto, basado en { -oculate-engine-name } por una <a data-l10n-name="github-link">comunidad de colaboradores</a>.
oculate-about-license = Licencia
oculate-about-rights = Sus derechos
