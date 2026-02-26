# Node.js Project Template

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

My project template for Node.js projects — a usable skeleton with linting, formatting, testing, and build tooling already configured.

## Quick Start

- Clone the repo into a new directory (optionally run `rm -rf .git` to start fresh)
- Copy `.env.example` to `.env` and fill in any required variables
- Run `npm install`
- Run `npm run dev` to start the app in watch mode

## Development

Requires **Node.js v24**. Use [fnm](https://github.com/Schniz/fnm) to manage Node versions — it will automatically switch to the pinned version when you enter the directory:

```bash
fnm use
```

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Run the app in watch mode with `tsx` |
| `npm run build` | Compile a production bundle with esbuild |
| `npm start` | Run the compiled output |
| `npm test` | Run tests with Vitest |
| `npm run test:watch` | Run tests in watch mode |
| `npm run type-check` | Type-check without emitting |
| `npm run lint` | Lint with ESLint |
| `npm run format` | Format with Prettier |

### Testing

Tests use [Vitest](https://vitest.dev). Test files live in `src/__tests__/`.

```bash
npm test
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
