# AGENTS.md

`starter-ts` is a template for a small, publishable TypeScript library: Node >= 24, ESM only,
`#src/*` import aliases, [tsdown](https://github.com/rolldown/tsdown) for the build and
[Vitest](https://vitest.dev) for tests. Everything is meant to be copied and renamed — treat
`starter-ts`, `namesmt` and `shouldBe200` as placeholders.

## Commands

```sh
pnpm run lint              # eslint (@antfu/eslint-config) — it also owns formatting
pnpm run test:types        # tsc --noEmit
pnpm run quickcheck        # lint + test:types — the fast local gate
pnpm run check             # lint + test:types + vitest run --coverage — the release gate
pnpm run build             # tsdown -> dist/index.mjs + dist/index.d.mts
pnpm exec vitest run       # one-shot test run (`pnpm test` watches instead)
pnpm run release:check 0.2.0  # reject a version not greater than package.json's
pnpm run release:preview   # print the changelog the next release would get
```

## Structure

- `src/index.ts` — the package entry (`source` in package.json; `exports`/`main` point at `dist/`).
- `src/helpers/*` — internal helpers, imported as `#src/helpers/<name>.js`.
- `test/**` — mirrors `src/**`; test imports use the same alias with a `.js` suffix on `.ts` files.
- `tsdown.config.ts` — build config; types are emitted alongside the bundle.
- `.github/workflows/` — `quickcheck` (lint + types, then a build), `test-and-codecov` (coverage),
  `typedoc` (GitHub Pages) and `release` (manual, see below). All are `workflow_dispatch`-only;
  uncomment their `push` blocks to make them automatic.

## Conventions

- Conventional commits (`feat:`, `fix:`, `chore:`, …) — the changelog is derived from them.
- ESLint via `@antfu/eslint-config` owns formatting (no Prettier): single quotes, 2-space indent,
  sorted imports. `lint-staged` runs `eslint --fix` on every commit, so run `pnpm run lint` before
  claiming a change is clean.
- Comments are sparse — explain non-obvious intent, not mechanics.
- ESM only: `"type": "module"` with an `import`-only `exports` map; do not add a CJS build.
- `src/helpers/logger.ts` is excluded from coverage in `vitest.config.ts` — don't add coverage
  tests for it (`test/helpers/logger.test.ts` is already a smoke test).

## How to work here

- Check callers first; flag unclear impact instead of guessing.
- Never overwrite a large section you have not understood.
- Surface what looks needed; do not invent requirements.
- Report risk, not just the change: correctness, security, ops, integration.
- **Fix the class, not the instance** — copied helper, duplicated rule, bypassed second path → one
  implementation, one formatter, one guard. That is the work, not a follow-up.
- Verify before claiming; a green test proves nothing on its own.
- No recall of this project? Read this file + `git log` first.

## Conciseness (applies everywhere)

Prune verbose, keep correctness — code, comments, docs. Code: comments only for non-obvious intent. Docs:
one idea per sentence; cut what would not change what a reader does. Keep the rule, not the history `git log`
holds. Never drop a caveat to save a line.

## User-facing docs

`README.md` is the only user-facing doc (no `docs/` here): concise first read, depth in `<details>`, visuals
for skimmers — and it ships with the change, in the same commit.

## Releasing

Manual and version-first: dispatch **Actions → Release → Run workflow** with the version.
It gates on `pnpm run check` and a build, then changelogen bumps `package.json`, writes `CHANGELOG.md`, commits, tags `v<version>`, pushes, creates the GitHub release and publishes to npm over OIDC trusted publishing (a pushed tag publishes nothing).
`dry-run` still performs the local changelog/bump/commit/tag and only skips push, release and publish.
One-time trusted-publisher setup is in the README.

## Gotchas

- `dist/` is built, never committed — it is gitignored, but a stale copy may exist locally.
- The release workflow's `changelogen --clean` aborts on a dirty `git status --porcelain`; ignored files such as `dist/` do not count.
- The README's `hello('world')` sample is a placeholder, not a real API.
- The npm name `starter-ts` is owned by another user (`qq15725`), so this repo cannot publish to npm as-is — rename the package (and the trusted publisher) before releasing.
