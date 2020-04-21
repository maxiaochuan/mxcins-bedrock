module.exports = {
  extends: [
    require.resolve('stylelint-config-standard'),
    require.resolve('stylelint-config-css-modules'),
    require.resolve('stylelint-config-rational-order'),
    require.resolve('stylelint-config-prettier'),
  ],
  plugins: [
    require.resolve('stylelint-order'),
    require.resolve('stylelint-declaration-block-no-ignored-properties'),
  ],
  rules: {
    'no-descending-specificity': null,
    'plugin/declaration-block-no-ignored-properties': true,
    'prettier/prettier': true,
  },
};
