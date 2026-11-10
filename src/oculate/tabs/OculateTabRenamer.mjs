// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import { nsOculateDOMOperatedFeature } from "chrome://browser/content/oculate-components/OculateCommonUtils.mjs";

/**
 * Inline renaming of sidebar labels.
 */
class nsOculateTabRenamer extends nsOculateDOMOperatedFeature {
  /** The element being renamed, or null. */
  #edited = null;

  init() {
    document
      .getElementById("tabbrowser-tabs")
      .addEventListener("dblclick", event => this.start(event));
  }

  get #input() {
    return document.getElementById("tab-label-input");
  }

  /**
   * Starts renaming the label targeted by the event.
   *
   * @param {Event|{target: Element, explicit?: boolean}} event - The dblclick
   *   or context menu command, or an object naming the label to edit.
   *   `explicit` allows renaming folder labels, which dblclick does not.
   */
  start(event) {
    let target = event.target;
    if (event.target.id === "context_oculate-edit-tab-title") {
      target = TabContextMenu.contextTab;
    }
    const isTab = !!target.closest(".tabbrowser-tab");
    if (
      this.#edited ||
      ((!Services.prefs.getBoolPref("oculate.tabs.rename-tabs") ||
        (Services.prefs.getBoolPref("browser.tabs.closeTabByDblclick") &&
          event.type === "dblclick")) &&
        isTab) ||
      !gOculateVerticalTabsManager._prefsSidebarExpanded
    ) {
      return;
    }
    if (
      isTab &&
      !target.closest(".tab-label-container") &&
      event.type === "dblclick"
    ) {
      return;
    }
    this.#edited =
      target.closest(".tabbrowser-tab") ||
      target.closest(".oculate-current-workspace-indicator-name") ||
      (event.explicit && target.closest(".tab-group-label"));
    if (
      !this.#edited ||
      (this.#edited.hasAttribute("oculate-essential") && isTab)
    ) {
      this.#edited = null;
      return;
    }
    gOculateFolders.cancelPopupTimer();
    event.stopPropagation?.();
    document.documentElement.setAttribute("oculate-renaming-tab", "true");
    const label = isTab
      ? this.#edited.querySelector(".tab-label-container")
      : this.#edited;
    label.classList.add("tab-label-container-editing");

    if (isTab) {
      const container = window.MozXULElement.parseXULToFragment(`
        <vbox class="tab-label-container tab-editor-container" flex="1" align="start" pack="center"></vbox>
      `);
      label.after(container);
    }
    const input = document.createElement("input");
    const content = isTab ? this.#edited.label : this.#edited.textContent;
    input.id = "tab-label-input";
    input._originalValue = content;
    input.value = content;
    input.addEventListener("keydown", event => this.#onKeydown(event));

    if (isTab) {
      this.#edited.querySelector(".tab-editor-container").appendChild(input);
    } else {
      this.#edited.after(input);
    }
    input.focus();
    input.setSelectionRange(0, input.value.length, "backward");
    input.scrollLeft = 0;

    input.addEventListener("blur", event => this.#halt(event));
  }

  async #onKeydown(event) {
    event.stopPropagation();
    if (event.key === "Escape") {
      this.#cancel();
      return;
    }
    if (event.key !== "Enter") {
      return;
    }
    const edited = this.#edited;
    const isTab = !!event.target.closest(".tabbrowser-tab");
    const label = isTab
      ? edited.querySelector(".tab-label-container-editing")
      : edited;
    const input = this.#input;
    const newName = input.value.replace(/\s+/g, " ").trim();
    const hasChanged = input.value !== input._originalValue && newName;

    document.documentElement.removeAttribute("oculate-renaming-tab");
    input.remove();
    if (!isTab) {
      await edited.onRenameFinished(newName);
    } else {
      // Always set or clear the static label so an empty name resets to the
      // page title.
      if (hasChanged || (edited.oculateStaticLabel && newName)) {
        edited.oculateStaticLabel = newName;
        gBrowser._setTabLabel(edited, newName, { _oculateChangeLabelFlag: true });
        gOculateUIManager.showToast("oculate-tabs-renamed");
      } else {
        delete edited.oculateStaticLabel;
        gBrowser.setTabTitle(edited);
      }

      gOculateUIManager.motion.animate(
        edited,
        { scale: [1, 0.98, 1] },
        { duration: 0.25 }
      );
    }

    edited.querySelector(".tab-editor-container")?.remove();
    label.classList.remove("tab-label-container-editing");
    this.#edited = null;
  }

  #halt(event) {
    if (document.activeElement === event.target || !this.#edited) {
      return;
    }
    this.#cancel();
  }

  /** Tears the editor down without applying a new name. */
  #cancel() {
    if (!this.#edited) {
      return;
    }
    document.documentElement.removeAttribute("oculate-renaming-tab");
    this.#input?.remove();
    this.#edited.querySelector(".tab-editor-container")?.remove();
    const isTab = !!this.#edited.closest(".tabbrowser-tab");
    const label = isTab
      ? this.#edited.querySelector(".tab-label-container-editing")
      : this.#edited;
    label?.classList.remove("tab-label-container-editing");
    this.#edited = null;
  }
}

window.gOculateTabRenamer = new nsOculateTabRenamer();
