/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { OculateSpaceAddSwipe } from "resource:///modules/oculate/OculateSpaceAddSwipe.mjs";

const lazy = {};

ChromeUtils.defineLazyGetter(lazy, "browserBackgroundElement", () => {
  return document.getElementById("oculate-browser-background");
});

ChromeUtils.defineLazyGetter(lazy, "toolbarBackgroundElement", () => {
  return document.getElementById("oculate-toolbar-background");
});

ChromeUtils.defineESModuleGetters(
  lazy,
  { OculateLibrary: "moz-src:///oculate/library/OculateLibrary.mjs" },
  { global: "current" }
);

export class OculateSpacesSwipe {
  static ACTIONS = {
    LIBRARY: "library",
    ADD_SPACE: "add-space",
  };

  static SUCCESS_THRESHOLD = 0.25;
  static SUCCESS_VELOCITY_CONTRIBUTION = 0.5;

  static GESTURE_EVENTS = [
    "MozSwipeGestureMayStart",
    "MozSwipeGestureStart",
    "MozSwipeGestureUpdate",
    "MozSwipeGesture",
    "MozSwipeGestureEnd",
  ];

  #addSwipe = new OculateSpaceAddSwipe();

  #swipeState = {
    isGestureActive: false,
    lastDelta: 0,
    direction: null,
    /** One of ACTIONS, or null while the swipe still only moves spaces. */
    action: null,
    /** Which of ACTIONS this swipe is allowed to turn into. */
    allowed: { library: false, addSpace: false },
  };

  constructor() {
    this.attachWorkspaceSwipeGestures(gNavToolbox);
  }

  /**
   * Tells the swipe tracker how the action this swipe turned out to be for
   * wants it judged, which it then holds the rest of the swipe to.
   *
   * @param {SimpleGestureEvent} event - The swipe event being handled
   */
  #applySwipeThreshold(event) {
    const addingSpace =
      this.#swipeState.action === OculateSpacesSwipe.ACTIONS.ADD_SPACE;
    event.swipeSuccessThreshold = addingSpace
      ? OculateSpaceAddSwipe.SUCCESS_THRESHOLD
      : OculateSpacesSwipe.SUCCESS_THRESHOLD;
    event.swipeSuccessVelocityContribution = addingSpace
      ? OculateSpaceAddSwipe.SUCCESS_VELOCITY_CONTRIBUTION
      : OculateSpacesSwipe.SUCCESS_VELOCITY_CONTRIBUTION;
  }

  get #stripWidth() {
    return window.windowUtils.getBoundsWithoutFlushing(
      document.getElementById("navigator-toolbox")
    ).width;
  }

  attachWorkspaceSwipeGestures(element) {
    for (const type of OculateSpacesSwipe.GESTURE_EVENTS) {
      element.addEventListener(type, this, true);
    }
  }

  detachWorkspaceSwipeGestures(element) {
    for (const type of OculateSpacesSwipe.GESTURE_EVENTS) {
      element.removeEventListener(type, this, true);
    }
  }

  handleEvent(event) {
    switch (event.type) {
      case "MozSwipeGestureMayStart":
        this.#handleSwipeMayStart(event);
        break;
      case "MozSwipeGestureStart":
        this.#handleSwipeStart(event);
        break;
      case "MozSwipeGestureUpdate":
        this.#handleSwipeUpdate(event);
        break;
      case "MozSwipeGesture":
        this.#handleSwipeEnd(event);
        break;
      // A popup taking over mid-swipe ends the swipe just the same.
      case "MozSwipeGestureEnd":
      case "popupshown":
        this.#onSwipeAnimationEnd();
        break;
    }
  }

  #handleSwipeMayStart(event) {
    const ws = gOculateWorkspaces;

    if (ws.privateWindowOrDisabled || ws.isChangingWorkspace) {
      return;
    }

    if (
      event.target.closest(
        '#urlbar[oculate-floating-urlbar="true"], #oculate-workspaces-button, #oculate-library-download-list'
      )
    ) {
      return;
    }

    // Only handle horizontal swipes
    if (
      event.direction === event.DIRECTION_LEFT ||
      event.direction === event.DIRECTION_RIGHT
    ) {
      event.preventDefault();
      event.stopPropagation();

      // Set allowed directions based on available workspaces
      event.allowedDirections |= event.DIRECTION_LEFT | event.DIRECTION_RIGHT;
    }
  }

  #toggleSwipeGestureAttr(enable) {
    const elements = [
      "oculate-workspace",
      "#oculate-sidebar-foot-buttons",
      "#tabbrowser-arrowscrollbox",
      ".oculate-browser-grain",
    ];
    elements.forEach(el =>
      document
        .querySelectorAll(el)
        .forEach(node => node?.toggleAttribute("swipe-gesture", enable))
    );
  }

  #handleSwipeStart(event) {
    const ws = gOculateWorkspaces;

    if (!ws.workspaceEnabled) {
      return;
    }

    gOculateFolders.cancelPopupTimer();

    this.#toggleSwipeGestureAttr(true);
    document.addEventListener("popupshown", this, { once: true });

    lazy.OculateLibrary.swipeReset();
    this.#addSwipe.swipeReset();

    event.preventDefault();
    event.stopPropagation();
    const libraryOpen = lazy.OculateLibrary.isLibraryOpen;
    this.#swipeState = {
      isGestureActive: true,
      lastDelta: 0,
      direction: null,
      deltaMultiplier: Services.prefs.getIntPref(
        "oculate.workspaces.swipe-actions.delta-multiplier"
      ),
      action: libraryOpen ? OculateSpacesSwipe.ACTIONS.LIBRARY : null,
      allowed: {
        library: libraryOpen || lazy.OculateLibrary.readySwipeOpenLibrary(),
        addSpace: this.#addSwipe.readySwipeAddSpace(),
      },
    };
    if (libraryOpen) {
      lazy.OculateLibrary.startSwipe();
    }
    this.#applySwipeThreshold(event);
  }

  #handleSwipeUpdate(event) {
    const ws = gOculateWorkspaces;

    if (!ws.workspaceEnabled || !this.#swipeState?.isGestureActive) {
      return;
    }

    const stripWidth = this.#stripWidth;

    event.preventDefault();
    event.stopPropagation();

    const delta = event.delta * this.#swipeState.deltaMultiplier;
    let translateX = this.#swipeState.lastDelta + delta;
    // Add a force multiplier as we are translating the strip depending on how close to the edge we are
    let forceMultiplier = Math.min(
      1,
      1 - Math.abs(translateX) / (stripWidth * 4.5)
    ); // 4.5 instead of 4 to add a bit of a buffer
    if (forceMultiplier > 0.5) {
      translateX *= forceMultiplier;
      this.#swipeState.lastDelta = delta + (translateX - delta) * 0.5;
    } else {
      translateX = this.#swipeState.lastDelta;
    }

    if (Math.abs(delta) > 0.9) {
      delete ws._hasAnimatedBackgrounds;
      this.#swipeState.direction = delta > 0 ? "left" : "right";
    }

    const currentWorkspace = ws.getActiveWorkspaceFromCache();
    if (!this.#swipeState.action) {
      this.#decideAction(translateX);
    }
    this.#applySwipeThreshold(event);

    switch (this.#swipeState.action) {
      case OculateSpacesSwipe.ACTIONS.LIBRARY:
        lazy.OculateLibrary.swipeProgress(translateX / stripWidth);
        ws._organizeWorkspaceStripLocations(currentWorkspace, true, 0);
        return;
      case OculateSpacesSwipe.ACTIONS.ADD_SPACE:
        this.#addSwipe.swipeProgress(event.delta);
        return;
    }

    // Apply a translateX to the tab strip to give the user feedback on the swipe
    ws._organizeWorkspaceStripLocations(currentWorkspace, true, translateX);
  }

  /**
   * Works out what the swipe is for, out of what it is allowed to do and the
   * way it is going, and hands it over to whatever takes it.
   *
   * @param {number} translateX - How far the strip has been dragged
   */
  #decideAction(translateX) {
    if (!translateX) {
      return;
    }
    const { allowed } = this.#swipeState;
    const towardsLibrary = lazy.OculateLibrary.libraryOnRight
      ? translateX < 0
      : translateX > 0;

    if (allowed.library && towardsLibrary) {
      this.#swipeState.action = OculateSpacesSwipe.ACTIONS.LIBRARY;
      lazy.OculateLibrary.startSwipe();
    } else if (allowed.addSpace && !towardsLibrary) {
      this.#swipeState.action = OculateSpacesSwipe.ACTIONS.ADD_SPACE;
      this.#addSwipe.startSwipe();
    }
  }

  async #handleSwipeEnd(event) {
    const ws = gOculateWorkspaces;

    if (!ws.workspaceEnabled) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    const isRTL = document.documentElement.matches(":-moz-locale-dir(rtl)");
    const moveForward =
      (event.direction === SimpleGestureEvent.DIRECTION_RIGHT) !== isRTL;

    const rawDirection = moveForward ? 1 : -1;
    const direction = ws.naturalScroll ? -1 : 1;

    switch (this.#swipeState.action) {
      case OculateSpacesSwipe.ACTIONS.LIBRARY:
        lazy.OculateLibrary.stopSwipe(rawDirection * direction);
        return;
      case OculateSpacesSwipe.ACTIONS.ADD_SPACE:
        this.#addSwipe.endSwipe();
        return;
    }

    await ws.changeWorkspaceShortcut(rawDirection * direction, true);
  }

  #onSwipeAnimationEnd() {
    const ws = gOculateWorkspaces;

    switch (this.#swipeState.action) {
      case OculateSpacesSwipe.ACTIONS.LIBRARY:
        lazy.OculateLibrary.swipeAnimationEnd();
        break;
      case OculateSpacesSwipe.ACTIONS.ADD_SPACE:
        this.#addSwipe.onSwipeAnimationEnd();
        break;
    }

    // Reset swipe state
    this.#swipeState = {
      isGestureActive: false,
      lastDelta: 0,
      direction: null,
      action: null,
      allowed: { library: false, addSpace: false },
    };

    this.#toggleSwipeGestureAttr(false);
    gOculateUIManager.tabsWrapper.style.removeProperty("scrollbar-width");
    [lazy.browserBackgroundElement, lazy.toolbarBackgroundElement].forEach(
      element => {
        element.style.setProperty("--oculate-background-opacity", "1");
      }
    );
    delete ws._hasAnimatedBackgrounds;
    ws.updateTabsContainers();
    document.removeEventListener("popupshown", this, { once: true });
  }

  get isGestureActive() {
    return this.#swipeState?.isGestureActive;
  }
}
