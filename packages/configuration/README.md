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
