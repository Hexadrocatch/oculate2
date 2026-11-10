# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = 使用中のプロファイル
unified-extensions-description = 拡張機能は{ -brand-short-name }に多く追加機能をもたらすために使用されます。
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] Essentialタブの遷移をリセット
           *[false] ピン留めされたタブの遷移をリセット
        }
    .accesskey = R
tab-context-oculate-add-essential = 
    .label = Essentialsに追加
    .accesskey = E
tab-context-oculate-add-essential-badge = { $num } / { $max }スロットがいっぱいです
tab-context-oculate-remove-essential = 
    .label = Essentialsから削除
    .accesskey = R
tab-context-oculate-edit-pinned-page = 
    .label =
        { $isEssential ->
            [true] EssentialのURLを編集
           *[false] ピン留めされたURLを編集
        }
    .accesskey = P
tab-context-oculate-replace-pinned-url-with-current = 
    .label = 現在のURLに置き換えられます
    .accesskey = C
tab-context-oculate-edit-pinned-url = 
    .label = 編集…
    .accesskey = E
tab-context-oculate-edit-title = 
    .label = ラベルを変更する…
tab-context-oculate-edit-icon = 
    .label = アイコンを変更する…
oculate-themes-corrupted = { -brand-short-name }モッドファイルが文字化けしています。デフォルトのテーマにリセットされました。
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification =
    新しいURLバーが有効になり、新しいタブページの必要性がなくなりました。<br/><br/>
    新しいタブを開いて、新しいURLバーを表示してみてください！
oculate-disable = 無効
pictureinpicture-minimize-btn = 
    .aria-label = 最小化
    .tooltip = 最小化
oculate-panel-ui-gradient-generator-custom-color = カスタムカラー
oculate-copy-current-url-confirmation = URLをクリップボードにコピーしました！
oculate-copy-current-url-as-markdown-confirmation = URLをMarkdownとしてコピーしました！
oculate-general-cancel-label = 
    .label = キャンセル
oculate-general-confirm = 
    .label = 確定
oculate-pinned-tab-replaced = 固定したタブのURLが現在のURLに置き換えられました！
oculate-pinned-tab-url-edited = ピン留めされたタブのURLを更新しました！
oculate-pinned-tab-url-invalid = このURLは有効が見えません。
oculate-pinned-tab-edit-url-title = ピン留めされたURLを編集
oculate-pinned-tab-edit-url-label = このピン留めされたタブのURLを入力してください：
oculate-tabs-renamed = タブの名前は無事に変更されました！
oculate-background-tab-opened-toast = 新しい背景タブが開きました！
oculate-workspace-renamed-toast = ワークスペースの名前が変更されました！
oculate-split-view-limit-toast = 分割ビューにこれ以上パネルを追加できません！
oculate-sidebar-drag-collapsed-toast = Sidebar hidden! Use <span>{ $shortcut }</span> to bring the sidebar back.
oculate-toggle-compact-mode-button = 
    .label = コンパクトモード
    .tooltiptext = コンパクトモードの切り替え

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = もっと詳しく知る
oculate-close-label = 閉じる
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = 検索…
oculate-icons-picker-emoji = 
    .label = 絵文字
oculate-icons-picker-svg = 
    .label = アイコン
oculate-emojis-picker-search = 
    .placeholder = 絵文字を検索
urlbar-search-mode-oculate_actions = アクション
oculate-site-data-settings = 設定
oculate-generic-manage = 管理
oculate-generic-more = その他
oculate-generic-next = 次へ
oculate-essentials-promo-label = Essentialsに追加
oculate-essentials-promo-sublabel = お気に入りのタブをワンクリックで表示
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = 許可済み
oculate-site-data-setting-block = ブロック済み
oculate-site-data-protections-enabled = 有効
oculate-site-data-protections-disabled = 無効
oculate-site-data-security-info-extension = 
    .label = 拡張機能
oculate-site-data-security-info-secure = 
    .label = 保護されています
oculate-site-data-security-info-not-secure = 
    .label = 保護されていません
oculate-site-data-manage-addons = 
    .label = 拡張機能を管理
oculate-site-data-get-addons = 
    .label = 拡張機能を追加
oculate-site-data-site-settings = 
    .label = すべてのサイト設定
oculate-site-data-header-share = 
    .tooltiptext = このページをシェアする
oculate-site-data-header-boost = 
    .tooltiptext = Create a Boost
oculate-site-data-header-reader-mode = 
    .tooltiptext = リーダーモードにする
oculate-site-data-header-screenshot = 
    .tooltiptext = スクリーンショットを撮る
oculate-site-data-header-bookmark = 
    .tooltiptext = このページをブックマークに登録する
oculate-urlbar-copy-url-button = 
    .tooltiptext = URLをコピーする
oculate-site-data-setting-site-protection = トラッキング保護

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = アドオン、権限などの新しいホーム
oculate-site-data-panel-feature-callout-subtitle = アイコンをクリックすると、サイト設定の管理、セキュリティ情報の表示、拡張機能へのアクセス、一般的なアクションが行えます。
oculate-open-link-in-glance = 
    .label = Glanceでリンクを開く
    .accesskey = G
oculate-sidebar-notification-updated-heading = アップデートが完了しました！

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = { -brand-short-name }の新機能
oculate-sidebar-notification-updated-tooltip = 
    .title = リリースノートを表示する
oculate-sidebar-notification-restart-safe-mode-label = 何か壊れましたか？
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = セーフモードで再起動する
oculate-window-sync-migration-dialog-title = Windowsとの同期を維持
oculate-window-sync-migration-dialog-message = Oculateは同一デバイス内のウィンドウを同期するようになり、１つのウィンドウでの操作が、他のウィンドウに、即座に反映されます。
oculate-window-sync-migration-dialog-accept = わかりました
oculate-appmenu-new-blank-window = 
    .label = 新しい空のウィンドウ
