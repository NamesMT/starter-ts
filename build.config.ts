import { defineBuildConfig } from 'unbuild'
import sharedConfig from './shared.config'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
  ...sharedConfig,
})
