import angularConfig from './eslint/angular.config';
import baseConfig from './eslint/base.config';
import nestjsConfig from './eslint/nestjs.config';

export * from './prettier/config';

export const ESLintConfiguration = {
  baseConfig,
  angularConfig,
  nestjsConfig,
};
