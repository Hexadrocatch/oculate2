/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

class nsOculateWorkspaceIcons extends MozXULElement {
  #hasConnected = false;

  connectedCallback() {
    if (this.delayConnectedCallback() || this.#hasConnected) {
      return;
    }

    this.#hasConnected = true;
    window.addEventListener("OculateWorkspacesUIUpdate", this, true);

    this.initDragAndDrop();
    this.addEventListener("mouseover", e => {
      if (e.shiftKey || this.isReorderMode) {
        return;
      }
      const target = e.target.closest("toolbarbutton[oculate-workspace-id]");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", inline: "nearest" });
      }
    });
  }

  initDragAndDrop() {
    let dragStart = 0;
    let draggedTab = null;

    this.addEventListener("mousedown", e => {
      const target = e.target.closest("toolbarbutton[oculate-workspace-id]");
      if (!target || e.button != 0 || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }

      const isVertical =
        document.documentElement.getAttribute("oculate-sidebar-expanded") != "true";
      const clientPos = isVertical ? "clientY" : "clientX";

      this.isReorderMode = false;
      dragStart = e[clientPos];
      draggedTab = target;
      draggedTab.setAttribute("dragged", "true");

      e.stopPropagation();

      const mouseMoveHandler = moveEvent => {
        if (Math.abs(moveEvent[clientPos] - dragStart) > 5) {
          this.isReorderMode = true;
        }

        if (this.isReorderMode) {
          const tabs = [...this.children];
          const mouse = moveEvent[clientPos];

          for (const tab of tabs) {
            if (tab === draggedTab) {
              continue;
            }
            const rect = tab.getBoundingClientRect();
            if (
              mouse > rect[isVertical ? "top" : "left"] &&
              mouse < rect[isVertical ? "bottom" : "right"]
            ) {
              const nextSibling = draggedTab.nextSibling;
              if (
                mouse <
                rect[isVertical ? "top" : "left"] +
                  rect[isVertical ? "height" : "width"] / 2
              ) {
                this.insertBefore(draggedTab, tab);
              } else {
                this.insertBefore(draggedTab, tab.nextSibling);
              }
              if (nextSibling !== draggedTab.nextSibling) {
                /* eslint-disable mozilla/valid-services */
                Services.oculate.playHapticFeedback();
              }
            }
          }
        }
      };

      const mouseUpHandler = () => {
        document.removeEventListener("mousemove", mouseMoveHandler);
        document.removeEventListener("mouseup", mouseUpHandler);

        draggedTab.removeAttribute("dragged");

        this.reorderWorkspaceToIndex(
          draggedTab,
          Array.from(this.children).indexOf(draggedTab)
        );

        draggedTab = null;
        this.isReorderMode = false;
      };

      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler);
    });
  }

  #createWorkspaceIcon(workspace) {
    const button = document.createXULElement("toolbarbutton");
    button.setAttribute("class", "subviewbutton toolbarbutton-1");
    button.setAttribute("oculate-workspace-id", workspace.uuid);
    button.setAttribute("context", "oculateWorkspaceMoreActions");
    button.addEventListener("command", this);
    this.#updateWorkspaceIcon(button, workspace);
    return button;
  }

  /**
   * Syncs the parts of a workspace button that can change between updates, so
   * an existing button can be reused instead of rebuilt.
   *
   * @param {Element} button - The button standing in for the workspace
   * @param {object} workspace - The workspace it represents
   */
  #updateWorkspaceIcon(button, workspace) {
    button.setAttribute("tooltiptext", workspace.name);

    const isSvgIcon = !!workspace.icon?.endsWith(".svg");
    const hasIcon = gOculateWorkspaces.workspaceHasIcon(workspace);

    let image = button.querySelector("img.oculate-workspace-icon");
    if (hasIcon && isSvgIcon) {
      if (!image) {
        image = document.createElement("img");
        image.classList.add("oculate-workspace-icon");
        button.appendChild(image);
      }
      if (image.getAttribute("src") !== workspace.icon) {
        image.src = workspace.icon;
      }
    } else {
      image?.remove();
    }

    let icon = button.querySelector("label.oculate-workspace-icon");
    if (isSvgIcon) {
      icon?.remove();
      return;
    }
    if (!icon) {
      icon = document.createXULElement("label");
      icon.setAttribute("class", "oculate-workspace-icon no-squircles");
      button.appendChild(icon);
    }
    if (hasIcon) {
      icon.removeAttribute("no-icon");
      icon.textContent = workspace.icon;
    } else {
      icon.setAttribute("no-icon", true);
      icon.textContent = "";
    }
  }

  async #updateIcons() {
    const workspaces = gOculateWorkspaces.getWorkspaces();
    const reusable = new Map();
    for (const button of this.children) {
      const uuid = button.getAttribute("oculate-workspace-id");
      if (uuid) {
        reusable.set(uuid, button);
      }
    }

    let slot = this.firstElementChild;
    for (const workspace of workspaces) {
      const existing = reusable.get(workspace.uuid);
      if (existing) {
        reusable.delete(workspace.uuid);
        this.#updateWorkspaceIcon(existing, workspace);
      }
      const button = existing ?? this.#createWorkspaceIcon(workspace);
      if (button === slot) {
        slot = slot.nextElementSibling;
      } else if (existing) {
        this.moveBefore(button, slot);
      } else {
        this.insertBefore(button, slot);
      }
    }
    for (const button of reusable.values()) {
      button.remove();
    }

    if (workspaces.length <= 1) {
      this.setAttribute("dont-show", "true");
    } else {
      this.removeAttribute("dont-show");
    }
    gOculateWorkspaces.onWindowResize();
  }

  on_command(event) {
    const button = event.target;
    const uuid = button.getAttribute("oculate-workspace-id");
    if (uuid) {
      gOculateWorkspaces.changeWorkspaceWithID(uuid);
    }
  }

  async on_OculateWorkspacesUIUpdate(event) {
    await this.#updateIcons();
    this.activeIndex = event.detail.activeIndex;
  }

  set activeIndex(uuid) {
    const buttons = this.querySelectorAll("toolbarbutton");
    if (!buttons.length) {
      return;
    }
    let i = 0;
    let selected = -1;
    for (const button of buttons) {
      if (button.getAttribute("oculate-workspace-id") == uuid) {
        selected = i;
      } else if (button.hasAttribute("active")) {
        button.removeAttribute("active");
      }
      i++;
    }
    if (selected == -1) {
      return;
    }
    buttons[selected].setAttribute("active", true);
    window.promiseDocumentFlushed(() => {
      buttons[selected].scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
      });
    });
    this.setAttribute("selected", selected);
  }

  get activeIndex() {
    const selected = this.getAttribute("selected");
    const buttons = this.querySelectorAll("toolbarbutton");
    let i = 0;
    for (const button of buttons) {
      if (i == selected) {
        return button.getAttribute("oculate-workspace-id");
      }
      i++;
    }
    return null;
  }

  get isReorderMode() {
    return this.hasAttribute("reorder-mode");
  }

  set isReorderMode(value) {
    if (value) {
      this.setAttribute("reorder-mode", "true");
    } else {
      this.removeAttribute("reorder-mode");
      this.style.removeProperty("--oculate-workspace-icon-width");
      this.style.removeProperty("--oculate-workspace-icon-height");
    }
  }

  reorderWorkspaceToIndex(draggedTab, index) {
    const workspaceId = draggedTab.getAttribute("oculate-workspace-id");
    gOculateWorkspaces.reorderWorkspace(workspaceId, index);
  }
}

customElements.define("oculate-workspace-icons", nsOculateWorkspaceIcons);
