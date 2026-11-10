# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = perfil atual
unified-extensions-description = As extensões são usadas para trazer mais recursos adicionais para o { -brand-short-name }.
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] Reiniciar Aba Essencial
           *[false] Reiniciar Aba Fixada
        }
    .accesskey = R
tab-context-oculate-add-essential = 
    .label = Adicionar aos Essenciais
    .accesskey = E
tab-context-oculate-add-essential-badge = { $num } / { $max } Espaços preenchidos
tab-context-oculate-remove-essential = 
    .label = Remover dos Essenciais
    .accesskey = R
tab-context-oculate-edit-pinned-page = 
    .label =
        { $isEssential ->
            [true] Editar URL Essencial
           *[false] Editar URL Fixada
        }
    .accesskey = P
tab-context-oculate-replace-pinned-url-with-current = 
    .label = Substituir por URL atual
    .accesskey = C
tab-context-oculate-edit-pinned-url = 
    .label = Editar…
    .accesskey = E
tab-context-oculate-edit-title = 
    .label = Alterar Rótulo...
tab-context-oculate-edit-icon = 
    .label = Alterar Ícone...
oculate-themes-corrupted = Seu arquivo de modificações { -brand-short-name } está corrompido. Eles foram redefinidos para o tema padrão.
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification = A nova barra de URL foi ativada, removendo a necessidade de novas páginas de guia.<br/><br/>Tente abrir uma nova guia para ver a nova barra de URL em ação!
oculate-disable = Desativar
pictureinpicture-minimize-btn = 
    .aria-label = Minimizar
    .tooltip = Minimizar
oculate-panel-ui-gradient-generator-custom-color = Cor Personalizada
oculate-copy-current-url-confirmation = URL atual copiada!
oculate-copy-current-url-as-markdown-confirmation = URL atual copiada como Markdown!
oculate-general-cancel-label = 
    .label = Cancelar
oculate-general-confirm = 
    .label = Confirmar
oculate-pinned-tab-replaced = A URL da aba fixada foi substituída pela URL atual!
oculate-pinned-tab-url-edited = A URL da aba fixada foi atualizada!
oculate-pinned-tab-url-invalid = Isso não parece ser uma URL válida.
oculate-pinned-tab-edit-url-title = Editar URL Fixada
oculate-pinned-tab-edit-url-label = Digite a URL que esta aba fixada deve apontar para:
oculate-tabs-renamed = A aba foi renomeada com sucesso!
oculate-background-tab-opened-toast = Nova aba em segundo plano aberta!
oculate-workspace-renamed-toast = A área de trabalho foi renomeada com sucesso!
oculate-split-view-limit-toast = Não é possível adicionar mais painéis à visualização dividida!
oculate-sidebar-drag-collapsed-toast = Barra lateral oculta! Use <span>{ $shortcut }</span> para trazer a barra lateral de volta.
oculate-toggle-compact-mode-button = 
    .label = Modo Compacto
    .tooltiptext = Alternar Modo Compacto

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = Saiba Mais
oculate-close-label = Fechar
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = Pesquisar...
oculate-icons-picker-emoji = 
    .label = Emojis
oculate-icons-picker-svg = 
    .label = Ícones
oculate-emojis-picker-search = 
    .placeholder = Procurar emojis
urlbar-search-mode-oculate_actions = Ações
oculate-site-data-settings = Configurações
oculate-generic-manage = Gerenciar
oculate-generic-more = Mais
oculate-generic-next = Próximo
oculate-essentials-promo-label = Adicionar aos Essenciais
oculate-essentials-promo-sublabel = Mantenha suas abas favoritas a um clique de distância
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = Permitido
oculate-site-data-setting-block = Bloqueado
oculate-site-data-protections-enabled = Habilitado
oculate-site-data-protections-disabled = Desabilitado
oculate-site-data-security-info-extension = 
    .label = Extensão
oculate-site-data-security-info-secure = 
    .label = Seguro
oculate-site-data-security-info-not-secure = 
    .label = Não seguro
oculate-site-data-manage-addons = 
    .label = Gerenciar Extensões
oculate-site-data-get-addons = 
    .label = Adicionar Extensões
oculate-site-data-site-settings = 
    .label = Todas as Configurações do Site
oculate-site-data-header-share = 
    .tooltiptext = Compartilhar Esta Página
oculate-site-data-header-boost = 
    .tooltiptext = Criar um Boost
oculate-site-data-header-reader-mode = 
    .tooltiptext = Entrar no Modo Leitura
oculate-site-data-header-screenshot = 
    .tooltiptext = Tirar Captura de Tela
oculate-site-data-header-bookmark = 
    .tooltiptext = Marcar Esta Página
oculate-urlbar-copy-url-button = 
    .tooltiptext = Copiar URL
oculate-site-data-setting-site-protection = Proteção contra Rastreamento

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = Um novo lar para extensões, permissões e mais
oculate-site-data-panel-feature-callout-subtitle = Clique no ícone para gerenciar configurações do site, visualizar informações de segurança, acessar extensões e realizar ações comuns.
oculate-open-link-in-glance = 
    .label = Abrir Link no Glance
    .accesskey = G
oculate-sidebar-notification-updated-heading = Atualização Completa!

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = O que há de novo em { -brand-short-name }
oculate-sidebar-notification-updated-tooltip = 
    .title = Ver Notas da Versão
oculate-sidebar-notification-restart-safe-mode-label = Algo quebrou?
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = Reiniciar no Modo Seguro
oculate-window-sync-migration-dialog-title = Mantenha Suas Janelas em Sincronia
oculate-window-sync-migration-dialog-message = Oculate agora sincroniza as janelas no mesmo dispositivo, assim as mudanças feitas em uma janela são refletidas para as outras instantaneamente.
oculate-window-sync-migration-dialog-accept = Entendi
oculate-appmenu-new-blank-window = 
    .label = Nova janela em branco
