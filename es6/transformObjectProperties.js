import {camelCase} from 'lodash';
import {isPlainObject} from 'lodash';
import {mapKeys} from 'lodash';
import {rearg} from 'lodash';
import {snakeCase} from 'lodash';

function snakeCaseKeys(object) {
  if (!isPlainObject(object)) {
    throw new TypeError('Item must be plain object literal');
  }

  return mapKeys(object, rearg(snakeCase, [1, 0]));
}

function camelCaseKeys(object) {
  if (!isPlainObject(object)) {
    throw new TypeError('Item must be plain object literal');
  }

  return mapKeys(object, rearg(camelCase, [1, 0]));
}

export {
  snakeCaseKeys,
  camelCaseKeys
};
