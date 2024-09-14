// Code from lesson 8. Data preparation

// Sample 1
// import _ from 'lodash';

// test('includes', () => {
//     // Prepared a collection for testing most of the functions
//     // of the required library
//     const coll = ['One', true, 3, 10, 'cat', {}, '', 10, false];

//     expect(_.includes(coll, 3)).toBe(true);
//     expect(_.includes(coll, 11)).toBe(false);
// });

// Sample 2
// Eliminate the need to generate unnecessary code duplication
// Let's move the collection definition to the module level,
// outside of the test functions

// Only works within a single module

// import _ from 'lodash';

// const coll = ['One', true, 3, 10, 'cat', {}, '', 10, false];

// test('includes', () => {
//     expect(_.includes(coll, 3)).toBe(true);
//     expect(_.includes(coll, 11)).toBe(false);
// });

// Sample 3
// import _ from 'lodash';

// const coll = [1, 2, 3, 4];

// test('filter', () => {
//     // Choose only even-numbered
//     expect(_.filter(coll, (v) => v % 2 == 0)).toEqual([2, 4])
// });

// $ NODE_OPTIONS=--experimental-vm-modules npx jest setup.test.js

// (node:80059) ExperimentalWarning: VM Modules is an experimental feature and might change at any time
// (Use `node --trace-warnings ...` to show where the warning was created)
//  PASS  ./setup.test.js
//   ✓ filter (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.224 s, estimated 1 s

// Sample 4
// import _ from 'lodash';

// const coll = [1, 2, 3, 4];

// test('filter', () => {
//     // Choose only even-numbered
//     expect(_.filter(coll, (v) => v % 2 == 0)).toEqual([2, 4])
// });

// $ NODE_OPTIONS=--experimental-vm-modules npx jest setup.test.js
// (node:80340) ExperimentalWarning: VM Modules is an experimental feature and might change at any time
// (Use `node --trace-warnings ...` to show where the warning was created)
//  FAIL  ./setup.test.js
//   ✕ filter (3 ms)

//   ● filter

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 0
//     + Received  + 1

//       Array [
//         2,
//         4,
//     +   6,
//       ]

//       58 | test('filter', () => {
//       59 |     // Choose only even-numbered
//     > 60 |     expect(_.filter(coll, (v) => v % 2 == 0)).toEqual([2, 4])
//          |                                               ^
//       61 | });

//       at Object.toEqual (__tests__/setup.test.js:60:47)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.167 s, estimated 1 s
// Ran all test suites matching /setup.test.js/i

// Sample 5
// It is not always possible to bring constants to the module level.
// For example, for dynamic data.
// The module is loaded into memory once.
// All code defined at the module level (including constants) is executed exactly once.
// The now constant will be defined before all tests are run.
// And only then Jest will start executing the tests.
// With each subsequent test, the lag of the now constant value
// from the current real value ‘now’ will be further and further away.

// Code that works with the concept of ‘now’ can rely on the fact that ‘now’
// is almost a snapshot of a given moment in time. 
// But in the example, now starts to lag behind the real now
// and the more tests and the more complex they are, the bigger the lag becomes.

// const now = Date.now(); 

// The test function adds a test inside Jest.
// Jest decides when to execute this test and starts the test for execution.
// Therefore, there is an indefinite amount of time
// between loading the module and running the tests
// test('first example', () => console.log(now));
// test('second example', () => console.log(now));

// Sample 6
// Hooks - special functions of test frameworks.
// Run before or after tests.
// The hook takes a function and code as input, and executes the code
// defined at the module level for each test.

// Create variables for hooks
let now;

beforeEach(() => {
    now = Date.now();
});

test('first example', () => console.log(now));
test('second example', () => console.log(now));
