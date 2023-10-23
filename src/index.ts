import { OK } from 'readable-http-codes'
import { logger } from '~/logger'

export const shouldBe200 = OK

logger.info({ shouldBe200, message: 'hello there' })
