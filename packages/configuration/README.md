<div align="center">
    <br>
    <img src="assets/logo.png" width="409" alt=""/>
</div>

# Quickstart
Configuration provides you with all important configuration files used within Weichwarenprojekt. Those include:

- [Prettier](#prettier-config)

**Installation**
``` 
npm i -g @weichwarenprojekt/configuration 
```

## ESLint
The config repo contains multiple eslint configurations that can be accessed, depending on the project that it should be used in.
Currently, NestJS and Angular Projects are supported.

### Configuration
Make sure to install `eslint` itself, obviously. ESLint is set up to work with the prettier plugin. So additionally install `prettier`, `eslint-config-prettier` and `eslint-plugin-prettier`.

Create a `.eslintrc.cjs` file in the root of your projects directory and there export the corresponding config:

### Angular ESLint example
```js
module.exports = require("@weichwarenprojekt/configuration").ESLintConfiguration.angularConfig;
```

### NestJS ESLint example
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
