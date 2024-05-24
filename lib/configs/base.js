// const path = require('node:path');

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    '@stylistic/js',
    'align-import',
    'eslint-plugin-local-rules',
    'eslint-plugin-eqeqeq-fix',
  ],
  rules: {
    'prettier/prettier': ['error',
      {
        "singleQuote": true,
        "parser": "flow"
      }, {
        "usePrettierrc": false
      }],
    'local-rules/variable-spacing': 'error',
    '@stylistic/js/no-multi-spaces': [
      'error',
      {
        exceptions: {
          ImportDeclaration: true,
          VariableDeclarator: true,
        },
      },
    ],
    'linebreak-style': [
      'error',
      'windows',
    ],
    // ...vue3Recommended.rules,
    // 默认全局规则
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    semi: 'error',
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'array-bracket-spacing': [
      'error',
      'always',
    ],
    eqeqeq: 'error',
    'eqeqeq-fix/eqeqeq': 'error',
    quotes: [
      'error',
      'double',
    ],
    '@stylistic/js/max-statements-per-line': ['error', { max: 1 }],
    '@typescript-eslint/brace-style': 'off',
    'no-trailing-spaces': ['off'],
    'semi-spacing': 'error',
    'space-unary-ops': 'error',
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'key-spacing': 'error',
    'comma-spacing': 'error',
    'no-multi-spaces': [
      'off',
    ],
    'align-import/align-import': 'error',
    'object-curly-newline': [
      'error',
      {
        consistent: true,
        multiline: true,
      },
    ],
    'import/no-cycle': ['error', { maxDepth: '∞' }],
    'space-before-blocks': [
      'error',
      'always',
    ],
    'brace-style': [
      'error',
      'stroustrup',
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'keyword-spacing': ['error', { before: true }],
    'no-console': 'warn',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'error',

    'object-property-newline': 'error',
    'prefer-template': 'error',
    'space-in-parens': ['error', 'never'],
    'operator-linebreak': ['error', 'after'],
    'multiline-ternary': ['error', 'always'],

    'no-multiple-empty-lines': ['error', {
      'max': 2,
      maxEOF: 0
    }],
  },
};
