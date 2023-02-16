module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // eslint-disable-next-line quotes
    "no-console": "off",
    'import/no-extraneous-dependencies': 'off',
    'class-methods-use-this': 'off',
    'import/first': 'off',
    'import/newline-after-import': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'import/no-useless-path-segments': 'off',
    'no-param-reassign': 'off',
    'spaced-comment': 'off',
    'max-len': 'off',
    camelcase: 'off',
    eqeqeq: 'off',
  },
};
