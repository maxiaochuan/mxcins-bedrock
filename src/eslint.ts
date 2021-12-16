const { join } = require('path');
const { existsSync } = require('fs');

const cwd = process.cwd();

const conf = join(cwd, 'tsconfig.json');
const override = join(cwd, 'tsconfig.eslint.json');

const tsconfig = existsSync(override) ? override : conf;

module.exports = {
  extends: [
    //
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    //
    'eslint-comments',
    'jest',
    'promise',
    'unicorn',
    'prettier',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  parserOptions: {
    project: tsconfig,
  },
  rules: {
    'no-param-reassign': [
      1,
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc',
          'accumulator',
          'e',
          'ctx',
          'context',
          'req',
          'request',
          'res',
          'response',
          '$scope',
          'staticContext',
          'prev', // for array reduce
        ],
      },
    ],
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
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,

    'eslint-comments/disable-enable-pair': 0,

    'unicorn/explicit-length-check': 1,
    'unicorn/filename-case': 0,
    // 2020-08-04 10:57:49 感觉用处并不是很大， 而且会在fix的时候直接修改内容
    'unicorn/prevent-abbreviations': 0,
    'unicorn/no-null': 1,
    'unicorn/no-reduce': 0,
    // 2021-12-17 01:03:33 enable for of
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
  },
};
