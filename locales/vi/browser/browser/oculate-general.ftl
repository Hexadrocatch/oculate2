# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = hồ sơ hiện tại
unified-extensions-description = Các tiện ích mở rộng được sử dụng để mang thêm tính năng vào { -brand-short-name }.
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] Đặt lại thẻ chính
           *[false] Đặt lại thẻ đã ghim
        }
    .accesskey = R
tab-context-oculate-add-essential = 
    .label = Thêm vào thẻ chính
    .accesskey = E
tab-context-oculate-add-essential-badge = { $num } / { $max }
tab-context-oculate-remove-essential = 
    .label = Gỡ khỏi thẻ chính
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
    .label = Đổi tên...
tab-context-oculate-edit-icon = 
    .label = Đổi biểu tượng...
oculate-themes-corrupted = Thư mục chủ đề { -brand-short-name } của bạn đã bị hư, chúng đã được trả về thiết kế gốc.
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification = Thanh địa chỉ mới đã được bật, giúp bạn không cần đến trang Thẻ mới nữa.<br/><br/>Hãy thử mở một thẻ mới để xem thanh địa chỉ hoạt động thế nào nhé!
oculate-disable = Vô hiệu hóa
pictureinpicture-minimize-btn = 
    .aria-label = Thu nhỏ
    .tooltip = Thu nhỏ
oculate-panel-ui-gradient-generator-custom-color = Tùy chỉnh màu sắc
oculate-copy-current-url-confirmation = Đã sao chép URL hiện tại!
oculate-copy-current-url-as-markdown-confirmation = Đã sao chép URL hiện tại dưới dạng Markdown!
oculate-general-cancel-label = 
    .label = Hủy
oculate-general-confirm = 
    .label = Xác nhận
oculate-pinned-tab-replaced = URL của thẻ đã ghim đã được thay thế bằng URL hiện tại!
oculate-pinned-tab-url-edited = Pinned tab URL has been updated!
oculate-pinned-tab-url-invalid = That doesn't look like a valid URL.
oculate-pinned-tab-edit-url-title = Edit Pinned URL
oculate-pinned-tab-edit-url-label = Enter the URL this pinned tab should point to:
oculate-tabs-renamed = Thẻ đã được đổi tên!
oculate-background-tab-opened-toast = Một thẻ mới đã được mở dưới nền!
oculate-workspace-renamed-toast = Không gian làm việc đã được đổi tên!
oculate-split-view-limit-toast = Không thể chia thêm màn hình!
oculate-sidebar-drag-collapsed-toast = Sidebar hidden! Use <span>{ $shortcut }</span> to bring the sidebar back.
oculate-toggle-compact-mode-button = 
    .label = Chế độ thu gọn
    .tooltiptext = Bật Chế độ thu gọn

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = Tìm hiểu thêm
oculate-close-label = Đóng
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = Tìm kiếm...
oculate-icons-picker-emoji = 
    .label = Biểu cảm
oculate-icons-picker-svg = 
    .label = Biểu tượng
oculate-emojis-picker-search = 
    .placeholder = Search emojis
urlbar-search-mode-oculate_actions = Hành động
oculate-site-data-settings = Thiết lập
oculate-generic-manage = Quản lý
oculate-generic-more = Thêm
oculate-generic-next = Tiếp
oculate-essentials-promo-label = Thêm vào thẻ chính
oculate-essentials-promo-sublabel = Thẻ yêu thích luôn trong tầm tay
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = Đã cho phép
oculate-site-data-setting-block = Đã chặn
oculate-site-data-protections-enabled = Đã bật
oculate-site-data-protections-disabled = Đã tắt
oculate-site-data-security-info-extension = 
    .label = Tiện ích mở rộng (Extensions)
oculate-site-data-security-info-secure = 
    .label = Đã bảo mật
oculate-site-data-security-info-not-secure = 
    .label = Chưa bảo mật
oculate-site-data-manage-addons = 
    .label = Quản lý tiện ích mở rộng (Extensions)
oculate-site-data-get-addons = 
    .label = Thêm tiện ích mở rộng (Extensions)
oculate-site-data-site-settings = 
    .label = Cài đặt tổng quan của trang web
oculate-site-data-header-share = 
    .tooltiptext = Chia sẻ trang này
oculate-site-data-header-boost = 
    .tooltiptext = Create a Boost
oculate-site-data-header-reader-mode = 
    .tooltiptext = Bật chế độ đọc
oculate-site-data-header-screenshot = 
    .tooltiptext = Chụp màn hình
oculate-site-data-header-bookmark = 
    .tooltiptext = Lưu (bookmark) trang này
oculate-urlbar-copy-url-button = 
    .tooltiptext = Sao chép địa chỉ
oculate-site-data-setting-site-protection = Phòng chống theo dõi

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = Diện mạo mới cho add-ons, quyền truy cập và nhiều hơn nữa
oculate-site-data-panel-feature-callout-subtitle = Bấm vào biểu tượng để quản lý các thiết lập của trang web, kiểm tra thông tin bảo mật, quyền truy cập của các tiện ích và thực thiện các tác vụ cơ bản.
oculate-open-link-in-glance = 
    .label = Mở liên kết trong xem nhanh
    .accesskey = G
oculate-sidebar-notification-updated-heading = Cập nhật hoàn tất!

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = Có gì mới trong { -brand-short-name }
oculate-sidebar-notification-updated-tooltip = 
    .title = Xem ghi chú phát hành
oculate-sidebar-notification-restart-safe-mode-label = Có lỗi xảy ra?
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = Khởi động lại ở Chế độ an toàn
oculate-window-sync-migration-dialog-title = Luôn đồng bộ các cửa sổ
oculate-window-sync-migration-dialog-message = Oculate hiện đã đồng bộ hóa các cửa sổ trên cùng một thiết bị, mọi thay đổi sẽ được cập nhật tức thì trên toàn bộ cửa sổ còn lại.
oculate-window-sync-migration-dialog-accept = Đã hiểu
oculate-appmenu-new-blank-window = 
    .label = Cửa sổ trống mới
