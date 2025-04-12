import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [
      // eslint ignore globs here
    ],
  },
  {
    rules: {
      // Relaxes inline statements a bit
      'style/max-statements-per-line': ['error', { max: 2 }],
    },
  },
  // Allow trailing space for markdown formatting
  {
    files: ['**/*.md'],
    rules: {
      'style/no-trailing-spaces': 'off',
    },
  },
)
