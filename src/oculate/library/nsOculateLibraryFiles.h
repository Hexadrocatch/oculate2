/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#ifndef mozilla_nsOculateLibraryFiles_h_
#define mozilla_nsOculateLibraryFiles_h_

#include "nsIOculateLibraryFiles.h"

#define OCULATE_LIBRARY_FILES_CONTRACTID "@mozilla.org/oculate/library-files;1"

namespace oculate {

/**
 * @brief Implementation of the nsIOculateLibraryFiles interface.
 */
class nsOculateLibraryFiles final : public nsIOculateLibraryFiles {
  NS_DECL_ISUPPORTS
  NS_DECL_NSIOCULATELIBRARYFILES

 public:
  explicit nsOculateLibraryFiles() = default;

 private:
  ~nsOculateLibraryFiles() = default;
};

}  // namespace oculate

#endif
