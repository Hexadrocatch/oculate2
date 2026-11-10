// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import { AppConstants } from "resource://gre/modules/AppConstants.sys.mjs";

const lazy = {};

ChromeUtils.defineESModuleGetters(lazy, {
  CustomKeys: "moz-src:///browser/components/customkeys/CustomKeys.sys.mjs",
  ShortcutUtils: "resource://gre/modules/ShortcutUtils.sys.mjs",
});

ChromeUtils.defineLazyGetter(
  lazy,
  "l10n",
  () => new Localization(["browser/preferences/oculate-preferences.ftl"])
);

// Shortcuts used to live in this file, managed entirely by Oculate. They are now
// plain <key> elements in oculate-keysets.inc.xhtml and customizations are
// handled by Firefox's CustomKeys (about:keyboard). The file is read once to
// carry the user's customizations over and then deleted.
const LEGACY_FILE = "oculate-keyboard-shortcuts.json";
const LEGACY_VERSION_PREF = "oculate.keyboard.shortcuts.version";
// Legacy entries in this group belong to a keyset that DevTools only adds
// to the window later, so they cannot be compared to their defaults until
// then.
const LEGACY_DEVTOOLS_GROUP = "devTools";

/**
 * Oculate's own shortcuts, grouped the way about:keyboard shows them.
 */
const OCULATE_KEY_CATEGORIES = [
  {
    l10nId: "oculateCKSOption-group-oculate-compact-mode",
    keys: [
      ["oculate-compact-mode-toggle", "oculate-compact-mode-shortcut-toggle"],
      [
        "oculate-compact-mode-show-sidebar",
        "oculate-compact-mode-shortcut-show-sidebar",
      ],
    ],
  },
  {
    l10nId: "oculateCKSOption-group-oculate-workspace",
    menuId: "oculate-spaces-menubar",
    keys: [
      ...Array.from({ length: 10 }, (_, i) => [
        `oculate-workspace-switch-${i + 1}`,
        `oculate-workspace-shortcut-switch-${i + 1}`,
      ]),
      ["oculate-workspace-create", "oculate-workspace-shortcut-create"],
      ["oculate-close-all-unpinned-tabs", "oculate-close-all-unpinned-tabs-shortcut"],
    ],
  },
  {
    l10nId: "oculateCKSOption-group-oculate-split-view",
    keys: [
      ["oculate-split-view-grid", "oculate-split-view-shortcut-grid"],
      ["oculate-split-view-vertical", "oculate-split-view-shortcut-vertical"],
      ["oculate-split-view-horizontal", "oculate-split-view-shortcut-horizontal"],
      ["oculate-split-view-unsplit", "oculate-split-view-shortcut-unsplit"],
      ["oculate-new-empty-split-view", "oculate-new-empty-split-view-shortcut"],
    ],
  },
  {
    l10nId: "oculateCKSOption-group-oculate-other",
    keys: [
      ["oculate-toggle-sidebar", "oculate-sidebar-shortcut-toggle"],
      ["oculate-library-toggle", "oculate-library-shortcut-toggle"],
      ["oculate-glance-expand", "oculate-glance-expand"],
      ["oculate-toggle-pin-tab", "oculate-toggle-pin-tab-shortcut"],
      ["oculate-pinned-tab-reset-shortcut", "oculate-pinned-tab-shortcut-reset"],
      ["oculate-duplicate-tab", "oculate-duplicate-tab-shortcut"],
      ["oculate-copy-url", "oculate-text-action-copy-url-shortcut"],
      ["oculate-copy-url-markdown", "oculate-text-action-copy-url-markdown-shortcut"],
    ],
  },
];

/**
 * Normalize a list of modifier names into the comma separated form that
 * CustomKeys stores, folding together the modifiers that mean the same
 * thing on this platform. The legacy format treated Control as Accel
 * outside macOS and Meta as Accel on macOS, and about:keyboard records
 * modifiers the same way, so this makes both comparable.
 *
 * @param {string[]} names
 * @returns {string}
 */
function normalizeModifiers(names) {
  const isMac = AppConstants.platform == "macosx";
  const out = new Set();
  for (let name of names) {
    name = name.trim().toLowerCase();
    switch (name) {
      case "ctrl":
      case "control":
        out.add(isMac ? "control" : "accel");
        break;
      case "accel":
        out.add("accel");
        break;
      case "meta":
        if (isMac) {
          out.add("accel");
        } else if (AppConstants.platform != "win") {
          out.add("meta");
        }
        break;
      case "alt":
      case "shift":
        out.add(name);
        break;
    }
  }
  return [...out].sort().join(",");
}

/**
 * Build a CustomKeys binding ({ modifiers, key, keycode }, each only present
 * when set) from raw attribute-like values.
 *
 * @param {string[]} modifierNames
 * @param {string} key
 * @param {string} keycode
 */
function bindingFrom(modifierNames, key, keycode) {
  const binding = {};
  const modifiers = normalizeModifiers(modifierNames);
  if (modifiers) {
    binding.modifiers = modifiers;
  }
  if (keycode) {
    binding.keycode = keycode.toUpperCase();
  } else if (key) {
    binding.key = key.toUpperCase();
  }
  return binding;
}

function bindingFromLegacy({ key, keycode, modifiers }) {
  const names = Object.entries(modifiers ?? {})
    .filter(([, active]) => active)
    .map(([name]) => name);
  return bindingFrom(names, key, keycode);
}

function bindingFromAttributes(modifiers, key, keycode) {
  return bindingFrom(modifiers ? modifiers.split(",") : [], key, keycode);
}

function sameBinding(a, b) {
  return (
    normalizeModifiers(a.modifiers?.split(",") ?? []) ==
      normalizeModifiers(b.modifiers?.split(",") ?? []) &&
    (a.key ?? "").toUpperCase() == (b.key ?? "").toUpperCase() &&
    (a.keycode ?? "").toUpperCase() == (b.keycode ?? "").toUpperCase()
  );
}

/**
 * The binding a <key> element ships with. Keys defined through Fluent get
 * their key attribute asynchronously, so fall back to the translation when
 * the attribute is not there yet.
 *
 * @param {Element} keyEl
 */
async function defaultBindingOf(keyEl) {
  let key = keyEl.getAttribute("key");
  let keycode = keyEl.getAttribute("keycode");
  const l10nId = keyEl.getAttribute("data-l10n-id");
  if (!key && !keycode && l10nId) {
    try {
      const [message] = await keyEl.ownerDocument.l10n.formatMessages([
        { id: l10nId },
      ]);
      for (const { name, value } of message?.attributes ?? []) {
        if (name == "key") {
          key = value;
        } else if (name == "keycode") {
          keycode = value;
        }
      }
    } catch (e) {
      console.error("Oculate CKS: Could not resolve default key for", l10nId, e);
    }
  }
  return bindingFromAttributes(keyEl.getAttribute("modifiers"), key, keycode);
}

class nsOculateKeyboardShortcuts {
  #legacyMigration = null;

  get legacyFilePath() {
    return PathUtils.join(PathUtils.profileDir, LEGACY_FILE);
  }

  /**
   * Get the shortcut bound to a command, formatted for display.
   *
   * @param {Window} window The browser window to look in.
   * @param {string} command The id of the <command> the key triggers.
   * @returns {string|null} The shortcut, or null when nothing is bound.
   */
  getShortcutDisplayFromCommand(window, command) {
    if (!command) {
      return null;
    }
    const keyEl = window.document.querySelector(
      `key[command="${window.CSS.escape(command)}"]:not([disabled="true"])`
    );
    if (!keyEl?.hasAttribute("key") && !keyEl?.hasAttribute("keycode")) {
      return null;
    }
    return lazy.ShortcutUtils.prettifyShortcut(keyEl);
  }

  /**
   * Extend the key list that about:keyboard shows with Oculate's shortcuts.
   *
   * @param {JSWindowActorParent} actor The CustomKeysParent actor serving the page.
   * @param {object} keys Firefox's categories, as built by the actor's getKeys().
   * @returns {Promise<object>} The same object with Oculate's categories added.
   */
  async addKeys(actor, keys) {
    const document = actor.browsingContext.topChromeWindow.document;
    const l10nIds = new Set();
    for (const category of OCULATE_KEY_CATEGORIES) {
      l10nIds.add(category.l10nId);
      for (const [, l10nId] of category.keys) {
        l10nIds.add(l10nId);
      }
    }
    const ids = [...l10nIds];
    const values = await lazy.l10n.formatValues(ids.map(id => ({ id })));
    const text = Object.fromEntries(ids.map((id, i) => [id, values[i] ?? id]));

    for (const category of OCULATE_KEY_CATEGORIES) {
      const menu = category.menuId
        ? document.getElementById(category.menuId)
        : null;
      const label = menu?.label || text[category.l10nId];
      const entries = {};
      for (const [id, l10nId] of category.keys) {
        const data = actor.getKeyData(id);
        if (!data) {
          continue;
        }
        data.title = text[l10nId];
        entries[id] = data;
      }
      if (Object.keys(entries).length) {
        Object.assign((keys[label] ??= {}), entries);
      }
    }
    return keys;
  }

  /**
   * Move the customizations from Oculate's old shortcuts file into CustomKeys.
   *
   * @param {Window} window
   * @returns {Promise<void>}
   */
  migrateLegacyShortcuts(window) {
    this.#legacyMigration ??= this.#migrateLegacyShortcuts(window)
      .catch(e => console.error("Oculate CKS: Legacy shortcut migration failed", e))
      .finally(() => {
        this.#legacyMigration = null;
      });
    return this.#legacyMigration;
  }

  async #migrateLegacyShortcuts(window) {
    const path = this.legacyFilePath;
    let legacy;
    try {
      legacy = await IOUtils.readJSON(path);
    } catch (e) {
      if (e.name == "NotFoundError") {
        return;
      }
      console.error("Oculate CKS: Dropping unreadable legacy shortcuts file", e);
      await this.#finishLegacyMigration(path);
      return;
    }

    // Keys that are not in the window yet, mapped to the binding they get.
    const pending = new Map();
    for (const shortcut of legacy?.shortcuts ?? []) {
      const id = shortcut?.id;
      if (!id || shortcut.internal) {
        continue;
      }
      const binding = bindingFromLegacy(shortcut);
      const keyEl = window.document.getElementById(id);
      if (!keyEl || keyEl.tagName != "key") {
        if (shortcut.group == LEGACY_DEVTOOLS_GROUP) {
          pending.set(id, binding);
        }
        continue;
      }
      if (keyEl.getAttribute("internal") == "true") {
        continue;
      }
      // A key that CustomKeys already customized keeps that customization.
      if (lazy.CustomKeys.getDefaultKey(id)) {
        continue;
      }
      if (sameBinding(binding, await defaultBindingOf(keyEl))) {
        continue;
      }
      lazy.CustomKeys.changeKey(id, binding);
    }

    Services.prefs.clearUserPref(LEGACY_VERSION_PREF);
    if (!pending.size) {
      await this.#finishLegacyMigration(path);
      return;
    }
    for (const [id, binding] of pending) {
      lazy.CustomKeys.changeKey(id, binding);
    }
    this.#resetDefaultsOnceAdded(window, pending, path);
  }

  #resetDefaultsOnceAdded(window, pending, path) {
    const check = () => {
      for (const [id, binding] of pending) {
        const defaultKey = lazy.CustomKeys.getDefaultKey(id);
        if (!defaultKey) {
          continue;
        }
        pending.delete(id);
        if (sameBinding(binding, defaultKey)) {
          lazy.CustomKeys.resetKey(id);
        }
      }
      if (!pending.size) {
        observer.disconnect();
        this.#finishLegacyMigration(path);
      }
    };
    const observer = new window.MutationObserver(() => {
      if (pending.size) {
        Promise.resolve().then(check);
      }
    });
    observer.observe(window.document.body, { childList: true });
    window.addEventListener("unload", () => observer.disconnect(), {
      once: true,
    });
  }

  async #finishLegacyMigration(path) {
    Services.prefs.clearUserPref(LEGACY_VERSION_PREF);
    await IOUtils.remove(path, { ignoreAbsent: true });
  }
}

export const OculateKeyboardShortcuts = new nsOculateKeyboardShortcuts();
