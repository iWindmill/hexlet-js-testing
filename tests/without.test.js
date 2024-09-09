// Exercise for Lesson #5
// Write tests for the function without(coll, [values])
// The function takes an array as its first parameter
// The function returns a copy of the array
// The values ​​passed in the second and subsequent parameters
// are excluded from the copy of the array

import getFunction from '../src/functionsForWithout.js';

const without = getFunction();

// BEGIN (write your solution here)

test('without', () => {
    expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
    expect(without([])).toEqual([]);
});

// END
