// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

export class ZenModsMarketplaceChild extends JSWindowActorChild {
  handleEvent(event) {
    if (event.type === "DOMContentLoaded") {
      this.contentWindow.setTimeout(() => {
        this.injectMarketplaceAPI();
      }, 0);
    }
  }

  injectMarketplaceAPI() {
    Cu.exportFunction(this.installMod.bind(this), this.contentWindow, {
      defineAs: "ZenInstallMod",
    });
  }

  installMod(mod) {
    this.sendAsyncMessage("ZenModsMarketplace:InstallMod", { mod });
  }
}
