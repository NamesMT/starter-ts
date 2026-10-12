# AGENTS.md

`starter-ts` is a template for a small, publishable TypeScript library: Node >= 24, ESM only,
`#src/*` import aliases, [tsdown](https://github.com/rolldown/tsdown) for the build and
[Vitest](https://vitest.dev) for tests. Everything is meant to be copied and renamed — treat
`starter-ts`, `namesmt` and `shouldBe200` as placeholders.

## Docs

Where knowledge lives, and when to reach for each:

| tier | what it holds | when you use it |
| --- | --- | --- |
| `AGENTS.md` — this file | orientation and the rules that prevent defects | read every session; write when a rule is learned the hard way |
| `.agentDocs/` | depth: module rationale, traps with their causes, compatibility | read on demand, before touching that area; write when a rule needs its reasoning kept |
| `docs/` | how-to and reference for a person using this package | read when the task is user-facing; write in the same commit as the change |
| `README.md` | the first read, for a person | write alongside `docs/` |

- **One home per fact.** State the rule here, keep the reasoning in `.agentDocs/` and link it — never both.
- **A dead pointer is a bug.** If the target is gone, delete the pointer rather than leave it.
- Move depth behind a pointer once a section outgrows a screen or two; keep the rule inline.

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
pnpm run prerelease        # alias of `pnpm run check`
```

## Structure

- `src/index.ts` — the package entry (`source` in package.json; `exports`/`main` point at `dist/`).
- `src/helpers/*` — internal helpers, imported as `#src/helpers/<name>.js`.
- `test/**` — mirrors `src/**`; test imports use the same alias with a `.js` suffix on `.ts` files.
- `.github/workflows/` — `quickcheck` (lint + types, then a build), `test-and-codecov` (coverage),
  `typedoc` (GitHub Pages) and `release` (manual, see below). All are `workflow_dispatch`-only;
  uncomment their `push` blocks to make them automatic.

## Conventions

- Conventional commits (`feat:`, `fix:`, `chore:`, …) — the changelog is derived from them.
- ESLint (`@antfu/eslint-config`) owns lint and formatting; `lint-staged` runs `eslint --fix` on commit — run `pnpm run lint` before claiming a change is clean.
- Comments are sparse — explain non-obvious intent, not mechanics.
- ESM only: `"type": "module"` with an `import`-only `exports` map; do not add a CJS build.
- `src/helpers/logger.ts` is excluded from coverage in `vitest.config.ts` — don't add coverage
  tests for it (`test/helpers/logger.test.ts` is already a smoke test).

## How to work here

- **Check the callers before you change anything.** Grep who uses it and which tests name it. If the
  impact is unclear, say so — do not guess.
- **Never overwrite or delete a large section you have not understood.** Read it, or say what you could
  not determine and ask.
- **Do not invent requirements.** Build what was asked; surface what else you notice and let it be
  decided.
- **Fix the class, not the instance.** A copied helper, a rule stated twice, a guard bypassed by a
  second path is one problem: one implementation, one guard. That is the work, not a follow-up to ask
  for. Stay inside the task rather than refactoring the world.
- **Verify before claiming, and say what you checked.** A passing test is not evidence it pins
  anything — **break the thing it guards and watch it fail.** If it still passes, either the test is
  decoration or a different guard is running; find out which. Where a stub cannot answer the question,
  drive the real thing.
- **Never write an identifier from memory.** A commit hash, path, line number or version must be quoted
  from the source; a plausible-looking invented one is worse than none.
- **A stated blocker is a hypothesis, not a fact.** Re-test "cannot install X" / "tool unavailable"
  before inheriting it, and never report a failure your own flag forced.
- **Report the risk with the change** — correctness, security, operational and integration; plus what
  you could not verify and every assumption you made. An unverified claim marked as such beats a
  confident one that is wrong.
- **Missing recall of this repo?** Read this file, `.agentDocs/` and `git log` before acting, then ask
  1–3 focused questions rather than guessing at intent.

## Conciseness

**Prune verbose, keep correctness** — code, comments, docs alike.

- Code: a comment only for non-obvious *intent*, never to restate the line, and never long. A block
  arguing for its own change is a commit message.
- Docs: one idea per sentence. Cut anything that would not change what a reader does.
- Delete history `git log` already holds — keep the *rule* that came out of it, not the story.
- **Never drop a caveat to save a line.** Concise means no filler, not fewer facts.

## User-facing docs

`README.md` is the only user-facing doc (no `docs/` here): concise first read, visuals for skimmers —
and it ships with the change, in the same commit.

## Releasing

Manual and version-first: dispatch **Actions → Release → Run workflow** with the version.
It gates on `pnpm run check` and a build, then changelogen bumps `package.json`, writes `CHANGELOG.md`, commits, tags `v<version>`, pushes, creates the GitHub release and publishes to npm over OIDC trusted publishing (a pushed tag publishes nothing).
`dry-run` still performs the local changelog/bump/commit/tag and only skips push, release and publish.
One-time trusted-publisher setup is in the README.

## Gotchas

- `dist/` is built, never committed — it is gitignored, but a stale copy may exist locally.
- The release workflow's `changelogen --clean` aborts on a dirty `git status --porcelain`; ignored files such as `dist/` do not count.
- The README's `hello('world')` sample is a placeholder, not a real API.
- The npm name `starter-ts` is owned by another user (`wengxiangmin`), so this repo cannot publish to npm as-is — rename the package (and the trusted publisher) before releasing.
