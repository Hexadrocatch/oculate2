// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

const MOD_ID_RE = /^[\w-]+$/;

export class ZenModsMarketplaceParent extends JSWindowActorParent {
  get modsManager() {
    return this.browsingContext.topChromeWindow.gZenMods;
  }

  async receiveMessage(message) {
    if (message.name !== "ZenModsMarketplace:InstallMod") {
      return;
    }
    const { mod } = message.data;
    if (!MOD_ID_RE.test(mod?.id ?? "")) {
      console.error(
        "[ZenModsMarketplaceParent]: Refusing mod without a valid id"
      );
      return;
    }

    console.warn(`[ZenModsMarketplaceParent]: Installing mod ${mod.id}`);

    mod.enabled = true;

    const mods = await this.modsManager.getMods();
    mods[mod.id] = mod;

    await this.modsManager.updateMods(mods);
  }
}
