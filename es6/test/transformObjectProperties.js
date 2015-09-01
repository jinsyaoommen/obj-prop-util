//jshint camelcase: false

import {camelCaseKeys, snakeCaseKeys} from '../transformObjectProperties';
import assert from 'assert';

describe('transformObjectProperties', () => {

  describe('camelCaseKeys', () => {
    it('should transform object property to camel case', () => {
      const foo = {
        foo_bar: 'baz'
      };
      const expectedResult = {
        fooBar: 'baz'
      };
      assert(camelCaseKeys(foo), expectedResult);
    });

    it('should throw error if given object is not a plain object literal',
    () => {
      function harness() {
        const foo = 'foobar';
        camelCaseKeys(foo);
      }
      assert.throws(harness, Error);
    });
  });

  describe('snakeCaseKeys', () => {
    it('should transform object property to snake case', () => {
      const foo = {
        fooBar: 'baz'
      };
      const expectedResult = {
        foo_bar: 'baz'
      };
      assert(snakeCaseKeys(foo), expectedResult);
    });

    it('should throw error if given object is not a plain object literal',
      () => {
        function harness() {
          const foo = 'foobar';
          snakeCaseKeys(foo);
        }
        assert.throws(harness, Error);
      });
  });
});
