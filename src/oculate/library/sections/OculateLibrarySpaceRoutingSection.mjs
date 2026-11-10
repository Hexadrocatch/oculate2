/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  html,
  nothing,
  repeat,
  when,
} from "chrome://global/content/vendor/lit.all.mjs";
import { OculateLibrarySearchSection } from "moz-src:///oculate/library/sections/OculateLibrarySearchSection.mjs";

let lazy = {};

ChromeUtils.defineESModuleGetters(lazy, {
  gOculateSpaceRoutingManager:
    "resource:///modules/oculate/spacerouting/OculateSpaceRoutingManager.sys.mjs",
});

const PANEL_FADE_MS = 300;
const MOST_RECENT_SPACE = "most-recent-space";

const MATCH_TYPES = [
  { id: "contains", l10nId: "library-space-routing-contains" },
  { id: "equal-to", l10nId: "library-space-routing-equal-to" },
  { id: "regex", l10nId: "library-space-routing-regex" },
];

export class OculateLibrarySpaceRoutingSection extends OculateLibrarySearchSection {
  static id = "space-routing";
  static label = "library-space-routing-section-title";

  static render(library) {
    return html`
      <oculate-library-space-routing-section
        class="oculate-library-section"
        data-section="space-routing"
        .library=${library}
      ></oculate-library-space-routing-section>
    `;
  }

  static properties = {
    routes: { state: true },
    draft: { state: true },
  };

  constructor() {
    super();
    this.routes = [];
    this.draft = null;
  }

  #draftTimer = null;
  #picker = null;
  #pickerOnPick = null;
  #pickerAnchor = null;

  connectedCallback() {
    super.connectedCallback();
    this.#load();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#picker?.remove();
    this.#picker = null;
    this.#cancelDraftTimer();
  }

  get searchPlaceholderL10nId() {
    return "library-space-routing-search-placeholder";
  }

  onSearchChanged() {
    this.requestUpdate();
  }

  onShown() {
    super.onShown();
    // Routes can be added from a tab's menu while the library is elsewhere.
    this.#load();
  }

  onLibraryOpened() {
    super.onLibraryOpened();
    this.#load();
  }

  #load() {
    this.routes = lazy.gOculateSpaceRoutingManager.getAllRoutes();
  }

  /** @returns {object[]} The spaces a route can send a link to */
  get #spaces() {
    return window.gOculateWorkspaces.getWorkspaces();
  }

  /**
   * @param {string} openIn - What a route holds as its destination
   * @returns {object|null} The space it stands for, null for the one that
   *   is no space of its own
   */
  #space(openIn) {
    return this.#spaces.find(candidate => candidate.uuid === openIn) ?? null;
  }

  /**
   * @param {string} openIn - What a route holds as its destination
   * @returns {string} The name of the space it stands for, empty for the
   *   one that is not a space of its own
   */
  #spaceName(openIn) {
    return this.#space(openIn)?.name ?? "";
  }

  /**
   * A space is known by its icon, which is a picture for some and a glyph
   * for others. A space that was given neither, and landing wherever the
   * user was last, which is no space at all, go by their name alone rather
   * than by something made up to fill the room.
   *
   * @param {string} openIn - What a route holds as its destination
   * @returns {object} What lit should draw
   */
  #renderDestinationIcon(openIn) {
    const space = this.#space(openIn);
    const icon = space && this.#spaceIcon(space);
    if (!icon) {
      return nothing;
    }
    return icon.endsWith(".svg")
      ? html`<img src=${icon} alt="" />`
      : html`<span class="oculate-library-routing-space-icon">${icon}</span>`;
  }

  /**
   * @param {object} space - The space to show
   * @returns {string} The icon it was given, if it was given one
   */
  #spaceIcon(space) {
    return window.gOculateWorkspaces.workspaceHasIcon(space)
      ? window.gOculateWorkspaces.getWorkspaceIcon(space)
      : "";
  }

  /**
   * The menu both pickers open. A list of spaces wants their icons, which
   * a plain select cannot hold, so this is a menu of the kind the rest of
   * the library opens on its rows.
   *
   * @returns {Element} The popup, built once and filled on each open
   */
  #buildPicker() {
    const menu = window.MozXULElement.parseXULToFragment(`
      <menupopup class="oculate-library-routing-menu"/>
    `).firstElementChild;
    menu.addEventListener("command", event => {
      this.#pickerOnPick?.(event.target.dataset.value);
    });
    menu.addEventListener("popuphidden", () => {
      menu.hidden = true;
      this.#pickerAnchor?.removeAttribute("menu-open");
      this.#pickerAnchor = null;
      this.#pickerOnPick = null;
    });
    menu.hidden = true;
    document.getElementById("mainPopupSet").appendChild(menu);
    return menu;
  }

  /**
   * @param {MouseEvent} event - The click on a picker
   * @param {string} picked - The destination it stands on
   * @param {Function} onPick - Handed what the user picks instead
   */
  #openPicker(event, picked, onPick) {
    const anchor = event.currentTarget;
    const menu = (this.#picker ??= this.#buildPicker());
    const recent = document.createXULElement("menuitem");
    recent.dataset.value = MOST_RECENT_SPACE;
    recent.setAttribute(
      "data-l10n-id",
      "library-space-routing-most-recent-space"
    );
    recent.setAttribute("type", "radio");
    recent.setAttribute("name", "oculate-library-routing-space");
    recent.toggleAttribute("checked", picked === MOST_RECENT_SPACE);
    const items = [recent];
    for (const space of this.#spaces) {
      const item = document.createXULElement("menuitem");
      item.dataset.value = space.uuid;
      item.setAttribute("label", space.name);
      const icon = this.#spaceIcon(space);
      if (icon?.endsWith(".svg")) {
        // The gutter a check mark would take is the one an icon shows in.
        item.classList.add("menuitem-iconic");
        item.setAttribute("image", icon);
      } else {
        item.setAttribute("type", "radio");
        item.setAttribute("name", "oculate-library-routing-space");
        if (icon) {
          item.setAttribute("label", `${icon} ${space.name}`);
        }
      }
      item.toggleAttribute("checked", picked === space.uuid);
      items.push(item);
    }
    menu.replaceChildren(...items);
    this.#pickerOnPick = onPick;
    this.#pickerAnchor = anchor;
    anchor.setAttribute("menu-open", "true");
    menu.hidden = false;
    // As wide as the pill it drops out of.
    menu.style.minWidth = `${anchor.getBoundingClientRect().width}px`;
    menu.openPopup(anchor, "after_start", 0, 0, false, false);
  }

  // The form

  /** Opens the form on a route that doesn't exist yet. */
  #startNewRoute() {
    this.#cancelDraftTimer();
    this.draft = {
      id: null,
      reference: "",
      matchType: "contains",
      openIn: MOST_RECENT_SPACE,
    };
    this.filtersOpen = true;
  }

  /**
   * Opens the form on a route that is already saved.
   *
   * @param {object} route - The route a row stands for
   */
  #editRoute(route) {
    this.#cancelDraftTimer();
    this.draft = { ...route };
    this.filtersOpen = true;
  }

  #cancelDraftTimer() {
    if (this.#draftTimer) {
      clearTimeout(this.#draftTimer);
      this.#draftTimer = null;
    }
  }

  onLibraryClosing() {
    super.onLibraryClosing?.();
    this.#cancelDraftTimer();
    this.filtersOpen = false;
    this.draft = null;
  }

  onEscape() {
    if (!this.filtersOpen) {
      return false;
    }
    this.#closeForm();
    return true;
  }

  #closeForm() {
    this.filtersOpen = false;
    this.#draftTimer = setTimeout(() => {
      this.#draftTimer = null;
      if (!this.filtersOpen) {
        this.draft = null;
      }
    }, PANEL_FADE_MS);
  }

  /**
   * @returns {boolean} Whether the form holds something worth keeping: a
   *   reference, and one that reads as a pattern when it is meant to be one
   */
  get #draftIsValid() {
    const reference = this.draft?.reference.trim();
    if (!reference) {
      return false;
    }
    if (this.draft.matchType !== "regex") {
      return true;
    }
    try {
      void new RegExp(reference);
      return true;
    } catch {
      return false;
    }
  }

  #saveDraft() {
    if (!this.#draftIsValid) {
      return;
    }
    const manager = lazy.gOculateSpaceRoutingManager;
    const id = this.draft.id ?? manager.createNewRoute().id;
    const route = { ...this.draft, id, reference: this.draft.reference.trim() };
    manager.updateRoute(route);
    manager.saveRoutes();
    this.#closeForm();
    this.#load();
  }

  /**
   * @param {object} route - The route a row stands for
   */
  #removeRoute(route) {
    lazy.gOculateSpaceRoutingManager.removeRoute(route.id);
    lazy.gOculateSpaceRoutingManager.saveRoutes();
    if (this.draft?.id === route.id) {
      this.#closeForm();
    }
    this.#load();
  }

  /**
   * @param {string} routeType - Where links from other apps should land
   */
  #setDefaultExternal(routeType) {
    lazy.gOculateSpaceRoutingManager.setDefaultExternalRoute(routeType);
    lazy.gOculateSpaceRoutingManager.saveRoutes();
    this.requestUpdate();
  }

  // Rendering

  renderTopButton() {
    return html`
      <button class="oculate-library-filter-button" @click=${this.#startNewRoute}>
        <img
          src="chrome://browser/skin/oculate-icons/plus.svg"
          draggable="false"
          alt=""
        />
        <span data-l10n-id="library-space-routing-new-button"></span>
      </button>
    `;
  }

  renderPanel() {
    const draft = this.draft;
    return html`
      <div class="oculate-library-filter-header" ?inert=${!this.filtersOpen}>
        <h2
          data-l10n-id=${
            draft?.id
              ? "library-space-routing-edit-title"
              : "library-space-routing-new-title"
          }
        ></h2>
      </div>
      <div class="oculate-library-filter-panel">
        <div class="oculate-library-filter-panel-inner" ?inert=${!this.filtersOpen}>
          ${when(!!draft, () => this.#renderForm(draft))}
        </div>
      </div>
    `;
  }

  /**
   * @param {object} draft - What the form is working on
   * @returns {object} What lit should draw
   */
  #renderForm(draft) {
    return html`
      <div class="oculate-library-routing-form">
        <div class="oculate-library-filter-group">
          <h3 data-l10n-id="library-space-routing-when-the-link"></h3>
          <div class="oculate-library-routing-match-types">
            ${MATCH_TYPES.map(
              type => html`
                <button
                  class="oculate-library-filter-chip"
                  ?active=${draft.matchType === type.id}
                  data-l10n-id=${type.l10nId}
                  @click=${() => {
                    this.draft = { ...draft, matchType: type.id };
                  }}
                ></button>
              `
            )}
          </div>
          <input
            class="oculate-library-routing-reference"
            type="text"
            .value=${draft.reference}
            placeholder=${
              draft.matchType === "regex"
                ? "example\\.com"
                : "example.com"
            }
            ?invalid=${!!draft.reference.trim() && !this.#draftIsValid}
            @input=${event => {
              this.draft = { ...draft, reference: event.target.value };
            }}
            @keydown=${event => {
              if (event.key === "Enter") {
                this.#saveDraft();
              }
            }}
          />
        </div>
        <div class="oculate-library-filter-group">
          <h3 data-l10n-id="library-space-routing-open-it-in"></h3>
          ${this.#renderSpacePicker(draft.openIn, value => {
            this.draft = { ...draft, openIn: value };
          })}
        </div>
        <div class="oculate-library-routing-form-buttons">
          <button
            class="oculate-library-routing-cancel"
            data-l10n-id="library-space-routing-cancel"
            @click=${this.#closeForm}
          ></button>
          <button
            class="oculate-library-routing-save"
            data-l10n-id=${
              draft.id
                ? "library-space-routing-save-route"
                : "library-space-routing-add-route"
            }
            ?disabled=${!this.#draftIsValid}
            @click=${this.#saveDraft}
          ></button>
        </div>
      </div>
    `;
  }

  /**
   * @param {string} value - The space that is picked
   * @param {Function} onPick - Handed what the user picks instead
   * @returns {object} What lit should draw
   */
  #renderSpacePicker(value, onPick) {
    const spaces = this.#spaces;
    const picked = spaces.some(space => space.uuid === value)
      ? value
      : MOST_RECENT_SPACE;
    const space = this.#space(picked);
    return html`
      <button
        class="oculate-library-routing-select"
        value=${picked}
        @click=${event => this.#openPicker(event, picked, onPick)}
      >
        ${this.#renderDestinationIcon(picked)}
        ${
          space
            ? html`<span class="oculate-library-routing-select-name"
                >${space.name}</span
              >`
            : html`<span
                class="oculate-library-routing-select-name"
                data-l10n-id="library-space-routing-most-recent-space"
              ></span>`
        }
        <img
          class="oculate-library-routing-chevron"
          src="chrome://browser/skin/oculate-icons/arrow-down.svg"
          alt=""
        />
      </button>
    `;
  }

  /** @returns {object[]} The routes the search box leaves standing */
  get #shown() {
    const query = this.searchQuery.toLowerCase();
    if (!query) {
      return this.routes;
    }
    return this.routes.filter(
      route =>
        route.reference.toLowerCase().includes(query) ||
        this.#spaceName(route.openIn).toLowerCase().includes(query)
    );
  }

  renderItems() {
    const shown = this.#shown;
    if (!shown.length) {
      return html`
        <div
          class="oculate-library-empty"
          data-l10n-id=${
            this.routes.length
              ? "library-space-routing-no-results"
              : "library-space-routing-empty"
          }
        ></div>
      `;
    }
    return repeat(
      shown,
      route => route.id,
      route => this.#renderRoute(route)
    );
  }

  #renderRoute(route) {
    const matchType = MATCH_TYPES.find(type => type.id === route.matchType);
    const spaceName = this.#spaceName(route.openIn);
    return html`
      <div
        class="oculate-library-row oculate-library-routing-row"
        ?active=${this.draft?.id === route.id}
        @click=${() => this.#editRoute(route)}
      >
        <div class="oculate-library-routing-lines">
          <div class="oculate-library-routing-line">
            <img src="chrome://browser/skin/oculate-icons/link.svg" alt="" />
            <span
              class="oculate-library-routing-match"
              data-l10n-id=${matchType?.l10nId ?? MATCH_TYPES[0].l10nId}
            ></span>
            <span class="oculate-library-routing-value">${route.reference}</span>
          </div>
          <div class="oculate-library-routing-line oculate-library-routing-destination">
            <img
              src="chrome://browser/skin/oculate-icons/arrow-corner-down-right.svg"
              alt=""
            />
            ${this.#renderDestinationIcon(route.openIn)}
            ${
              spaceName
                ? html`<span class="oculate-library-routing-value"
                    >${spaceName}</span
                  >`
                : html`<span
                    class="oculate-library-routing-value"
                    data-l10n-id="library-space-routing-most-recent-space"
                  ></span>`
            }
          </div>
        </div>
        <div class="oculate-library-row-actions">
          <toolbarbutton
            class="toolbarbutton-1"
            data-l10n-id="library-space-routing-remove-button"
            @click=${event => {
              event.stopPropagation();
              this.#removeRoute(route);
            }}
          >
            <img
              class="toolbarbutton-icon"
              src="chrome://browser/skin/oculate-icons/trash.svg"
              alt=""
            />
          </toolbarbutton>
        </div>
      </div>
    `;
  }

  renderFooter() {
    return html`
      <div class="oculate-library-routing-footer">
        <h3 data-l10n-id="library-space-routing-external-links"></h3>
        ${this.#renderSpacePicker(
          lazy.gOculateSpaceRoutingManager.getDefaultExternalRoute(),
          value => this.#setDefaultExternal(value)
        )}
      </div>
    `;
  }
}

customElements.define(
  "oculate-library-space-routing-section",
  OculateLibrarySpaceRoutingSection
);
