const rules = require("./rules");

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    amd: false,
    mocha: false,
    jasmine: false,
  },
  plugins: ["import", "simple-import-sort"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules,
};
