import { expect, it } from 'vitest'
import { shouldBe200 } from '~/index'

it('shouldBe200', () => {
  expect(shouldBe200).toBe(200)
})
