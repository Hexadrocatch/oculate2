/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const { nsOculateBoostEditor } = ChromeUtils.importESModule(
  "resource:///modules/oculate/boosts/OculateBoostsEditor.mjs"
);

window.boostEditor = new nsOculateBoostEditor(
  document,
  window.domain,
  window,
  window.openerWindow
);
