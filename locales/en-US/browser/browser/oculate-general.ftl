# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = current profile

unified-extensions-description = Extensions are used to bring more extra functionality into { -brand-short-name }.
tab-context-oculate-reset-pinned-tab =
    .label =
        { $isEssential ->
            [true] Reset Essential Tab
           *[false] Reset Pinned Tab
        }
    .accesskey = R
tab-context-oculate-add-essential =
    .label = Add to Essentials
    .accesskey = E
tab-context-oculate-add-essential-badge = { $num } / { $max }
tab-context-oculate-remove-essential =
    .label = Remove from Essentials
    .accesskey = R
tab-context-oculate-edit-pinned-page =
    .label =
        { $isEssential ->
            [true] Edit Essential URL
           *[false] Edit Pinned URL
        }
    .accesskey = P
tab-context-oculate-replace-pinned-url-with-current =
    .label = Replace with Current URL
    .accesskey = C
tab-context-oculate-edit-pinned-url =
    .label = Edit…
    .accesskey = E
tab-context-oculate-edit-title =
    .label = Change Label…
tab-context-oculate-edit-icon =
    .label = Change Icon…

oculate-themes-corrupted = Your { -brand-short-name } mods file is corrupted. They have been reset to the default theme.

# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification = The new URL bar has been enabled, removing the need for new tab pages.<br/><br/>
    Try opening a new tab to see the new URL bar in action!

oculate-disable = Disable

pictureinpicture-minimize-btn =
  .aria-label = Minimize
  .tooltip = Minimize

oculate-panel-ui-gradient-generator-custom-color = Custom Color

oculate-copy-current-url-confirmation = Copied current URL!
oculate-copy-current-url-as-markdown-confirmation = Copied current URL as Markdown!

oculate-general-cancel-label =
    .label = Cancel
oculate-general-confirm =
    .label = Confirm

oculate-pinned-tab-replaced = Pinned tab URL has been replaced with the current URL!
oculate-pinned-tab-url-edited = Pinned tab URL has been updated!
oculate-pinned-tab-url-invalid = That doesn't look like a valid URL.
oculate-pinned-tab-edit-url-title = Edit Pinned URL
oculate-pinned-tab-edit-url-label = Enter the URL this pinned tab should point to:
oculate-tabs-renamed = Tab has been successfully renamed!
oculate-background-tab-opened-toast = New background tab opened!
oculate-workspace-renamed-toast = Workspace has been successfully renamed!
oculate-split-view-limit-toast = Can't add more panels to the split view!
oculate-sidebar-drag-collapsed-toast = Sidebar hidden! Use <span>{ $shortcut }</span> to bring the sidebar back.

oculate-toggle-compact-mode-button =
    .label = Compact Mode
    .tooltiptext = Toggle Compact Mode

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = Learn More

oculate-close-label = Close

oculate-singletoolbar-urlbar-placeholder-with-name =
  .placeholder = Search...

oculate-icons-picker-emoji =
  .label = Emojis
oculate-icons-picker-svg =
  .label = Icons
oculate-emojis-picker-search =
  .placeholder = Search emojis

urlbar-search-mode-oculate_actions = Actions
oculate-site-data-settings = Settings

oculate-generic-manage = Manage
oculate-generic-more = More
oculate-generic-next = Next

oculate-essentials-promo-label = Add to Essentials
oculate-essentials-promo-sublabel = Keep your favorite tabs just a click away

# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = Allowed
oculate-site-data-setting-block = Blocked
oculate-site-data-protections-enabled = Enabled
oculate-site-data-protections-disabled = Disabled
oculate-site-data-security-info-extension =
    .label = Extension
oculate-site-data-security-info-secure =
    .label = Secure
oculate-site-data-security-info-not-secure =
    .label = Not Secure

oculate-site-data-manage-addons =
    .label = Manage Extensions
oculate-site-data-get-addons =
    .label = Add Extensions
oculate-site-data-site-settings =
    .label = All Site Settings


oculate-site-data-header-share =
    .tooltiptext = Share This Page
oculate-site-data-header-boost =
    .tooltiptext = Create a Boost
oculate-site-data-header-reader-mode =
    .tooltiptext = Enter Reader Mode
oculate-site-data-header-screenshot =
    .tooltiptext = Take a Screenshot
oculate-site-data-header-bookmark =
    .tooltiptext = Bookmark This Page

oculate-urlbar-copy-url-button =
  .tooltiptext = Copy URL

oculate-site-data-setting-site-protection = Tracking Protection

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = A new home for add-ons, permissions, and more
oculate-site-data-panel-feature-callout-subtitle = Click the icon to manage site settings, view security info, access extensions, and perform common actions.

oculate-open-link-in-glance =
    .label = Open Link in Glance
    .accesskey = G

oculate-sidebar-notification-updated-heading = Update Complete!

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = What's new in { -brand-short-name }
oculate-sidebar-notification-updated-tooltip =
    .title = View Release Notes
oculate-sidebar-notification-restart-safe-mode-label = Something broke?
oculate-sidebar-notification-restart-safe-mode-tooltip =
    .title = Restart in Safe Mode

oculate-window-sync-migration-dialog-title = Keep Your Windows in Sync
oculate-window-sync-migration-dialog-message = Oculate now syncs windows on the same device, so changes in one window are reflected across the others instantly.
oculate-window-sync-migration-dialog-accept = Got It

oculate-appmenu-new-blank-window =
    .label = New Blank Window
