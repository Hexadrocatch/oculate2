// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import { nsOculateDOMOperatedFeature } from "chrome://browser/content/oculate-components/OculateCommonUtils.mjs";
import { nsOculateThemePicker } from "resource:///modules/oculate/OculateGradientGenerator.mjs";

const lazy = {};

ChromeUtils.defineESModuleGetters(lazy, {
  gOculateBoostsManager: "resource:///modules/oculate/boosts/OculateBoostsManager.sys.mjs",
  TabStateCache:
    "moz-src:///browser/components/sessionstore/TabStateCache.sys.mjs",
  OculateShareClient: "resource:///modules/oculate/share/OculateShareClient.sys.mjs",
  OculateShareError: "resource:///modules/oculate/share/OculateShareClient.sys.mjs",
});

const SHARE_DOCUMENT_VERSION = "1";

const SHAREABLE_URL_RE = /^https?:\/\//i;
const SHAREABLE_ICON_RE = /^(data:|chrome:)/;
const FOLDER_ICON_RE = /^chrome:\/\//;

/**
 * Shares spaces, folders and split views through the share server, and
 * imports them back from share links.
 */
class nsOculateShareManager extends nsOculateDOMOperatedFeature {
  init() {
    if (!this.enabled) {
      for (const id of [
        "context_oculateShareWorkspace",
        "context_oculateShareFolder",
      ]) {
        document.getElementById(id)?.setAttribute("hidden", "true");
      }
      return;
    }
    delayedStartupPromise.then(() => {
      gBrowser.addTabsProgressListener({
        onLocationChange: (browser, webProgress, request, aLocation) => {
          this.#onLocationChange(browser, webProgress, aLocation);
        },
      });
    });
  }

  get enabled() {
    return (
      !gOculateWorkspaces.privateWindowOrDisabled &&
      !!Services.prefs.getStringPref("oculate.share.base-url", "").trim()
    );
  }

  // Mark: sharing

  async shareSpace(workspaceId) {
    const workspace = gOculateWorkspaces.getWorkspaceFromId(workspaceId);
    const element = gOculateWorkspaces.workspaceElement(workspaceId);
    if (!workspace || !element) {
      return;
    }
    const item = {
      type: "space",
      name: workspace.name || "Space",
      items: [
        ...this.#serializeItems(element.pinnedTabsContainer.children, {
          pinned: true,
        }),
        ...this.#serializeItems(element.tabsContainer.children, {
          pinned: false,
        }),
      ],
    };
    const theme = this.#serializeTheme(workspace.theme);
    if (theme) {
      item.theme = theme;
    }
    await this.#createAndCopyLink(item);
  }

  async shareFolder(folder) {
    if (!folder?.isOculateFolder) {
      return;
    }
    await this.#createAndCopyLink(this.#serializeFolder(folder));
  }

  async shareSplitView(group) {
    if (!group?.hasAttribute("split-view-group")) {
      return;
    }
    const item = this.#serializeSplitGroup(group);
    if (!item) {
      this.showCreateError(new lazy.OculateShareError("empty", "nothing to share"));
      return;
    }
    await this.#createAndCopyLink(item);
  }

  #serializeSplitGroup(group) {
    const tabs = group.tabs
      .filter(tab => !tab.hasAttribute("oculate-empty-tab"))
      .map(tab => this.#serializeTab(tab, { pinned: tab.pinned }))
      .filter(Boolean);
    return tabs.length >= 2
      ? { type: "splitView", tabs: tabs.slice(0, gOculateViewSplitter.MAX_TABS) }
      : null;
  }

  async #createAndCopyLink(item) {
    if (!this.enabled) {
      return;
    }
    if (!(await this.#confirmShare())) {
      return;
    }
    try {
      const created = await lazy.OculateShareClient.findOrCreateShare(
        { version: SHARE_DOCUMENT_VERSION, shared: item },
        { name: this.#displayName() }
      );
      Cc["@mozilla.org/widget/clipboardhelper;1"]
        .getService(Ci.nsIClipboardHelper)
        .copyString(created.link);
      // The description's l10n args come from the whole options object.
      gOculateUIManager.showToast("oculate-share-link-copied-toast", {
        descriptionId: created.expiresAt
          ? "oculate-share-link-expires-description"
          : "oculate-share-link-permanent-description",
        date: created.expiresAt
          ? new Date(created.expiresAt).toLocaleDateString()
          : "",
        timeout: 6000,
      });
    } catch (e) {
      this.showCreateError(e);
    }
  }

  #displayName() {
    return (
      Services.prefs.getStringPref("oculate.share.display-name", "") || undefined
    );
  }

  async #confirmShare() {
    if (
      Services.prefs.getBoolPref("oculate.share.dont-ask-before-sharing", false)
    ) {
      return true;
    }
    const args = {
      accepted: false,
      name: Services.prefs.getStringPref("oculate.share.display-name", ""),
    };
    await gDialogBox.open(
      "chrome://browser/content/oculate-components/windows/oculate-share-confirm.xhtml",
      args
    );
    if (args.accepted) {
      Services.prefs.setStringPref("oculate.share.display-name", args.name);
      if (args.dontAsk) {
        Services.prefs.setBoolPref("oculate.share.dont-ask-before-sharing", true);
      }
    }
    return args.accepted;
  }

  /**
   * Tells the user why a share could not be created.
   *
   * @param {Error} error - A OculateShareError or anything else that was thrown.
   */
  showCreateError(error) {
    console.error("OculateShare: could not create share:", error);
    const descriptions = {
      auth: "oculate-share-error-auth-description",
      "too-large": "oculate-share-error-too-large-description",
      "rate-limited": "oculate-share-error-rate-limited-description",
      network: "oculate-share-error-network-description",
      empty: "oculate-share-error-empty-description",
    };
    gOculateUIManager.showToast("oculate-share-error-toast", {
      descriptionId:
        descriptions[error.code] || "oculate-share-error-server-description",
      timeout: 6000,
    });
  }

  // Mark: serialization

  #serializeItems(children, { pinned }) {
    const items = [];
    for (const child of children) {
      if (gBrowser.isTab(child)) {
        if (
          child.hasAttribute("oculate-empty-tab") ||
          child.hasAttribute("oculate-glance-tab")
        ) {
          continue;
        }
        const tab = this.#serializeTab(child, { pinned });
        if (tab) {
          items.push(tab);
        }
      } else if (child.isOculateFolder) {
        items.push(this.#serializeFolder(child));
      } else if (gBrowser.isTabGroup(child)) {
        const split = child.hasAttribute("split-view-group")
          ? this.#serializeSplitGroup(child)
          : null;
        if (split) {
          items.push(split);
          continue;
        }
        // Plain tab groups (and degenerate splits) keep their member tabs.
        for (const tab of child.tabs) {
          if (tab.hasAttribute("oculate-empty-tab")) {
            continue;
          }
          const serialized = this.#serializeTab(tab, { pinned });
          if (serialized) {
            items.push(serialized);
          }
        }
      }
    }
    return items;
  }

  #serializeFolder(folder) {
    return {
      type: "folder",
      name: folder.label || "Folder",
      items: this.#serializeItems(folder.allItems, { pinned: false }),
    };
  }

  #serializeTab(tab, { pinned = false } = {}) {
    const url = tab.linkedBrowser?.currentURI?.spec;
    if (!url || !SHAREABLE_URL_RE.test(url)) {
      return null;
    }
    const item = { type: "tab", url };
    const label = tab.label;
    if (label) {
      item.label = label;
    }
    const image = this.#serializeIcon(tab);
    if (image) {
      item.image = image;
    }
    if (pinned) {
      item.isPinned = true;
    }
    return item;
  }

  #serializeIcon(tab) {
    let icon = tab.getAttribute("image") || "";
    if (icon.startsWith("moz-remote-image:")) {
      try {
        icon =
          new URLSearchParams(Services.io.newURI(icon).query).get("url") || "";
      } catch (e) {
        return "";
      }
    }
    return SHAREABLE_ICON_RE.test(icon) ? icon : "";
  }

  #serializeTheme(theme) {
    if (theme?.type !== "gradient" || !Array.isArray(theme.gradientColors)) {
      return null;
    }
    const gradientColors = theme.gradientColors
      .map(color => this.#serializeGradientColor(color))
      .filter(Boolean);
    if (!gradientColors.length) {
      return null;
    }
    return { type: "gradient", gradientColors };
  }

  #serializeGradientColor(color) {
    let c = color?.c;
    if (typeof c === "string") {
      c = this.#parseCssColor(c);
    } else if (Array.isArray(c)) {
      c = c.slice(0, 3).map(Number);
    }
    if (
      !Array.isArray(c) ||
      c.length !== 3 ||
      c.some(n => !Number.isFinite(n))
    ) {
      return null;
    }
    const out = { c, type: typeof color.type === "string" ? color.type : "" };
    if (typeof color.isCustom === "boolean") {
      out.isCustom = color.isCustom;
    }
    if (typeof color.isPrimary === "boolean") {
      out.isPrimary = color.isPrimary;
    }
    if (typeof color.algorithm === "string") {
      out.algorithm = color.algorithm;
    }
    if (color.lightness !== undefined && color.lightness !== null) {
      out.lightness = String(color.lightness);
    }
    if (
      Number.isFinite(color.position?.x) &&
      Number.isFinite(color.position?.y)
    ) {
      out.position = { x: color.position.x, y: color.position.y };
    }
    return out;
  }

  #parseCssColor(value) {
    const hex = value.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)?.[1];
    if (hex) {
      const full =
        hex.length === 3 ? [...hex].map(ch => ch + ch).join("") : hex;
      return [0, 2, 4].map(i => parseInt(full.slice(i, i + 2), 16));
    }
    const numbers = value
      .match(/\d+(\.\d+)?/g)
      ?.slice(0, 3)
      .map(Number);
    return numbers?.length === 3 ? numbers : null;
  }

  // Mark: importing

  #stylesLoaded = false;

  // The overlay styles are only needed once a share link is opened.
  #ensureStyles() {
    if (this.#stylesLoaded) {
      return;
    }
    this.#stylesLoaded = true;
    window.windowUtils.loadSheetUsingURIString(
      "chrome://browser/content/oculate-styles/oculate-share.css",
      window.windowUtils.AUTHOR_SHEET
    );
  }

  #setHostTabSubtitle(browser, subtitle) {
    const tab = gBrowser.getTabForBrowser(browser);
    if (!tab) {
      return;
    }
    tab.setAttribute("oculate-show-sublabel", subtitle);
    document.l10n.setArgs(tab.querySelector(".oculate-tab-sublabel"), {
      tabSubtitle: subtitle,
    });
  }

  #clearHostTabSubtitle(browser) {
    const tab = gBrowser.getTabForBrowser(browser);
    if (!tab?.hasAttribute("oculate-show-sublabel")) {
      return;
    }
    tab.removeAttribute("oculate-show-sublabel");
    document.l10n.setArgs(tab.querySelector(".oculate-tab-sublabel"), {
      tabSubtitle: "oculate-default-pinned",
    });
  }

  #onLocationChange(browser, webProgress, aLocation) {
    if (!webProgress.isTopLevel) {
      return;
    }
    if (browser._oculateShareOverlay) {
      browser._oculateShareOverlay.remove();
      delete browser._oculateShareOverlay;
      browser.removeAttribute("oculate-share-overlay-showing");
      this.#clearHostTabSubtitle(browser);
    }
    const share = lazy.OculateShareClient.parseShareUrl(aLocation.spec);
    if (!share) {
      return;
    }
    if (share.type === "split-view") {
      // Split views are light enough to open right away, no preview step.
      this.#openSharedSplitView(browser, share);
    } else if (share.type === "boost") {
      this.#openSharedBoost(browser, share);
    } else {
      this.#showImportOverlay(browser, share);
    }
  }

  async #openSharedBoost(browser, share) {
    let preview;
    try {
      preview = await lazy.OculateShareClient.fetchSharePreview(share);
    } catch (e) {
      console.error("OculateShare: could not load shared boost:", e);
      gOculateUIManager.showToast("oculate-boost-receive-error-toast", {
        timeout: 6000,
      });
      return;
    }
    if (
      preview.doc.shared.type !== "boost" ||
      !lazy.gOculateBoostsManager.isValidSharedDomain(preview.doc.shared.domain)
    ) {
      gOculateUIManager.showToast("oculate-boost-receive-error-toast", {
        timeout: 6000,
      });
      return;
    }
    const tab = gBrowser.getTabForBrowser(browser);
    if (!tab?.hasAttribute("oculate-empty-tab")) {
      gOculateWorkspaces.selectEmptyTab();
      if (tab) {
        gBrowser.removeTab(tab, {
          closeWindowWithLastTab: false,
          skipSessionStore: true,
        });
      }
    }
    lazy.gOculateBoostsManager.receiveBoost(
      window,
      preview.doc.shared,
      preview.name
    );
  }

  async #openSharedSplitView(browser, share) {
    let item;
    const shareTab = gBrowser.getTabForBrowser(browser);
    shareTab.style.display = "none";
    const failure = () => {
      shareTab.style.removeProperty("display");
    };
    try {
      const { doc } = await lazy.OculateShareClient.fetchSharePreview(share);
      item = doc.shared?.type === "splitView" ? doc.shared : null;
    } catch (e) {
      console.error("OculateShare: could not load shared split view:", e);
      const descriptions = {
        "not-found": "oculate-share-import-error-dead-description",
        "invalid-document": "oculate-share-import-error-invalid-description",
      };
      gOculateUIManager.showToast("oculate-share-import-error-toast", {
        descriptionId:
          descriptions[e.code] || "oculate-share-error-network-description",
        timeout: 6000,
      });
      failure();
      return;
    }
    if (!item) {
      failure();
      return;
    }
    const workspaceId = gOculateWorkspaces.activeWorkspace;
    const pinned = item.tabs.every(child => child.isPinned);
    const tabs = item.tabs.map(child => {
      // Eager browsers so every pane renders as soon as the split shows.
      const tab = this.#importTab(child, workspaceId, { lazyBrowser: false });
      if (!tab) {
        return null;
      }
      if (pinned) {
        gBrowser.pinTab(tab);
      }
      this.#placeTab(tab, workspaceId, pinned);
      return tab;
    });
    gOculateViewSplitter.splitTabs(tabs.filter(Boolean), "grid", 0);
    gBrowser.removeTab(shareTab, {
      closeWindowWithLastTab: false,
      skipSessionStore: true,
    });
    // Shake the new split group in the sidebar.
    const group = tabs[0]?.group;
    if (group?.hasAttribute("split-view-group")) {
      gOculateUIManager.shakeElement(group);
    }
  }

  async #showImportOverlay(browser, share) {
    const stack = browser.closest(".browserStack");
    if (!stack) {
      return;
    }
    this.#ensureStyles();
    // Only the status text shows until the preview loads.
    const overlay = window.MozXULElement.parseXULToFragment(`
      <html:div class="oculate-share-overlay">
        <html:div class="oculate-share-overlay-card">
          <html:div class="oculate-share-overlay-items"/>
          <html:div class="oculate-share-overlay-status"
                    data-l10n-id="oculate-share-overlay-loading"/>
          <html:div class="oculate-share-overlay-footer" hidden="hidden">
            <html:div class="oculate-share-overlay-badge-stack">
              <html:div class="oculate-share-overlay-badge-sheet second"/>
              <html:div class="oculate-share-overlay-badge-sheet first"/>
              <html:div class="oculate-share-overlay-badge">
                <html:img class="oculate-share-overlay-badge-icon"
                          draggable="false"/>
                <html:div class="oculate-share-overlay-badge-text">
                  <html:div class="oculate-share-overlay-badge-title"/>
                  <html:div class="oculate-share-overlay-badge-subtitle"/>
                </html:div>
              </html:div>
            </html:div>
          </html:div>
        </html:div>
        <html:button class="oculate-big-accent-button primary oculate-share-overlay-add"
                     hidden="hidden" disabled="disabled"/>
      </html:div>
    `).firstElementChild;
    const items = overlay.querySelector(".oculate-share-overlay-items");
    const statusEl = overlay.querySelector(".oculate-share-overlay-status");
    const footer = overlay.querySelector(".oculate-share-overlay-footer");
    const badgeIcon = overlay.querySelector(".oculate-share-overlay-badge-icon");
    const badgeTitle = overlay.querySelector(".oculate-share-overlay-badge-title");
    const badgeSubtitle = overlay.querySelector(
      ".oculate-share-overlay-badge-subtitle"
    );
    const button = overlay.querySelector(".oculate-share-overlay-add");

    stack.appendChild(overlay);
    browser._oculateShareOverlay = overlay;
    browser.setAttribute("oculate-share-overlay-showing", "true");

    let preview;
    try {
      preview = await lazy.OculateShareClient.fetchSharePreview(share);
    } catch (e) {
      console.error("OculateShare: could not load share preview:", e);
      const descriptions = {
        "not-found": "oculate-share-import-error-dead-description",
        "invalid-document": "oculate-share-import-error-invalid-description",
      };
      document.l10n.setAttributes(
        statusEl,
        descriptions[e.code] || "oculate-share-error-network-description"
      );
      return;
    }
    if (browser._oculateShareOverlay !== overlay) {
      // Navigated away while loading.
      return;
    }
    const { doc, name: sharerName } = preview;
    const first = doc.shared;
    const type = first.type;

    badgeTitle.textContent = first.name;
    this.#renderPreviewRows(items, first.items);
    if (type === "folder") {
      // The real oculate folder icon, with the shared custom icon when set.
      const folderIcon = this.#buildFolderIcon(first.icon);
      folderIcon.classList.add("oculate-share-overlay-badge-icon");
      folderIcon.setAttribute("state", "open");
      badgeIcon.replaceWith(folderIcon);
    } else {
      badgeIcon.src = "chrome://browser/skin/oculate-icons/duplicate-tab.svg";
    }
    if (sharerName) {
      document.l10n.setAttributes(
        badgeSubtitle,
        `oculate-share-overlay-from-${type}`,
        { name: sharerName }
      );
    } else {
      document.l10n.setAttributes(
        badgeSubtitle,
        "oculate-share-overlay-shared-with-you"
      );
    }
    // Mirror the badge subtitle under the tab's label, like live folders do.
    const [tabSubtitle] = await document.l10n.formatValues([
      sharerName
        ? { id: `oculate-share-overlay-from-${type}`, args: { name: sharerName } }
        : { id: "oculate-share-overlay-shared-with-you" },
    ]);
    this.#setHostTabSubtitle(browser, tabSubtitle);
    statusEl.remove();
    footer.hidden = false;
    document.l10n.setAttributes(button, `oculate-share-overlay-add-${type}`);
    button.hidden = false;
    button.disabled = false;
    button.addEventListener("click", async () => {
      button.disabled = true;
      try {
        await this.#importDocument(doc);
        gOculateUIManager.showToast("oculate-share-imported-toast");
        const tab = gBrowser.getTabForBrowser(browser);
        if (tab) {
          gBrowser.removeTab(tab, {
            closeWindowWithLastTab: false,
            skipSessionStore: true,
          });
        }
      } catch (e) {
        console.error("OculateShare: could not import share:", e);
        gOculateUIManager.showToast("oculate-share-import-error-toast", {
          timeout: 6000,
        });
        button.disabled = false;
      }
    });
  }

  #renderPreviewRows(container, entries) {
    for (const entry of entries) {
      if (entry.type === "folder") {
        container.appendChild(this.#buildFolderRow(entry));
      } else if (entry.type === "splitView") {
        const split = window.MozXULElement.parseXULToFragment(`
          <html:div class="oculate-share-overlay-split"/>
        `).firstElementChild;
        for (const tab of entry.tabs) {
          split.appendChild(this.#buildTabRow(tab));
        }
        container.appendChild(split);
      } else {
        container.appendChild(this.#buildTabRow(entry));
      }
    }
  }

  #buildTabRow(entry) {
    const row = window.MozXULElement.parseXULToFragment(`
      <html:div class="oculate-share-overlay-row">
        <html:img class="oculate-share-overlay-row-icon" draggable="false"/>
        <html:div class="oculate-share-overlay-row-label"/>
      </html:div>
    `).firstElementChild;
    row.title = entry.url;
    row.querySelector(".oculate-share-overlay-row-icon").src =
      entry.image && SHAREABLE_ICON_RE.test(entry.image)
        ? entry.image
        : `page-icon:${entry.url}`;
    row.querySelector(".oculate-share-overlay-row-label").textContent =
      entry.label || entry.url;
    if (!SHAREABLE_URL_RE.test(entry.url || "")) {
      return row;
    }
    row.addEventListener("click", () => {
      const stackRect = row.closest(".browserStack").getBoundingClientRect();
      const data = {
        url: entry.url,
        clientX: stackRect.width / 2,
        clientY: stackRect.height / 2,
        width: 0,
        height: 0,
        triggeringPrincipal:
          Services.scriptSecurityManager.getSystemPrincipal(),
      };
      gOculateGlanceManager.lastLinkClickData = data;
      gOculateGlanceManager.openGlance(data);
    });
    return row;
  }

  #buildFolderRow(entry) {
    const wrapper = window.MozXULElement.parseXULToFragment(`
      <html:div class="oculate-share-overlay-folder" collapsed="true">
        <html:div class="oculate-share-overlay-row">
          <html:div class="oculate-share-overlay-row-label"/>
        </html:div>
        <html:div class="oculate-share-overlay-children-clip">
          <html:div class="oculate-share-overlay-children"/>
        </html:div>
      </html:div>
    `).firstElementChild;
    const row = wrapper.querySelector(".oculate-share-overlay-row");
    const label = row.querySelector(".oculate-share-overlay-row-label");
    label.textContent = entry.name;
    const icon = this.#buildFolderIcon(entry.icon);
    row.insertBefore(icon, label);
    this.#renderPreviewRows(
      wrapper.querySelector(".oculate-share-overlay-children"),
      entry.items
    );
    row.addEventListener("click", () => {
      const collapsed = wrapper.toggleAttribute("collapsed");
      if (collapsed) {
        icon.removeAttribute("state");
      } else {
        icon.setAttribute("state", "open");
      }
    });
    return wrapper;
  }

  #buildFolderIcon(customIcon) {
    const { nsOculateFolder } = ChromeUtils.importESModule(
      "chrome://browser/content/oculate-components/OculateFolder.mjs",
      { global: "current" }
    );
    const svg = nsOculateFolder.rawIcon.cloneNode(true);
    svg.classList.add("oculate-share-overlay-folder-icon");
    if (customIcon && FOLDER_ICON_RE.test(customIcon)) {
      svg.querySelector(".icon image").setAttribute("href", customIcon);
    }
    return svg;
  }

  async #importDocument(doc) {
    const item = doc.shared;
    switch (item.type) {
      case "space":
        await this.#importSpace(item);
        break;
      case "folder":
        this.#importFolder(item, gOculateWorkspaces.activeWorkspace);
        break;
      case "splitView":
        this.#importSplitView(item);
        break;
    }
  }

  async #importSpace(item) {
    const workspace = await gOculateWorkspaces.createAndSaveWorkspace(
      item.name,
      undefined,
      false,
      0,
      {
        beforeChangeCallback: async newWorkspace => {
          for (const child of item.items) {
            if (child.type === "tab") {
              const tab = this.#importTab(child, newWorkspace.uuid);
              if (tab) {
                if (child.isPinned) {
                  gBrowser.pinTab(tab);
                }
                this.#placeTab(tab, newWorkspace.uuid, !!child.isPinned);
              }
            } else if (child.type === "folder") {
              this.#importFolder(child, newWorkspace.uuid);
            } else if (child.type === "splitView") {
              this.#importSplitView(child, newWorkspace.uuid);
            }
          }
        },
      }
    );
    if (!workspace) {
      return;
    }
    workspace.name = item.name;
    const theme = item.theme;
    if (theme) {
      workspace.theme = nsOculateThemePicker.getTheme(
        theme.gradientColors.map(color => this.#importGradientColor(color))
      );
    }
    gOculateWorkspaces.saveWorkspace(workspace);
    gOculateThemePicker.onWorkspaceChange(workspace);
    gOculateStartup.playWindowSweepAnimation();
  }

  #importGradientColor(color) {
    if (color.isCustom) {
      const [r, g, b] = color.c;
      return { ...color, c: `rgb(${r}, ${g}, ${b})` };
    }
    return color;
  }

  #importFolder(item, workspaceId, parentFolder = null) {
    const folder = gOculateFolders.createFolder([], {
      label: item.name,
      collapsed: true,
      workspaceId,
      insertAfter: parentFolder
        ? parentFolder.groupContainer.lastElementChild
        : null,
    });
    if (item.icon && FOLDER_ICON_RE.test(item.icon)) {
      gOculateFolders.setFolderUserIcon(folder, item.icon);
    }
    folder.creating = true;
    try {
      for (const child of item.items) {
        if (child.type === "tab") {
          const tab = this.#importTab(child, workspaceId);
          if (tab) {
            gBrowser.pinTab(tab);
            folder.addTabs([tab]);
          }
        } else if (child.type === "folder") {
          this.#importFolder(child, workspaceId, folder);
        } else if (child.type === "splitView") {
          this.#importSplitView(child, workspaceId, folder);
        }
      }
    } finally {
      folder.creating = false;
    }
    return folder;
  }

  #importSplitView(item, workspaceId, folder = null) {
    workspaceId ??= gOculateWorkspaces.activeWorkspace;
    const pinned = item.tabs.every(child => child.isPinned);
    const tabs = item.tabs.map(child => {
      const tab = this.#importTab(child, workspaceId);
      if (!tab) {
        return null;
      }
      if (folder) {
        gBrowser.pinTab(tab);
        folder.addTabs([tab]);
      } else {
        if (pinned) {
          gBrowser.pinTab(tab);
        }
        this.#placeTab(tab, workspaceId, pinned);
      }
      return tab;
    });
    gOculateViewSplitter.splitTabs(tabs.filter(Boolean), "grid", -1);
  }

  #placeTab(tab, workspaceId, pinned) {
    const element = gOculateWorkspaces.workspaceElement(workspaceId);
    const container = pinned
      ? element.pinnedTabsContainer
      : element.tabsContainer;
    const anchor = pinned
      ? container.querySelector(".pinned-tabs-container-separator")
      : container.querySelector("#tabbrowser-arrowscrollbox-periphery");
    gBrowser.oculateHandleTabMove(tab, () => {
      tab.setAttribute("oculate-workspace-id", workspaceId);
      container.insertBefore(tab, anchor);
    });
  }

  #importTab(item, workspaceId, { lazyBrowser = true } = {}) {
    if (!SHAREABLE_URL_RE.test(item.url || "")) {
      console.error("OculateShare: refusing to import url", item.url);
      return null;
    }
    const tab = gBrowser.addTrustedTab(item.url, {
      createLazyBrowser: lazyBrowser,
      inBackground: true,
      skipAnimation: true,
      skipBackgroundNotify: true,
      noInitialLabel: true,
      lazyTabTitle: item.label || undefined,
      skipRoute: true,
    });
    if (workspaceId) {
      tab.setAttribute("oculate-workspace-id", workspaceId);
    }
    if (item.image && SHAREABLE_ICON_RE.test(item.image)) {
      try {
        gBrowser.setIcon(tab, item.image);
        lazy.TabStateCache.update(tab.linkedBrowser.permanentKey, {
          image: null,
        });
      } catch (e) {
        console.error("OculateShare: could not set imported tab icon:", e);
      }
    }
    return tab;
  }
}

window.gOculateShareManager = new nsOculateShareManager();
