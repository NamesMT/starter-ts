import { shouldBe200 } from '#src/index.js'
import { expect, it } from 'vitest'

it('shouldBe200', () => {
  expect(shouldBe200).toBe(200)
})
