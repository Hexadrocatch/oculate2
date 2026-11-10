/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

{
  const { nsOculateBoostReceiveDialog } = ChromeUtils.importESModule(
    "resource:///modules/oculate/boosts/OculateBoostReceiveDialog.mjs"
  );
  const args = window.arguments?.[0] || {};
  window.addEventListener(
    "load",
    () => {
      window.receiveDialog = new nsOculateBoostReceiveDialog(
        document,
        window,
        args
      );
    },
    { once: true }
  );
}
