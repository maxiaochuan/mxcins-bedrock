const { join } = require('path');

module.exports = {
  plugins: [
    '@typescript-eslint', //
    'eslint-comments',
    'jest',
    'promise',
    'unicorn',
    'prettier',
  ],
  extends: [
    'airbnb-typescript', //
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: join(process.cwd(), 'tsconfig.json'),
  },
  rules: {
    'prettier/prettier': 2,
    'import/no-unresolved': 0,
    'import/order': 1,
    'import/no-extraneous-dependencies': [
      2,
      {
        optionalDependencies: true,
        devDependencies: [
          '**/tests/**.{ts,js,jsx,tsx}',
          '**/_test_/**.{ts,js,jsx,tsx}',
          '/mock/**/**.{ts,js,jsx,tsx}',
          '**/**.test.{ts,js,jsx,tsx}',
          '**/_mock.{ts,js,jsx,tsx}',
          '**/example/**.{ts,js,jsx,tsx}',
          '**/examples/**.{ts,js,jsx,tsx}',
        ],
      },
    ],
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    // 2020-08-04 10:57:49 感觉用处并不是很大， 而且会在fix的时候直接修改内容
    'unicorn/prevent-abbreviations': 0,
  },
  settings: {
    polyfills: ['fetch', 'Promise', 'URL', 'object-assign'],
  },
};
