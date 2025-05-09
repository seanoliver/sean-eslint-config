import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),

  {
    parser: require('@typescript-eslint/parser'),
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      eqeqeq: ['error', 'always'], // Avoid loose equality
      'prefer-const': 'error', // Use const for variables that are not reassigned
      'no-var': 'error', // Enforce let / const over var
      'no-duplicate-imports': 'error', // Avoid duplicate imports
      'no-return-await': 'error', // Avoid return await
      'prefer-arrow-callback': 'error', // Use arrow functions as callbacks
      'max-lines': ['warn', 300], // Keep files short
      'max-depth': ['warn', 4], // Avoid too many nested blocks
      'no-magic-numbers': [
        // Enforce named constants
        'warn',
        {
          ignore: [0, 1, -1],
          ignoreArrayIndexes: true,
          enforceConst: true,
        },
      ],
      'func-style': ['error', 'expression', { allowArrowFunctions: true }], // Prefer arrow functions
      'no-restricted-syntax': [
        // No function declarations
        'error',
        {
          selector: 'FunctionDeclaration',
          message: 'Use arrow functions instead of function declarations',
        },
      ],
      '@typescript-eslint/method-signature-style': ['error', 'property'], // Use property style for method signatures
    },
  },
]
