# starter-ts ![TypeScript heart icon](https://img.shields.io/badge/♡-%23007ACC.svg?logo=typescript&logoColor=white)

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Codecov][codecov-src]][codecov-href]
[![Bundlejs][bundlejs-src]][bundlejs-href]
[![jsDocs.io][jsDocs-src]][jsDocs-href]

**starter-ts** is my starter/boilerplate for typescript projects.  
This template assumes you are using Linux, or the included Dev Container.

### Notes (remove this section when you use the template)
#### * Do a global replace for `starter-ts` and `NamesMT`

#### * Notable behavior:
- [antfu/eslint-config](https://github.com/antfu/eslint-config)
  - Style error silencing is commented out

#### * Script: `play` vs `play:useBuild` for playground testing?
- `play` script uses `unbuild`'s [passive watcher (stub mode)](https://github.com/unjs/unbuild#-passive-watcher), which allows you to execute new code **live** without rebuilding the project. The cons is TS declarations are not available.
- `play:useBuild` builds a static version of the package, useful for testing the actual look/behavior when shipping.
### END NOTE

## Features
- [x] TypeScript ready!

## Usage
### Install package:
```sh
# npm
npm install starter-ts

# yarn
yarn add starter-ts

# pnpm (recommended)
pnpm install starter-ts
```

### Import:
```ts
// ESM
import { hello } from 'starter-ts'
```

## Roadmap

- [x] Setting up Dev Container
- [ ] Become the legendary 10000x developer

## License [![License][license-src]][license-href]
[MIT](./LICENSE) License © 2023 [NamesMT](https://github.com/NamesMT)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/starter-ts?labelColor=18181B&color=F0DB4F
[npm-version-href]: https://npmjs.com/package/starter-ts
[npm-downloads-src]: https://img.shields.io/npm/dm/starter-ts?labelColor=18181B&color=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/starter-ts
[codecov-src]: https://img.shields.io/codecov/c/gh/namesmt/starter-ts/main?labelColor=18181B&color=F0DB4F
[codecov-href]: https://codecov.io/gh/namesmt/starter-ts
[license-src]: https://img.shields.io/github/license/namesmt/starter-ts.svg?labelColor=18181B&color=F0DB4F
[license-href]: https://github.com/namesmt/starter-ts/blob/main/LICENSE
[bundlejs-src]: https://img.shields.io/bundlejs/size/starter-ts?labelColor=18181B&color=F0DB4F
[bundlejs-href]: https://bundlejs.com/?q=starter-ts
[jsDocs-src]: https://img.shields.io/badge/Check_out-jsDocs.io---?labelColor=18181B&color=F0DB4F
[jsDocs-href]: https://www.jsdocs.io/package/starter-ts
