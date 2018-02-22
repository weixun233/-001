module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.wpy files
  plugins: [
    'html'
  ],
  settings: {
    'html/html-extensions': ['.html', '.wpy']
  },
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-function-paren': 0,
    "no-unused-vars": [0, {"vars": "all", "args": "after-used"}],
    "no-trailing-spaces": 0,
    "prefer-promise-reject-errors": 0,
    "one-var": 0,
    "no-useless-return": 0,
    "no-extend-native": 0,
    "node": 0,
    "valid-typeof": 0,
    "indent": 0,
    "no-multi-spaces": 0
  }
}