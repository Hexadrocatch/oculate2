# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# The engine this build is based on, not meant to be translated.
-oculate-engine-name = Firefox
oculate-about-dialog-title = 
    .title = Maidir le { -brand-full-name }
oculate-about-app-name = { -brand-full-name }
# Variables:
#   $version (String): Oculate version, e.g. 1.24b
#   $arch (String): CPU architecture, e.g. 64-bit or aarch64
oculate-about-version = Leagan { $version } ({ $arch })
# Variables:
#   $version (String): Oculate version, e.g. 1.25t
#   $isodate (String): build date in ISO format, e.g. 2026-10-29
#   $arch (String): CPU architecture, e.g. 64-bit or aarch64
oculate-about-version-twilight = Leagan { $version } ({ $isodate }) ({ $arch })
oculate-about-version-button = 
    .title = Cóipeáil faisnéis an tiomsaithe
oculate-about-copied = Cóipeáilte
# Variables:
#   $firefoxVersion (String): engine version this build is based on, e.g. 159.0
oculate-about-firefox-version = Bunaithe ar { -oculate-engine-name } { $firefoxVersion }

## Update status

oculate-about-update-check = Seiceáil le haghaidh nuashonruithe
oculate-about-update-try-again = Déan iarracht arís
oculate-about-update-checking = Ag seiceáil le haghaidh nuashonruithe…
oculate-about-update-up-to-date = Tá { -brand-short-name } cothrom le dáta
# Variables:
#   $version (String): the version that can be downloaded, e.g. 1.25b
oculate-about-update-available = Tá { -brand-short-name } { $version } ar fáil
oculate-about-update-download = Íoslódáil agus suiteáil
# Variables:
#   $transfer (String): download progress, e.g. 12.3 of 90.1 MB
oculate-about-update-downloading = Nuashonrú á íoslódáil — { $transfer }
oculate-about-update-applying = Nuashonrú á chur i bhfeidhm…
oculate-about-update-ready = Tá an nuashonrú réidh le suiteáil
oculate-about-update-restart = Atosaigh chun nuashonrú a dhéanamh
oculate-about-update-restarting = Ag atosú…
oculate-about-update-download-failed = Níorbh fhéidir an nuashonrú a íoslódáil
oculate-about-update-checking-failed = Níorbh fhéidir nuashonruithe a sheiceáil
oculate-about-update-internal-error = Níl nuashonruithe ar fáil mar gheall ar earráid inmheánach
oculate-about-update-download-manually = Íoslódáil de láimh
oculate-about-update-manual = Tá leagan nua ar fáil ar an leathanach íoslódála
oculate-about-update-policy-disabled = Tá nuashonruithe díchumasaithe ag d’eagraíocht
oculate-about-update-other-instance = Tá { -brand-short-name } á nuashonrú ag instáins eile
oculate-about-update-unsupported = Ní féidir leis an gcóras seo nuashonruithe a fháil a thuilleadh
oculate-about-update-learn-more = Faigh tuilleadh eolais

## Links

oculate-about-release-notes = Cad atá nua
oculate-about-report-issue = Tuairiscigh fadhb
oculate-about-community = Tá { -brand-short-name } saor in aisce agus foinse oscailte; tá sé tógtha ar { -oculate-engine-name } ag <a data-l10n-name="github-link">pobal rannpháirtithe</a>.
oculate-about-license = Ceadúnas
oculate-about-rights = Do chearta
