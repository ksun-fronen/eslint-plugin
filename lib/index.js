// const vue3Recommended = require('./configs/vue3-recommended');

module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'plugins': [
    '@typescript-eslint',
    'vue',
    'html',
    'prettier',
  ],
  rules: {
    'prettier/prettier': ['error'],
  },
  configs: {
    base: require('./configs/base'),
    vue3: require('./configs/vue3-recommended'),
    'vue3-typescript': require('./configs/vue3-typescript'),
  }
};
