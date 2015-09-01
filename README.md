# obj-util [![Build Status](https://travis-ci.org/jinsyaoommen/obj-prop-util.svg?branch=master)](https://travis-ci.org/jinsyaoommen/obj-prop-util)

> Utilities for object property manipulation


## Install

```
$ npm install --save obj-prop-util
```

## Example

```
import {camelCaseKeys, snakeCaseKeys} from 'obj-prop-util';

const foo = {
  fooBar: 'baz'
};

const bar = {
  foo_bar: 'baz'
};

console.log(snakeCaseKeys(foo));

console.log(camelCaseKeys(bar));

```
