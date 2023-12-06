module.exports = {
  rules: {
    // vue3 使用的配置
    // vue only
    'vue/no-v-for-template-key-on-child': 'warn',
    'vue/html-closing-bracket-newline': [
      'warn',
      {
        singleline: 'never',
        multiline: 'never'
      }
    ],
    'vue/object-curly-spacing': [
      'warn',
      'always'
    ],
    'vue/array-bracket-spacing': [
      'warn',
      'always'
    ],
    'vue/first-attribute-linebreak': [
      'warn',
      {
        singleline: 'ignore',
        multiline: 'beside'
      }
    ],
    'vue/eqeqeq': 'warn',
    'vue/require-default-prop': 'off',
    'vue/no-mutating-props': 'off'
  }
};
