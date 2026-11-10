/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#ifndef mozilla_OculateModsBackend_h_
#define mozilla_OculateModsBackend_h_

#include "nsIOculateModsBackend.h"
#include "nsIOculateCommonUtils.h"

#include "mozilla/ServoStyleSet.h"
#include "mozilla/dom/Document.h"

namespace oculate {

class nsOculateModsBackend final : public nsIOculateModsBackend {
  NS_DECL_ISUPPORTS
  NS_DECL_NSIOCULATEMODSBACKEND

 public:
  explicit nsOculateModsBackend();

 protected:
  /**
   * @brief Check for the preference and see if the app is on safe mode.
   */
  auto CheckEnabled() -> void;

 private:
  ~nsOculateModsBackend() = default;
  bool mEnabled = false;
};

}  // namespace oculate

#endif
