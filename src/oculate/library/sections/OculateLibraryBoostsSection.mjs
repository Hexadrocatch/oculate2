/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { html, repeat } from "chrome://global/content/vendor/lit.all.mjs";
import { OculateLibrarySearchSection } from "moz-src:///oculate/library/sections/OculateLibrarySearchSection.mjs";

let lazy = {};

ChromeUtils.defineESModuleGetters(lazy, {
  gOculateBoostsManager: "resource:///modules/oculate/boosts/OculateBoostsManager.sys.mjs",
});

const BOOST_TOPICS = ["oculate-boosts-update", "oculate-boosts-active-change"];

const boostKey = boost => `${boost.domain}/${boost.id}`;

export class OculateLibraryBoostsSection extends OculateLibrarySearchSection {
  static id = "boosts";
  static label = "library-boosts-section-title";

  static render(library) {
    return html`
      <oculate-library-boosts-section
        class="oculate-library-section"
        data-section="boosts"
        .library=${library}
      ></oculate-library-boosts-section>
    `;
  }

  #observer = { observe: () => this.requestUpdate() };
  #glanceBrowser = null;
  #editor = null;
  #menu = null;
  #menuBoost = null;
  #menuRow = null;

  connectedCallback() {
    super.connectedCallback();
    for (const topic of BOOST_TOPICS) {
      Services.obs.addObserver(this.#observer, topic);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    for (const topic of BOOST_TOPICS) {
      Services.obs.removeObserver(this.#observer, topic);
    }
    this.#menu?.hidePopup();
    this.#menu?.remove();
    this.#menu = null;
    this.#glanceBrowser = null;
  }

  get searchPlaceholderL10nId() {
    return "library-boosts-search-placeholder";
  }

  onSearchChanged() {
    this.requestUpdate();
  }

  #boosts() {
    const boosts = [];
    const query = this.searchQuery.toLowerCase();
    for (const [domain, entry] of lazy.gOculateBoostsManager.registeredDomains) {
      for (const [id, boostEntry] of entry.boostEntries) {
        const { boostData } = boostEntry;
        if (!boostData.changeWasMade) {
          continue;
        }
        if (
          query &&
          !boostData.boostName.toLowerCase().includes(query) &&
          !domain.toLowerCase().includes(query)
        ) {
          continue;
        }
        boosts.push({
          id,
          domain,
          name: boostData.boostName,
          enabled: entry.activeBoostId === id,
        });
      }
    }
    return boosts.sort(
      (a, b) => a.name.localeCompare(b.name) || a.domain.localeCompare(b.domain)
    );
  }

  // Actions

  #toggle(boost) {
    lazy.gOculateBoostsManager.toggleBoostActiveForDomain(boost.domain, boost.id);
  }

  #onRowClick(boost, row) {
    if (boost.enabled) {
      this.#edit(boost, row);
    } else {
      this.#toggle(boost);
    }
  }

  async #edit(boost, row) {
    if (this.#glanceBrowser) {
      return;
    }
    const url = `https://${boost.domain}/`;
    const uri = Services.io.newURI(url);
    if (!lazy.gOculateBoostsManager.canBoostSite(uri)) {
      return;
    }
    const rowRect = row.getBoundingClientRect();
    const glance = await gOculateGlanceManager.openDetachedGlance({
      url,
      clientX: rowRect.left + rowRect.width / 2,
      clientY: rowRect.top + rowRect.height / 2,
      userContextId: gOculateWorkspaces.getActiveWorkspace()?.containerTabId,
      triggeringPrincipal: Services.scriptSecurityManager.getSystemPrincipal(),
    });
    if (!glance) {
      return;
    }
    const { browser } = glance;
    this.#glanceBrowser = browser;
    glance.closed.then(() => {
      this.#glanceBrowser = null;
      this.#editor?.close();
      this.#editor = null;
    });
    await this.#whenNavigated(browser);
    if (this.#glanceBrowser !== browser) {
      return;
    }
    const stored = lazy.gOculateBoostsManager.loadBoostFromStore(
      boost.domain,
      boost.id
    );
    this.#editor = lazy.gOculateBoostsManager.openBoostWindow(window, stored, uri, {
      browser,
    });
  }

  #whenNavigated(browser) {
    if (browser.currentURI?.spec !== "about:blank") {
      return Promise.resolve();
    }
    return new Promise(resolve => {
      const listener = {
        QueryInterface: ChromeUtils.generateQI([
          "nsIWebProgressListener",
          "nsISupportsWeakReference",
        ]),
        onLocationChange(webProgress) {
          if (webProgress.isTopLevel) {
            browser.removeProgressListener(listener);
            resolve();
          }
        },
      };
      browser.addProgressListener(listener, Ci.nsIWebProgress.NOTIFY_LOCATION);
    });
  }

  async #export(boost) {
    const { boostEntry } = lazy.gOculateBoostsManager.loadBoostFromStore(
      boost.domain,
      boost.id
    );
    await lazy.gOculateBoostsManager.exportBoost(window, boostEntry.boostData);
  }

  #delete(boost) {
    lazy.gOculateBoostsManager.deleteBoost({ domain: boost.domain, id: boost.id });
  }

  // Context menu

  #buildMenu() {
    const menu = window.MozXULElement.parseXULToFragment(`
      <menupopup class="oculate-library-boosts-menu">
        <menuitem data-action="edit" data-l10n-id="library-boosts-menu-edit"/>
        <menuitem data-action="export" data-l10n-id="oculate-boost-save"/>
        <menuseparator/>
        <menuitem data-action="delete" data-l10n-id="oculate-boost-edit-delete"/>
      </menupopup>
    `).firstElementChild;
    menu.addEventListener("command", event => {
      const boost = this.#menuBoost;
      const row = this.#menuRow;
      if (!boost) {
        return;
      }
      switch (event.target.dataset.action) {
        case "edit":
          this.#edit(boost, row);
          break;
        case "export":
          this.#export(boost);
          break;
        case "delete":
          this.#delete(boost);
          break;
      }
    });
    menu.addEventListener("popuphidden", () => {
      menu.hidden = true;
      this.#menuRow?.removeAttribute("menu-open");
      this.#menuRow = null;
      this.#menuBoost = null;
    });
    menu.hidden = true;
    document.getElementById("mainPopupSet").appendChild(menu);
    return menu;
  }

  #openMenu(boost, row, event) {
    this.#menu ??= this.#buildMenu();
    this.#menu.hidden = false;
    this.#menuRow?.removeAttribute("menu-open");
    this.#menuBoost = boost;
    this.#menuRow = row;
    row.setAttribute("menu-open", "true");
    this.#menu.openPopupAtScreen(event.screenX, event.screenY, true, event);
  }

  // Rendering

  #renderBoost(boost) {
    return html`
      <div
        class="oculate-library-row oculate-library-boost-row"
        ?disabled=${!boost.enabled}
        @click=${event => this.#onRowClick(boost, event.currentTarget)}
        @contextmenu=${event => {
          event.preventDefault();
          this.#openMenu(boost, event.currentTarget, event);
        }}
      >
        <div class="oculate-library-boost-icon oculate-squircle-before">
          <img
            src="page-icon:https://${boost.domain}/"
            decoding="async"
            alt=""
          />
        </div>
        <div class="oculate-library-row-text">
          <span class="oculate-library-row-title">${boost.name}</span>
          <span class="oculate-library-row-subtitle">${boost.domain}</span>
        </div>
        <div class="oculate-library-row-actions">
          <toolbarbutton
            class="toolbarbutton-1"
            data-l10n-id="library-boosts-delete-button"
            @click=${event => {
              event.stopPropagation();
              this.#delete(boost);
            }}
          >
            <img
              class="toolbarbutton-icon"
              src="chrome://browser/skin/oculate-icons/trash.svg"
              alt=""
            />
          </toolbarbutton>
          <moz-toggle
            ?pressed=${boost.enabled}
            data-l10n-id="library-boosts-toggle"
            @click=${event => event.stopPropagation()}
            @toggle=${() => this.#toggle(boost)}
          ></moz-toggle>
        </div>
      </div>
    `;
  }

  renderItems() {
    const boosts = this.#boosts();
    if (!boosts.length) {
      return html`
        <div
          class="oculate-library-empty"
          data-l10n-id="library-boosts-empty"
        ></div>
      `;
    }
    return html`
      <div class="oculate-library-group">
        ${repeat(boosts, boostKey, boost => this.#renderBoost(boost))}
      </div>
    `;
  }
}

customElements.define("oculate-library-boosts-section", OculateLibraryBoostsSection);
