# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = 当前配置
unified-extensions-description = 扩展用于为 { -brand-short-name } 带来更多额外功能。
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] 重置常驻标签页
           *[false] 重置标签页
        }
    .accesskey = R
tab-context-oculate-add-essential = 
    .label = 添加到常驻标签页
    .accesskey = E
tab-context-oculate-add-essential-badge = 已使用 { $num } / { $max }
tab-context-oculate-remove-essential = 
    .label = 从常驻标签页中移除
    .accesskey = R
tab-context-oculate-edit-pinned-page = 
    .label =
        { $isEssential ->
            [true] 编辑常驻标签页
           *[false] 编辑固定标签页
        }
    .accesskey = P
tab-context-oculate-replace-pinned-url-with-current = 
    .label = 替换为当前 URL
    .accesskey = C
tab-context-oculate-edit-pinned-url = 
    .label = 编辑…
    .accesskey = E
tab-context-oculate-edit-title = 
    .label = 更改标签…
tab-context-oculate-edit-icon = 
    .label = 更改图标…
oculate-themes-corrupted = 您的 { -brand-short-name } 模组文件已损坏。它们已重置为默认主题。
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification = 新的地址栏已启用，不再需要新标签页。<br/><br/>打开一个新标签页来试试看新地址栏！
oculate-disable = 禁用
pictureinpicture-minimize-btn = 
    .aria-label = 最小化
    .tooltip = 最小化
oculate-panel-ui-gradient-generator-custom-color = 自定义颜色
oculate-copy-current-url-confirmation = 网址已复制到剪贴板！
oculate-copy-current-url-as-markdown-confirmation = 已将当前网址复制为 Markdown 格式！
oculate-general-cancel-label = 
    .label = 取消
oculate-general-confirm = 
    .label = 确认
oculate-pinned-tab-replaced = 固定标签页的网址已更新为当前页面网址！
oculate-pinned-tab-url-edited = 固定标签页的 URL 已更新！
oculate-pinned-tab-url-invalid = URL 无效。
oculate-pinned-tab-edit-url-title = 编辑固定 URL
oculate-pinned-tab-edit-url-label = 请输入此固定标签页应指向的 URL：
oculate-tabs-renamed = 标签页重命名成功！
oculate-background-tab-opened-toast = 新的后台标签页已打开 ！
oculate-workspace-renamed-toast = 工作区重命名成功！
oculate-split-view-limit-toast = 无法在分屏视图中添加更多面板！
oculate-sidebar-drag-collapsed-toast = Sidebar hidden! Use <span>{ $shortcut }</span> to bring the sidebar back.
oculate-toggle-compact-mode-button = 
    .label = 简洁模式
    .tooltiptext = 切换简洁模式

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = 了解更多
oculate-close-label = 关闭
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = 搜索…
oculate-icons-picker-emoji = 
    .label = 表情符号
oculate-icons-picker-svg = 
    .label = 图标集
oculate-emojis-picker-search = 
    .placeholder = 搜索表情符号
urlbar-search-mode-oculate_actions = 操作
oculate-site-data-settings = 设置
oculate-generic-manage = 管理
oculate-generic-more = 更多
oculate-generic-next = 下一步
oculate-essentials-promo-label = 添加到常驻标签页
oculate-essentials-promo-sublabel = 让您常用的标签页触手可及
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = 允许
oculate-site-data-setting-block = 阻止
oculate-site-data-protections-enabled = 开启
oculate-site-data-protections-disabled = 关闭
oculate-site-data-security-info-extension = 
    .label = 扩展
oculate-site-data-security-info-secure = 
    .label = 安全
oculate-site-data-security-info-not-secure = 
    .label = 不安全
oculate-site-data-manage-addons = 
    .label = 管理扩展
oculate-site-data-get-addons = 
    .label = 添加扩展
oculate-site-data-site-settings = 
    .label = 所有站点设置
oculate-site-data-header-share = 
    .tooltiptext = 分享此页面
oculate-site-data-header-boost = 
    .tooltiptext = Create a Boost
oculate-site-data-header-reader-mode = 
    .tooltiptext = 进入阅读模式
oculate-site-data-header-screenshot = 
    .tooltiptext = 截图
oculate-site-data-header-bookmark = 
    .tooltiptext = 为此页面添加书签
oculate-urlbar-copy-url-button = 
    .tooltiptext = 复制链接
oculate-site-data-setting-site-protection = 跟踪保护

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = 附加组件、权限和各种功能的一站式界面
oculate-site-data-panel-feature-callout-subtitle = 点击图标以管理站点设置、查看安全信息、访问扩展，还可执行各种操作。
oculate-open-link-in-glance = 
    .label = 在浮窗预览中打开链接
    .accesskey = G
oculate-sidebar-notification-updated-heading = 更新完成！

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = 了解 { -brand-short-name } 的新变化
oculate-sidebar-notification-updated-tooltip = 
    .title = 查看更新日志
oculate-sidebar-notification-restart-safe-mode-label = 出了什么问题吗？
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = 在排障模式下重启
oculate-window-sync-migration-dialog-title = 保持您的窗口同步
oculate-window-sync-migration-dialog-message = Oculate 现已支持同一设备上的窗口同步，一个窗口的更改将即时同步到其他窗口。
oculate-window-sync-migration-dialog-accept = 知道了
oculate-appmenu-new-blank-window = 
    .label = 新建空白窗口
