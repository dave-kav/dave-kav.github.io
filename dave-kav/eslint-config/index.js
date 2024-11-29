const paths = require('node:path');

module.exports = {
  extends: [
    'turbo',
    'airbnb-base',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:security/recommended-legacy',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  ignorePatterns: ['dist', '.eslintrc.js'],
  env: { node: true },
  settings: {
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
    // Apply special parsing for TypeScript files
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'] },
    // Resolve type definition packages
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/resolver': { node: { extensions: ['.mjs', '.js', '.json', '.ts', '.d.ts'] } },
  },
  rules: {
    '@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: true }],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, typedefs: false }],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['test/**', '**/*.test.*', '**/*.spec.*'] }],
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'internal', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [{ pattern: '@ev/**', group: 'internal' }],
        distinctGroup: true,
        alphabetize: { order: 'asc', caseInsensitive: false },
      },
    ],
    'import/prefer-default-export': 'off',
    'lines-between-class-members': 'off',
    'no-await-in-loop': 'warn',
    'no-console': 'off',
    'no-continue': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'no-use-before-define': ['error', { functions: false }],
  },
  overrides: [
    { files: ['*.ts', '*.tsx'], rules: { 'import/no-unresolved': 'off' } },
    { files: ['*.js', '*.jsx'], rules: { '@typescript-eslint/no-var-requires': 'off', 'import/no-unresolved': 'off' } },
    {
      files: ['serverless.ts', 'tsup.config.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'import/no-import-module-exports': 'off',
        'no-template-curly-in-string': 'off',
      },
    },
    {
      files: ['test/**', '*.test.*', '*.spec.*'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
      },
    },
  ],
};
