/* Any copyright is dedicated to the Public Domain.
   https://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

const EXPANDED_PREF = "oculate.view.sidebar-expanded";

function waitForLibrary(open) {
  const lib = document.querySelector("oculate-library");
  const Library = customElements.get("oculate-library");
  return TestUtils.waitForCondition(
    () =>
      !lib.hasAttribute("transitioning") &&
      (open
        ? Library.libraryProgress === 1 && !lib.hidden
        : Library.libraryProgress === 0 && lib.hidden),
    `library settles ${open ? "open" : "closed"}`
  );
}

add_task(async function test_toggle_sidebar_width_ignored_while_open() {
  await SpecialPowers.pushPrefEnv({
    set: [
      [EXPANDED_PREF, true],
      ["oculate.view.use-single-toolbar", false],
    ],
  });
  const Library = customElements.get("oculate-library");
  const command = document.getElementById("cmd_oculateToggleSidebar");

  Library.toggle();
  await waitForLibrary(true);
  command.doCommand();
  ok(
    Services.prefs.getBoolPref(EXPANDED_PREF),
    "the sidebar keeps its width while the library is open"
  );

  Library.toggle();
  await waitForLibrary(false);
  command.doCommand();
  ok(
    !Services.prefs.getBoolPref(EXPANDED_PREF),
    "the sidebar width toggles again once the library is closed"
  );
});
