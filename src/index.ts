import { type } from 'arktype'

export const shouldBe200 = 200

const Thing = type({
  file: `File`,
  blob: `Blob`,
  string: `string`,
})
