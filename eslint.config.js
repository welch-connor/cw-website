import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import nextPlugin from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';
import typescriptParser from '@typescript-eslint/parser';

// Base configuration for all files
export default [
  // Global ignores
  {
    ignores: [
      '**/node_modules',
      '**/.next',
      '**/out',
      '**/build',
      '!.prettierrc.js',
    ]
  },
  
  // Base configuration for JavaScript files
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react': pluginReact,
      '@next/next': nextPlugin,
    },
    rules: {
      // Base JavaScript rules
      ...js.configs.recommended.rules,
      'no-console': 'warn',
      
      // React rules
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'warn',
      
      // Next.js rules
      '@next/next/no-html-link-for-pages': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
      next: {
        rootDir: ['.'],
      },
    },
  },
  
  // TypeScript configuration
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react': pluginReact,
      '@next/next': nextPlugin,
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      
      // React rules
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'warn',
      
      // Next.js rules
      '@next/next/no-html-link-for-pages': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
      next: {
        rootDir: ['.'],
      },
    },
  },
];
