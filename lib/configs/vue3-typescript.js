module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    'eslint-config-ali/typescript/vue',
    require.resolve("./vue3-recommended.js"),
  ],
  plugins: [

  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  rules: {
    "vue/define-emits-declaration": "error",
    "vue/define-props-declaration": "error",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/indent": "off",
  },
};
