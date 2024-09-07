// Write tests for the function indexOf(items, value, [fromIndex=0])
// The function returns the index of the first occurrence of the passed item in the array
// The search starts with the index fromIndex
// The default value of the index is zero

// indexOf([1, 2, 1, 2], 2); // 1
// indexOf([1, 2, 1, 2], 2, 2); // 3
// indexOf([2, 'one', 'cat', false], 8); // -1

// @ts-check


import assert from 'power-assert';
import getFunction from '../src/functions.js';

const indexOf = getFunction();

// BEGIN (write your solution here)
// First solution - not work

assert(indexOf([1, 2, 1, 2], 2) === 1);
assert(indexOf([1, 2, 1, 2], 2, 1) === 1);
assert(indexOf([1, 2, 1, 2], 2, 2) === 3);
assert(indexOf([2, 'one', 'cat', false], 8) === -1);
assert.deepEqual(indexOf([], 2), -1);

// END
// Output
// make: Entering directory '/usr/src/app'
// suppressor pass 'make check'
//  Expected tests to pass, recieved tests passed 
// FUNCTION_VERSION=wrong1 suppressor fail 'make check'
// #	make[1]: Entering directory '/usr/src/app'
// #	node ./tests/indexOf.test.js
// #	make[1]: Leaving directory '/usr/src/app'
// #	
//  Expected tests to fail, but they passed. See output above.  
// make: *** [Makefile:9: test] Error 1
// make: Leaving directory '/usr/src/app'

// How work
// indexOf([1, 2, 1, 2], 2); // 1
// Search value 2
// fromIndex=0
// indexOf([1, 2, 1, 2], 2);
//          |  |
//          0  1 => 1

// How work
// indexOf([1, 2, 1, 2], 2, 2); // 3
// Search value 2
// fromIndex=2
// indexOf([1, 2, 1, 2], 2, 2); // 3
//          |  |  |  |
//          0  1  2  3 => 3

// How work
// indexOf([1, 2, 1, 2], 2, 2); // 3
// Search value 2
// fromIndex=2
// indexOf([2, 'one', 'cat', false], 8); // -1
//          |    |      |      |
//          0    1      2      3


// How work
// indexOf([1, 2, 1, 2], 2, 1); // 1
// Search value 2
// fromIndex=2
// indexOf([1, 2, 1, 2], 2, 1); // 1
//          |  |  |  |
//          0  1 => 1


// Second solution
// Maybe try enabling power-assert output and see what's causing the problem?

// To use power-assert, you need to transform your test code for power-assert output
// https://github.com/power-assert-js/

// $ npm install --save-dev mocha power-assert intelli-espower-loader

// $ npm i mocha