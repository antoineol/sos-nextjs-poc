/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    /**
     * If you're adding more plugins, keep in mind
     * that the Tailwind plugin must come last!
     */
    'prettier-plugin-tailwindcss',
  ],
  printWidth: 80,
  tabWidth: 2,
  tabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'avoid',
  parser: 'typescript',
  importOrder: ['^[./]'],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderCaseInsensitive: true,
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  overrides: [
    {
      files: '*.css',
      options: {
        parser: 'css',
      },
    },
    {
      files: '*.scss',
      options: {
        parser: 'scss',
      },
    },
    {
      files: '*.json',
      options: {
        parser: 'json',
      },
    },
    {
      files: '*.md',
      options: {
        parser: 'markdown',
      },
    },
    {
      files: '*.html',
      options: {
        parser: 'html',
        tabWidth: 4,
      },
    },
    {
      files: '*.graphql',
      options: {
        parser: 'graphql',
      },
    },
    {
      files: '*rc',
      options: {
        parser: 'yaml',
        singleQuote: false,
        trailingComma: 'none',
        proseWrap: 'never',
      },
    },
    {
      files: '*.yaml',
      options: {
        parser: 'yaml',
        singleQuote: false,
        trailingComma: 'none',
        proseWrap: 'never',
      },
    },
  ],
};

export default config;
