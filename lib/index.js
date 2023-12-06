'use strict';

module.exports = {
  rules: {
    // 默认全局规则
    indent: [
      'error',
      2
    ],
    semi: 'error',
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'array-bracket-spacing': [
      'error',
      'always'
    ],
    eqeqeq: 'error',
    quotes: [
      'error',
      'double'
    ],
    'semi-spacing': 'error',
    'space-unary-ops': 'error',
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'key-spacing': 'error',
    'comma-spacing': 'error',
    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          ImportDeclaration: true
        }
      }
    ],
    'object-curly-newline': [
      'error',
      {
        consistent: true,
        multiline: true
      }
    ],
    'space-before-blocks': [
      'error',
      'always'
    ],
    'brace-style': [
      'error',
      'stroustrup'
    ],
    'space-before-function-paren': [
      'error',
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
