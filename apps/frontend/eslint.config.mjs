import js from '@eslint/js'
import unocss from '@unocss/eslint-config/flat'
import { defineConfig } from 'eslint/config'
import astro from 'eslint-plugin-astro'
import prettier from 'eslint-plugin-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

// parsers
const tsParser = tseslint.parser
const astroParser = astro.parser

export default defineConfig([
  unocss,
  // Global configuration
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Base configs
  js.configs.recommended,
  tseslint.configs.recommended,

  // Prettier config
  {
    plugins: {
      prettier: prettier,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      // disable warnings, since prettier should format on save
      'prettier/prettier': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },

  // astro setup with a11y
  astro.configs.recommended,
  astro.configs['jsx-a11y-recommended'],
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
        ecmaVersion: 'latest',
        project: './tsconfig.json',
      },
    },
    rules: {
      'no-undef': 'off', // Disable "not defined" errors for specific Astro types that are globally available (ImageMetadata)
      '@typescript-eslint/no-explicit-any': 'off', // you may want this as it can get annoying
    },
  },

  // Ignore patterns
  {
    ignores: ['dist/**', '**/*.d.ts', '.github/'],
  },
])
