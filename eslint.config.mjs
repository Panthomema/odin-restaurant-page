import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  {
    ignores: ['**/dist/*'],
  },
  {
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      '@stylistic/js/indent': ['error', 2],
    },
  },
  {
    files: ['webpack.*'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
];
