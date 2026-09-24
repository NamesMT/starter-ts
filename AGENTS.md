# AGENTS.md

`starter-ts` is my template for a small, publishable TypeScript library: Node >= 24, ESM only,
`#src/*` import aliases, [tsdown](https://github.com/rolldown/tsdown) for the build and
[Vitest](https://vitest.dev) for tests. Everything here is meant to be copied and renamed —
treat `starter-ts`, `namesmt` and `shouldBe200` as placeholders.

## Commands

```sh
pnpm run lint             # eslint (@antfu/eslint-config) — it also owns formatting
pnpm run test             # vitest in watch mode
pnpm run test:types       # tsc --noEmit
pnpm run quickcheck       # lint + test:types — the fast gate, and what CI runs
pnpm run check            # quickcheck + vitest run --coverage — the full gate (`prerelease`)
pnpm run build            # tsdown -> dist/index.mjs + dist/index.d.mts
pnpm run release:check    # validate a version against package.json: `pnpm run release:check 0.2.0`
pnpm run release:preview  # print the changelog the next release would get
pnpm exec vitest run      # run the suite once
```

## Structure

- `src/index.ts` — the package entry; `exports` / `main` / `source` in `package.json` point here.
- `src/helpers/*` — internal helpers, imported as `#src/helpers/<name>.js`.
- `test/**` — mirrors `src/**`; test imports use the same alias, with a `.js` suffix on `.ts` files.
- `tsdown.config.ts` — build config; types are emitted alongside the bundle.
- `.github/workflows/` — `quickcheck` (lint + types, then a build), `test-and-codecov`
  (coverage), `typedoc` (GitHub Pages API docs) and `release` (manual, see below). The first three
  are `workflow_dispatch`-only; uncomment their `push` blocks to make them automatic.

## Conventions

- Conventional commits (`feat:`, `fix:`, `chore:`, …) — the changelog is derived from them.
- ESLint via `@antfu/eslint-config` owns formatting: no Prettier, single quotes, 2-space indent,
  sorted imports with no blank lines between them. `lint-staged` runs `eslint --fix` on every
  commit, so run `pnpm run lint` before claiming a change is clean.
- Comments are sparse — explain non-obvious intent, not mechanics.
- ESM only: `"type": "module"` with an `import`-only `exports` map; do not add a CJS build.
- `src/helpers/logger.ts` is excluded from coverage in `vitest.config.ts` — keep it that way
  instead of writing a test for the logger.

## Releasing

Releases are version-first and manual. Dispatch **Actions → Release → Run workflow** with a
version, and `.github/workflows/release.yml` checks the version, lints/types/tests, builds, lets
changelogen bump `package.json`, write `CHANGELOG.md`, commit and tag `v<version>`, pushes that,
creates the GitHub release, then publishes to npm over OIDC trusted publishing. **A pushed tag
publishes nothing** — the old tag-triggered workflow was removed on purpose, so a tag can never
publish a second time. The `dry-run` input stops before the push.

One-time setup lives in the README: publish once by hand, then configure a trusted publisher on
npmjs.com naming this repository and the `release.yml` workflow.

## Gotchas

- `pnpm test` watches; CI must call `vitest run`.
- `dist/` is built, never committed — it is gitignored, but a stale copy may exist locally.
- The release workflow's `--clean` fails when `git status --porcelain` is non-empty; ignored
  files such as `dist/` do not count towards that.
- The README's `hello('world')` sample and `shouldBe200` are template placeholders, not a real API.
