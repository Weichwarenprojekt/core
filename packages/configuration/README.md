# Configuration repository used in wp projects

- [Prettier config](#prettier-config)

## Prettier config
The config repo contains a prettier configuration that should be used in all JS/TS based projects.

Before configuring prettier in your dev environment, make sure to install the package itself and optionally setting up the integration with eslint if required. 
- Install the configuration package using the command `npm install --save-dev @weichwarenprojekt/configuration`
- Create a `.prettierrc.js` file in the root of your directory
  ```js
  module.exports = require("@weichwarenprojekt/configuration").prettierConfig;
  ```
- After saving the file prettier should use wp's configuration file
 
### Customizing the prettier configuration
If needed the configuration file can be adjusted in the current project. Here is an example file that adds the rule for bracket spacing to the config:
```js
module.exports = {
    bracketSpacing: true,
    ... require("@weichwarenprojekt/configuration").prettierConfig,
};
```
