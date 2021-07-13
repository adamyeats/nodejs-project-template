# Node.js Project Template

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Hey there! 👋 This is my project template for Node.js projects. It is designed to provide a usable project skeleton with all of my linter rules, tooling, preferences etc. already in place, so I can spend more time building stuff, and less time setting it all up. It is provided in a **fully documented** state, with plenty of code comments, so that people who are unfamiliar with Node.js can see exactly what everything does.

This codebase is offered as a _living standard_. It is designed for debate and discussion. If you think something could be better, or you think it needs something extra, then feel free to make the change! Submit a pull request by following our [Contribution guide](CONTRIBUTING.md) so I can discuss and vote on your change together.

## Quick Start

- Initialise the project by cloning it into a new directory
    - You may also want to purge this repositories `git` history before you start, you can do so with `rm -rf .git`
- Copy `.env.example` to `.env` and fill in the required variables
- Run `npm install` to install the dependencies
- Run `npm dev` to start the `tsc` compiler and `nodemon` in watch mode

## Development

This project requires **at least Node.js v14**. Always use the [latest LTS version](https://nodejs.org/en/about/releases/) of Node.js when you can!

Version management configuration for Node.js is provided for [`volta`](https://volta.sh/). I recommend you have this installed to automatically switch betIen Node.js versions when you enter one of our project directories. This allows for more deterministic and reproducible builds, which makes debugging easier.

You use `volta` to configure the project to use the latest LTS version of Node.js by running:

```bash
volta pin node@lts
```

You can run this command again to update the version.

### Installation

To install the dependencies:

```bash
npm install
```

You can then run the following to start the project in _dev mode_.

```bash
npm run dev
```

This runs the `build:watch` and `start:debug` commands at the same time.

#### Debugging the server

You can run the following to only start the server in _debug_ mode. This will also watch your files for changes, and reload the server when your files are saved.

```bash
npm run start:debug
```

#### TypeScript Compilation

You can also run the following to only start the compiler in _watch_ mode.

```bash
npm run build:watch
```

You can also build the library without watching the directory:

```bash
npm run build
```

### Testing

The tests for this library use [Jest](https://jestjs.io) as the test runner. Once you've installed the dependencies, you can run the following command in the root of this repository to run the tests:

```bash
npm run test
```

### Versioning

This repo uses [Semantic Versioning](https://semver.org/) (often referred to as _semver_).

## Contributing

Thinking of contributing to this repo? Awesome! 🚀

Please follow the [Contribution guide](CONTRIBUTING.md) and follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Further reading

### Node.js

- [Node Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [awesome-nodejs](https://github.com/sindresorhus/awesome-nodejs)
- [awesome-nodejs-security](https://github.com/lirantal/awesome-nodejs-security)

### TypeScript

- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [TypeScript Node.js Cheatsheet](https://github.com/typescript-cheatsheets/node)
- [TypeScript Utilities Cheatsheet](https://github.com/typescript-cheatsheets/utilities)

### Miscellaneous

- [Azure Cloud Design Patterns](https://docs.microsoft.com/en-us/azure/architecture/patterns/)
