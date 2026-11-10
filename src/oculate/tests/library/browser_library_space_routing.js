/* Any copyright is dedicated to the Public Domain.
   https://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

const { gOculateSpaceRoutingManager } = ChromeUtils.importESModule(
  "resource:///modules/oculate/spacerouting/OculateSpaceRoutingManager.sys.mjs"
);

const Library = customElements.get("oculate-library");

function clearRoutes() {
  for (const route of gOculateSpaceRoutingManager.getAllRoutes()) {
    gOculateSpaceRoutingManager.removeRoute(route.id);
  }
  gOculateSpaceRoutingManager.saveRoutes();
}

async function openRoutingSection() {
  await closeLibrary();
  Library.toggle("space-routing");
  const library = document.querySelector("oculate-library");
  await TestUtils.waitForCondition(
    () =>
      Library.libraryProgress === 1 && !library.hasAttribute("transitioning"),
    "the library settles open"
  );
  const section = document.querySelector("oculate-library-space-routing-section");
  await section.updateComplete;
  return section;
}

async function closeLibrary() {
  if (!Library.isLibraryOpen) {
    return;
  }
  Library.toggle();
  await TestUtils.waitForCondition(
    () => !Library.isLibraryOpen && Library.libraryProgress === 0,
    "the library settles closed"
  );
}

async function fillReference(section, value) {
  const input = section.querySelector(".oculate-library-routing-reference");
  input.value = value;
  input.dispatchEvent(new Event("input", { bubbles: true }));
  await section.updateComplete;
  return input;
}

async function openPicker(picker) {
  const shown = BrowserTestUtils.waitForEvent(
    document.getElementById("mainPopupSet"),
    "popupshown",
    true
  );
  picker.click();
  const menu = (await shown).target;
  return menu;
}

async function pick(menu, item) {
  const hidden = BrowserTestUtils.waitForEvent(menu, "popuphidden");
  menu.activateItem(item);
  await hidden;
}

add_task(async function test_new_route_form_adds_a_route() {
  clearRoutes();
  const section = await openRoutingSection();

  Assert.ok(
    section.querySelector(".oculate-library-empty"),
    "a profile with no routes says so"
  );

  section.querySelector(".oculate-library-filter-button").click();
  await section.updateComplete;
  Assert.ok(
    section.querySelector(".oculate-library-routing-form"),
    "the new button opens the form"
  );

  const save = section.querySelector(".oculate-library-routing-save");
  Assert.ok(save.disabled, "there is nothing to add before a link is given");

  await fillReference(section, "example.com");
  Assert.ok(!save.disabled, "a link is all the form asks for");
  save.click();
  await section.updateComplete;

  const routes = gOculateSpaceRoutingManager.getAllRoutes();
  Assert.equal(routes.length, 1, "the route was kept");
  Assert.equal(routes[0].reference, "example.com", "with its link");
  Assert.equal(routes[0].matchType, "contains", "and the match it was given");
  Assert.ok(
    !section.querySelector(".oculate-library-search-top[open]"),
    "the form closes once the route is in"
  );
  Assert.equal(
    section.querySelectorAll(".oculate-library-row").length,
    1,
    "and the route is in the list"
  );

  clearRoutes();
  await closeLibrary();
});

add_task(async function test_match_type_changes_what_is_saved() {
  clearRoutes();
  const section = await openRoutingSection();
  section.querySelector(".oculate-library-filter-button").click();
  await section.updateComplete;

  const chips = section.querySelectorAll(
    ".oculate-library-routing-match-types .oculate-library-filter-chip"
  );
  Assert.equal(chips.length, 3, "the three ways to match a link are offered");
  chips[2].click();
  await section.updateComplete;

  const input = await fillReference(section, "oculate-browser\\.app");
  Assert.equal(
    input.placeholder,
    "oculate-browser\\.app",
    "the placeholder reads as a pattern once the match does"
  );
  section.querySelector(".oculate-library-routing-save").click();
  await section.updateComplete;

  const [route] = gOculateSpaceRoutingManager.getAllRoutes();
  Assert.equal(route.matchType, "regex", "the match type was kept");

  clearRoutes();
  await closeLibrary();
});

add_task(async function test_a_pattern_that_cannot_be_read_is_not_saved() {
  clearRoutes();
  const section = await openRoutingSection();
  section.querySelector(".oculate-library-filter-button").click();
  await section.updateComplete;

  section
    .querySelectorAll(
      ".oculate-library-routing-match-types .oculate-library-filter-chip"
    )[2]
    .click();
  await section.updateComplete;

  const input = await fillReference(section, "example.com[");
  Assert.ok(input.hasAttribute("invalid"), "the field says it is no pattern");
  Assert.ok(
    section.querySelector(".oculate-library-routing-save").disabled,
    "and there is nothing to add"
  );
  Assert.equal(
    gOculateSpaceRoutingManager.getAllRoutes().length,
    0,
    "nothing was kept"
  );

  clearRoutes();
  await closeLibrary();
});

add_task(async function test_a_route_can_be_changed_and_taken_away() {
  clearRoutes();
  const route = gOculateSpaceRoutingManager.createNewRoute();
  route.reference = "example.com";
  gOculateSpaceRoutingManager.updateRoute(route);
  gOculateSpaceRoutingManager.saveRoutes();

  const section = await openRoutingSection();
  section.querySelector(".oculate-library-row").click();
  await section.updateComplete;
  Assert.equal(
    section.querySelector(".oculate-library-routing-reference").value,
    "example.com",
    "a row opens the form on its own route"
  );

  await fillReference(section, "docs.example.com");
  section.querySelector(".oculate-library-routing-save").click();
  await section.updateComplete;

  let routes = gOculateSpaceRoutingManager.getAllRoutes();
  Assert.equal(routes.length, 1, "the route was changed rather than added to");
  Assert.equal(
    routes[0].reference,
    "docs.example.com",
    "with its new link"
  );

  section
    .querySelector(".oculate-library-row .oculate-library-row-actions toolbarbutton")
    .click();
  await section.updateComplete;
  Assert.equal(
    gOculateSpaceRoutingManager.getAllRoutes().length,
    0,
    "the route was taken away"
  );

  clearRoutes();
  await closeLibrary();
});

add_task(async function test_escape_closes_the_form_and_leaves_the_library() {
  clearRoutes();
  const section = await openRoutingSection();
  section.querySelector(".oculate-library-filter-button").click();
  await section.updateComplete;
  Assert.ok(
    section.querySelector(".oculate-library-routing-form"),
    "the form is up"
  );

  EventUtils.synthesizeKey("KEY_Escape");
  await section.updateComplete;
  Assert.ok(
    !section.querySelector(".oculate-library-search-top[open]"),
    "escape puts the form away"
  );
  Assert.ok(Library.isLibraryOpen, "and leaves the library where it was");

  await closeLibrary();
});

add_task(async function test_footer_sets_where_other_apps_land() {
  clearRoutes();
  gOculateSpaceRoutingManager.setDefaultExternalRoute("most-recent-space");
  const section = await openRoutingSection();

  const footer = section.querySelector(".oculate-library-routing-footer");
  Assert.ok(footer, "the footer is under the list");
  const picker = footer.querySelector(".oculate-library-routing-select");
  const menu = await openPicker(picker);
  const space = [...menu.children].find(
    item => item.dataset.value !== "most-recent-space"
  );
  Assert.ok(space, "the spaces of this window are offered");
  const recent = menu.firstElementChild;
  Assert.ok(
    !recent.hasAttribute("image"),
    "landing wherever the user was last is shown without an icon"
  );
  await document.l10n.translateFragment(menu);
  Assert.equal(
    recent.getAttribute("label"),
    "Most recent space",
    "and it is named"
  );

  const value = space.dataset.value;
  await pick(menu, space);
  await section.updateComplete;
  Assert.equal(
    gOculateSpaceRoutingManager.getDefaultExternalRoute(),
    value,
    "picking a space is where links from other apps go now"
  );

  gOculateSpaceRoutingManager.setDefaultExternalRoute("most-recent-space");
  gOculateSpaceRoutingManager.saveRoutes();
  await closeLibrary();
});

add_task(async function test_closing_the_library_puts_the_form_away() {
  clearRoutes();
  const section = await openRoutingSection();
  section.querySelector(".oculate-library-filter-button").click();
  await section.updateComplete;
  await fillReference(section, "example.com");

  await closeLibrary();
  await section.updateComplete;
  Assert.ok(
    !section.querySelector(".oculate-library-routing-form"),
    "the form is gone with the library it was open in"
  );

  const reopened = await openRoutingSection();
  Assert.ok(
    !reopened.querySelector(".oculate-library-routing-form"),
    "and the library does not open back onto it"
  );
  Assert.equal(
    gOculateSpaceRoutingManager.getAllRoutes().length,
    0,
    "what was being written was not kept"
  );

  await closeLibrary();
});
