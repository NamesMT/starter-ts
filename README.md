<div align="center">

<h1>Starter TS</h1>

<h3>I love TypeScript!</h3>
<img src="./branding.svg" alt="Project's branding image" width="320"/>

</div>

# starter-ts ![TypeScript heart icon](https://img.shields.io/badge/♡-%23007ACC.svg?logo=typescript&logoColor=white)

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Codecov][codecov-src]][codecov-href]
[![Bundlejs][bundlejs-src]][bundlejs-href]
[![TypeDoc][TypeDoc-src]][TypeDoc-href]

* [starter-ts ](#starter-ts-)
  * [Notes (remove this section when you use the template)](#notes-remove-this-section-when-you-use-the-template)
    * [\* Do a global replace for `starter-ts` and `NamesMT`](#-do-a-global-replace-for-starter-ts-and-namesmt)
    * [\* Notable behaviors:](#-notable-behaviors)
  * [Overview](#overview)
  * [Features](#features)
  * [Usage](#usage)
    * [Install package](#install-package)
    * [Import and use](#import-and-use)
  * [Roadmap](#roadmap)
  * [License](#license)

## Notes (remove this section when you use the template)

### * Do a global replace for `starter-ts` and `NamesMT`

### * Notable behaviors:

- [antfu/eslint-config](https://github.com/antfu/eslint-config)
  - Style error silencing is commented out

## Overview

**starter-ts** is my starter/boilerplate for typescript projects.
This template assumes you are using Linux, or the included Dev Container.

## Features

+ 👌 TypeScript
+ 🧐 ESLint + stylistic formatting rules ([antfu](https://github.com/antfu/eslint-config))
+ 💯 Vitest
+ 📦 [obuild](https://github.com/unjs/obuild)
+ 📚 A few more goodies like:
  + [changelogen](https://github.com/unjs/changelogen) release script
  + [lint-staged](https://github.com/lint-staged/lint-staged) pre-commit hook

## Usage

### Install package

```sh
# npm
npm install starter-ts

# bun
bun add starter-ts

# pnpm
pnpm install starter-ts
```

### Import and use

```ts
// ESM
import { hello } from 'starter-ts'

hello('world')
```

## Roadmap

- [ ] Become the legendary 10000x developer

## License

[![License][license-src]][license-href]

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
[TypeDoc-src]: https://img.shields.io/badge/Check_out-TypeDoc---?labelColor=18181B&color=F0DB4F
[TypeDoc-href]: https://namesmt.github.io/starter-ts/
