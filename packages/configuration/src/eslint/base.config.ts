/**
 * Base eslint config
 */
export default {
  root: true,
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
};
