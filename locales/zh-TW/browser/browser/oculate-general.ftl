# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = 當前設定檔
unified-extensions-description = 擴充功能可為 { -brand-short-name } 帶來更多額外功能。
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] 重置Essentials
           *[false] 重置釘選分頁
        }
    .accesskey = R
tab-context-oculate-add-essential = 
    .label = 新增至 Essentials
    .accesskey = E
tab-context-oculate-add-essential-badge = { $num } / { $max }
tab-context-oculate-remove-essential = 
    .label = 從 Essentials 中移除
    .accesskey = R
tab-context-oculate-edit-pinned-page = 
    .label =
        { $isEssential ->
            [true] 修改 Essential 的網址
           *[false] 修改釘選分頁的網址
        }
    .accesskey = P
tab-context-oculate-replace-pinned-url-with-current = 
    .label = 以當前網址取代
    .accesskey = C
tab-context-oculate-edit-pinned-url = 
    .label = 修改為…
    .accesskey = E
tab-context-oculate-edit-title = 
    .label = 重新命名
tab-context-oculate-edit-icon = 
    .label = 變更圖示
oculate-themes-corrupted = 你的 { -brand-short-name } 模組文件已損壞，它們已重設為預設主題。
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification = 新網址欄已啟用，您不再需要特意新增新分頁。<br/><br/>馬上打開新分頁來看看新的網址欄！
oculate-disable = 停用
pictureinpicture-minimize-btn = 
    .aria-label = 最小化
    .tooltip = 最小化
oculate-panel-ui-gradient-generator-custom-color = 自訂顏色
oculate-copy-current-url-confirmation = 網址已複製到剪貼簿！
oculate-copy-current-url-as-markdown-confirmation = 已以Markdown格式複製當前網址！
oculate-general-cancel-label = 
    .label = 取消
oculate-general-confirm = 
    .label = 確認
oculate-pinned-tab-replaced = 釘選分頁網址已替換為當前網址！
oculate-pinned-tab-url-edited = 已經更新釘選分頁的網址！
oculate-pinned-tab-url-invalid = 這看起來不像是有效網址。
oculate-pinned-tab-edit-url-title = 修改釘選分頁的網址
oculate-pinned-tab-edit-url-label = 輸入要指定給此釘選分頁的網址：
oculate-tabs-renamed = 成功重新命名分頁！
oculate-background-tab-opened-toast = 新分頁已在背景開啟！
oculate-workspace-renamed-toast = 成功重新命名工作區！
oculate-split-view-limit-toast = 無法加入更多分頁至分割畫面！
oculate-sidebar-drag-collapsed-toast = 側邊欄已隱藏！可使用<span>{$shortcut}</span>將它再次顯示。
oculate-toggle-compact-mode-button = 
    .label = 緊湊模式
    .tooltiptext = 切換緊湊模式

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = 瞭解更多
oculate-close-label = 關閉
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = 搜尋…
oculate-icons-picker-emoji = 
    .label = 表情符號
oculate-icons-picker-svg = 
    .label = 圖示
oculate-emojis-picker-search = 
    .placeholder = 搜尋emoji
urlbar-search-mode-oculate_actions = 操作
oculate-site-data-settings = 設定
oculate-generic-manage = 管理
oculate-generic-more = 更多
oculate-generic-next = 下一個
oculate-essentials-promo-label = 新增至 Essentials
oculate-essentials-promo-sublabel = 僅需點擊一下就能切換至您的心儀分頁
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = 允許
oculate-site-data-setting-block = 已封鎖
oculate-site-data-protections-enabled = 已啟用
oculate-site-data-protections-disabled = 已停用
oculate-site-data-security-info-extension = 
    .label = 擴充套件
oculate-site-data-security-info-secure = 
    .label = 安全
oculate-site-data-security-info-not-secure = 
    .label = 不安全
oculate-site-data-manage-addons = 
    .label = 管理擴充套件
oculate-site-data-get-addons = 
    .label = 新增擴充套件
oculate-site-data-site-settings = 
    .label = 全部網站的設定
oculate-site-data-header-share = 
    .tooltiptext = 分享此頁面
oculate-site-data-header-boost = 
    .tooltiptext = 建立Boost樣式
oculate-site-data-header-reader-mode = 
    .tooltiptext = 進入閱讀模式
oculate-site-data-header-screenshot = 
    .tooltiptext = 擷取螢幕
oculate-site-data-header-bookmark = 
    .tooltiptext = 將此頁加入書籤
oculate-urlbar-copy-url-button = 
    .tooltiptext = 複製網址
oculate-site-data-setting-site-protection = 追蹤器保護

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = 擴充套件、權限管理與其他功能的新家
oculate-site-data-panel-feature-callout-subtitle = 按這個圖示來管理網站設定、查看安全性資訊、存取擴充套件與執行基本動作。
oculate-open-link-in-glance = 
    .label = 在 Glance 內開啟連結
    .accesskey = G
oculate-sidebar-notification-updated-heading = 更新成功！

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = { -brand-short-name } 更新了什麼
oculate-sidebar-notification-updated-tooltip = 
    .title = 查看版本資訊
oculate-sidebar-notification-restart-safe-mode-label = 有東西壞掉了嗎？
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = 在安全模式下重新啟動
oculate-window-sync-migration-dialog-title = 讓您的視窗處於同步狀態
oculate-window-sync-migration-dialog-message = Oculate現在能同步同裝置上的各個視窗，在某一視窗上的變動將會立即在其它視窗上反映出來。
oculate-window-sync-migration-dialog-accept = 明白了
oculate-appmenu-new-blank-window = 
    .label = 開新簡白視窗
