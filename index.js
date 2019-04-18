// Note: this is file invokes esm
// Which allows es6 imports and exports
require = require('esm')(module);

module.exports = require('./server');