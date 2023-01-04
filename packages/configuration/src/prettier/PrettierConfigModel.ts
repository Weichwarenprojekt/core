/**
 * Configuration model that can be used to configure prettier options
 * https://prettier.io/docs/en/options.html
 */
export interface PrettierConfigModel {
  /**
   * Specifies the line length that the printer will wrap on.
   */
  printWidth: number | null;
  /**
   * Specify the number of spaces per indentation-level.
   */
  tabWidth: number | null;
  /**
   * Indent lines with tabs instead of spaces.
   */
  tabs: boolean | null;
  /**
   * Print semicolons at the ends of statements.
   */
  semi: boolean | null;
  /**
   * Use single quotes instead of double quotes.
   */
  singleQuote: boolean | null;
  /**
   * Change when properties in objects are quoted.
   */
  quoteProps: 'as-needed' | 'consistent' | 'preserve' | null;
  /**
   * Use single quotes instead of double quotes in JSX.
   */
  jsxSingleQuote: boolean | null;
  /**
   * Print trailing commas wherever possible in multi-line comma-separated syntactic structures.
   * (A single-line array, for example, never gets trailing commas.)
   */
  trailingComma: 'es6' | 'none' | 'all' | null;
  /**
   * Print spaces between brackets in object literals.
   *
   * Valid options:
   *
   * true - Example: { foo: bar }.
   * false - Example: {foo: bar}.
   */
  bracketSpacing: boolean | null;
  /**
   * Put the > of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the
   * last line instead of being alone on the next line (does not apply to self-closing elements).
   */
  bracketSameLine: boolean | null;
  /**
   * First available in v1.9.0, default value changed from avoid to always in v2.0.0
   *
   * Include parentheses around a sole arrow function parameter.
   *
   * Valid options:
   *
   * "always" - Always include parens. Example: (x) => x
   * "avoid" - Omit parens when possible. Example: x => x
   */
  arrowParens: 'always' | 'avoid' | null;
  /**
   * All modern text editors in all operating systems are able to correctly display line endings when \n (LF) is used.
   * However, old versions of Notepad for Windows will visually squash such lines into one as they can only deal with \r\n (CRLF).
   *
   * Valid options:
   *
   * "lf" – Line Feed only (\n), common on Linux and macOS as well as inside git repos
   * "crlf" - Carriage Return + Line Feed characters (\r\n), common on Windows
   * "cr" - Carriage Return character only (\r), used very rarely
   * "auto" - Maintain existing line endings (mixed values within one file are normalised by looking at what’s used after the first line)
   */
  endOfLine: 'lf' | 'crlf' | 'cr' | 'auto' | null;
  /**
   * Enforce single attribute per line in HTML, Vue and JSX.
   *
   * Valid options:
   *
   * false - Do not enforce single attribute per line.
   * true - Enforce single attribute per line.
   */
  singleAttributePerLine: boolean | null;
}
