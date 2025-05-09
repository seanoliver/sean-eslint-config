# sean-eslint-config

My personal ESLint and Prettier configuration rules for JavaScript and TypeScript projects.

## Features

- Modern ESLint flat config format
- TypeScript support
- NextJS compatibility
- Opinionated style rules that enforce clean, consistent code
- Integrated Prettier configuration

## Installation

```bash
pnpm add -D sean-eslint-config
```

### Peer Dependencies

This package has the following peer dependencies that you'll need to install:

```bash
pnpm add -D eslint@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint-config-prettier@latest prettier@latest
```

## Usage

### ESLint Configuration

Create an `eslint.config.mjs` file in your project root:

```javascript
import seanConfig from 'sean-eslint-config'

export default [
  ...seanConfig,
  // Add your custom overrides here if needed
]
```

### Prettier Configuration

Create a `prettier.config.mjs` file in your project root:

```javascript
import seanPrettierConfig from 'sean-eslint-config/prettier'

export default {
  ...seanPrettierConfig,
  // Add your custom overrides here if needed
}
```

## Rules Overview

This configuration includes rules that enforce:

- Modern ES6+ practices (arrow functions, const/let, etc.)
- TypeScript best practices
- Code quality and maintainability standards
- Consistent formatting via Prettier

## License

Personal use - Sean Oliver
