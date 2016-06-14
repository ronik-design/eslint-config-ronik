'use strict';

module.exports = {
  extends: ['xo/esnext', 'xo-react'],
  plugins: ['filenames'],
  rules: {
    indent: [2, 2, {SwitchCase: 1}],
    'quote-props': 0,
    'dot-notation': 0,
    'guard-for-in': 0,
    'filenames/match-regex': [2, '^[a-z0-9\\-\\.]+$']
  },
  env: {
    browser: true
  }
};
