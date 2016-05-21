'use strict';

var curEnv = process.env.NODE_ENV || 'local';
var envConfig = require('./config.' +  curEnv + '.json');
module.exports = function () {
 return envConfig;
};