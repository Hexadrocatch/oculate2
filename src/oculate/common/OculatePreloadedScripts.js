// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

// prettier-ignore
// eslint-disable-next-line no-lone-blocks
{
  ChromeUtils.defineESModuleGetters(this, {
    gOculateSpaceRoutingManager:
      "resource:///modules/oculate/spacerouting/OculateSpaceRoutingManager.sys.mjs",
  });

  Services.scriptloader.loadSubScript("chrome://browser/content/oculate-components/OculateSpaceBookmarksStorage.js", this);

  let scripts = [
    "chrome://browser/content/OculateStartup.mjs",
    "resource:///modules/oculate/OculateSpaceManager.mjs",
    "chrome://browser/content/oculate-components/OculateCompactMode.mjs",
    "chrome://browser/content/OculateUIManager.mjs",
    "resource:///modules/oculate/OculateVerticalTabsManager.mjs",
    "chrome://browser/content/oculate-components/OculateMods.mjs",
    "chrome://browser/content/oculate-components/OculateSessionStore.mjs",
    "chrome://browser/content/oculate-components/OculateGlanceManager.mjs",
    "chrome://browser/content/oculate-components/OculatePinnedTabManager.mjs",
    "resource:///modules/oculate/OculateTabRenamer.mjs",
    "chrome://browser/content/oculate-components/OculateViewSplitter.mjs",
    "chrome://browser/content/oculate-components/OculateFolders.mjs",
    "chrome://browser/content/oculate-components/OculateEmojiPicker.mjs",
    "chrome://browser/content/oculate-components/OculateDownloadAnimation.mjs",
    "resource:///modules/oculate/share/OculateShareManager.mjs",
  ];

  for (let script of scripts) {
    ChromeUtils.importESModule(script, { global: "current" });
  }

  let customOculateElements = [
    ["oculate-folder", "chrome://browser/content/oculate-components/OculateFolder.mjs"],
    ["oculate-workspace-creation", "resource:///modules/oculate/OculateSpaceCreation.mjs"],
    ["oculate-workspace", "resource:///modules/oculate/OculateSpace.mjs"],
    ["oculate-workspace-icons", "resource:///modules/oculate/OculateSpaceIcons.mjs"],
    ["oculate-zap-bar", "chrome://browser/content/oculate-components/OculateZapBar.mjs"]
  ];

  document.addEventListener(
    "DOMContentLoaded",
    () => {
      // Only sync-import widgets once the document has loaded. If a widget is
      // used before DOMContentLoaded it will be imported and upgraded when
      // registering the customElements.setElementCreationCallback().
      for (let [tag, script] of customOculateElements) {
        customElements.setElementCreationCallback(
          tag,
          function customElementCreationCallback() {
            ChromeUtils.importESModule(script, { global: "current" });
          }
        );
      }
    },
    { once: true }
  );

  Services.scriptloader.loadSubScript("chrome://browser/content/oculate-components/OculateDragAndDrop.js", this);
}
