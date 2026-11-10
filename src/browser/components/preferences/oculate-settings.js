/* eslint-disable no-undef */
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

const { nsOculateMultiWindowFeature } = ChromeUtils.importESModule(
  "chrome://browser/content/oculate-components/OculateCommonUtils.mjs",
  { global: "current" }
);

var gOculateMarketplaceManager = {
  async init() {
    const header = document.getElementById("oculateMarketplaceHeader");

    if (!header) {
      return; // We haven't entered the settings page yet.
    }

    if (this.__hasInitializedEvents) {
      return;
    }

    if (!window.gOculateMods) {
      window.gOculateMods = nsOculateMultiWindowFeature.currentBrowser.gOculateMods;
    }

    header.appendChild(this._initDisableAll());

    this._initImportExport();

    this.__hasInitializedEvents = true;

    Services.prefs.addObserver(gOculateMods.updatePref, this);
    window.addEventListener(
      "unload",
      () => {
        Services.prefs.removeObserver(gOculateMods.updatePref, this);
      },
      { once: true }
    );

    await this._buildModsList();

    window.addEventListener("unload", () => {
      this.__hasInitializedEvents = false;

      this.modsList.innerHTML = "";
      this._doNotRebuildModsList = false;
    });
  },

  _initImportExport() {
    const importButton = document.getElementById("oculateThemeMarketplaceImport");
    const exportButton = document.getElementById("oculateThemeMarketplaceExport");

    if (importButton) {
      importButton.addEventListener("click", this._importThemes.bind(this));
    }

    if (exportButton) {
      exportButton.addEventListener("click", this._exportThemes.bind(this));
    }
  },

  _initDisableAll() {
    const areModsDisabled = Services.prefs.getBoolPref("oculate.themes.disable-all", false);
    const browser = nsOculateMultiWindowFeature.currentBrowser;
    const mozToggle = document.createElement("moz-toggle");

    mozToggle.className =
      "oculateThemeMarketplaceItemPreferenceToggle oculateThemeMarketplaceDisableAllToggle";
    mozToggle.pressed = !areModsDisabled;

    browser.document.l10n.setAttributes(
      mozToggle,
      `oculate-theme-disable-all-${!areModsDisabled ? "enabled" : "disabled"}`
    );

    mozToggle.addEventListener("toggle", async (event) => {
      const { pressed = false } = event.target || {};

      this.modsList.style.display = pressed ? "" : "none";
      Services.prefs.setBoolPref("oculate.themes.disable-all", !pressed);
      browser.document.l10n.setAttributes(
        mozToggle,
        `oculate-theme-disable-all-${pressed ? "enabled" : "disabled"}`
      );
    });

    if (areModsDisabled) {
      this.modsList.style.display = "none";
    }

    return mozToggle;
  },

  async observe() {
    await this._buildModsList();
  },

  get modsList() {
    if (!this._modsList) {
      this._modsList = document.getElementById("oculateThemeMarketplaceList");
    }
    return this._modsList;
  },

  _triggerBuildUpdateWithoutRebuild() {
    this._doNotRebuildModsList = true;
    gOculateMods.triggerModsUpdate();
  },

  async removeMod(modId) {
    await gOculateMods.removeMod(modId);

    gOculateMods.triggerModsUpdate();
  },

  async disableMod(modId) {
    await gOculateMods.disableMod(modId);

    this._triggerBuildUpdateWithoutRebuild();
  },

  async enableMod(modId) {
    await gOculateMods.enableMod(modId);

    this._triggerBuildUpdateWithoutRebuild();
  },

  async _importThemes() {
    const errorBox = document.getElementById("oculateThemeMarketplaceImportFailure");
    const successBox = document.getElementById("oculateThemeMarketplaceImportSuccess");

    successBox.hidden = true;
    errorBox.hidden = true;

    const input = document.createElement("input");

    input.type = "file";
    input.accept = ".json";
    input.style.display = "none";
    input.setAttribute("moz-accept", ".json");
    input.setAttribute("accept", ".json");

    let timeout;

    const filePromise = new Promise((resolve) => {
      input.addEventListener("change", (event) => {
        if (timeout) {
          clearTimeout(timeout);
        }

        const file = event.target.files[0];
        resolve(file);
      });

      timeout = setTimeout(() => {
        console.warn("[OculateSettings:OculateMods]: Import timeout reached, aborting.");
        resolve(null);
      }, 60000);
    });

    input.addEventListener("cancel", () => {
      console.warn("[OculateSettings:OculateMods]: Import cancelled by user.");
      clearTimeout(timeout);
    });

    input.click();

    try {
      const file = await filePromise;

      if (!file) {
        return;
      }

      const content = await file.text();

      const mods = JSON.parse(content);

      for (const mod of Object.values(mods)) {
        await window.OculateInstallMod(mod);
      }
    } catch (error) {
      console.error("[OculateSettings:OculateMods]: Error while importing mods:", error);
      errorBox.hidden = false;
    }

    if (input) {
      input.remove();
    }
  },

  async _exportThemes() {
    const errorBox = document.getElementById("oculateThemeMarketplaceExportFailure");
    const successBox = document.getElementById("oculateThemeMarketplaceExportSuccess");

    successBox.hidden = true;
    errorBox.hidden = true;

    try {
      const mods = await gOculateMods.getMods();
      const modsJson = JSON.stringify(mods, null, 2);

      const nsIFilePicker = Ci.nsIFilePicker;
      const fp = Cc["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker);

      fp.init(
        window.browsingContext,
        "Export Oculate Mods",
        nsIFilePicker.modeSave
      );
      fp.defaultString = "oculate-mods-export";
      fp.defaultExtension = "json";
      fp.appendFilter("JSON Files", "*.json");
      fp.appendFilters(nsIFilePicker.filterAll);

      const result = await new Promise(resolve => {
        fp.open(resolve);
      });

      if (
        (result === nsIFilePicker.returnOK ||
          result === nsIFilePicker.returnReplace) &&
        fp.file
      ) {
        await IOUtils.writeUTF8(fp.file.path, modsJson);
        successBox.hidden = false;
      }
    } catch (error) {
      console.error("[OculateSettings:OculateMods]: Error while exporting mods:", error);
      errorBox.hidden = false;
    }
  },

  async _buildModsList() {
    if (!this.modsList) {
      return;
    }

    if (this._doNotRebuildModsList) {
      this._doNotRebuildModsList = false;
      return;
    }

    const mods = await gOculateMods.getMods();
    const browser = nsOculateMultiWindowFeature.currentBrowser;
    const modList = document.createElement("div");

    for (const mod of Object.values(mods).sort((a, b) => a.name.localeCompare(b.name))) {
      const sanitizedName = gOculateMods.sanitizeModName(mod.name);
      const isModEnabled = mod.enabled === undefined || mod.enabled;
      const fragment = window.MozXULElement.parseXULToFragment(`
        <vbox class="oculateThemeMarketplaceItem">
          <vbox class="oculateThemeMarketplaceItemContent">
            <hbox flex="1" id="oculateThemeMarketplaceItemContentHeader">
              <label><h3 class="oculateThemeMarketplaceItemTitle"></h3></label>
            </hbox>
            <description class="description-deemphasized oculateThemeMarketplaceItemDescription"></description>
          </vbox>
          <hbox class="oculateThemeMarketplaceItemActions">
            ${mod.preferences ? `<button id="oculateThemeMarketplaceItemConfigureButton-${sanitizedName}" class="oculateThemeMarketplaceItemConfigureButton" hidden="true"></button>` : ""}
            ${mod.homepage ? `<button id="oculateThemeMarketplaceItemHomePageLink-${sanitizedName}" class="oculateThemeMarketplaceItemHomepageButton" oculate-mod-id="${mod.id}"></button>` : ""}
            <button class="oculateThemeMarketplaceItemUninstallButton" data-l10n-id="oculate-theme-marketplace-remove-button" oculate-mod-id="${mod.id}"></button>
          </hbox>
        </vbox>
      `);

      const modName = `${mod.name} (v${mod.version ?? "1.0.0"})`;

      const base = fragment.querySelector(".oculateThemeMarketplaceItem");
      const baseHeader = fragment.querySelector("#oculateThemeMarketplaceItemContentHeader");

      const dialog = document.createElement("dialog");
      const mainDialogDiv = document.createElement("div");
      const headerDiv = document.createElement("div");
      const headerTitle = document.createElement("h3");
      const closeButton = document.createElement("button");
      const contentDiv = document.createElement("div");
      const mozToggle = document.createElement("moz-toggle");

      mainDialogDiv.className = "oculateThemeMarketplaceItemPreferenceDialog";
      headerDiv.className = "oculateThemeMarketplaceItemPreferenceDialogTopBar";
      headerTitle.textContent = modName;
      browser.document.l10n.setAttributes(headerTitle, "oculate-theme-marketplace-theme-header-title", {
        name: sanitizedName,
      });
      headerTitle.className = "oculateThemeMarketplaceItemTitle";
      closeButton.id = `${sanitizedName}-modal-close`;
      browser.document.l10n.setAttributes(closeButton, "oculate-theme-marketplace-close-modal");
      contentDiv.id = `${sanitizedName}-preferences-content`;
      contentDiv.className = "oculateThemeMarketplaceItemPreferenceDialogContent";
      mozToggle.className = "oculateThemeMarketplaceItemPreferenceToggle";

      mozToggle.pressed = isModEnabled;
      browser.document.l10n.setAttributes(
        mozToggle,
        `oculate-theme-marketplace-toggle-${isModEnabled ? "enabled" : "disabled"}-button`
      );

      baseHeader.appendChild(mozToggle);

      headerDiv.appendChild(headerTitle);
      headerDiv.appendChild(closeButton);

      mainDialogDiv.appendChild(headerDiv);
      mainDialogDiv.appendChild(contentDiv);
      dialog.appendChild(mainDialogDiv);
      base.appendChild(dialog);

      closeButton.addEventListener("click", () => {
        dialog.close();
      });

      mozToggle.addEventListener("toggle", async (event) => {
        const modId = event.target
          .closest(".oculateThemeMarketplaceItem")
          .querySelector(".oculateThemeMarketplaceItemUninstallButton")
          .getAttribute("oculate-mod-id");
        event.target.setAttribute("disabled", true);

        if (!event.target.hasAttribute("pressed")) {
          await this.disableMod(modId);

          browser.document.l10n.setAttributes(
            mozToggle,
            "oculate-theme-marketplace-toggle-disabled-button"
          );

          if (mod.preferences) {
            document
              .getElementById(`oculateThemeMarketplaceItemConfigureButton-${sanitizedName}`)
              .setAttribute("hidden", true);
          }
        } else {
          await this.enableMod(modId);

          browser.document.l10n.setAttributes(
            mozToggle,
            "oculate-theme-marketplace-toggle-enabled-button"
          );

          if (mod.preferences) {
            document
              .getElementById(`oculateThemeMarketplaceItemConfigureButton-${sanitizedName}`)
              .removeAttribute("hidden");
          }
        }
        setTimeout(() => {
          // We use a timeout to make sure the theme list has been updated before re-enabling the button.
          event.target.removeAttribute("disabled");
        }, 400);
      });

      fragment.querySelector(".oculateThemeMarketplaceItemTitle").textContent = modName;
      fragment.querySelector(".oculateThemeMarketplaceItemDescription").textContent = mod.description;
      fragment
        .querySelector(".oculateThemeMarketplaceItemUninstallButton")
        .addEventListener("click", async (event) => {
          const [msg] = await document.l10n.formatValues([
            { id: "oculate-theme-marketplace-remove-confirmation" },
          ]);

          if (!confirm(msg)) {
            return;
          }

          await this.removeMod(event.target.getAttribute("oculate-mod-id"));
        });

      if (mod.homepage) {
        const homepageButton = fragment.querySelector(".oculateThemeMarketplaceItemHomepageButton");
        homepageButton.addEventListener("click", () => {
          // open the homepage url in a new tab
          const url = mod.homepage;

          window.open(url, "_blank");
        });
      }

      if (mod.preferences) {
        fragment
          .querySelector(".oculateThemeMarketplaceItemConfigureButton")
          .addEventListener("click", () => {
            dialog.showModal();
          });

        if (isModEnabled) {
          fragment
            .querySelector(".oculateThemeMarketplaceItemConfigureButton")
            .removeAttribute("hidden");
        }
      }

      const preferences = await gOculateMods.getModPreferences(mod);

      if (preferences.length) {
        const preferencesWrapper = document.createXULElement("vbox");

        preferencesWrapper.setAttribute("flex", "1");

        for (const entry of preferences) {
          const { property, label, type, placeholder, defaultValue } = entry;

          switch (type) {
            case "dropdown": {
              const { options } = entry;

              const container = document.createXULElement("hbox");
              container.classList.add("oculateThemeMarketplaceItemPreference");
              container.setAttribute("align", "center");
              container.setAttribute("role", "group");

              const menulist = document.createXULElement("menulist");
              const menupopup = document.createXULElement("menupopup");

              menulist.setAttribute("sizetopopup", "none");
              menulist.setAttribute("id", property + "-popup-menulist");

              const savedValue = Services.prefs.getStringPref(property, defaultValue ?? "none");

              menulist.setAttribute("value", savedValue);
              menulist.setAttribute("tooltiptext", property);

              const defaultItem = document.createXULElement("menuitem");

              defaultItem.setAttribute("value", "none");

              if (placeholder) {
                defaultItem.setAttribute("label", placeholder || "-");
              } else {
                browser.document.l10n.setAttributes(
                  defaultItem,
                  "oculate-theme-marketplace-dropdown-default-label"
                );
              }

              menupopup.appendChild(defaultItem);

              for (const option of options) {
                let { label: optionLabel, value } = option;
                let valueType = typeof value;

                if (!["string", "number"].includes(valueType)) {
                  console.warn(
                    `[OculateSettings:OculateMods]: Warning, invalid data type received (${valueType}), skipping.`
                  );
                  continue;
                }

                let menuitem = document.createXULElement("menuitem");

                menuitem.setAttribute("value", value.toString());
                menuitem.setAttribute("label", optionLabel);

                menupopup.appendChild(menuitem);
              }

              menulist.appendChild(menupopup);

              menulist.addEventListener("command", () => {
                const value = menulist.selectedItem.value;

                let element = browser.document.getElementById(sanitizedName);

                if (!element) {
                  element = browser.document.createElement("div");

                  element.style.display = "none";
                  element.setAttribute("id", sanitizedName);

                  browser.document.body.appendChild(element);
                }

                element.setAttribute(property?.replaceAll(/\./g, "-"), value);

                Services.prefs.setStringPref(property, value === "none" ? "" : value);
                this._triggerBuildUpdateWithoutRebuild();
              });

              const nameLabel = document.createXULElement("label");
              nameLabel.setAttribute("flex", "1");
              nameLabel.setAttribute("class", "oculateThemeMarketplaceItemPreferenceLabel");
              nameLabel.setAttribute("value", label);
              nameLabel.setAttribute("tooltiptext", property);

              container.appendChild(nameLabel);
              container.appendChild(menulist);
              container.setAttribute("aria-labelledby", label);

              preferencesWrapper.appendChild(container);
              break;
            }

            case "checkbox": {
              const checkbox = window.MozXULElement.parseXULToFragment(`
                <hbox class="oculateThemeMarketplaceItemPreference">
                  <checkbox class="oculateThemeMarketplaceItemPreferenceCheckbox"></checkbox>
                </hbox>
              `);

              const checkboxElement = checkbox.querySelector(
                ".oculateThemeMarketplaceItemPreferenceCheckbox"
              );
              checkboxElement.setAttribute("label", label);
              checkboxElement.setAttribute("tooltiptext", property);
              checkboxElement.setAttribute("oculate-pref", property);

              // Checkbox only works with "true" and "false" values, it's not like HTML checkboxes.
              if (Services.prefs.getBoolPref(property, defaultValue ?? false)) {
                checkboxElement.setAttribute("checked", "true");
              }

              checkboxElement.addEventListener("click", (event) => {
                const target = event.target.closest(".oculateThemeMarketplaceItemPreferenceCheckbox");
                const key = target.getAttribute("oculate-pref");
                const checked = target.hasAttribute("checked");

                if (!checked) {
                  target.removeAttribute("checked");
                } else {
                  target.setAttribute("checked", "true");
                }

                Services.prefs.setBoolPref(key, !checked);
              });

              preferencesWrapper.appendChild(checkbox);
              break;
            }

            case "string": {
              const container = document.createXULElement("hbox");
              container.classList.add("oculateThemeMarketplaceItemPreference");
              container.setAttribute("align", "center");
              container.setAttribute("role", "group");

              const savedValue = Services.prefs.getStringPref(property, defaultValue ?? "");
              const sanitizedProperty = property?.replaceAll(/\./g, "-");

              const input = document.createElement("input");
              input.setAttribute("flex", "1");
              input.setAttribute("type", "text");
              input.id = `${sanitizedProperty}-input`;
              input.value = savedValue;

              if (placeholder) {
                input.setAttribute("placeholder", placeholder || "-");
              } else {
                browser.document.l10n.setAttributes(
                  input,
                  "oculate-theme-marketplace-input-default-placeholder"
                );
              }

              input.addEventListener(
                "change",
                gOculateMods.debounce((event) => {
                  const value = event.target.value;

                  Services.prefs.setStringPref(property, value);
                  this._triggerBuildUpdateWithoutRebuild();

                  if (value === "") {
                    browser.document
                      .querySelector(":root")
                      .style.removeProperty(`--${sanitizedProperty}`);
                  } else {
                    browser.document
                      .querySelector(":root")
                      .style.setProperty(`--${sanitizedProperty}`, value);
                  }
                }, 500)
              );

              const nameLabel = document.createXULElement("label");
              nameLabel.setAttribute("flex", "1");
              nameLabel.setAttribute("class", "oculateThemeMarketplaceItemPreferenceLabel");
              nameLabel.setAttribute("value", label);
              nameLabel.setAttribute("tooltiptext", property);

              container.appendChild(nameLabel);
              container.appendChild(input);
              container.setAttribute("aria-labelledby", label);

              preferencesWrapper.appendChild(container);
              break;
            }

            default:
              console.warn(
                `[OculateSettings:OculateMods]: Warning, unknown preference type received (${type}), skipping.`
              );
              continue;
          }
        }
        contentDiv.appendChild(preferencesWrapper);
      }
      modList.appendChild(fragment);
    }

    this.modsList.replaceChildren(...modList.children);
    modList.remove();
  },
};

const kOculateExtendedSidebar = "oculate.view.sidebar-expanded";
const kOculateSingleToolbar = "oculate.view.use-single-toolbar";

var gOculateLooksAndFeel = {
  init() {
    if (this.__hasInitialized) {
      return;
    }
    this.__hasInitialized = true;
    gOculateMarketplaceManager.init();
    for (const pref of [kOculateExtendedSidebar, kOculateSingleToolbar]) {
      Services.prefs.addObserver(pref, this);
    }
    window.addEventListener("unload", () => {
      for (const pref of [kOculateExtendedSidebar, kOculateSingleToolbar]) {
        Services.prefs.removeObserver(pref, this);
      }
    });
    this.applySidebarLayout();
  },

  observe() {
    this.applySidebarLayout();
  },

  applySidebarLayout() {
    const isSingleToolbar = Services.prefs.getBoolPref(kOculateSingleToolbar);
    const isExtendedSidebar = Services.prefs.getBoolPref(kOculateExtendedSidebar);
    for (const layout of document.getElementById("oculateLayoutList").children) {
      layout.classList.remove("selected");
      if (layout.getAttribute("layout") == "single" && isSingleToolbar) {
        layout.classList.add("selected");
      } else if (
        layout.getAttribute("layout") == "multiple" &&
        !isSingleToolbar &&
        isExtendedSidebar
      ) {
        layout.classList.add("selected");
      } else if (layout.getAttribute("layout") == "collapsed" && !isExtendedSidebar) {
        layout.classList.add("selected");
      }
    }
    if (this.__hasInitializedLayout) {
      return;
    }
    this.__hasInitializedLayout = true;
    for (const layout of document.getElementById("oculateLayoutList").children) {
      layout.addEventListener("click", () => {
        if (layout.hasAttribute("disabled")) {
          return;
        }

        for (const el of document.getElementById("oculateLayoutList").children) {
          el.classList.remove("selected");
        }

        layout.classList.add("selected");

        Services.prefs.setBoolPref(
          kOculateExtendedSidebar,
          layout.getAttribute("layout") != "collapsed"
        );
        Services.prefs.setBoolPref(kOculateSingleToolbar, layout.getAttribute("layout") == "single");
      });
    }
  },
};

var gOculateWorkspacesSettings = {
  init() {
    var tabsUnloaderPrefListener = {
      async observe() {
        let buttonIndex = await confirmRestartPrompt(true, 1, true, true);
        if (buttonIndex == CONFIRM_RESTART_PROMPT_RESTART_NOW) {
          Services.startup.quit(Ci.nsIAppStartup.eAttemptQuit | Ci.nsIAppStartup.eRestart);
        }
      },
    };

    let toggleOculateCycleByAttrWarning = {
      observe() {
        const warning = document.getElementById("oculateTabsCycleByAttributeWarning");
        warning.hidden = !(
          Services.prefs.getBoolPref("oculate.tabs.ctrl-tab.ignore-essential-tabs", false) &&
          Services.prefs.getBoolPref("browser.ctrlTab.sortByRecentlyUsed", false)
        );
      },
    };

    toggleOculateCycleByAttrWarning.observe(); // call it once on initial load

    Services.prefs.addObserver("oculate.glance.enabled", tabsUnloaderPrefListener); // We can use the same listener for both prefs
    Services.prefs.addObserver("oculate.workspaces.separate-essentials", tabsUnloaderPrefListener);
    Services.prefs.addObserver("oculate.window-sync.sync-only-pinned-tabs", tabsUnloaderPrefListener);
    Services.prefs.addObserver(
      "oculate.tabs.ctrl-tab.ignore-essential-tabs",
      toggleOculateCycleByAttrWarning
    );
    Services.prefs.addObserver("browser.ctrlTab.sortByRecentlyUsed", toggleOculateCycleByAttrWarning);
    window.addEventListener("unload", () => {
      Services.prefs.removeObserver("oculate.glance.enabled", tabsUnloaderPrefListener);
      Services.prefs.removeObserver("oculate.workspaces.separate-essentials", tabsUnloaderPrefListener);
      Services.prefs.removeObserver(
        "oculate.window-sync.sync-only-pinned-tabs",
        tabsUnloaderPrefListener
      );
      Services.prefs.removeObserver(
        "oculate.tabs.ctrl-tab.ignore-essential-tabs",
        toggleOculateCycleByAttrWarning
      );
      Services.prefs.removeObserver(
        "browser.ctrlTab.sortByRecentlyUsed",
        toggleOculateCycleByAttrWarning
      );
    });
  },
};

Preferences.addAll([
  {
    id: "oculate.view.compact.toolbar-flash-popup",
    type: "bool",
    default: true,
  },
  {
    id: "oculate.workspaces.hide-default-container-indicator",
    type: "bool",
    default: true,
  },
  {
    id: "oculate.tab-unloader.timeout-minutes",
    type: "int",
    default: 10,
  },
  {
    id: "oculate.pinned-tab-manager.restore-pinned-tabs-to-pinned-url",
    type: "bool",
    default: true,
  },
  {
    id: "oculate.pinned-tab-manager.close-shortcut-behavior",
    type: "string",
    default: "switch",
  },
  {
    id: "oculate.workspaces.force-container-workspace",
    type: "bool",
    default: true,
  },
  {
    id: "oculate.workspaces.open-new-tab-if-last-unpinned-tab-is-closed",
    type: "bool",
    default: true,
  },
  {
    id: "oculate.glance.activation-method",
    type: "string",
    default: "ctrl",
  },
  {
    id: "oculate.glance.enabled",
    type: "bool",
    default: true,
  },
  {
    id: "oculate.view.drag-window-from-content",
    type: "bool",
    default: true,
  },
  {
    id: "oculate.workspaces.separate-essentials",
    type: "bool",
    default: false,
  },
  {
    id: "oculate.tabs.show-newtab-vertical",
    type: "bool",
    default: true,
  },
  {
    id: "oculate.view.show-newtab-button-top",
    type: "bool",
    default: true,
  },
  {
    id: "media.videocontrols.picture-in-picture.enabled",
    type: "bool",
    default: true,
  },
  {
    id: "oculate.workspaces.continue-where-left-off",
    type: "bool",
    default: false,
  },
  {
    id: "oculate.tabs.ctrl-tab.ignore-essential-tabs",
    type: "bool",
    default: false,
  },
  {
    id: "oculate.tabs.ctrl-tab.ignore-pending-tabs",
    type: "bool",
    default: false,
  },
  {
    id: "oculate.tabs.close-on-back-with-no-history",
    type: "bool",
    default: false,
  },
  {
    id: "oculate.tabs.select-recently-used-on-close",
    type: "bool",
    default: true,
  },
  {
    id: "oculate.window-sync.sync-only-pinned-tabs",
    type: "bool",
    default: false,
  },
]);

Preferences.addSetting({
  id: "oculateWorkspaceContinueWhereLeftOff",
  pref: "oculate.workspaces.continue-where-left-off",
});
