// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import { XPCOMUtils } from "resource://gre/modules/XPCOMUtils.sys.mjs";

const lazy = {};

XPCOMUtils.defineLazyServiceGetter(
  lazy,
  "oculateDragAndDropService",
  "@mozilla.org/oculate/drag-and-drop;1",
  Ci.nsIOculateDragAndDrop
);

export class OculateWindowDragParent extends JSWindowActorParent {
  receiveMessage(message) {
    const win = this.browsingContext.topChromeWindow;
    if (!win || win.closed) {
      return undefined;
    }
    switch (message.name) {
      case "OculateWindowDrag:StartDrag": {
        if (win.windowState === win.STATE_FULLSCREEN) {
          break;
        }
        if (Cu.isInAutomation) {
          Services.obs.notifyObservers(win, "oculate-window-drag-started");
          break;
        }
        lazy.oculateDragAndDropService.beginNativeWindowMove(win);
        break;
      }
      case "OculateWindowDrag:IsSnapped": {
        return this.#isSnapped(win);
      }
    }
    return undefined;
  }

  /**
   * Whether the window is maximized or tiled to an edge. The tiled
   * attribute is kept in sync with the widget by AppWindow, the same way
   * sizemode is.
   *
   * @param {ChromeWindow} win
   */
  #isSnapped(win) {
    return (
      win.windowState === win.STATE_MAXIMIZED ||
      win.document.documentElement.hasAttribute("tiled")
    );
  }
}
