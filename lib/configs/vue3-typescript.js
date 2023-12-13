module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    require.resolve('./vue3-recommended.js'),
  ],
  parserOptions: {
    "sourceType": "module",
    "ecmaVersion": "latest",
    // 'parser': '@typescript-eslint/parser',
    'ecmaFeatures': {
      'jsx': true,
      'tsx': true,
    }
  },
  rules: {
    /*
        'vue/block-lang': ['error',
          {
            'script': {
              'lang': 'ts'
            }
          }
        ]
    */
    'vue/define-emits-declaration': 'error',
    'vue/define-props-declaration': 'error',

  }
};
