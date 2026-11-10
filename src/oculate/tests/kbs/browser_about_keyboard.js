/* Any copyright is dedicated to the Public Domain.
   https://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

add_task(async function test_oculate_keys_are_listed() {
  const l10n = new Localization(["browser/preferences/oculate-preferences.ftl"]);
  const [compactModeTitle, toggleLabel, otherTitle] = await l10n.formatValues([
    { id: "oculateCKSOption-group-oculate-compact-mode" },
    { id: "oculate-compact-mode-shortcut-toggle" },
    { id: "oculateCKSOption-group-oculate-other" },
  ]);
  const expected = {
    compactModeTitle,
    toggleLabel,
    otherTitle,
    spacesTitle: document.getElementById("oculate-spaces-menubar").label,
    toggleShortcut: ShortcutUtils.prettifyShortcut(
      document.getElementById("oculate-compact-mode-toggle")
    ),
  };

  await BrowserTestUtils.withNewTab("about:keyboard", async browser => {
    await SpecialPowers.spawn(browser, [expected], async args => {
      const doc = content.document;
      if (!doc.getElementById("table").firstElementChild) {
        await ContentTaskUtils.waitForEvent(
          content,
          "CustomKeysUpdate",
          false,
          null,
          true
        );
      }

      const headings = [...doc.querySelectorAll("moz-card.category")].map(
        card => card.wrappedJSObject.heading
      );
      ok(headings.includes(args.compactModeTitle), "Compact mode is listed");
      ok(headings.includes(args.otherTitle), "Other Oculate features are listed");
      ok(headings.includes(args.spacesTitle), "Spaces menu is listed");

      const toggle = doc.querySelector(
        '.key[data-id="oculate-compact-mode-toggle"]'
      );
      ok(toggle, "Compact mode toggle is listed");
      is(toggle.dataset.label, args.toggleLabel, "Label is localized");
      is(
        toggle.closest("moz-card").wrappedJSObject.heading,
        args.compactModeTitle,
        "Toggle sits in the compact mode category"
      );
      is(
        toggle.querySelector(".currentShortcut").wrappedJSObject.value,
        args.toggleShortcut,
        "Current shortcut is shown"
      );

      const switchKey = doc.querySelector(
        '.key[data-id="oculate-workspace-switch-3"]'
      );
      ok(switchKey, "Space switch is listed");
      is(
        switchKey.closest("moz-card").wrappedJSObject.heading,
        args.spacesTitle,
        "Space switch joins the Spaces menu category"
      );
      ok(
        doc.querySelector('.key[data-id="oculate-workspace-forward"]'),
        "Menu-referenced Oculate key is picked up by Firefox"
      );
      ok(
        doc.querySelector('.key[data-id="oculate-new-unsynced-window"]'),
        "New blank window is listed from the File menu"
      );

      ok(
        !doc.querySelector('.key[data-id="key_addTabSplitView"]'),
        "Removed Firefox key is not listed"
      );
      const openFile = doc.querySelector('.key[data-id="openFileKb"]');
      ok(openFile, "Open file is listed");
      ok(
        !openFile.classList.contains("assigned"),
        "Open file is unassigned by default"
      );
      ok(
        !openFile.classList.contains("customized"),
        "Open file is not marked as customized"
      );
    });
  });
});
