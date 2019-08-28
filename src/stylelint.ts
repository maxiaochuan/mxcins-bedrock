module.exports = {
  extends: [
    require.resolve("stylelint-config-standard"),
    require.resolve("stylelint-config-css-modules"),
    require.resolve("stylelint-config-rational-order"),
    require.resolve("stylelint-config-prettier"),
  ],
  plugins: [
    "stylelint-order",
    "stylelint-declaration-block-no-ignored-properties",
  ],
  rules: {
    "no-descending-specificity": null,
    "plugin/declaration-block-no-ignored-properties": true,
  },
};