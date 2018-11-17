const lodashGet = require('lodash.get');
const lodashSet = require('lodash.set');

const globalStore = {};

module.exports = {
  get(path, defaultValue) {
    return lodashGet(globalStore, path, defaultValue);
  },

  set(path, value) {
    return lodashSet(globalStore, path, value);
  },
};
