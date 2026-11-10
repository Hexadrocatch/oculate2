/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const lazy = {};

ChromeUtils.defineLazyGetter(lazy, "l10n", () => {
  return new Localization(["browser/oculate-workspaces.ftl"], true);
});

ChromeUtils.defineESModuleGetters(
  lazy,
  { OculateLibrary: "moz-src:///oculate/library/OculateLibrary.mjs" },
  { global: "current" }
);

class nsOculateWorkspaceCreation extends MozXULElement {
  #wasInCollapsedMode = false;
  #urlbarDimmed = false;

  promiseInitialized = new Promise(resolve => {
    this.resolveInitialized = resolve;
  });

  #hiddenElements = [];

  static get elementsToDisable() {
    return [
      "cmd_oculateOpenWorkspacePanel",
      "cmd_oculateOpenWorkspaceCreation",
      "cmd_oculateOpenFolderCreation",
      "cmd_oculateToggleSidebar",
      "cmd_newNavigatorTab",
      "cmd_newNavigatorTabNoEvent",
    ];
  }

  static get markup() {
    return `
        <vbox class="oculate-workspace-creation" flex="1">
          <form>
            <vbox>
              <html:h1 data-l10n-id="oculate-workspace-creation-header" class="oculate-workspace-creation-title" />
              <html:div>
                <label data-l10n-id="oculate-workspace-creation-label" class="oculate-workspace-creation-label" />
              </html:div>
            </vbox>
            <vbox class="oculate-workspace-creation-form">
              <hbox class="oculate-workspace-creation-name-wrapper">
                <toolbarbutton class="oculate-workspace-creation-icon-label oculate-squircle-before" />
                <html:input
                  class="oculate-workspace-creation-name"
                  type="text"
                  data-l10n-id="oculate-workspace-creation-name" />
              </hbox>
              <hbox class="oculate-workspace-creation-profile-wrapper">
                <label class="oculate-workspace-creation-profile-label" data-l10n-id="oculate-workspace-creation-profile" />
                <button class="oculate-workspace-creation-profile" />
              </hbox>
              <button
                class="oculate-workspace-creation-edit-theme-button"
                data-l10n-id="oculate-workspaces-change-theme"
                command="cmd_oculateOpenOculateThemePicker" />
              <menupopup class="oculate-workspace-creation-profiles-popup" />
            </vbox>
            <vbox class="oculate-workspace-creation-buttons">
              <html:div>
                <button class="oculate-workspace-creation-create-button footer-button primary"
                  data-l10n-id="oculate-panel-ui-workspaces-create" disabled="true" />
              </html:div>
              <button class="oculate-workspace-creation-cancel-button footer-button"
                data-l10n-id="oculate-general-cancel-label" />
            </vbox>
          </form>
        </vbox>
      `;
  }

  get workspaceId() {
    return this.getAttribute("workspace-id");
  }

  get previousWorkspaceId() {
    return this.getAttribute("previous-workspace-id");
  }

  get elementsToAnimate() {
    return [
      this.querySelector(".oculate-workspace-creation-title"),
      this.querySelector(".oculate-workspace-creation-label").parentElement,
      this.querySelector(".oculate-workspace-creation-name-wrapper"),
      this.querySelector(".oculate-workspace-creation-profile-wrapper"),
      this.querySelector(".oculate-workspace-creation-edit-theme-button"),
      this.createButton.parentNode,
      this.cancelButton,
    ];
  }

  get #spaceSwitchDuration() {
    return (
      Services.prefs.getIntPref("oculate.workspaces.switch-animation-duration") /
      1000
    );
  }

  #dimUrlbar() {
    if (this.#urlbarDimmed || !gOculateVerticalTabsManager._hasSetSingleToolbar) {
      return;
    }
    this.#urlbarDimmed = true;
    const animation = gOculateUIManager.motion.animate(
      gURLBar,
      {
        opacity: [1, 0],
      },
      {
        duration: this.#spaceSwitchDuration,
        type: "spring",
        bounce: 0,
      }
    );
    if (gReduceMotion) {
      animation.complete();
    }
  }

  #restoreUrlbar() {
    if (!this.#urlbarDimmed) {
      return;
    }
    this.#urlbarDimmed = false;
    const animation = gOculateUIManager.motion.animate(
      gURLBar,
      {
        opacity: [0, 1],
      },
      {
        duration: this.#spaceSwitchDuration,
        type: "spring",
        bounce: 0,
      }
    );
    if (gReduceMotion) {
      animation.complete();
    }
    animation.then(() => {
      gURLBar.style.removeProperty("opacity");
    });
  }

  connectedCallback() {
    if (this.delayConnectedCallback()) {
      // If we are not ready yet, or if we have already connected, we
      // don't need to do anything.
      return;
    }

    lazy.OculateLibrary.close();
    this.appendChild(this.constructor.fragment);
    this.initializeAttributeInheritance();

    this.inputName = this.querySelector(".oculate-workspace-creation-name");
    this.inputIcon = this.querySelector(".oculate-workspace-creation-icon-label");
    this.inputProfile = this.querySelector(".oculate-workspace-creation-profile");
    this.createButton = this.querySelector(
      ".oculate-workspace-creation-create-button"
    );
    this.cancelButton = this.querySelector(
      ".oculate-workspace-creation-cancel-button"
    );

    this.#wasInCollapsedMode =
      document.documentElement.getAttribute("oculate-sidebar-expanded") !== "true";

    gNavToolbox.setAttribute("oculate-sidebar-expanded", "true");
    document.documentElement.setAttribute("oculate-sidebar-expanded", "true");

    window.docShell.treeOwner
      .QueryInterface(Ci.nsIInterfaceRequestor)
      .getInterface(Ci.nsIAppWindow)
      .rollupAllPopups();

    gURLBar.view.close();
    gURLBar.handleRevert();
    gURLBar.blur();

    this.handleOculateWorkspacesChangeBind =
      this.handleOculateWorkspacesChange.bind(this);

    for (const element of this.parentElement.children) {
      if (element !== this && !element.hidden) {
        element.hidden = true;
        this.#hiddenElements.push(element);
      }
    }

    for (const element of nsOculateWorkspaceCreation.elementsToDisable) {
      const el = document.getElementById(element);
      if (el) {
        el.setAttribute("disabled", "true");
      }
    }

    this.createButton.addEventListener(
      "command",
      this.onCreateButtonCommand.bind(this)
    );
    this.cancelButton.addEventListener(
      "command",
      this.onCancelButtonCommand.bind(this)
    );

    this.inputName.addEventListener("input", () => {
      this.createButton.disabled = !this.inputName.value.trim();
    });

    this.inputName.addEventListener("keydown", event => {
      if (event.key === "Enter") {
        event.preventDefault();
        event.stopPropagation();
        if (!this.createButton.disabled) {
          this.createButton.doCommand();
        }
      }
    });

    // Bound on the root so Esc works regardless of which child has focus
    // (name input, icon picker trigger, profile button, primary button).
    // Open popups consume Esc before it reaches us, so the emoji/profile
    // pickers still close as expected.
    this.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        this.cancelButton.doCommand();
      }
    });

    this.inputIcon.addEventListener("command", this.onIconCommand.bind(this));

    this.profilesPopup = this.querySelector(
      ".oculate-workspace-creation-profiles-popup"
    );

    if (gOculateWorkspaces.shouldShowContainers) {
      this.inputProfile.addEventListener(
        "command",
        this.onProfileCommand.bind(this)
      );
      this.profilesPopup.addEventListener(
        "popupshowing",
        this.onProfilePopupShowing.bind(this)
      );
      this.profilesPopup.addEventListener(
        "command",
        this.onProfilePopupCommand.bind(this)
      );

      this.currentProfile = {
        id: 0,
        name: lazy.l10n.formatValueSync("oculate-workspace-default-profile"),
      };
    } else {
      this.inputProfile.parentNode.hidden = true;
    }

    document.getElementById("oculate-sidebar-splitter").style.pointerEvents =
      "none";
    this.#dimUrlbar();
    this.resolveInitialized();
  }

  disconnectedCallback() {
    if (gOculateWorkspaces.creatingWorkspaceId === this.workspaceId) {
      gOculateWorkspaces.creatingWorkspaceId = null;
    }
  }

  async onCreateButtonCommand() {
    const workspace = gOculateWorkspaces.getActiveWorkspace();
    workspace.name = this.inputName.value.trim();
    workspace.icon = this.inputIcon.image || this.inputIcon.label || undefined;
    workspace.containerTabId = this.currentProfile ?? 0;
    await gOculateWorkspaces.saveWorkspace(workspace);

    await this.#cleanup();

    gOculateWorkspaces._organizeWorkspaceStripLocations(workspace, true);
    gOculateWorkspaces.updateTabsContainers();

    gBrowser.tabContainer._invalidateCachedTabs();
  }

  async onCancelButtonCommand() {
    document.documentElement.removeAttribute("oculate-creating-workspace");
    this.#restoreUrlbar();
    await gOculateWorkspaces.changeWorkspaceWithID(this.previousWorkspaceId);
  }

  onIconCommand(event) {
    gOculateEmojiPicker.open(event.target, {
      closeOnSelect: false,
      onSelect: async icon => {
        const isSvg = icon && icon.endsWith(".svg");
        if (isSvg) {
          this.inputIcon.label = "";
          this.inputIcon.image = icon;
          this.inputIcon.setAttribute("has-svg-icon", "true");
        } else {
          this.inputIcon.image = "";
          this.inputIcon.label = icon || "";
          this.inputIcon.removeAttribute("has-svg-icon");
        }
      },
    });
  }

  set currentProfile(profile) {
    this.inputProfile.label = profile.name;
    this._profileId = profile.id;
  }

  get currentProfile() {
    return this._profileId;
  }

  onProfileCommand(event) {
    this.profilesPopup.openPopup(event.target, "after_start");
  }

  onProfilePopupShowing(event) {
    window.createUserContextMenu(event, {
      isContextMenu: true,
      showDefaultTab: true,
      showManageContainers: false,
    });

    const defaultItem = event.target.querySelector('[data-usercontextid="0"]');
    if (defaultItem) {
      defaultItem.removeAttribute("data-l10n-id");
      defaultItem.label = lazy.l10n.formatValueSync(
        "oculate-workspace-default-profile"
      );
    }
  }

  onProfilePopupCommand(event) {
    let userContextId = parseInt(
      event.target.getAttribute("data-usercontextid")
    );
    if (isNaN(userContextId)) {
      return;
    }
    this.currentProfile = {
      id: userContextId,
      name: event.target.label,
    };
  }

  finishSetup() {
    this.inputName.focus();
    gOculateWorkspaces.addChangeListeners(this.handleOculateWorkspacesChangeBind, {
      once: true,
    });
  }

  async handleOculateWorkspacesChange() {
    // The space we were living in has already slid away, no need to animate
    // ourselves out of it.
    await this.#cleanup({ animateOut: false });
    await gOculateWorkspaces.removeWorkspace(this.workspaceId);
  }

  async #cleanup({ animateOut = true } = {}) {
    if (animateOut && !gReduceMotion && this.isConnected) {
      await gOculateUIManager.motion.animate(
        this.elementsToAnimate.reverse(),
        {
          y: [0, 20],
          opacity: [1, 0],
          filter: ["blur(0)", "blur(2px)"],
        },
        {
          duration: 0.3,
          type: "spring",
          bounce: 0,
          delay: gOculateUIManager.motion.stagger(0.03),
        }
      );
    }

    document.getElementById("oculate-sidebar-splitter").style.pointerEvents = "";

    gOculateWorkspaces.removeChangeListeners(this.handleOculateWorkspacesChangeBind);
    for (const element of this.constructor.elementsToDisable) {
      const el = document.getElementById(element);
      if (el) {
        el.removeAttribute("disabled");
      }
    }

    if (this.#wasInCollapsedMode) {
      gNavToolbox.removeAttribute("oculate-sidebar-expanded");
      document.documentElement.removeAttribute("oculate-sidebar-expanded");
    }

    document.documentElement.removeAttribute("oculate-creating-workspace");

    this.remove();
    this.#restoreUrlbar();

    // Give the space back its own contents.
    const revealedElements = this.#hiddenElements;
    this.#hiddenElements = [];
    for (const element of revealedElements) {
      element.hidden = false;
    }

    // Now that the form is gone the space owns its essentials again, so let
    // it lay itself out before we fade everything back in.
    const workspace = gOculateWorkspaces.getActiveWorkspace();
    gOculateWorkspaces._organizeWorkspaceStripLocations(workspace);
    gOculateWorkspaces.updateTabsContainers();
    // The essentials were parked off screen while we were up, put them back.
    gOculateWorkspaces.resetEssentialsPosition();

    if (animateOut && !gReduceMotion) {
      const elementsToReveal = revealedElements.filter(
        element => element?.isConnected
      );
      if (elementsToReveal.length) {
        gOculateUIManager.motion
          .animate(
            elementsToReveal,
            {
              opacity: [0, 1],
            },
            {
              duration: 0.3,
              type: "spring",
              bounce: 0,
            }
          )
          .then(() => {
            for (const element of elementsToReveal) {
              element.style.removeProperty("opacity");
            }
          });
      }
    }

    gOculateUIManager.updateTabsToolbar();
  }
}

customElements.define("oculate-workspace-creation", nsOculateWorkspaceCreation);
