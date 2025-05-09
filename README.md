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
# Using npm
npm install --save-dev sean-eslint-config

# Using yarn
yarn add --dev sean-eslint-config

# Using pnpm
pnpm add -D sean-eslint-config
```

### Peer Dependencies

This package has the following peer dependencies that you'll need to install:

```bash
npm install --save-dev eslint@^9.0.0 @typescript-eslint/eslint-plugin@^7.0.0 @typescript-eslint/parser@^7.0.0 eslint-config-prettier@^9.0.0 prettier@^3.0.0
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
