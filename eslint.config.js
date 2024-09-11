import globals from 'globals';
import pluginJs from '@eslint/js';

import airbnb from 'eslint-config-airbnb';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    plugins: {
      airbnb,
    },
  },
  {
    rules: {
      'no-console': 'off',
      'no-undef': 'error',
    },
  },
];


