module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:testing-library/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'jest', 'testing-library'],
  rules: {
    'no-empty': ['error', { allowEmptyCatch: true }],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
  },
};
