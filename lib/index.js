'use strict';

module.exports = {
  rules: {
    // 默认全局规则
    indent: [
      'warn',
      2
    ],
    semi: 'warn',
    'object-curly-spacing': [
      'warn',
      'always'
    ],
    'array-bracket-spacing': [
      'warn',
      'always'
    ],
    eqeqeq: 'warn',
    quotes: [
      'warn',
      'double'
    ],
    'semi-spacing': 'warn',
    'space-unary-ops': 'warn',
    'arrow-spacing': 'warn',
    'block-spacing': 'warn',
    'key-spacing': 'warn',
    'comma-spacing': 'warn',
    'no-multi-spaces': [
      'warn',
      {
        exceptions: {
          ImportDeclaration: true
        }
      }
    ],
    'object-curly-newline': [
      'warn',
      {
        consistent: true,
        multiline: true
      }
    ],
    'space-before-blocks': [
      'warn',
      'always'
    ],
    'brace-style': [
      'warn',
      'stroustrup'
    ],
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ]
  },
  configs: {
    // 配置自定义项, 可应用局部部门
    'vue3-recommended': require('./configs/vue3-recommended')
  }
};
