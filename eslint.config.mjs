import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import unusedImports from 'eslint-plugin-unused-imports';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },

    {
        settings: {
            react: {
                version: 'detect'
            }
        },

        languageOptions: {
            globals: { ...globals.browser, ...globals.node }
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,

    {
        rules: {
            // suppress errors for missing 'import React' in files
            'react/react-in-jsx-scope': 'off',
            // allow jsx syntax in js files (for next.js project)
            'react/jsx-filename-extension': [
                2,
                { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
            ]
        }
    },

    {
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'warn',
                { caughtErrors: 'none' }
            ]
        }
    },

    {
        ignores: ['/app/_tests/*', '.next/*', '.vscode/*', 'node_modules/*']
    },

    {
        plugins: {
            'unused-imports': unusedImports
        },
        rules: {
            'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'none'
                }
            ]
        }
    }
];
