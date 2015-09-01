'use strict';

var transformObjectProperties = require('../es5/transformObjectProperties');

const bar = {
  foo_bar: 'baz'
};

const foo = {
  fooBar: 'baz'
};

console.log(transformObjectProperties.snakeCaseKeys(foo));

console.log(transformObjectProperties.camelCaseKeys(foo));
