// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import createSidebarNotification from "chrome://browser/content/oculate-components/OculateSidebarNotification.mjs";

const OCULATE_UPDATE_PREF = "oculate.updates.last-version";
const OCULATE_BUILD_ID_PREF = "oculate.updates.last-build-id";
const OCULATE_UPDATE_SHOW = "oculate.updates.show-update-notification";
const OCULATE_UPDATE_NOTIFICATION_TIMEOUT_MS = 15000;

export default function checkForOculateUpdates() {
  const version = Services.appinfo.version;
  const lastVersion = Services.prefs.getStringPref(OCULATE_UPDATE_PREF, "");
  Services.prefs.setStringPref(OCULATE_UPDATE_PREF, version);
  if (
    version === lastVersion ||
    gOculateUIManager.testingEnabled ||
    !Services.prefs.getBoolPref(OCULATE_UPDATE_SHOW, true)
  ) {
    return;
  }
  const updateUrl = Services.prefs.getStringPref(
    "app.releaseNotesURL.prompt",
    ""
  );
  createSidebarNotification({
    headingL10nId: "oculate-sidebar-notification-updated-heading",
    autoHideMs: OCULATE_UPDATE_NOTIFICATION_TIMEOUT_MS,
    links: [
      {
        url: Services.urlFormatter.formatURL(
          updateUrl.replace("%VERSION%", version)
        ),
        l10nId: "oculate-sidebar-notification-updated",
        special: true,
        icon: "chrome://browser/skin/oculate-icons/sparkles.svg",
      },
      {
        action: () => {
          Services.obs.notifyObservers(window, "restart-in-safe-mode");
        },
        l10nId: "oculate-sidebar-notification-restart-safe-mode",
        icon: "chrome://browser/skin/oculate-icons/security-broken.svg",
      },
    ],
  });
}

export async function createWindowUpdateAnimation() {
  const appID = Services.appinfo.appBuildID;
  if (
    Services.prefs.getStringPref(OCULATE_BUILD_ID_PREF, "") === appID ||
    gOculateUIManager.testingEnabled
  ) {
    return;
  }
  Services.prefs.setStringPref(OCULATE_BUILD_ID_PREF, appID);
  await playWindowSweepAnimation();
}

/**
 * Plays the full-window sweep shown after updates. Also used the first
 * time incoming sync data is applied on this profile.
 */
export async function playWindowSweepAnimation() {
  await gOculateWorkspaces.promiseInitialized;
  const appWrapper = document.getElementById("oculate-main-app-wrapper");
  const element = document.createElement("div");
  element.id = "oculate-update-animation";
  const elementBorder = document.createElement("div");
  elementBorder.id = "oculate-update-animation-border";
  requestIdleCallback(() => {
    if (gReduceMotion) {
      return;
    }
    appWrapper.appendChild(element);
    appWrapper.appendChild(elementBorder);
    Promise.all([
      gOculateUIManager.motion.animate(
        "#oculate-update-animation",
        {
          top: ["100%", "-50%"],
          opacity: [0.5, 1],
        },
        {
          duration: 0.35,
        }
      ),
      gOculateUIManager.motion.animate(
        "#oculate-update-animation-border",
        {
          "--background-top": ["150%", "-50%"],
        },
        {
          duration: 0.35,
          delay: 0.08,
        }
      ),
    ]).then(() => {
      element.remove();
      elementBorder.remove();
    });
  });
}
