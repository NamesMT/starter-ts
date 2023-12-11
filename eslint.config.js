import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    ignores: [
      // eslint ignore globs here
    ],
  },
  {
    files: ['*.md'],
    rules: {
      'style/no-trailing-spaces': 'off',
    },
  },
)
