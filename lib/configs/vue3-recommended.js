module.exports = {
  extends: [
    require.resolve('./base'),
    'plugin:vue/vue3-essential',
    "plugin:vue/recommended",
  ],
  rules: {
    // vue3 使用的配置
    // vue only
    'vue/no-v-for-template-key-on-child': 'error',
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/array-bracket-spacing': ['error', 'always'],
    'vue/eqeqeq': 'error',
    'vue/require-default-prop': 'off',
    'vue/no-mutating-props': 'off',
    'vue/html-closing-bracket-spacing': ['error', {
      'startTag': 'never',
      'endTag': 'never',
      'selfClosingTag': 'always'
    }],
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never'
    }],
    'vue/html-self-closing': ['error'],

    'vue/mustache-interpolation-spacing': 'error',
    'vue/block-tag-newline': ['error', {
      'singleline': 'never',
      'multiline': 'always'
    }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      'registeredComponentsOnly': true,
      'ignores': []
    }],
    'vue/component-options-name-casing': 'error',

    'vue/custom-event-name-casing': 'error',
    'vue/define-macros-order': 'error',

    'vue/html-comment-content-newline': 'error',
    'vue/html-comment-content-spacing': 'error',
    'vue/html-comment-indent': ['error', 2],

    'vue/match-component-file-name': ['error', {
      'extensions': ['vue']
    }], // 针对国际化的常量字符串的警告
    // 'vue/no-bare-strings-in-template': 'warn',
    'vue/no-unused-properties': 'warn',
    'vue/no-unused-refs': 'warn',
    'vue/no-useless-mustaches': 'warn',

    'vue/no-use-v-else-with-v-for': 'error',
    'vue/require-name-property': 'error',

    'vue/script-indent': ['error', 2, {}],

    'vue/sort-keys': ['error', 'asc'],

    'vue/static-class-names-order': ['warn'],

    'vue/v-for-delimiter-style': 'error',

    'vue/arrow-spacing': ['error', {
      'before': true,
      'after': true
    }],

    'vue/key-spacing': ['error', { 'beforeColon': false }],
    'vue/keyword-spacing': ['error', { 'before': true }],

    'vue/no-console': 'warn',

    'vue/no-irregular-whitespace': 'error',
    'vue/no-loss-of-precision': 'error',

    'vue/no-restricted-syntax': 'error',

    'vue/object-property-newline': 'error',

    'vue/order-in-components': ['error', {
      'order': ['el', 'name', 'key', 'parent', 'functional', ['delimiters', 'comments'], ['components', 'directives', 'filters'], 'extends', 'mixins', ['provide', 'inject'], 'ROUTER_GUARDS', 'layout', 'middleware', 'validate', 'scrollToTop', 'transition', 'loading', 'inheritAttrs', 'model', ['props', 'propsData'], 'emits', 'setup', 'asyncData', 'data', 'fetch', 'head', 'computed', 'watch', 'watchQuery', 'LIFECYCLE_HOOKS', 'methods', ['template', 'render'], 'renderError']
    }],

    'vue/this-in-template': 'error',
    'vue/v-on-event-hyphenation': 'error',
    'vue/attribute-hyphenation': 'error',
    'vue/component-definition-name-casing': 'error',


    'vue/html-end-tags': 'error',

    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': []
    }],

    'vue/html-quotes': ['error', 'double'],

    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 1
      },
      'multiline': {
        'max': 1
      }
    }],

    'vue/first-attribute-linebreak': ['error', {
      'singleline': 'beside',
      'multiline': 'beside'
    }],

    'vue/no-multi-spaces': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',

    'vue/no-template-shadow': 'warn',
    'vue/prop-name-casing': 'error',

    'vue/no-deprecated-data-object-declaration': 'error',

    'vue/no-deprecated-destroyed-lifecycle': 'error',
    'vue/no-deprecated-dollar-listeners-api': 'error',
    'vue/no-deprecated-dollar-scopedslots-api': 'error',
    'vue/no-deprecated-events-api': 'error',
    'vue/no-deprecated-filter': 'error',
    'vue/no-deprecated-functional-template': 'error',
    'vue/no-deprecated-html-element-is': 'error',

    'vue/no-arrow-functions-in-watch': 'warn', // 'vue/no-async-in-computed-properties': 'error',

    'vue/attributes-order': ['error', {
      'order': ['DEFINITION', 'LIST_RENDERING', 'CONDITIONALS', 'RENDER_MODIFIERS', 'GLOBAL', ['UNIQUE', 'SLOT'], 'TWO_WAY_BINDING', 'OTHER_DIRECTIVES', 'OTHER_ATTR', 'EVENTS', 'CONTENT'],
      'alphabetical': true
    }]
  }
};
