# ts-package-starter
A starter repo to kick-start your next esm typescript package. Though somewhat opinionated, it is fairly lightweight and easy to customize.

## Features
- `Typescript` ready, so you can focus on your code
- Esm first for modern library development
- Linting, formatting and import sorting with `biome`
- `AreTheTypesWrong` to check for client-side type errors
- Testing and coverage with `vitest`
- Auto-Document your API with `typedoc`
- Commit linting with `commitlint` enforcing conventional commits
- Git Hooks with `lefthook`
- Starter Github Workflows for ci, coverage and auto-publish
- Reccomended VsCode/Codium plugins and settings

## Getting Started
1. Clone the repo and cd into it
```shell
git clone https://github.com/stephenaiesi/ts-package-starter.git my-project

cd my-project
```

2. Run the initialization script and provide a name and description for your package. This will update your package.json and README.md files then eject itself.
```shell
npm run init
```

3. Start up the typescript and test watchers and begin developing:
```shell
npm run dev
```


### Typescript Support
Typescript comes pre configured and ready to build.

The root `./tsconfig.json` provides common configurations that can be extended from.

`./src/tsconfig.json` will provide the production build configuration.

`./src/tsconfig.dev.json` will provide the development build configuration.

`./tests/tsconfig.json` will provide the test build configuration for vitest.


### Testing
A few assumptions have been made in the vitest setup, all of which are easy to change

1. Tests are searched for in the `./tests` folder
2. The vitest config is at `./tests/vitest.config.ts`
3. There is a `./tests/tsconfig.json` file for loading vitest types in your test files
4. Unit tests are named `*.spec.ts`
5. Functional are named `*.test.ts`
6. Coverage is enabled and set to 100%
6

### Linting And Formatting
Formatting, linting and import sorting is setup with `biome`.  You can customize the settings for biome in `./biome.json`.

#### One Dependency, One Config File
With the eslint-style setup, you need to have prettier, eslint, typescript-eslint, the @typescript/eslint-plugin @typescript/eslint-parser packages and esbuild-config-prettier to prevent conflicts between eslint and prettier, summning up to at least 6 dependencies and two configuration files. Shipping with biome essentially makes it easier to swap out tools should you prefer.

#### Easy Configuration
Eslint's configuraion already had so much cognitive overhead, and the new flat-config style has been frustrating to integrate with the various tools. I find the biome configuration much more pleasant.

#### Super Fast
Bieng written in rust, biome is fast.  It makes it nice when you are running linting and formatting on several triggers in your workflow.

#### Just Works
From configuration to typescript integration, biome just works!

 #### IDE Integration
 The `./.vscode` folder contains the plugin reccomendation and configurations to use biome in VsCode.


### Documentation Generation
Api documentation is setup with `typedoc`. Just annotate your code with `TsDoc` (or `JsDoc`) and typedoc will generate documentation for your library's api.

The configuration file is at `./typedoc.json`. It is preconfigured to document any api's exposed through the `./src/index.ts` entry point and output to the `./docs` directory.
```shell
npm run build:docs
```

### Are The Types Wrong?
Before distributing your package, use this tool to check for common type errors
```shell
npm run attw
```

### Conventional Commits with `commitlint`
Conventional commits are enforced with `commitlint` and `@commitlint/config-conventional`.  You can customize the settings for commitlint in `./.commitlint.config.js`.

### Git Hooks
Git Hooks are set up with the `lefthook` package. You can find the following hook configuration in the `./Lefthook.yml`:
- On Commit
    - lint commit messages against Conventional Commit format
    - run biome checks (formatting, linting, import sorting)
    - typecheck with tsc
- On Push
    - all the on-commit checks, plus:
    - are-the-types-wrong
    - run tests and coverage

### Github CI / Workflows
A very simple ci workflow is provided in `./.github/workflows/ci.yml`. On each push or pull-request to the main branch, the following checks are made:
- Run biome checks (formatting, linting, import sorting)
- typecheck with tsc
- are-the-types-wrong
- run tests and coverage

By default, these checks are ran against all active and maintainance versions of node as well as ubuntu, macos and windows.

### Releases
- TODO *in the future I will set up autmated releases with release-it*