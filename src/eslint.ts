module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'eslint-comments',
    'jest',
    'prettier',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 2,
    'import/no-unresolved': 0,
    'import/order': 'warn',
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
          '**/examples/**.{ts,js,jsx,tsx}'
        ]
      }
    ],
  },
  settings: {
    "import/resolver": { node: { extensions: [".js", ".jsx", ".ts", ".tsx"] } },
    polyfills: ["fetch", "Promise", "URL", "object-assign"]
  },
};
