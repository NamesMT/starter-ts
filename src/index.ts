import { deepMerge } from '@antfu/utils'

export const shouldBe200 = 200

interface TypedInterface {
  str: string
  num: number
}

const strMerge = deepMerge(
  { str: 'abc' },
  { str: 'xyz' },
)
const numMerge = deepMerge(
  { num: 1 },
  { num: 2 },
)

const typedInterfaceMerge = deepMerge(
  { str: 'abc', num: 1 } as TypedInterface,
  { str: 'xyz', num: 2 } as TypedInterface,
)
