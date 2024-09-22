import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
    baseDirectory: import.meta.url,
    recommendedConfig: js.configs.recommended
});

export default [
    js.configs.recommended,
    ...compat.extends('plugin:vue/vue3-recommended'),
    ...compat.extends('@vue/eslint-config-typescript/recommended'),
    ...compat.extends('@vue/eslint-config-prettier/skip-formatting'),
    {
        files: ['*.vue', '**/*.vue'],
        languageOptions: {
            parserOptions: {
                parser: '@typescript-eslint/parser'
            }
        }
    }
];
