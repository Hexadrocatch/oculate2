# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = perfil atual
unified-extensions-description = As extensões são usadas para trazer funcionalidades adicionais para o { -brand-short-name }.
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] Repor Separador Essencial
           *[false] Repor Separador Fixado
        }
    .accesskey = R
tab-context-oculate-add-essential = 
    .label = Adicionar aos Essenciais
    .accesskey = E
tab-context-oculate-add-essential-badge = { $num } / { $max } espaços preenchidos
tab-context-oculate-remove-essential = 
    .label = Remover dos Essenciais
    .accesskey = R
tab-context-oculate-edit-pinned-page = 
    .label =
        { $isEssential ->
            [true] Editar URL Essencial
           *[false] Editar URL Fixo
        }
    .accesskey = P
tab-context-oculate-replace-pinned-url-with-current = 
    .label = Substituir por URL atual
    .accesskey = C
tab-context-oculate-edit-pinned-url = 
    .label = Editar…
    .accesskey = E
tab-context-oculate-edit-title = 
    .label = Alterar etiqueta...
tab-context-oculate-edit-icon = 
    .label = Alterar ícone...
oculate-themes-corrupted = O seu ficheiro de modificações do { -brand-short-name } está corrompido. Elas foram redefinidas como iguais às do tema padrão.
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification =
    A nova barra de URL foi ativada, removendo a necessidade de páginas de novo separador.<br/><br/>
    Experimente abrir um novo separador para ver a nova barra de URL em ação!
oculate-disable = Desativar
pictureinpicture-minimize-btn = 
    .aria-label = Minimizar
    .tooltip = Minimizar
oculate-panel-ui-gradient-generator-custom-color = Cor personalizada
oculate-copy-current-url-confirmation = URL atual copiado!
oculate-copy-current-url-as-markdown-confirmation = URL atual copiado em Markdown!
oculate-general-cancel-label = 
    .label = Cancelar
oculate-general-confirm = 
    .label = Confirmar
oculate-pinned-tab-replaced = O URL do separador fixado foi substituído pelo URL atual.
oculate-pinned-tab-url-edited = O URL do separador fixado foi atualizado!
oculate-pinned-tab-url-invalid = Isso não parece ser um URL válido.
oculate-pinned-tab-edit-url-title = Editar URL Fixado
oculate-pinned-tab-edit-url-label = Digite o URL que este separador fixo deve apontar para:
oculate-tabs-renamed = Nome do separador alterado com sucesso!
oculate-background-tab-opened-toast = Novo separador aberto em segundo plano!
oculate-workspace-renamed-toast = Nome do espaço de trabalho alterado com sucesso!
oculate-split-view-limit-toast = Não é possível adicionar mais painéis à vista dividida!
oculate-sidebar-drag-collapsed-toast = Sidebar hidden! Use <span>{ $shortcut }</span> to bring the sidebar back.
oculate-toggle-compact-mode-button = 
    .label = Modo Compacto
    .tooltiptext = Alternar Modo Compacto

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = Saber Mais
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
oculate-site-data-settings = Definições
oculate-generic-manage = Gerir
oculate-generic-more = Mais
oculate-generic-next = Seguinte
oculate-essentials-promo-label = Adicionar aos Essenciais
oculate-essentials-promo-sublabel = Mantenha os seus separadores favoritos a um clique de distância
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = Permitido
oculate-site-data-setting-block = Bloqueado
oculate-site-data-protections-enabled = Ativado
oculate-site-data-protections-disabled = Desativado
oculate-site-data-security-info-extension = 
    .label = Extensão
oculate-site-data-security-info-secure = 
    .label = Seguro
oculate-site-data-security-info-not-secure = 
    .label = Não Seguro
oculate-site-data-manage-addons = 
    .label = Gerir Extensões
oculate-site-data-get-addons = 
    .label = Adicionar Extensões
oculate-site-data-site-settings = 
    .label = Todas as Definições do Site
oculate-site-data-header-share = 
    .tooltiptext = Partilhar Esta Página
oculate-site-data-header-boost = 
    .tooltiptext = Create a Boost
oculate-site-data-header-reader-mode = 
    .tooltiptext = Entrar no Modo Leitura
oculate-site-data-header-screenshot = 
    .tooltiptext = Tirar uma Captura de Ecrã
oculate-site-data-header-bookmark = 
    .tooltiptext = Adicionar esta Página aos Favoritos
oculate-urlbar-copy-url-button = 
    .tooltiptext = Copiar URL
oculate-site-data-setting-site-protection = Proteção contra rastreio

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = Uma nova casa para extensões, permissões e mais
oculate-site-data-panel-feature-callout-subtitle = Clique no ícone para gerir definições do site, ver informações de segurança, extensões de acesso e executar ações comuns.
oculate-open-link-in-glance = 
    .label = Abrir Link no Glance
    .accesskey = G
oculate-sidebar-notification-updated-heading = Atualização Concluída!

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = O que há de novo no { -brand-short-name }
oculate-sidebar-notification-updated-tooltip = 
    .title = Ver Notas de Lançamento
oculate-sidebar-notification-restart-safe-mode-label = Falhou alguma coisa?
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = Reiniciar em Modo de Segurança
oculate-window-sync-migration-dialog-title = Mantenha As Suas Janelas Sincronizadas
oculate-window-sync-migration-dialog-message = Agora, o Oculate sincroniza as janelas no dispositivo, pelo que alterações numa janela são refletidas instantaneamente nas outras.
oculate-window-sync-migration-dialog-accept = Entendido
oculate-appmenu-new-blank-window = 
    .label = Nova janela sem sincronização
