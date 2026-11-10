<!--
   - This Source Code Form is subject to the terms of the Mozilla Public
   - License, v. 2.0. If a copy of the MPL was not distributed with this
   - file, You can obtain one at http://mozilla.org/MPL/2.0/.
   -->

# Local Development Setup

Oculate is a set of patches and additional sources applied on top of the Firefox source tree. Node.js, Python 3, Rust and the usual Firefox build prerequisites are required.

```
npm ci
npm run init
python3 scripts/update_en_US_packs.py
npm run build
npm start
```

`npm run init` downloads the Firefox source into `engine/`, applies the contents of `src/` to it and bootstraps the Firefox toolchain. Run `npm run import` again after changing anything under `src/`.

# Code Of Conduct

Please read our [Code of Conduct](../CODE_OF_CONDUCT.md) before contributing.
