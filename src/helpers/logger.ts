import type { ConsolaInstance } from 'consola'
import { createConsola, LogLevels } from 'consola'
import { isDevelopment } from 'std-env'

/**
 * Note: this logger will log the `debug` level logs in development mode.
 *
 * For actual debug logs with `NODE_DEBUG`, it is recommended to use the `debug` package.
 */
export const logger: ConsolaInstance = createConsola(
  {
    level: isDevelopment ? LogLevels.debug : undefined,
  },
)
