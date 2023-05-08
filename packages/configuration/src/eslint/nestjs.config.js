const baseConfig = require("./base.config");

/**
 * eslint config for nestjs
 */
module.exports = {
    ...baseConfig,
    parserOptions: {
        project: "tsconfig.json",
        sourceType: "module",
    },
    env: {
        node: true,
        jest: true,
    },
    rules: {
        ...baseConfig.rules,
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-namespace": "off",
    },
};
