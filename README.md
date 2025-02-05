# ts-package-starter
A starter repo to kick-start your next typescript package.

## Features
- Typescript ready, so you can focus on your code
- Testing with `jest` and `ts-jest`
- Linting and Formatting with `biome`
- Auto-Document your API with `typedoc`
- `AreTheTypesWrong` to check for client-side type errors
- Commit linting with `commitlint`
- Git Hooks with `lefthook`
- Reccomended VsCode/Codium plugins and settings
- Starter Github Workflows for ci, coverage and auto-publish
- Npm package ready:
    - Npm scripts tying it all together
    - Version Management
    - Changelog management
    - Publishing 

### Typescript Support
Typescript comes pre configured and ready to build.

There is a `tsconfig.json` in the root directory that is not intended to build with directly but is there to provide default configurations to extend from and to appease the IDE.

There are some basic build configurations in there roughly akin to a `node-lts` configuration. By default this configuration comes with the majority of strict flags turned ON.  I think its better to have all of this on by default and turn off what you dont need when you know why you dont need it.

Then there is `./src/tsconfig.json` that is intended for building your source files. By default, the output is in CommonJS format and the js output is sent to `./dist/cjs` and the type declarations are sent to `./dist/types`.

If you want an esm build, run the scripts/build  script.  If you want a hybrid build, run the scripts/build-dual script, and if you want a hybrid-build that needs to hold state, run the scripts/build-wrapper script.

### Testing
A few assumptions have been made in the jest configuration, all of which are easy to change if you wish:

1. The jest configuration is at `./tests/jest.config.ts`.
2. Jest looks for tests only in the `./tests` directory
3. Tests are identified by thier extension, so the `unit`, `integration` and `e2e` folders are mere suggestions. Jest will recursively search subfolders of `./tests` for the following extensions:
    - `.spec.ts`
    - `.test.ts`
    - `.e2e.ts`
4. The tests have their own `tsconfig.json` in the `./tests` folder where the ts-jest configuration is pointed to. Adding jest's types here keeps them from polluting our build configuration and keeps our IDE happy.

### Linting And Formatting
Originally prettier, eslint and typescript-eslint, now biomejs is the configured linter and formatter. The reasons for choosing biome, other than being my preferred tool, are the following:

#### One Dependency, One Config File
With the eslint-style setup, you need to have prettier, eslint, typescript-eslint, the @typescript/eslint-plugin @typescript/eslint-parser packages and esbuild-config-prettier to prevent conflicts between eslint and prettier, summning up to at least 6 dependencies and two configuration files. Shipping with biome essentially makes it easier to swap out tools should a user prefer.

#### Easy Configuration
Eslint's configuraion already had so much cognitive overhead, and the new flat-config style has been frustrating to integrate with the various tools. I find the biome configuration much more pleasant.

#### Super Fast
Bieng written in rust, biome is truly very fast.  It makes it nice when you are running linting and formatting on several triggers in your workflow.

#### Just Works
From configuration to typescript integration, biome just works!

 #### IDE Integration
 The `./.vscode` folder contains the plugin reccomendation and configurations to use biome in VsCode.

#### Don't Want To Use Biome?
Easy peasy, just uninstall and remove the configuration file.
```sh
npm uninstall biome
rimraf ./biome.json
done
```
After setting up your preferred formatter and linter, make sure you edit your npm scripts in `package.json` to use these tools.

### Documentation Generation
Api documentation is setup with `typedoc`. Just annotate your code with `TsDoc` (or `JsDoc`) and typedoc will generate documentation for your library's api.

The configuration file is at `./typedoc.json`. It is preconfigured to document any api's exposed through the `./src/index.ts` entry point and output to the `./docs` directory.

### Are The Types Wrong?
Before distributing your package, use this tool to check for common type errors
```shell
npm run build && npm run attw
```

### Git Hooks
Git Hooks are set up with the `lefthook` package. You can find the following hook configuration in the `./Lefthook.yml`:
- On Commit
    - check  your code for formatting and linting errors
    - type check your code for type errors
    - lint commit messages against Conventional Commit format
- On Push
    - all the on-commit checks, plus:
    - runs your tests
    - checks your package types with AreTheTypesWrong

### Github CI / Workflows
TODO

### VsCode Reccomended Plugins and Settings
TODO

###
