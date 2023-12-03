import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import * as rootPackage from 'starter-ts'

// eslint-disable-next-line no-console
console.log({ rootPackage: JSON.stringify(rootPackage) })

export default defineConfig({
  plugins: [
    Inspect(),
  ],
})
