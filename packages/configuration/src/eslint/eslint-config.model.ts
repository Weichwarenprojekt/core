export interface ESLintRuleOptions {
    [ruleName: string]: "off" | "warn" | "error" | ["off" | "warn" | "error", ...unknown[]];
}

export interface ESLintParserOptions {
    ecmaVersion?: 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021;
    sourceType?: "script" | "module";
    ecmaFeatures?: {
        globalReturn?: boolean;
        impliedStrict?: boolean;
        jsx?: boolean;
    };
    [key: string]: unknown;
}

export interface ESLintSettings {
    [key: string]: unknown;
}

export interface ESLintOverride {
    files: string | string[];
    excludedFiles?: string | string[];
    rules?: ESLintRuleOptions;
    parser?: string;
    parserOptions?: ESLintParserOptions;
    env?: ESLintEnvironmentOptions;
    settings?: ESLintSettings;
    globals?: ESLintGlobalsOptions;
    extends?: string[];
}

export interface ESLintEnvironmentOptions {
    [envName: string]: boolean;
}

export interface ESLintGlobalsOptions {
    [globalName: string]: "readonly" | "writable" | "off";
}

export interface ESLintConfig {
    root?: boolean;
    env?: ESLintEnvironmentOptions;
    extends?: string | string[];
    parser?: string;
    parserOptions?: ESLintParserOptions;
    plugins?: string[];
    rules?: ESLintRuleOptions;
    settings?: ESLintSettings;
    globals?: ESLintGlobalsOptions;
    overrides?: ESLintOverride[];
    ignorePatterns?: string[];
}
