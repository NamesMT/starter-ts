#!/usr/bin/env node
/** Validates the version a release workflow was dispatched with. */
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const requested = (process.argv[2] ?? '').trim()
const { version: current } = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'))

if (!/^\d+\.\d+\.\d+(?:-[0-9A-Z.-]+)?$/i.test(requested)) {
  console.error(`[release] "${requested}" is not a version — expected 1.2.3 or 1.2.3-rc.1`)
  process.exit(1)
}

function compare(left, right) {
  const a = left.split('-')[0].split('.').map(Number)
  const b = right.split('-')[0].split('.').map(Number)
  for (let index = 0; index < 3; index += 1) {
    if ((a[index] ?? 0) !== (b[index] ?? 0))
      return (a[index] ?? 0) > (b[index] ?? 0) ? 1 : -1
  }
  return left === right ? 0 : left.includes('-') ? -1 : 1
}

if (compare(requested, current) <= 0) {
  console.error(`[release] "${requested}" is not greater than the current ${current}`)
  process.exit(1)
}

console.log(`[release] ${current} -> ${requested}`)
