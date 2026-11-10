/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/* eslint-disable consistent-return */

const lazy = {};

XPCOMUtils.defineLazyPreferenceGetter(
  lazy,
  "COMPACT_MODE_FLASH_DURATION",
  "oculate.view.compact.toolbar-flash-popup.duration",
  800
);

XPCOMUtils.defineLazyPreferenceGetter(
  lazy,
  "COMPACT_MODE_FLASH_ENABLED",
  "oculate.view.compact.toolbar-flash-popup",
  true
);

XPCOMUtils.defineLazyPreferenceGetter(
  lazy,
  "COMPACT_MODE_CAN_ANIMATE_SIDEBAR",
  "oculate.view.compact.animate-sidebar",
  true
);

XPCOMUtils.defineLazyPreferenceGetter(
  lazy,
  "COMPACT_MODE_SHOW_SIDEBAR_AND_TOOLBAR_ON_HOVER",
  "oculate.view.compact.show-sidebar-and-toolbar-on-hover",
  true
);

// Distance (in CSS pixels) the mouse can travel past the window bounds after
// leaving the window before the hovered element is collapsed
XPCOMUtils.defineLazyPreferenceGetter(
  lazy,
  "COMPACT_MODE_OUTSIDE_WINDOW_HORIZONTAL_OFFSET",
  "oculate.view.compact.outside-window-edge-offset.horizontal",
  250
);

XPCOMUtils.defineLazyPreferenceGetter(
  lazy,
  "COMPACT_MODE_OUTSIDE_WINDOW_VERTICAL_OFFSET",
  "oculate.view.compact.outside-window-edge-offset.vertical",
  150
);

XPCOMUtils.defineLazyServiceGetter(
  lazy,
  "oculateMouseTracker",
  "@mozilla.org/oculate/mouse-tracker;1",
  Ci.nsIOculateMouseTracker
);

ChromeUtils.defineLazyGetter(lazy, "mainAppWrapper", () =>
  document.getElementById("oculate-main-app-wrapper")
);

ChromeUtils.defineESModuleGetters(
  lazy,
  { OculateLibrary: "moz-src:///oculate/library/OculateLibrary.mjs" },
  { global: "current" }
);

window.gOculateCompactModeManager = {
  _flashTimeouts: {},
  _removeHoverFrames: {},

  // Delay to avoid flickering when hovering over the sidebar
  HOVER_HACK_DELAY: Services.prefs.getIntPref(
    "oculate.view.compact.hover-hack-delay",
    0
  ),

  preInit() {
    this._wasInCompactMode = Services.prefs.getBoolPref(
      "oculate.view.compact.enable-at-startup",
      false
    );
    this._canDebugLog = Services.prefs.getBoolPref(
      "oculate.view.compact.debug",
      false
    );

    this.addContextMenu();
  },

  init() {
    this.addMouseActions();

    const tabIsRightObserver = this._updateSidebarIsOnRight.bind(this);
    Services.prefs.addObserver(
      "oculate.tabs.vertical.right-side",
      tabIsRightObserver
    );

    const outsideMouseTrackerExitObserver =
      this._onOutsideMouseTrackerExit.bind(this);
    Services.obs.addObserver(
      outsideMouseTrackerExitObserver,
      "oculate-mouse-tracker:exited"
    );

    window.addEventListener(
      "unload",
      () => {
        this._stopTrackingMouseOutsideWindow();
        Services.obs.removeObserver(
          outsideMouseTrackerExitObserver,
          "oculate-mouse-tracker:exited"
        );
        Services.prefs.removeObserver(
          "oculate.tabs.vertical.right-side",
          tabIsRightObserver
        );
      },
      { once: true }
    );

    gOculateUIManager.addPopupTrackingAttribute(this.sidebar);
    gOculateUIManager.addPopupTrackingAttribute(
      document.getElementById("oculate-appcontent-navbar-wrapper")
    );

    this.addHasPolyfillObserver();

    // Clear hover states when window state changes (minimize, maximize, etc.)
    window.addEventListener("sizemodechange", () =>
      this._clearAllHoverStates()
    );

    // Hide any element kept open by the outside mouse tracking as soon as the
    // window loses focus
    window.addEventListener("deactivate", () => this._collapseTrackedElement());

    this._canShowBackgroundTabToast = Services.prefs.getBoolPref(
      "oculate.view.compact.show-background-tab-toast",
      true
    );

    SessionStore.promiseAllWindowsRestored.then(() => {
      this.preference = this._wasInCompactMode;
    });
  },

  log(...args) {
    if (this._canDebugLog) {
      // eslint-disable-next-line no-console
      console.debug("[Oculate Compact Mode]", ...args);
    }
  },

  get preference() {
    return document.documentElement.getAttribute("oculate-compact-mode") === "true";
  },

  get shouldBeCompact() {
    return !document.documentElement.hasAttribute("popup-window");
  },

  set preference(value) {
    if (lazy.OculateLibrary.isLibrarySlightlyOpen) {
      return;
    }
    if (!this.shouldBeCompact) {
      value = false;
    }
    this.log("Setting compact mode preference to", value);
    if (
      this.preference === value ||
      document.documentElement.hasAttribute("oculate-compact-animating")
    ) {
      if (typeof this._wasInCompactMode !== "undefined") {
        // We wont do anything with it anyway, so we remove it
        delete this._wasInCompactMode;
      }
      delete this._ignoreNextHover;
      // We dont want the user to be able to spam the button
      return;
    }
    delete this._isTabBeingDragged;
    this._stopTrackingMouseOutsideWindow();
    this.sidebar.removeAttribute("oculate-user-show");
    this._updateEvent();
  },

  get sidebarIsOnRight() {
    if (typeof this._sidebarIsOnRight !== "undefined") {
      return this._sidebarIsOnRight;
    }
    this._sidebarIsOnRight = Services.prefs.getBoolPref(
      "oculate.tabs.vertical.right-side"
    );
    return this._sidebarIsOnRight;
  },

  get sidebar() {
    return gNavToolbox;
  },

  addHasPolyfillObserver() {
    const attributes = [
      "panelopen",
      "open",
      "breakout-extend",
      "oculate-floating-urlbar",
    ];
    this.sidebarObserverId = OculateHasPolyfill.observeSelectorExistence(
      this.sidebar,
      [
        {
          selector:
            ":where([panelopen], [open], [breakout-extend])" +
            ":not(#urlbar[oculate-floating-urlbar='true']):not(tab):not(.oculate-compact-mode-ignore)",
        },
      ],
      "oculate-compact-mode-active",
      attributes
    );
    this.toolbarObserverId = OculateHasPolyfill.observeSelectorExistence(
      document.getElementById("oculate-appcontent-navbar-wrapper"),
      [
        {
          selector:
            ":where([panelopen], [open], #urlbar:focus-within, [breakout-extend])" +
            ":not(.oculate-compact-mode-ignore)",
        },
      ],
      "oculate-compact-mode-active",
      attributes
    );
    // Always connect this observer, we need it even if compact mode is disabled
    OculateHasPolyfill.connectObserver(this.toolbarObserverId);
  },

  flashSidebarIfNecessary(aInstant = false) {
    // This function is called after exiting DOM fullscreen mode,
    // so we do a bit of a hack to re-calculate the URL height
    if (aInstant) {
      gOculateVerticalTabsManager.recalculateURLBarHeight(true);
    }
    if (
      !aInstant &&
      this.preference &&
      lazy.COMPACT_MODE_FLASH_ENABLED &&
      !gOculateGlanceManager._animating
    ) {
      this.flashSidebar();
    }
  },

  addContextMenu() {
    const fragment = window.MozXULElement.parseXULToFragment(`
      <menu id="oculate-context-menu-compact-mode" data-l10n-id="oculate-toolbar-context-compact-mode">
        <menupopup>
          <menuitem id="oculate-context-menu-compact-mode-toggle" data-l10n-id="oculate-toolbar-context-compact-mode-enable" type="checkbox" command="cmd_oculateCompactModeToggle"/>
          <menuseparator/>
          <menuitem id="oculate-context-menu-compact-mode-hide-sidebar" data-l10n-id="oculate-toolbar-context-compact-mode-just-tabs" type="radio" />
          <menuitem id="oculate-context-menu-compact-mode-hide-toolbar" data-l10n-id="oculate-toolbar-context-compact-mode-just-toolbar" type="radio" />
          <menuitem id="oculate-context-menu-compact-mode-hide-both" data-l10n-id="oculate-toolbar-context-compact-mode-hide-both" type="radio" />
        </menupopup>
      </menu>
      <menuseparator />
    `);

    const idToAction = {
      "oculate-context-menu-compact-mode-hide-sidebar": this.hideSidebar.bind(this),
      "oculate-context-menu-compact-mode-hide-toolbar": this.hideToolbar.bind(this),
      "oculate-context-menu-compact-mode-hide-both": this.hideBoth.bind(this),
    };

    for (let menuitem of fragment.querySelectorAll("menuitem")) {
      if (menuitem.id in idToAction) {
        menuitem.addEventListener("command", idToAction[menuitem.id]);
      }
    }

    document.getElementById("toolbar-context-menu").prepend(fragment);
    this.updateContextMenu();
  },

  updateCompactModeContext(isSingleToolbar) {
    const isIllegalState = this.checkIfIllegalState();
    const menuitem = document.getElementById(
      "oculate-context-menu-compact-mode-toggle"
    );
    const menu = document.getElementById("oculate-context-menu-compact-mode");
    if (!menu) {
      return;
    }
    if (isSingleToolbar) {
      menu.setAttribute("hidden", "true");
      menu.before(menuitem);
    } else {
      menu.removeAttribute("hidden");
      menu.querySelector("menupopup").prepend(menuitem);
    }
    const hideToolbarMenuItem = document.getElementById(
      "oculate-context-menu-compact-mode-hide-toolbar"
    );
    if (isIllegalState) {
      hideToolbarMenuItem.setAttribute("disabled", "true");
    } else {
      hideToolbarMenuItem.removeAttribute("disabled");
    }
  },

  hideSidebar() {
    Services.prefs.setBoolPref("oculate.view.compact.hide-tabbar", true);
    Services.prefs.setBoolPref("oculate.view.compact.hide-toolbar", false);
    this._dispatchLayoutUpdate();
  },

  hideToolbar() {
    Services.prefs.setBoolPref("oculate.view.compact.hide-toolbar", true);
    Services.prefs.setBoolPref("oculate.view.compact.hide-tabbar", false);
    this._dispatchLayoutUpdate();
  },

  hideBoth() {
    Services.prefs.setBoolPref("oculate.view.compact.hide-tabbar", true);
    Services.prefs.setBoolPref("oculate.view.compact.hide-toolbar", true);
    this._dispatchLayoutUpdate();
  },

  /**
   * Check for illegal states and fix them
   *
   * @returns {boolean} If the context menu should just show the "toggle" item
   *    instead of a submenu with hide options
   */
  checkIfIllegalState() {
    // Due to how we layout the sidebar and toolbar, there are some states
    // that are not allowed mainly due to the caption buttons not being accessible
    // at the top left/right of the window.
    const isSidebarExpanded = gOculateVerticalTabsManager._prefsSidebarExpanded;
    if (isSidebarExpanded) {
      // Fast exit if the sidebar is expanded, as we dont have illegal states then
      return false;
    }
    const canHideSidebar = this.canHideSidebar;
    const canHideToolbar = this.canHideToolbar;
    const isLeftSideButtons = !gOculateVerticalTabsManager.isWindowsStyledButtons;
    const isRightSidebar = gOculateVerticalTabsManager._prefsRightSide;
    // on macos: collapsed + left side + only toolbar
    // on windows: collapsed + right side + only toolbar
    const closelyIllegalState =
      (isLeftSideButtons && !isRightSidebar) ||
      (!isLeftSideButtons && isRightSidebar);
    if (closelyIllegalState && canHideToolbar && !canHideSidebar) {
      // This state is illegal
      Services.prefs.setBoolPref("oculate.view.compact.hide-tabbar", true);
      Services.prefs.setBoolPref("oculate.view.compact.hide-toolbar", false);
      this._dispatchLayoutUpdate();
      return true;
    }
    return closelyIllegalState;
  },

  /**
   * Tells the rest of the window that the compact mode layout changed, either
   * because compact mode was toggled or because which toolbars it hides
   * changed.
   */
  _dispatchLayoutUpdate() {
    window.dispatchEvent(new CustomEvent("OculateCompactMode:LayoutUpdate"));
  },

  async _updateEvent() {
    const value = !this.preference;
    const setAttrs = () => {
      // We use this element in order to make it persis across restarts, by using the XULStore.
      // main-window can't store attributes other than window sizes, so we use this instead
      lazy.mainAppWrapper.setAttribute("oculate-compact-mode", value);
      document.documentElement.setAttribute("oculate-compact-mode", value);
      if (typeof this._wasInCompactMode === "undefined") {
        Services.prefs.setBoolPref("oculate.view.compact.enable-at-startup", value);
      }
    };
    const isUrlbarFocused = gURLBar.focused;
    // IF we are animating IN, call the callbacks first so we can calculate the width
    // once the window buttons are shown
    gOculateWorkspaces._processingResize = true;
    if (!this.preference) {
      setAttrs();
      this._dispatchLayoutUpdate();
      await this.animateCompactMode(value);
    } else {
      await this.animateCompactMode(value);
      setAttrs();
      this._dispatchLayoutUpdate();
    }
    this.updateContextMenu();
    gOculateWorkspaces._processingResize = false;
    if (isUrlbarFocused) {
      gURLBar.focus();
    }
    if (this.preference) {
      OculateHasPolyfill.connectObserver(this.sidebarObserverId);
    } else {
      OculateHasPolyfill.disconnectObserver(this.sidebarObserverId);
    }
    window.dispatchEvent(
      new CustomEvent("OculateCompactMode:Toggled", { detail: this.preference })
    );
  },

  get canHideSidebar() {
    return (
      Services.prefs.getBoolPref("oculate.view.compact.hide-tabbar") ||
      gOculateVerticalTabsManager._hasSetSingleToolbar
    );
  },

  get canHideToolbar() {
    return (
      Services.prefs.getBoolPref("oculate.view.compact.hide-toolbar") &&
      !gOculateVerticalTabsManager._hasSetSingleToolbar
    );
  },

  animateCompactMode(isCompactMode) {
    return new Promise(resolve => {
      document.documentElement.setAttribute("oculate-compact-animating", "true");
      const canHideSidebar = this.canHideSidebar;
      let canAnimate =
        lazy.COMPACT_MODE_CAN_ANIMATE_SIDEBAR &&
        !this.isSidebarPotentiallyOpen() &&
        !this._preventAnimateCollapse;
      delete this._preventAnimateCollapse;
      if (typeof this._wasInCompactMode !== "undefined") {
        canAnimate = false;
        delete this._wasInCompactMode;
      }
      // Do this so we can get the correct width ONCE compact mode styled have been applied
      if (canAnimate) {
        this.sidebar.setAttribute("animate", "true");
      } else {
        this.sidebar.style.transition = "none";
      }
      if (this._ignoreNextHover) {
        this._setElementExpandAttribute(this.sidebar, false);
      }
      this.sidebar.style.removeProperty("margin-right");
      this.sidebar.style.removeProperty("margin-left");
      this.sidebar.style.removeProperty("transform");
      let sidebarWidth = window.windowUtils.getBoundsWithoutFlushing(
        this.sidebar
      ).width;
      const elementSeparation = OculateThemeModifier.elementSeparation;
      if (!canAnimate) {
        this.sidebar.removeAttribute("animate");
        document.documentElement.removeAttribute("oculate-compact-animating");

        setTimeout(() => {
          this.sidebar.style.transition = "";
          delete this._ignoreNextHover;
        }, 500);

        resolve();
        return;
      }
      sidebarWidth -= elementSeparation * (isCompactMode ? 1 : 3);
      if (canHideSidebar && isCompactMode) {
        this._setElementExpandAttribute(this.sidebar, false);
        gOculateUIManager.motion
          .animate(
            this.sidebar,
            {
              marginRight: [
                0,
                this.sidebarIsOnRight ? `-${sidebarWidth}px` : 0,
              ],
              marginLeft: [0, this.sidebarIsOnRight ? 0 : `-${sidebarWidth}px`],
            },
            {
              ease: "easeIn",
              type: "spring",
              bounce: 0,
              duration: 0.1,
            }
          )
          .then(() => {
            this.sidebar.style.transition = "none";
            this.sidebar.style.pointEvents = "none";
            this.sidebar.removeAttribute("animate");

            if (this._ignoreNextHover) {
              setTimeout(() => {
                delete this._ignoreNextHover;
              });
            }

            document.documentElement.removeAttribute("oculate-compact-animating");
            this.sidebar.style.removeProperty("margin-right");
            this.sidebar.style.removeProperty("margin-left");
            this.sidebar.style.removeProperty("transform");
            this.sidebar.style.removeProperty("point-events");

            requestAnimationFrame(() => {
              this.sidebar.style.removeProperty("transition");
            });

            resolve();
          });
      } else if (canHideSidebar && !isCompactMode) {
        // Shouldn't be ever true, but just in case
        delete this._ignoreNextHover;
        document.getElementById("browser").style.overflow = "clip";
        if (this.sidebarIsOnRight) {
          this.sidebar.style.marginRight = `-${sidebarWidth}px`;
        } else {
          this.sidebar.style.marginLeft = `-${sidebarWidth}px`;
        }
        gOculateUIManager.motion
          .animate(
            this.sidebar,
            this.sidebarIsOnRight
              ? {
                  marginRight: [`-${sidebarWidth}px`, 0],
                  transform: ["translateX(100%)", "translateX(0)"],
                }
              : { marginLeft: [`-${sidebarWidth}px`, 0] },
            {
              ease: "easeOut",
              type: "spring",
              bounce: 0,
              duration: 0.1,
            }
          )
          .then(() => {
            this.sidebar.removeAttribute("animate");
            document.getElementById("browser").style.removeProperty("overflow");
            this.sidebar.style.transition = "none";
            this.sidebar.style.removeProperty("margin-right");
            this.sidebar.style.removeProperty("margin-left");
            this.sidebar.style.removeProperty("transform");
            document.documentElement.removeAttribute("oculate-compact-animating");
            setTimeout(() => {
              this.sidebar.style.removeProperty("transition");
            });
            resolve();
          });
      } else {
        this.sidebar.removeAttribute("animate"); // remove the attribute if we are not animating
        document.documentElement.removeAttribute("oculate-compact-animating");
        delete this._ignoreNextHover;
        resolve();
      }
    });
  },

  updateContextMenu() {
    const toggle = document.getElementById(
      "oculate-context-menu-compact-mode-toggle"
    );
    if (!toggle) {
      return;
    }
    toggle.toggleAttribute("checked", this.preference);

    const hideTabBar = this.canHideSidebar;
    const hideToolbar = this.canHideToolbar;
    const hideBoth = hideTabBar && hideToolbar;

    const idName = "oculate-context-menu-compact-mode-hide-";
    const sidebarItem = document.getElementById(idName + "sidebar");
    const toolbarItem = document.getElementById(idName + "toolbar");
    const bothItem = document.getElementById(idName + "both");
    sidebarItem.toggleAttribute("checked", !hideBoth && hideTabBar);
    toolbarItem.toggleAttribute("checked", !hideBoth && hideToolbar);
    bothItem.toggleAttribute("checked", hideBoth);
  },

  _removeOpenStateOnUnifiedExtensions() {
    // Fix for bug https://github.com/Hexadrocatch/oculate2/issues/1925
    const buttons = document.querySelectorAll(
      "toolbarbutton:is(#unified-extensions-button, .webextension-browser-action)"
    );
    for (let button of buttons) {
      button.removeAttribute("open");
    }
  },

  toggle(ignoreHover = false) {
    // Only ignore the next hover when we are enabling compact mode
    this._ignoreNextHover = ignoreHover && !this.preference;
    return (this.preference = !this.preference);
  },

  _updateSidebarIsOnRight() {
    this._sidebarIsOnRight = Services.prefs.getBoolPref(
      "oculate.tabs.vertical.right-side"
    );
  },

  toggleSidebar() {
    this.sidebar.toggleAttribute("oculate-user-show");
  },

  get hideAfterHoverDuration() {
    if (this._hideAfterHoverDuration) {
      return this._hideAfterHoverDuration;
    }
    return Services.prefs.getIntPref(
      "oculate.view.compact.toolbar-hide-after-hover.duration"
    );
  },

  get hoverableElements() {
    return [
      {
        element: this.sidebar,
        screenEdge: this.sidebarIsOnRight ? "right" : "left",
        keepHoverDuration: Services.prefs.getIntPref(
          "oculate.view.compact.sidebar-keep-hover.duration"
        ),
      },
      {
        element: document.getElementById("oculate-appcontent-navbar-wrapper"),
        screenEdge: "top",
      },
      {
        element: gOculateVerticalTabsManager.actualWindowButtons,
      },
    ];
  },

  flashSidebar(duration = lazy.COMPACT_MODE_FLASH_DURATION) {
    let tabPanels = document.getElementById("tabbrowser-tabpanels");
    if (!tabPanels.matches("[oculate-split-view='true']")) {
      this.flashElement(this.sidebar, duration, this.sidebar.id);
    }
  },

  flashElement(element, duration, id, attrName = "flash-popup") {
    if (this._flashTimeouts[id]) {
      clearTimeout(this._flashTimeouts[id]);
    } else {
      requestAnimationFrame(() =>
        this._setElementExpandAttribute(element, true, attrName)
      );
    }
    this._flashTimeouts[id] = setTimeout(() => {
      window.requestAnimationFrame(() => {
        this._setElementExpandAttribute(element, false, attrName);
        this._flashTimeouts[id] = null;
      });
    }, duration);
  },

  clearFlashTimeout(id) {
    clearTimeout(this._flashTimeouts[id]);
    this._flashTimeouts[id] = null;
  },

  _setElementExpandAttribute(element, value, attr = "oculate-has-hover") {
    const kVerifiedAttributes = [
      "oculate-has-hover",
      "has-popup-menu",
      "oculate-compact-mode-active",
    ];
    const isToolbar = element.id === "oculate-appcontent-navbar-wrapper";
    this.log("Setting", attr, "to", value, "on element", element?.id);
    if (value) {
      if (attr === "oculate-has-hover") {
        if (element === gOculateVerticalTabsManager.actualWindowButtons) {
          window.addEventListener(
            "mouseover",
            event => {
              if (
                event.target.closest(".titlebar-buttonbox-container") ===
                gOculateVerticalTabsManager.actualWindowButtons
              ) {
                return;
              }
              this._setElementExpandAttribute(
                gOculateVerticalTabsManager.actualWindowButtons,
                false
              );
            },
            { once: true }
          );
        } else {
          element.setAttribute("oculate-has-implicit-hover", "true");
          if (!lazy.COMPACT_MODE_SHOW_SIDEBAR_AND_TOOLBAR_ON_HOVER) {
            return;
          }
        }
      }
      element.setAttribute(attr, "true");
      if (
        isToolbar &&
        ((gOculateVerticalTabsManager._hasSetSingleToolbar &&
          (element.hasAttribute("should-hide") ||
            document.documentElement.hasAttribute("oculate-has-bookmarks"))) ||
          (this.preference &&
            Services.prefs.getBoolPref("oculate.view.compact.hide-toolbar") &&
            !gOculateVerticalTabsManager._hasSetSingleToolbar))
      ) {
        gBrowser.tabpanels.setAttribute("has-toolbar-hovered", "true");
      }
    } else {
      if (attr === "oculate-has-hover") {
        if (element === this._outsideTrackedElement) {
          this._stopTrackingMouseOutsideWindow();
        }
        element.removeAttribute("oculate-has-implicit-hover");
        gURLBar.updateTextOverflow();
      }
      element.removeAttribute(attr);
      // Only remove if none of the verified attributes are present
      if (
        isToolbar &&
        !kVerifiedAttributes.some(verifiedAttr =>
          element.hasAttribute(verifiedAttr)
        )
      ) {
        gBrowser.tabpanels.removeAttribute("has-toolbar-hovered");
      }
    }
  },

  addMouseActions() {
    gURLBar.addEventListener("mouseenter", event => {
      this.log("Mouse entered URL bar:", event.target);
      if (event.target.closest("#urlbar[oculate-floating-urlbar]")) {
        this._hasHoveredUrlbar = true;
      }
    });

    for (let i = 0; i < this.hoverableElements.length; i++) {
      let target = this.hoverableElements[i].element;
      let pendingEnter = null;
      let isHovering = false;

      // Add the attribute on startup if the mouse is already over the element
      if (target.matches(":hover")) {
        this._setElementExpandAttribute(target, true);
      }

      const onEnter = event => {
        isHovering = true;
        this.clearFlashTimeout("has-hover" + target.id);
        if (target.hasAttribute("oculate-has-hover")) {
          return;
        }
        if (pendingEnter) {
          clearTimeout(pendingEnter);
        }
        pendingEnter = setTimeout(() => {
          pendingEnter = null;
          if (!isHovering) {
            return;
          }
          if (event.target.closest("panel")) {
            return;
          }
          if (
            document.documentElement.getAttribute(
              "supress-primary-adjustment"
            ) === "true" ||
            this._hasHoveredUrlbar ||
            this._ignoreNextHover ||
            target.hasAttribute("oculate-has-hover")
          ) {
            return;
          }
          this._setElementExpandAttribute(target, true);
        }, this.HOVER_HACK_DELAY);
      };

      const onLeave = event => {
        isHovering = false;
        if (AppConstants.platform == "macosx") {
          const buttonRect = window.windowUtils.getBoundsWithoutFlushing(
            gOculateVerticalTabsManager.actualWindowButtons
          );
          const MAC_WINDOW_BUTTONS_X_BORDER = buttonRect.width + buttonRect.x;
          const MAC_WINDOW_BUTTONS_Y_BORDER = buttonRect.height + buttonRect.y;
          if (
            event.clientX < MAC_WINDOW_BUTTONS_X_BORDER &&
            event.clientY < MAC_WINDOW_BUTTONS_Y_BORDER &&
            event.clientX > buttonRect.x &&
            event.clientY > buttonRect.y
          ) {
            return;
          }
        }

        // See bug https://bugzilla.mozilla.org/show_bug.cgi?id=1979340 and issue https://github.com/Hexadrocatch/oculate2/issues/7746.
        // If we want the toolbars to be draggable, we need to make sure to check the hover state after a short delay.
        // This is because the mouse is left to be handled natively so firefox thinks the mouse left the window for a split second.
        setTimeout(() => {
          if (isHovering || target.matches(":hover")) {
            return;
          }
          if (pendingEnter) {
            clearTimeout(pendingEnter);
            pendingEnter = null;
            return;
          }

          if (
            event.explicitOriginalTarget?.closest?.(
              "#urlbar[oculate-floating-urlbar]"
            ) ||
            (document.documentElement.getAttribute(
              "supress-primary-adjustment"
            ) === "true" &&
              gOculateVerticalTabsManager._hasSetSingleToolbar) ||
            this._ignoreNextHover ||
            (event.type === "dragleave" &&
              event.explicitOriginalTarget !== target &&
              target.contains?.(event.explicitOriginalTarget))
          ) {
            return;
          }

          if (this._isTabBeingDragged) {
            return;
          }

          if (
            !target.hasAttribute("oculate-has-implicit-hover") &&
            !target.hasAttribute("oculate-has-hover")
          ) {
            return;
          }

          if (
            this.hoverableElements[i].keepHoverDuration &&
            !this._hasHoveredUrlbar &&
            target.hasAttribute("oculate-has-hover")
          ) {
            this.flashElement(
              target,
              this.hoverableElements[i].keepHoverDuration,
              "has-hover" + target.id,
              "oculate-has-hover"
            );
          } else {
            this._removeHoverFrames[target.id] = window.requestAnimationFrame(
              () => this._setElementExpandAttribute(target, false)
            );
          }
        }, this.HOVER_HACK_DELAY);
      };

      target.addEventListener("mouseover", onEnter);
      target.addEventListener("dragover", onEnter);

      target.addEventListener("mouseleave", onLeave);
      target.addEventListener("dragleave", onLeave);
    }

    document.documentElement.addEventListener("mouseleave", event => {
      setTimeout(() => {
        const screenEdgeCrossed = this._getCrossedEdge(
          event.pageX,
          event.pageY
        );
        if (!screenEdgeCrossed) {
          return;
        }
        for (let entry of this.hoverableElements) {
          if (screenEdgeCrossed !== entry.screenEdge) {
            continue;
          }
          const target = entry.element;
          const boundAxis =
            entry.screenEdge === "right" || entry.screenEdge === "left"
              ? "y"
              : "x";
          if (
            !this._positionInBounds(
              boundAxis,
              target,
              event.pageX,
              event.pageY,
              7
            )
          ) {
            continue;
          }
          window.cancelAnimationFrame(this._removeHoverFrames[target.id]);

          if (!this._trackMouseOutsideWindow(entry.screenEdge, target)) {
            // We can't track the mouse position outside of the window on
            // this platform, fall back to hiding after a fixed duration
            this.flashElement(
              target,
              this.hideAfterHoverDuration,
              "has-hover" + target.id,
              "oculate-has-hover"
            );
          }
          document.addEventListener(
            "mousemove",
            () => {
              if (target.matches(":hover")) {
                return;
              }
              // Closing the element also stops the outside mouse tracking
              this._setElementExpandAttribute(target, false);
              this.clearFlashTimeout("has-hover" + target.id);
            },
            { once: true }
          );
        }
      }, this.HOVER_HACK_DELAY);
    });

    gURLBar.addEventListener("mouseleave", () => {
      setTimeout(() => {
        setTimeout(() => {
          requestAnimationFrame(() => {
            delete this._hasHoveredUrlbar;
          });
        }, 10);
      }, 0);
    });
  },

  _getCrossedEdge(
    posX,
    posY,
    element = document.documentElement,
    maxDistance = 10
  ) {
    const targetBox = element.getBoundingClientRect();
    posX = Math.max(targetBox.left, Math.min(posX, targetBox.right));
    posY = Math.max(targetBox.top, Math.min(posY, targetBox.bottom));
    return ["top", "bottom", "left", "right"].find((edge, i) => {
      const distance = Math.abs((i < 2 ? posY : posX) - targetBox[edge]);
      return distance <= maxDistance;
    });
  },

  _positionInBounds(axis = "x", element, x, y, error = 0) {
    const bBox = element.getBoundingClientRect();
    if (axis === "y") {
      return bBox.top - error < y && y < bBox.bottom + error;
    }
    return bBox.left - error < x && x < bBox.right + error;
  },

  _trackMouseOutsideWindow(screenEdge, target) {
    this._stopTrackingMouseOutsideWindow();
    const maxEdgeOffset =
      screenEdge === "left" || screenEdge === "right"
        ? lazy.COMPACT_MODE_OUTSIDE_WINDOW_HORIZONTAL_OFFSET
        : lazy.COMPACT_MODE_OUTSIDE_WINDOW_VERTICAL_OFFSET;
    try {
      lazy.oculateMouseTracker.registerWindow(window, screenEdge, maxEdgeOffset);
    } catch (e) {
      // The platform can't track the global mouse position (e.g. Linux)
      return false;
    }
    this._outsideTrackedElement = target;
    this.clearFlashTimeout("has-hover" + target.id);
    window.requestAnimationFrame(() => {
      if (this._outsideTrackedElement === target) {
        this._setElementExpandAttribute(target, true);
      }
    });
    return true;
  },

  _stopTrackingMouseOutsideWindow() {
    const target = this._outsideTrackedElement;
    if (!target) {
      return;
    }
    this._outsideTrackedElement = null;
    lazy.oculateMouseTracker.unregisterWindow(window);
  },

  _collapseTrackedElement() {
    const target = this._outsideTrackedElement;
    if (!target) {
      return;
    }
    // Closing the element also unregisters us from the mouse tracker
    this._setElementExpandAttribute(target, false);
    this.clearFlashTimeout("has-hover" + target.id);
  },

  _onOutsideMouseTrackerExit(subject) {
    if (subject === window) {
      this._collapseTrackedElement();
    }
  },

  _clearAllHoverStates() {
    this._stopTrackingMouseOutsideWindow();
    // Clear hover attributes from all hoverable elements
    for (let entry of this.hoverableElements) {
      const target = entry.element;
      if (
        target &&
        !target.matches(":hover") &&
        target.hasAttribute("oculate-has-hover")
      ) {
        this._setElementExpandAttribute(target, false);
        this.clearFlashTimeout("has-hover" + target.id);
      }
    }
  },

  isSidebarPotentiallyOpen() {
    if (this._ignoreNextHover) {
      this._setElementExpandAttribute(this.sidebar, false);
    }
    return (
      this.sidebar.hasAttribute("oculate-user-show") ||
      this.sidebar.hasAttribute("oculate-has-hover") ||
      this.sidebar.hasAttribute("oculate-has-empty-tab")
    );
  },

  async _onTabOpen(tab, inBackground, beforeRouteResult = {}) {
    const isSidebarHidden = this.preference && !this.isSidebarPotentiallyOpen();

    if (
      inBackground &&
      (isSidebarHidden || beforeRouteResult.isRouteFound) &&
      this._canShowBackgroundTabToast &&
      !gOculateGlanceManager._animating &&
      !this._nextTimeWillBeActive
    ) {
      const isTabRoutedToCurrentSpace =
        beforeRouteResult.targetRoute === gOculateWorkspaces.activeWorkspace;
      // Do not show the toast if the sidebar is not hidden and
      // the tab is being routed to the current space
      if (!isSidebarHidden && isTabRoutedToCurrentSpace) {
        return;
      }

      let messageId = "oculate-background-tab-opened-toast";
      let toastOptions = {
        button: {
          id: "oculate-open-background-tab-button",
          command: () => {
            const targetWindow = window.parent || window;
            targetWindow.gBrowser.selectedTab = tab;
          },
        },
      };

      if (beforeRouteResult.isRouteFound && !isTabRoutedToCurrentSpace) {
        messageId = "oculate-space-routing-tab-routed-toast";
        toastOptions = {
          l10nArgs: { targetWorkspace: beforeRouteResult.targetWorkspaceName },
        };
      }

      gOculateUIManager.showToast(messageId, toastOptions);
    }
    delete this._nextTimeWillBeActive;
  },
};

document.addEventListener(
  "MozBeforeInitialXULLayout",
  () => {
    gOculateCompactModeManager.preInit();
  },
  { once: true }
);
