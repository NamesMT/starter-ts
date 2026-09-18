import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      exclude: [
        ...configDefaults.coverage.exclude!,
        'src/helpers/logger.ts',
        'tsdown.config.ts',
      ],
    },
  },
}) as ReturnType<typeof defineConfig>
