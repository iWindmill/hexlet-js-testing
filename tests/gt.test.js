// Lesson #6. Matchers

// Write tests for the function gt(value, other)
// The function returns true if value > other
// The function returns false in other cases

// gt(3, 1); // true
// gt(3, 3); // false
// gt(1, 3); // false

import { assert } from 'console';
import getFunction from '../src/functionsForGt.js';

const gt = getFunction();

// First solution
// BEGIN (write your solution here)

// assert(gt(3, 1) === true);
// assert(gt(3, 3) === false);
// assert(gt(1, 3) === false);

// END

// make: Entering directory '/usr/src/app'
// suppressor pass 'make check'
// #	make[1]: Entering directory '/usr/src/app'
// #	jest --colors
// #	 FAIL  __tests__/gt.test.js
// #	  ● Test suite failed to run
// #	
// #	    ReferenceError: assert is not defined
// #	
// #	       7 | // BEGIN (write your solution here)
// #	       8 |
// #	    >  9 | assert(gt(3, 1) === true);
// #	         | ^
// #	      10 | assert(gt(3, 3) === false);
// #	      11 | assert(gt(1, 3) === false);
// #	      12 |
// #	
// #	      at assert (__tests__/gt.test.js:9:1)
// #	
// #	Test Suites: 1 failed, 1 total
// #	Tests:       0 total
// #	Snapshots:   0 total
// #	Time:        0.534 s
// #	Ran all test suites.
// #	make[1]: *** [Makefile:5: check] Error 1
// #	make[1]: Leaving directory '/usr/src/app'
// #	
// #	exit status 2
 
//  Expected tests to pass, but error occurred. See output above.  
// make: Leaving directory '/usr/src/app'
// make: *** [Makefile:8: test] Error 1

// Second solution
// BEGIN (write your solution here)

test('gt', () => {
    expect(gt(3, 1)).toBe(true);
    expect(gt(3, 3)).not.toBe(true);
    expect(gt(1, 3)).not.toBe(true);
});

// assert(gt(3, 1) === true);
// assert(gt(3, 3) === false);
// assert(gt(1, 3) === false);

// END