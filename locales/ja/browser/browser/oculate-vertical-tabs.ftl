# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-toolbar-context-tabs-right = 
    .label = タブバーを右側に表示する
    .accesskey = R
oculate-toolbar-context-compact-mode = 
    .label = コンパクトモード
oculate-toolbar-context-compact-mode-enable = 
    .label = コンパクトモードを有効にする
    .accesskey = D
oculate-toolbar-context-compact-mode-just-tabs = 
    .label = サイドバーを隠す
oculate-toolbar-context-compact-mode-just-toolbar = 
    .label = ツールバーを隠す
oculate-toolbar-context-compact-mode-hide-both = 
    .label = サイドバーとツールバーを隠す
    .accesskey = H
oculate-toolbar-context-move-to-folder = 
    .label = フォルダに移動する…
    .accesskey = M
oculate-toolbar-context-new-folder = 
    .label = 新しいフォルダ
    .accesskey = N
oculate-tabs-newtab-paste-and-search = 
    .label = Paste & Search
oculate-scroll-to-selected-tab = 
    .tooltiptext = Scroll to the selected tab
    .aria-label = Scroll to the selected tab
sidebar-oculate-expand = 
    .label = サイドバーを展開する
sidebar-oculate-create-new = 
    .label = 新しく作成する…
tabbrowser-unload-tab-button = 
    .tooltiptext =
        { $tabCount ->
            [one] タブをアンロードして切り替える
           *[other] { $tabCount }つタブをアンロードして最初タブに切り替える
        }
tabbrowser-reset-pin-button = 
    .tooltiptext =
        { $tabCount ->
            [one] タブをリセットして固定する
           *[other] タブをリセットして{ $tabCount }つのタブをピン留めする
        }
oculate-tab-sublabel =
    { $tabSubtitle ->
        [oculate-default-pinned] ピン留めされた URL に戻る
        [oculate-default-pinned-cmd] ピン留めされたタブから切り離す
       *[other] { $tabSubtitle }
    }
