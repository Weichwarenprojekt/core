/* eslint-disable @typescript-eslint/no-var-requires */
import { ESLintConfig } from "./eslint/eslint-config.model";

const angularConfig: ESLintConfig = require("./eslint/angular.config");
const baseConfig: ESLintConfig = require("./eslint/base.config");
const nestjsConfig: ESLintConfig = require("./eslint/nestjs.config");

export * from "./prettier/config";

export const ESLintConfiguration = {
    baseConfig,
    angularConfig,
    nestjsConfig,
};
