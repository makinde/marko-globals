const lodashGet = require('lodash.get');
const lodashSet = require('lodash.set');

const globalStore = {};

module.exports = {
  get(path, defaultValue) {
    lodashGet(globalStore, path, defaultValue);
  },

  set(path, value) {
    lodashSet(globalStore, path, value);
  },
};
