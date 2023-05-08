const baseConfig = require("./packages/configuration/src/eslint/base.config");

console.log(baseConfig);

module.exports = {
    ...baseConfig,
    ignorePatterns: ["**/*"],
    plugins: ["@nrwl/nx", ...(baseConfig.plugins ?? [])],
    overrides: [
        {
            files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
            rules: {
                "@nrwl/nx/enforce-module-boundaries": [
                    "error",
                    {
                        enforceBuildableLibDependency: true,
                        allow: [],
                        depConstraints: [
                            {
                                sourceTag: "*",
                                onlyDependOnLibsWithTags: ["*"],
                            },
                        ],
                    },
                ],
            },
        },
        {
            files: ["*.ts", "*.tsx"],
            extends: ["plugin:@nrwl/nx/typescript"],
            rules: {},
        },
        {
            files: ["*.js", "*.jsx"],
            extends: ["plugin:@nrwl/nx/javascript"],
            rules: {},
        },
        {
            files: ["*.spec.ts", "*.spec.tsx", "*.spec.js", "*.spec.jsx"],
            env: {
                jest: true,
            },
            rules: {},
        },
    ],
};