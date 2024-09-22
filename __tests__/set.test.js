// Solve the exercise for lesson 8. Data preparation.
// Write tests for the function set(obj, path, value).
// The function returns an object in which it modifies
// or adds a value at the specified path.

// This function mutates the object, so each run of the tests
// will make changes to the original object. 
// Structure the testing so that the tests do not depend
// on each other, and each test is performed against the original object.

// @ts-check

import _ from 'lodash';

import functions from '../src/functionsForSet.js';

const set = functions();

// Solution 1. Don't work
// BEGIN (write your solution here)

let object;

beforeEach(() => {
    const object = { a: [{ b: { c: 3 } }] };
});

test("set's main flow", () => {
    set(object, 'a[0].b.c', 4);
    expect(console.log(object.a[0].b.c)).deepEqual(4);
});

// ENDs

// FAIL  ./set.test.js
// ● Test suite failed to run

//   TypeError: getFunction is not a function

//     15 | import { getFunction } from '../src/functionsForSet.js';
//     16 |
//   > 17 | const set = getFunction();
//        |             ^
//     18 |
//     19 | // BEGIN (write your solution here)
//     20 |

//     at getFunction (__tests__/set.test.js:17:13)

// Test Suites: 1 failed, 1 total
// Tests:       0 total
// Snapshots:   0 total
// Time:        0.228 s

