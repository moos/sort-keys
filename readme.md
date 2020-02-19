# sort-keys-with-context 

> Sort the keys of an object

Useful to get a deterministically ordered object, as the order of keys can vary between engines.

:fork_and_knife: This is a fork of [https://github.com/sindresorhus/sort-keys](sort-keys).  The compartor function (if given) will be *bound* to the current object context.  So it is possible to get the *value* of the keys:
```js
function myComparator(left, right) {
  let lvalue = this[left];
  let rvalue = this[right];
  // compare based on keys and values
  // ...
}
```
## Install

```
$ npm install sort-keys-with-context
```


## Usage

```js
const sortKeys = require('sort-keys-with-context');

sortKeys({c: 0, a: 0, b: 0});
//=> {a: 0, b: 0, c: 0}

sortKeys({b: {b: 0, a: 0}, a: 0}, {deep: true});
//=> {a: 0, b: {a: 0, b: 0}}

sortKeys({b: [{b: 0, a: 0}], a: 0}, {deep: true});
//=> {a: 0, b: [{a: 0, b: 0}]}

sortKeys({c: 0, a: 0, b: 0}, {
	compare: (a, b) => -a.localeCompare(b)
});
//=> {c: 0, b: 0, a: 0}
```


## API

### sortKeys(object, options?)

Returns a new object with sorted keys.

#### object

Type: `object`

#### options

Type: `object`

##### deep

Type: `boolean`<br>
Default: `false`

Recursively sort keys, including keys of objects inside arrays.

##### compare

Type: `Function`

[Compare function.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

