/* Any copyright is dedicated to the Public Domain.
   https://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

add_task(function test_essentials_section_accepts_any_container_shape() {
  const byNumber = gOculateWorkspaces.getEssentialsSection(1);
  is(
    byNumber.getAttribute("container"),
    "1",
    "A numeric id selects that container's section"
  );
  is(
    gOculateWorkspaces.getEssentialsSection("1"),
    byNumber,
    "A numeric string selects the same section"
  );

  const element = document.createXULElement("hbox");
  element.setAttribute("usercontextid", "1");
  is(
    gOculateWorkspaces.getEssentialsSection(element),
    byNumber,
    "An element with a usercontextid attribute selects the same section"
  );

  const defaultSection = gOculateWorkspaces.getEssentialsSection(0);
  is(defaultSection.getAttribute("container"), "0", "Zero is the default");
  for (const value of [undefined, null, "", "0", "not a number"]) {
    is(
      gOculateWorkspaces.getEssentialsSection(value),
      defaultSection,
      `${JSON.stringify(value)} falls back to the default section`
    );
  }
});

add_task(async function test_essential_tab_with_string_context_id() {
  const tab = BrowserTestUtils.addTab(gBrowser, "about:blank", {
    skipAnimation: true,
  });
  gOculatePinnedTabManager.addToEssentials(tab);
  const section = tab.parentNode;
  ok(
    section.classList.contains("oculate-essentials-container"),
    "The tab is in an essentials section"
  );
  is(
    gOculateWorkspaces.getEssentialsSection(section.getAttribute("container")),
    section,
    "The tab's section is found with the string form of its container"
  );
  await BrowserTestUtils.removeTab(tab);
});
