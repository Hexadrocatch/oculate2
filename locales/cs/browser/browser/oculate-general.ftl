# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = aktuální profil
unified-extensions-description = Rozšíření slouží k přidání dalších funkcí do prohlížeče { -brand-short-name }.
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] Resetovat Essential panel
           *[false] Resetovat připnutý panel
        }
    .accesskey = R
tab-context-oculate-add-essential = 
    .label = Přidat do Essentials
    .accesskey = E
tab-context-oculate-add-essential-badge = { $num } / { $max } zaplněných slotů
tab-context-oculate-remove-essential = 
    .label = Odstranit z Essentials
    .accesskey = R
tab-context-oculate-edit-pinned-page = 
    .label =
        { $isEssential ->
            [true] Edit Essential URL
           *[false] Edit Pinned URL
        }
    .accesskey = P
tab-context-oculate-replace-pinned-url-with-current = 
    .label = Nahradit současnou URL
    .accesskey = C
tab-context-oculate-edit-pinned-url = 
    .label = Upravit…
    .accesskey = E
tab-context-oculate-edit-title = 
    .label = Změnit název...
tab-context-oculate-edit-icon = 
    .label = Změnit ikonu...
oculate-themes-corrupted = Váš { -brand-short-name } mods soubor je poškozen. Byl obnoven na výchozí motiv.
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification =
    Nový adresní řádek je nyní zapnutý, takže už není potřeba otevírat nové karty.<br/><br/>
    Zkuste otevřít nový panel a podívejte se, jak funguje!
oculate-disable = Zavřít
pictureinpicture-minimize-btn = 
    .aria-label = Minimalizovat
    .tooltip = Minimalizovat
oculate-panel-ui-gradient-generator-custom-color = Vlastní barva
oculate-copy-current-url-confirmation = URL adresa byla zkopírována!
oculate-copy-current-url-as-markdown-confirmation = Kopírovat aktuální URL jako Markdown!
oculate-general-cancel-label = 
    .label = Zrušit
oculate-general-confirm = 
    .label = Potvrdit
oculate-pinned-tab-replaced = Připnutá URL adresa panelu byla nahrazena aktuální URL adresou.
oculate-pinned-tab-url-edited = URL připnuté karty byla aktualizována!
oculate-pinned-tab-url-invalid = To nevypadá jako platná URL adresa.
oculate-pinned-tab-edit-url-title = Upravit připnutou adresu URL
oculate-pinned-tab-edit-url-label = Zadejte URL, na kterou by měl tento připnutý panel odkazovat:
oculate-tabs-renamed = Panel byl úspěšně přejmenován!
oculate-background-tab-opened-toast = Nový panel na pozadí byl otevřen!
oculate-workspace-renamed-toast = Pracovní prostor byl úspěšně přejmenován!
oculate-split-view-limit-toast = Do rozděleného zobrazení nelze přidat více panelů!
oculate-sidebar-drag-collapsed-toast = Sidebar hidden! Use <span>{ $shortcut }</span> to bring the sidebar back.
oculate-toggle-compact-mode-button = 
    .label = Kompaktní režim
    .tooltiptext = Přepnout kompaktní režim

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = Zjistit více
oculate-close-label = Zavřít
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = Hledat...
oculate-icons-picker-emoji = 
    .label = Emodži
oculate-icons-picker-svg = 
    .label = Ikony
oculate-emojis-picker-search = 
    .placeholder = Vyhledat emoji
urlbar-search-mode-oculate_actions = Akce
oculate-site-data-settings = Nastavení
oculate-generic-manage = Spravovat
oculate-generic-more = Více
oculate-generic-next = Další
oculate-essentials-promo-label = Přídat do Essentials
oculate-essentials-promo-sublabel = Mějte oblíbené panely na dosah jedním kliknutím
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = Povoleno
oculate-site-data-setting-block = Blokováno
oculate-site-data-protections-enabled = Zapnuto
oculate-site-data-protections-disabled = Vypnuto
oculate-site-data-security-info-extension = 
    .label = Rozšíření
oculate-site-data-security-info-secure = 
    .label = Bezpečné
oculate-site-data-security-info-not-secure = 
    .label = Nezabezpečeno
oculate-site-data-manage-addons = 
    .label = Spravovat rozšíření
oculate-site-data-get-addons = 
    .label = Přidat rozšíření
oculate-site-data-site-settings = 
    .label = Nastavení všech stránek
oculate-site-data-header-share = 
    .tooltiptext = Sdílet tuto stránku
oculate-site-data-header-boost = 
    .tooltiptext = Create a Boost
oculate-site-data-header-reader-mode = 
    .tooltiptext = Zapnout čtecí režim
oculate-site-data-header-screenshot = 
    .tooltiptext = Pořídit snímek obrazovky
oculate-site-data-header-bookmark = 
    .tooltiptext = Přidat tuto stránku do záložek
oculate-urlbar-copy-url-button = 
    .tooltiptext = Kopírovat URL
oculate-site-data-setting-site-protection = Ochrana proti sledování

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = Nový domov pro doplňky, oprávnění a další
oculate-site-data-panel-feature-callout-subtitle = Klikněte na ikonu pro správu nastavení webu, zobrazení bezpečnostních informací, přístup k rozšíření a provádění běžných akcí.
oculate-open-link-in-glance = 
    .label = Otevřít odkaz v Glance
    .accesskey = G
oculate-sidebar-notification-updated-heading = Aktualizace byla dokončena!

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = Co je nového v prohlížeči { -brand-short-name }
oculate-sidebar-notification-updated-tooltip = 
    .title = Zobrazit změny
oculate-sidebar-notification-restart-safe-mode-label = Něco se rozbilo?
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = Restartovat v Nouzovém Režimu
oculate-window-sync-migration-dialog-title = Mějte svá okna synchronizovaná
oculate-window-sync-migration-dialog-message = Oculate nyní synchronizuje okna na stejném zařízení. Změny provedené v jednom okně se okamžitě projeví v ostatních.
oculate-window-sync-migration-dialog-accept = Rozumím
oculate-appmenu-new-blank-window = 
    .label = Nové prázdné okno
