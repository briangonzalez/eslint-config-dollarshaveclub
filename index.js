'use strict'

module.exports = {
  plugins: [
    'ember',
  ],
  extends: [
    'standard',
  ],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'comma-dangle': [0, 'always-multiline'],
  },
  configs: {
    parserOptions: {
      ecmaVersion: 7,
      sourceType: 'module',
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
        modules: true,
      },
    },
    ember: {
      rules: {
        'no-underscore-dangle': [2, { allow: ['_super'] }],
        'consistent-return': 0,
        'ember/local-modules': 1,
        'ember/closure-actions': 1,
        'ember/no-side-effects': 1,
        'ember/no-observers': 1,
        'ember/use-ember-get-and-set': 1,
      },
    },
  },
}
