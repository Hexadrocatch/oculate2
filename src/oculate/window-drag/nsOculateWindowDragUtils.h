/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#ifndef oculate_nsOculateWindowDragUtils_h_
#define oculate_nsOculateWindowDragUtils_h_

#include "nsIOculateWindowDragUtils.h"

#define OCULATE_WINDOW_DRAG_UTILS_CONTRACTID "@mozilla.org/oculate/window-drag-utils;1"

namespace oculate {

class nsOculateWindowDragUtils final : public nsIOculateWindowDragUtils {
  NS_DECL_ISUPPORTS
  NS_DECL_NSIOCULATEWINDOWDRAGUTILS

 public:
  nsOculateWindowDragUtils() = default;

 private:
  ~nsOculateWindowDragUtils() = default;
};

}  // namespace oculate

#endif
