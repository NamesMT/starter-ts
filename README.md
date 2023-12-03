# starter-ts [![NPM version](https://img.shields.io/npm/v/starter-ts?color=a1b858&label=)](https://www.npmjs.com/package/starter-ts)

**starter-ts** is my starter/boilerplate for typescript projects.  
This template assumes you are using Linux, or the included Dev Container.

### Notes (remove this section when you use the template)
#### * Do a global replace for `starter-ts` and `NamesMT`

#### * I'm heavily inspired by [antfu](https://github.com/antfu) and [UnJS](https://github.com/unjs), some notable things:
- [antfu/ni](https://github.com/antfu/ni)
- [antfu/taze](https://github.com/antfu/taze)
- [antfu/vscode-settings](https://github.com/antfu/vscode-settings)
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

## License

[MIT](./LICENSE) License © 2023 [NamesMT](https://github.com/NamesMT)
