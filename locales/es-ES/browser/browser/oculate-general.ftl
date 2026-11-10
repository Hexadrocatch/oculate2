# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-panel-ui-current-profile-text = perfil actual
unified-extensions-description = Las extensiones se utilizan para agregar más funcionalidades a { -brand-short-name }.
tab-context-oculate-reset-pinned-tab = 
    .label =
        { $isEssential ->
            [true] Restablecer pestaña esencial
           *[false] Restablecer pestaña fijada
        }
    .accesskey = R
tab-context-oculate-add-essential = 
    .label = Añadir a esenciales
    .accesskey = E
tab-context-oculate-add-essential-badge = { $num } / { $max } huecos llenos
tab-context-oculate-remove-essential = 
    .label = Quitar de esenciales
    .accesskey = R
tab-context-oculate-edit-pinned-page = 
    .label =
        { $isEssential ->
            [true] Editar URL esencial
           *[false] Editar URL fijada
        }
    .accesskey = P
tab-context-oculate-replace-pinned-url-with-current = 
    .label = Reemplazar con la URL actual
    .accesskey = C
tab-context-oculate-edit-pinned-url = 
    .label = Editar…
    .accesskey = E
tab-context-oculate-edit-title = 
    .label = Cambiar etiqueta...
tab-context-oculate-edit-icon = 
    .label = Cambiar icono...
oculate-themes-corrupted = Su archivo de mods de { -brand-short-name } está dañado. Se ha restablecido el tema por defecto.
# note: Do not translate the "<br/>" tags in the following string
oculate-new-urlbar-notification =
    Se ha habilitado la nueva barra de direcciones, eliminando la necesidad de la página de nueva pestaña.<br/><br/>
    ¡Pruebe a abrir una nueva pestaña para ver la nueva barra de direcciones en acción!
oculate-disable = Deshabilitar
pictureinpicture-minimize-btn = 
    .aria-label = Minimizar
    .tooltip = Minimizar
oculate-panel-ui-gradient-generator-custom-color = Color personalizado
oculate-copy-current-url-confirmation = ¡URL actual copiada!
oculate-copy-current-url-as-markdown-confirmation = ¡La URL actual se copió como Markdown!
oculate-general-cancel-label = 
    .label = Cancelar
oculate-general-confirm = 
    .label = Confirmar
oculate-pinned-tab-replaced = La URL de la pestaña fijada se ha reemplazado por la URL actual.
oculate-pinned-tab-url-edited = ¡La URL de la pestaña fijada ha sido actualizada!
oculate-pinned-tab-url-invalid = Eso no parece una URL válida.
oculate-pinned-tab-edit-url-title = Editar URL fijada
oculate-pinned-tab-edit-url-label = Introduzca la URL a la que debe apuntar esta pestaña fijada:
oculate-tabs-renamed = ¡La pestaña se ha renombrado con éxito!
oculate-background-tab-opened-toast = ¡Nueva pestaña abierta en segundo plano!
oculate-workspace-renamed-toast = ¡El espacio de trabajo ha sido renombrado con éxito!
oculate-split-view-limit-toast = ¡No se pueden añadir más paneles a la vista dividida!
oculate-sidebar-drag-collapsed-toast = ¡Barra lateral oculta! Use <span>{ $shortcut }</span> para volver a mostrar la barra lateral.
oculate-toggle-compact-mode-button = 
    .label = Modo compacto
    .tooltiptext = Alternar modo compacto

# note: Do not translate the "<br/>" tags in the following string

oculate-learn-more-text = Más información
oculate-close-label = Cerrar
oculate-singletoolbar-urlbar-placeholder-with-name = 
    .placeholder = Buscar...
oculate-icons-picker-emoji = 
    .label = Emojis
oculate-icons-picker-svg = 
    .label = Iconos
oculate-emojis-picker-search = 
    .placeholder = Buscar emojis
urlbar-search-mode-oculate_actions = Acciones
oculate-site-data-settings = Ajustes
oculate-generic-manage = Administrar
oculate-generic-more = Más
oculate-generic-next = Siguiente
oculate-essentials-promo-label = Añadir a esenciales
oculate-essentials-promo-sublabel = Mantenga sus pestañas favoritas a solo un clic de distancia
# These labels will be used for the site data panel settings
oculate-site-data-setting-allow = Permitido
oculate-site-data-setting-block = Bloqueado
oculate-site-data-protections-enabled = Activada
oculate-site-data-protections-disabled = Desactivada
oculate-site-data-security-info-extension = 
    .label = Extensión
oculate-site-data-security-info-secure = 
    .label = Seguro
oculate-site-data-security-info-not-secure = 
    .label = No seguro
oculate-site-data-manage-addons = 
    .label = Administrar extensiones
oculate-site-data-get-addons = 
    .label = Añadir extensión
oculate-site-data-site-settings = 
    .label = Todas las configuraciones del sitio
oculate-site-data-header-share = 
    .tooltiptext = Compartir esta página
oculate-site-data-header-boost = 
    .tooltiptext = Crear un Boost
oculate-site-data-header-reader-mode = 
    .tooltiptext = Entrar en modo lectura
oculate-site-data-header-screenshot = 
    .tooltiptext = Tomar una captura de pantalla
oculate-site-data-header-bookmark = 
    .tooltiptext = Añadir esta página a marcadores
oculate-urlbar-copy-url-button = 
    .tooltiptext = Copiar URL
oculate-site-data-setting-site-protection = Protección contra el rastreo

# Section: Feature callouts

oculate-site-data-panel-feature-callout-title = Un nuevo hogar para complementos, permisos y más
oculate-site-data-panel-feature-callout-subtitle = Haga clic en el icono para administrar la configuración del sitio, ver información de seguridad, acceder a extensiones, y realizar acciones comunes.
oculate-open-link-in-glance = 
    .label = Abrir enlace en Glance
    .accesskey = G
oculate-sidebar-notification-updated-heading = ¡Actualización completada!

# See OculateSidebarNotification.mjs to see how these would be used

oculate-sidebar-notification-updated-label = Novedades en { -brand-short-name }
oculate-sidebar-notification-updated-tooltip = 
    .title = Ver notas de la versión
oculate-sidebar-notification-restart-safe-mode-label = ¿Algo dejó de funcionar?
oculate-sidebar-notification-restart-safe-mode-tooltip = 
    .title = Reiniciar en modo seguro
oculate-window-sync-migration-dialog-title = Mantenga sus ventanas sincronizadas
oculate-window-sync-migration-dialog-message = Ahora Oculate sincroniza las ventanas en el mismo dispositivo, por lo que los cambios en una ventana se reflejan en las demás instantáneamente.
oculate-window-sync-migration-dialog-accept = Entendido
oculate-appmenu-new-blank-window = 
    .label = Nueva ventana en blanco
