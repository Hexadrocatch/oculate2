/* Any copyright is dedicated to the Public Domain.
   https://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

add_task(async function test_window_buttons_hover_without_sidebar_hover() {
  await SpecialPowers.pushPrefEnv({
    set: [["oculate.view.compact.show-sidebar-and-toolbar-on-hover", false]],
  });

  const windowButtons = gOculateVerticalTabsManager.actualWindowButtons;
  const sidebar = gOculateCompactModeManager.sidebar;

  gOculateCompactModeManager._setElementExpandAttribute(windowButtons, true);
  is(
    windowButtons.getAttribute("oculate-has-hover"),
    "true",
    "Window buttons should get the hover attribute even when the sidebar and toolbar don't show on hover"
  );

  gOculateCompactModeManager._setElementExpandAttribute(sidebar, true);
  ok(
    !sidebar.hasAttribute("oculate-has-hover"),
    "Sidebar should not get the hover attribute when the pref is disabled"
  );

  gOculateCompactModeManager._setElementExpandAttribute(windowButtons, false);
  gOculateCompactModeManager._setElementExpandAttribute(sidebar, false);
  ok(
    !windowButtons.hasAttribute("oculate-has-hover"),
    "Window buttons hover attribute should be removed"
  );

  await SpecialPowers.popPrefEnv();
});
