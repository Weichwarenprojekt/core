/**
 * Base eslint config
 */
export default {
  root: true,
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.*', '.prettierrc.*'],
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
  },
};
