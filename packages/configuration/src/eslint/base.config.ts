/**
 * Base eslint config
 */
export default {
  root: true,
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.*', '.prettierrc.*'],
  plugins: ['prettier', '@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true,
        },
      },
    ],
    'no-console': 'error',
  },
};
