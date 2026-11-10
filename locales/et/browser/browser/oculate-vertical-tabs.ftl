# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-toolbar-context-tabs-right = 
    .label = Kaardid paremal
    .accesskey = p
oculate-toolbar-context-compact-mode = 
    .label = Kompaktne režiim
oculate-toolbar-context-compact-mode-enable = 
    .label = Luba kompaktne režiim
    .accesskey = r
oculate-toolbar-context-compact-mode-just-tabs = 
    .label = Peida külgriba
oculate-toolbar-context-compact-mode-just-toolbar = 
    .label = Peida tööriistariba
oculate-toolbar-context-compact-mode-hide-both = 
    .label = Peida mõlemad
    .accesskey = P
oculate-toolbar-context-move-to-folder = 
    .label = Move to Folder...
    .accesskey = M
oculate-toolbar-context-new-folder = 
    .label = Uus kaust
    .accesskey = U
oculate-tabs-newtab-paste-and-search = 
    .label = Paste & Search
oculate-scroll-to-selected-tab = 
    .tooltiptext = Scroll to the selected tab
    .aria-label = Scroll to the selected tab
sidebar-oculate-expand = 
    .label = Laienda külgriba
sidebar-oculate-create-new = 
    .label = Loo uus...
tabbrowser-unload-tab-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Eemalda mälust ning vaheta kaarti
           *[other] Eemalda mälust { $tabCount } kaarti ning vaheta esimesele kaardile
        }
tabbrowser-reset-pin-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Lähtesta ja tee püsikaardiks
           *[other] Lähtesta ja tee püsikaardiks { $tabCount } kaarti
        }
oculate-tab-sublabel =
    { $tabSubtitle ->
        [oculate-default-pinned] Back to pinned url
        [oculate-default-pinned-cmd] Separate from pinned tab
       *[other] { $tabSubtitle }
    }
