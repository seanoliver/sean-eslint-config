export default {
  semi: false, // Omit semicolons at the ends of statements
  singleQuote: true, // Use single quotes instead of double quotes
  trailingComma: 'all', // Add trailing commas wherever possible (objects, arrays, params)
  arrowParens: 'avoid', // Omit parens when arrow function has a single param: x => x
  tabWidth: 2, // Use 2 spaces for indentation
  useTabs: false, // Use spaces instead of tabs
  bracketSpacing: true, // Add space inside object literals: { foo: bar }
  bracketSameLine: false, // In JSX, put the closing > on a new line for multiline elements
  jsxSingleQuote: false, // Use double quotes in JSX attributes: <div className="foo">
  printWidth: 80, // Wrap lines at 80 characters
  endOfLine: 'lf', // Always use LF (\n) for line endings (avoids cross-platform issues)
  proseWrap: 'always', // Always wrap markdown prose
  htmlWhitespaceSensitivity: 'css', // Respect CSS display rules for HTML formatting
  embeddedLanguageFormatting: 'auto', // Format embedded code blocks (e.g., CSS in styled-components)
}
