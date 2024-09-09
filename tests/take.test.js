// Exercise for Lesson #3
// Write tests for the function take(items, n)
// The function returns the first n items from an array
// By default, n is equal to 1
// If n is a negative number, an empty array is returned

import { strict as assert } from 'assert';
import getFunction from '../functions.js';

const take = getFunction();

// BEGIN (write your solution here)

assert.deepEqual(take([1, 2, 3], 1), [1]);

assert.deepEqual(take([1, 2, 3]), [1]);

assert.deepEqual(take([4, 3], 9), [4, 3]);

assert.deepEqual(take([], 2), []);

assert.deepEqual(take([4, 3], -1), []);

// END
