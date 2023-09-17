/* eslint-disable unused-imports/no-unused-vars */
import { describe, expect, test } from 'vitest'
import { hello } from '~/index'

describe('Init', () => {
  test('Hello shorten string', () => {
    expect(hello).toBe('hi')
  })
})
