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

// assert(indexOf([1, 2, 1, 2], 2) === 1);
// assert(indexOf([1, 2, 1, 2], 2, 1) === 1);
// assert(indexOf([1, 2, 1, 2], 2, 2) === 3);
// assert(indexOf([2, 'one', 'cat', false], 8) === -1);
// assert.deepEqual(indexOf([], 2), -1);

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

// No, I am not able to customize the output of power-assert yet

// Second attempt to understand the algorithm
//
// indexOf([1, 2, 1, 2], 2, 2); // 3
//          |  |  |  |   |  |      |
//          |  |  |  |   |  |      |
//          |  |  |  |   |  |      |
//          |  |  |  |   |  |       We need to get the index of the first occurrence of the passed element in the array 
//          |  |  |  |   |  |
//          |  |  |  |   |  We start the search from the index
//          |  |  |  |   |  
//          |  |  |  |   We will search for this element in the array
//          |  |  |  |
//          |  |  |  Index 3 (end)
//          |  |  |
//          |  |  Index 2 (start)
//          |  |
//          |  Index 1
//          |  
//          Index 0

assert(indexOf([1, 2, 3], 2, 0) === 1);
assert(indexOf([1, 2, 3, 2, 1], 1) === 0);
assert(indexOf([2, 1, 2], 2, 1) === 2);
assert(indexOf([1, 1, 1], 1, 2) === 2);
assert(indexOf([1, 2, 3, 4, 5, 4, 5], 5, 0) === 4);
assert(indexOf([1, 2, 3, 4, 5, 4, 5], 5, 5) === 6);
assert(indexOf([1, 2, 3], 3, 1) === 2);
assert(indexOf([1, 2, 1, 2], 2) === 1);
assert(indexOf([1, 2, 1, 2], 2, 2) === 3);
assert(indexOf([2, 'one', 'cat', false], 8) === -1);
assert(indexOf([ ], 1) === -1);
assert(indexOf([ ]) === -1);
assert(indexOf(['one', 'two', 'one'], 'one', 1) === 2);

// A bug that cost me a lot of time
// Didn't check that it doesn't check that the search starts at index zero by default