# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-toolbar-context-tabs-right = 
    .label = Καρτέλες στα δεξιά
    .accesskey = R
oculate-toolbar-context-compact-mode = 
    .label = Συμπαγής λειτουργία
oculate-toolbar-context-compact-mode-enable = 
    .label = Ενεργοποίηση συμπαγούς λειτουργίας
    .accesskey = D
oculate-toolbar-context-compact-mode-just-tabs = 
    .label = Απόκρυψη πλαϊνής γραμμής
oculate-toolbar-context-compact-mode-just-toolbar = 
    .label = Απόκρυψη γραμμής εργαλείων
oculate-toolbar-context-compact-mode-hide-both = 
    .label = Απόκρυψη όλων
    .accesskey = H
oculate-toolbar-context-move-to-folder = 
    .label = Move to Folder...
    .accesskey = M
oculate-toolbar-context-new-folder = 
    .label = Δημιουργία Φακέλου
    .accesskey = N
oculate-tabs-newtab-paste-and-search = 
    .label = Paste & Search
oculate-scroll-to-selected-tab = 
    .tooltiptext = Scroll to the selected tab
    .aria-label = Scroll to the selected tab
sidebar-oculate-expand = 
    .label = Επέκταση Πλαϊνής στήλης
sidebar-oculate-create-new = 
    .label = Δημιουργία Νέας...
tabbrowser-unload-tab-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Εκφόρτωση και μετάβαση στην καρτέλα
           *[other] Εκφόρτωση { $tabCount } καρτελών και μετάβαση στην πρώτη
        }
tabbrowser-reset-pin-button = 
    .tooltiptext =
        { $tabCount ->
            [one] Επαναφορά και καρφίτσωμα καρτέλας
           *[other] Επαναφορά και καρφίτσωμα { $tabCount } καρτελών
        }
oculate-tab-sublabel =
    { $tabSubtitle ->
        [oculate-default-pinned] Πίσω στην καρφιτσωμένη διεύθυνσή
        [oculate-default-pinned-cmd] Διαχωρισμός από την καρφιτσωμένη καρτέλα
       *[other] { $tabSubtitle }
    }
