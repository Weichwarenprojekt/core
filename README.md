# Core

Upcoming foundation of Weichwarenprojekts projects.
This repo will contain configurations and boilerplate code which is shared between our projects. 

## Creating a new package / project with automatic versioning and publishing
The following steps will enable these two features. The automatic versioning is using https://github.com/jscutlery/semver to increase the version of your package by its types of commits.
Automatic publishing will push the project to Weichwarenprojekts npm organisation @weichwarenprojekt. Both will be executed after merging a feature branch back to the main branch inside a GitHub workflow.

1. Create the package as usual with a nx generator e.g. `nx g @nrwl/node:lib your-project`
2. Add version execution target to your packages project.json
```json
"version": {
  "executor": "@jscutlery/semver:version",
  "options": {
    "preset": "conventional"
  }
}
```
3. Add publish execution target to your packages project.json and adjust the project-name
```json
"publish": {
  "executor": "nx:run-commands",
  "options": {
    "command": "node tools/scripts/publish.mjs <project-name>",
    "parallel": false
  },
  "dependsOn": ["build"]
},
```
An example of a project.json with automatic versioning and publishing can be found in the configuration package (packages/configuration)
