import antfu from '@antfu/eslint-config'

export default antfu(
  {
    // Type of the project. 'lib' | 'app' (default 'app')
    type: 'lib',

    // Customize the stylistic rules
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: 'single', // or 'double'
    },

    // TypeScript and Vue are autodetected, you can also explicitly enable them:
    typescript: true,
    // vue: true,

    // ESLint ignore globs here
    ignores: [
    ],
  },
  {
    rules: {
      // Relaxes inline statements a bit
      'style/max-statements-per-line': ['error', { max: 2 }],
    },
  },
)
