'use strict';

module.exports = {
  extends: 'xo-space/esnext',
  plugins: ['filenames'],
  rules: {
    'quote-props': 0,
    'dot-notation': 0,
    'filenames/filenames': [2, '^[a-z0-9\\-\\.]+$']
  },
  env: {
    node: true
  }
};
