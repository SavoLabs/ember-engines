/* eslint-env node */
'use strict';

module.exports = {
  name: 'contentfor-test',

  isDevelopingAddon() {
    return true;
  },
  contentFor(type, config) {
    if (type === 'head') {
      return '<meta name="test" content="test">';
    } else if (type === 'body-footer') {
      return '<div class="test"></div>';
    }
  }
};
