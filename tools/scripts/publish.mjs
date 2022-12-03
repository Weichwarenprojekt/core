/**
 * This is a minimal script to publish your package to "npm".
 * This is meant to be used as-is or customize as you see fit.
 *
 * This script is executed on "dist/path/to/library" as "cwd" by default.
 *
 * You might need to authenticate with NPM before running this script.
 */

import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import chalk from 'chalk';
import path from "node:path";

function invariant(condition, message) {
  if (!condition) {
    console.error(chalk.bold.red(message));
    process.exit(1);
  }
}

// Executing publish script: node path/to/publish.mjs {name} --tag {tag}
// Default "tag" to "next" so we won't publish the "latest" tag by accident. rinks: nah, do it!
const [, ,name, , tag = 'latest'] = process.argv;

console.error(process.cwd());
process.chdir(path.join(process.cwd(), "dist/packages/", name))

// Updating the version in "package.json" before publishing
try {
  const json = JSON.parse(readFileSync(`package.json`).toString());

  // A simple SemVer validation to validate the version
  const validVersion = /^\d+\.\d+\.\d+(-\w+\.\d+)?/;
  invariant(
    json.version && validVersion.test(json.version),
    `No version provided or version did not match Semantic Versioning, expected: #.#.#-tag.# or #.#.#, got ${json.version}.`
  );
} catch (e) {
  console.error(
    chalk.bold.red(`Error reading package.json file from library build output.`)
  );
}

// Execute "npm publish" to publish
execSync(`npm publish --access public --tag ${tag}`);
