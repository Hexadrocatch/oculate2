/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#include "nsOculateModsBackend.h"

#include "nsIXULRuntime.h"
#include "nsStyleSheetService.h"

#include "mozilla/PresShell.h"
#include "mozilla/dom/ContentParent.h"

#include "nsIURI.h"
#include "nsIFile.h"

#include "OculateStyleSheetCache.h"

namespace oculate {

namespace {
/// @brief Helper function to get the singleton instance of OculateStyleSheetCache.
/// @return A pointer to the singleton instance of OculateStyleSheetCache.
static auto GetOculateStyleSheetCache() -> OculateStyleSheetCache* {
  return OculateStyleSheetCache::Singleton();
}
}  // namespace

// Use the macro to inject all of the definitions for nsISupports.
NS_IMPL_ISUPPORTS(nsOculateModsBackend, nsIOculateModsBackend)

nsOculateModsBackend::nsOculateModsBackend() { (void)CheckEnabled(); }

auto nsOculateModsBackend::CheckEnabled() -> void {
  // Check if the mods backend is enabled based on the preference.
  bool inSafeMode = false;
  if (nsCOMPtr<nsIXULRuntime> appInfo =
          do_GetService("@mozilla.org/xre/app-info;1")) {
    appInfo->GetInSafeMode(&inSafeMode);
  }
  mEnabled = !inSafeMode &&
             !mozilla::Preferences::GetBool("oculate.themes.disable-all", false);
}

auto nsOculateModsBackend::RebuildModsStyles(const nsACString& aContents)
    -> nsresult {
  // Notify that the mods stylesheets have been rebuilt.
  return GetOculateStyleSheetCache()->RebuildModsStylesheets(aContents);
}

}  // namespace oculate

auto nsStyleSheetService::OculateMarkStylesAsChanged() -> void {
  for (auto& presShell : mPresShells) {
    if (presShell) {
      if (auto doc = presShell->GetDocument();
          doc && doc->IsInChromeDocShell()) {
        // Notify the document that styles have changed.
        doc->ApplicableStylesChanged();
      }
    }
  }
}
