module.exports = {
  extends: [
    require.resolve('./base'),
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential'
  ],
  rules: {
    // vue3 使用的配置
    // vue only
    'vue/no-v-for-template-key-on-child': 'error',
    'vue/object-curly-spacing': [
      'error',
      'always'
    ],
    'vue/array-bracket-spacing': [
      'error',
      'always'
    ],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'beside'
      }
    ],
    'vue/eqeqeq': 'error',
    'vue/require-default-prop': 'off',
    'vue/no-mutating-props': 'off',
    'vue/html-closing-bracket-spacing': ['error', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'always'
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always'
    }]
  }
};
