import { expect, it } from 'vitest'
import { logger } from '#src/helpers/logger.js'

it('logger', () => {
  expect(logger).toHaveProperty('info')
})
