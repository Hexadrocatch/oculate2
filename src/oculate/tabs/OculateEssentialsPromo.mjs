/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const TAG_NAME = "oculate-essentials-promo";

// Even though its costly, we need to update the pinned height
// whenever the promo is added or removed, to avoid any flickering.
function updatePinnedHeight() {
  gOculateWorkspaces.updateTabsContainers();
}

class nsOculateEssentialsPromo extends MozXULElement {
  #hasConnected = false;

  static markup = `
    <image src="${gOculateEmojiPicker.getSVGURL("heart.svg")}" />
    <label data-l10n-id="oculate-essentials-promo-label" class="oculate-essentials-promo-title"></label>
    <label data-l10n-id="oculate-essentials-promo-sublabel" class="oculate-essentials-promo-sublabel"></label>
  `;

  connectedCallback() {
    if (this.delayConnectedCallback() || this.#hasConnected) {
      return;
    }

    this.appendChild(this.constructor.fragment);
    this.classList.add("oculate-drop-target");
    this.#hasConnected = true;
  }

  remove() {
    const section = this.parentElement;
    if (section) {
      delete section.essentialsPromo;
    }
    super.remove();
    updatePinnedHeight();
  }
}

/**
 * Create and append the Oculate Essentials promo element to the given container.
 *
 * @param {number|undefined} container - The container to append the promo to.
 *  If undefined, appends to the current workspace's tab strip.
 * @returns {"created"|"shown"|false} - "created" if the promo was created and appended,
 *  "exists" if the promo already exists, or false if the section is not empty.
 */
export function createOculateEssentialsPromo(container = undefined) {
  if (container === undefined) {
    container = gOculateWorkspaces.getCurrentSpaceContainerId();
  }
  const section = gOculateWorkspaces.getEssentialsSection(container);
  if (!section || section.essentialsPromo) {
    return "shown";
  }
  if (section.children.length) {
    return false;
  }
  const element = document.createXULElement(TAG_NAME);
  section.appendChild(element);
  section.essentialsPromo = element;
  // Trigger re-calculation of pinned height to avoid any flickering
  void section.offsetHeight;
  updatePinnedHeight();
  return "created";
}

customElements.define(TAG_NAME, nsOculateEssentialsPromo);
