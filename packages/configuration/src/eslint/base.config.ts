/**
 * Base eslint config
 */
export default {
  root: true,
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.*', '.prettierrc.*'],
  plugins: ['prettier', '@typescript-eslint/eslint-plugin', 'eslint-plugin-jsdoc'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:jsdoc/recommended'
  ],
  rules: {
    'no-console': 'warn',
  },
};
