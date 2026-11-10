/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#include "nsOculateBoostsBackend.h"

#include "nsIXULRuntime.h"
#include "nsPresContext.h"

#include "mozilla/StaticPtr.h"

#include "mozilla/MediaFeatureChange.h"

#include "mozilla/dom/Document.h"
#include "mozilla/dom/DocumentInlines.h"
#include "mozilla/dom/BrowsingContext.h"

#define MARK_MEDIA_FEATURE_CHANGED(_pc)                                \
  (_pc)->MediaFeatureValuesChanged(                                    \
      {mozilla::RestyleHint::RecascadeSubtree(), NS_STYLE_HINT_VISUAL, \
       mozilla::MediaFeatureChangeReason::PreferenceChange},           \
      mozilla::MediaFeatureChangePropagation::All);

#define TRIGGER_PRES_CONTEXT_RESTYLE() \
  WalkPresContexts(                    \
      this, [&](nsPresContext* aPc) { MARK_MEDIA_FEATURE_CHANGED(aPc); });

using BrowsingContext = mozilla::dom::BrowsingContext;

template <typename Callback>
static void WalkPresContexts(BrowsingContext* aTop, Callback&& aCallback) {
  aTop->PreOrderWalk([&](BrowsingContext* aContext) {
    if (nsIDocShell* shell = aContext->GetDocShell()) {
      if (RefPtr pc = shell->GetPresContext()) {
        aCallback(pc.get());
      }
    }
  });
}

/**
 * @brief Called when the OculateBoostsData field is set on a browsing context.
 * Triggers a restyle if the boost data has changed.
 * @param aOldValue The previous value of the boost data.
 */
void BrowsingContext::DidSet(FieldIndex<IDX_OculateBoostsData>,
                             OculateBoostData aOldValue) {
  MOZ_ASSERT(IsTop());
  if (OculateBoostsData() == aOldValue) {
    return;
  }
  PresContextAffectingFieldChanged();
  TRIGGER_PRES_CONTEXT_RESTYLE();
}

/**
 * @brief Called when the OculateBoostsComplementaryRotation field is set on a
 * browsing context. This is the hue rotation (in degrees) applied to the base
 * accent to derive the complementary accent that light page colors are tinted
 * toward. Triggers a restyle if it has changed.
 * @param aOldValue The previous rotation value.
 */
void BrowsingContext::DidSet(FieldIndex<IDX_OculateBoostsComplementaryRotation>,
                             float aOldValue) {
  MOZ_ASSERT(IsTop());
  if (OculateBoostsComplementaryRotation() == aOldValue) {
    return;
  }
  PresContextAffectingFieldChanged();
  TRIGGER_PRES_CONTEXT_RESTYLE();
}

/**
 * @brief Called when the IsOculateBoostsInverted field is set on a browsing
 * context. Triggers a restyle if the value has changed.
 * @param aOldValue The previous value of the IsOculateBoostsInverted flag.
 */
void BrowsingContext::DidSet(FieldIndex<IDX_IsOculateBoostsInverted>,
                             bool aOldValue) {
  MOZ_ASSERT(IsTop());
  if (IsOculateBoostsInverted() == aOldValue) {
    return;
  }
  PresContextAffectingFieldChanged();
  TRIGGER_PRES_CONTEXT_RESTYLE();
}
