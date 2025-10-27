// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default [js.configs.recommended, ...tseslint.configs.recommended, {
  files: ['**/*.{js,jsx,ts,tsx}'],
  plugins: {
    '@next/next': nextPlugin,
    react,
    'react-hooks': reactHooks,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...reactHooks.configs.recommended.rules,
    'react/react-in-jsx-scope': 'off', // Not needed in Next.js App Router
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-empty-object-type': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}, prettier, ...storybook.configs["flat/recommended"]];