'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _lodash = require('lodash');

function snakeCaseKeys(object) {
  if (!(0, _lodash.isPlainObject)(object)) {
    throw new TypeError('Item must be plain object literal');
  }

  return (0, _lodash.mapKeys)(object, (0, _lodash.rearg)(_lodash.snakeCase, [1, 0]));
}

function camelCaseKeys(object) {
  if (!(0, _lodash.isPlainObject)(object)) {
    throw new TypeError('Item must be plain object literal');
  }

  return (0, _lodash.mapKeys)(object, (0, _lodash.rearg)(_lodash.camelCase, [1, 0]));
}

exports.snakeCaseKeys = snakeCaseKeys;
exports.camelCaseKeys = camelCaseKeys;