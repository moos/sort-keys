declare namespace sortKeys {
	interface Options {
		/**
		Recursively sort keys, including keys of objects inside arrays.

		@default false
		*/
		readonly deep?: boolean;

		/**
		[Compare function.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
		
		@param left - Left key.
		@param right - Right key.
		@param object - The current object whose keys are being compared.
		*/
		readonly compare?: (left: string, right: string, object?: unknown) => number;
	}
}

/**
Sort the keys of an object.

@returns A new object with sorted keys.

@example
```
import sortKeys = require('sort-keys');

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
*/
declare function sortKeys<T extends {[key: string]: any}>(
	object: T,
	options?: sortKeys.Options
): T;

export = sortKeys;
