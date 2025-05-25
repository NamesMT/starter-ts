import type { ConsolaInstance } from 'consola'
import { createConsola, LogLevels } from 'consola'
import { isDevelopment } from 'std-env'

export const logger: ConsolaInstance = createConsola(
  {
    level: isDevelopment ? LogLevels.debug : undefined,
  },
)
