<div align="center">
    <br>
    <img src="assets/logo.png" width="409" alt=""/>
</div>

# Quickstart
Configuration provides you with all important configuration files used within Weichwarenprojekt. Those include:

- [ESLint](#eslint)
- [Prettier](#prettier)

**Installation**
``` 
npm i -g @weichwarenprojekt/configuration 
```

## ESLint
The config repo contains multiple eslint configurations that can be accessed, depending on the project that it should be used in.
Currently, NestJS and Angular Projects are supported.

### Configuration
Make sure to install `eslint` itself, obviously. ESLint is set up to work with the prettier plugin. So additionally install the required dependencies with the following command: 
```bash
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Create a `.eslintrc.js` file in the root of your projects directory and there export the corresponding config:

### Angular ESLint example
For angular you need to additionally install angular eslint related packages:
```bash
npm install --save-dev @angular-eslint/eslint-plugin @angular-eslint/eslint-plugin-template @angular-eslint/schematics @angular-eslint/template-parser 
```

After that paste the following content in the `.eslint.js`:
```js
module.exports = require("@weichwarenprojekt/configuration").ESLintConfiguration.angularConfig;
```

### NestJS ESLint example
Just paste the following content into the `.eslint.js`
```js
module.exports = require("@weichwarenprojekt/configuration").ESLintConfiguration.nestjsConfig;
```

## Prettier
The config repo contains a prettier configuration that should be used in all JS/TS based projects.

### Configuration
Before configuring prettier in your dev environment, make sure to install prettier itself and optionally setting up the integration with eslint if required.

Create a `.prettierrc.js` file in the root of your directory
```js
module.exports = require("@weichwarenprojekt/configuration").prettierConfig;
```
 
### Customizing the prettier configuration
If needed the configuration file can be adjusted in the current project. Here is an example file that adds the rule for bracket spacing to the config:
```js
module.exports = {
    bracketSpacing: true,
    ... require("@weichwarenprojekt/configuration").prettierConfig,
};
```
