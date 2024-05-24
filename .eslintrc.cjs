module.exports = {
  root: true,
  // 'parserOptions': {
  //   'sourceType': 'script',
  //   'ecmaVersion': 2021,
  // },
  extends: [
    require.resolve("./lib/configs/vue3-typescript.js"),
    // 'eslint:recommended',
    // 'plugin:n/recommended',
    // 'plugin:eslint-plugin/recommended'
  ],
  env: {
    node: true,
  },
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  ignorePatterns: [
    '**/lib/**/*.js',
    '**/rules/**/*.js',
    '.eslintrc.js',
    'eslint-local-rules.js'
  ],
  // 'rules': {
  //   'eslint-plugin/require-meta-docs-description': 'error',
  //   "n/exports-style": ["error", "module.exports"],
  // },
};
