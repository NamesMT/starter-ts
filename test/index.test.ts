import { expect, it } from 'vitest'
import { shouldBe200 } from '#src/index.js'

it('shouldBe200', () => {
  expect(shouldBe200).toBe(200)
})
