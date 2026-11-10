# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# The engine this build is based on, not meant to be translated.
-oculate-engine-name = Firefox
oculate-about-dialog-title = 
    .title = Sobre { -brand-full-name }
oculate-about-app-name = { -brand-full-name }
# Variables:
#   $version (String): Oculate version, e.g. 1.24b
#   $arch (String): CPU architecture, e.g. 64-bit or aarch64
oculate-about-version = Versão { $version } ({ $arch })
# Variables:
#   $version (String): Oculate version, e.g. 1.25t
#   $isodate (String): build date in ISO format, e.g. 2026-10-29
#   $arch (String): CPU architecture, e.g. 64-bit or aarch64
oculate-about-version-twilight = Version { $version } ({ $isodate }) ({ $arch })
oculate-about-version-button = 
    .title = Copiar informações de build
oculate-about-copied = Copiado
# Variables:
#   $firefoxVersion (String): engine version this build is based on, e.g. 159.0
oculate-about-firefox-version = Baseado em { -oculate-engine-name } { $firefoxVersion }

## Update status

oculate-about-update-check = Buscar por atualizações
oculate-about-update-try-again = Tentar de novo
oculate-about-update-checking = Procurando por atualizações…
oculate-about-update-up-to-date = { -brand-short-name } está atualizado
# Variables:
#   $version (String): the version that can be downloaded, e.g. 1.25b
oculate-about-update-available = { -brand-short-name } { $version } está disponível
oculate-about-update-download = Baixar e instalar
# Variables:
#   $transfer (String): download progress, e.g. 12.3 of 90.1 MB
oculate-about-update-downloading = Baixando a atualização — { $transfer}
oculate-about-update-applying = Aplicando atualização…
oculate-about-update-ready = A atualização está pronta para ser instalada
oculate-about-update-restart = Reinicie para atualizar
oculate-about-update-restarting = Reiniciando...
oculate-about-update-download-failed = Não foi possível baixar a atualização
oculate-about-update-checking-failed = Não foi possível verificar se há atualizações
oculate-about-update-internal-error = As atualizações não estão disponíveis devido a um erro interno
oculate-about-update-download-manually = Baixar manualmente
oculate-about-update-manual = Uma nova versão está disponível na página de download
oculate-about-update-policy-disabled = As atualizações estão desativadas pela sua organização
oculate-about-update-other-instance = { -brand-short-name } está sendo atualizado por outra instância
oculate-about-update-unsupported = Este sistema não pode mais receber atualizações
oculate-about-update-learn-more = Saiba mais

## Links

oculate-about-release-notes = O que há de novo
oculate-about-report-issue = Reportar um erro
oculate-about-community = { -brand-short-name } é gratuito e de código aberto, construído em { -oculate-engine-name } por uma comunidade <a data-l10n-name="github-link">de colaboradores</a>.
oculate-about-license = Licença
oculate-about-rights = Seus direitos
