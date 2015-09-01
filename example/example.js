import {camelCaseKeys, snakeCaseKeys} from '../es6/transformObjectProperties';

const foo = {
  fooBar: 'baz'
};

const bar = {
  foo_bar: 'baz'
};

console.log(snakeCaseKeys(foo));

console.log(camelCaseKeys(bar));
