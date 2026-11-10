# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# The engine this build is based on, not meant to be translated.
-oculate-engine-name = Firefox
oculate-about-dialog-title = 
    .title = About { -brand-full-name }
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
    .title = Copy build information
oculate-about-copied = Copied
# Variables:
#   $firefoxVersion (String): engine version this build is based on, e.g. 159.0
oculate-about-firefox-version = Based on { -oculate-engine-name } { $firefoxVersion }

## Update status

oculate-about-update-check = Check for updates
oculate-about-update-try-again = Try again
oculate-about-update-checking = Checking for updates…
oculate-about-update-up-to-date = { -brand-short-name } is up to date
# Variables:
#   $version (String): the version that can be downloaded, e.g. 1.25b
oculate-about-update-available = { -brand-short-name } { $version } is available
oculate-about-update-download = Download and install
# Variables:
#   $transfer (String): download progress, e.g. 12.3 of 90.1 MB
oculate-about-update-downloading = Downloading update — { $transfer }
oculate-about-update-applying = Applying update…
oculate-about-update-ready = The update is ready to install
oculate-about-update-restart = Restart to update
oculate-about-update-restarting = Restarting…
oculate-about-update-download-failed = The update could not be downloaded
oculate-about-update-checking-failed = Could not check for updates
oculate-about-update-internal-error = Updates are unavailable because of an internal error
oculate-about-update-download-manually = Download manually
oculate-about-update-manual = A new version is available on the download page
oculate-about-update-policy-disabled = Updates are disabled by your organization
oculate-about-update-other-instance = { -brand-short-name } is being updated by another instance
oculate-about-update-unsupported = This system can no longer receive updates
oculate-about-update-learn-more = Learn more

## Links

oculate-about-release-notes = What’s new
oculate-about-report-issue = Report an issue
oculate-about-community = { -brand-short-name } is free and open source, built on { -oculate-engine-name } by a <a data-l10n-name="github-link">community of contributors</a>.
oculate-about-license = License
oculate-about-rights = Your rights
