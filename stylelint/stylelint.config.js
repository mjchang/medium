module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-a11y/recommended'],
  rules: {
    'declaration-no-important': true,
    'comment-no-empty': null,
    'color-hex-case': 'upper',
    'font-weight-notation': ['numeric', { ignore: ['relative'] }],
  },
};
