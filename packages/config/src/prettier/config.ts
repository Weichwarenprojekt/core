import { PrettierConfigModel } from "./PrettierConfigModel";

/**
 * Exports our default prettier configuration
 */
export const prettierConfig = {
    singleQuote: false,
    trailingComma: "all",
    tabWidth: 4,
    printWidth: 120,
    endOfLine: "auto",
} as PrettierConfigModel;
