module.exports = {
  processors: [require.resolve('stylelint-processor-styled-components')],
  extends: [
    require.resolve('stylelint-config-standard'),
    require.resolve('stylelint-config-css-modules'),
    require.resolve('stylelint-config-rational-order'),
    require.resolve('stylelint-config-styled-components'),
    require.resolve('stylelint-config-prettier'),
  ],
  plugins: [
    require.resolve('stylelint-order'),
    require.resolve('stylelint-declaration-block-no-ignored-properties'),
    require.resolve('stylelint-prettier'),
  ],
  rules: {
    'no-descending-specificity': null,
    'plugin/declaration-block-no-ignored-properties': true,
    'prettier/prettier': true,
    'value-keyword-case': null,
  },
};
