// Solution to the exercise. Lesson 7. “Unit Tests”

// Write tests for the Validator object
// This validator checks the correctness of data

// Functional principle of the validator
// The addCheck(fn) method adds checks to the validator
// Each check is a predicate function
// The predicate function takes the value to be checked as input and returns either true or false
// Checks added to the validator are accumulated
// Each next added check is in addition to the previous one

// Using the isValid(value) method, the Validator user checks that
// the value matches all added checks

// If no checks have been added, any value is assumed to be valid

// @ts-check

import _ from 'lodash';
import { getImplementation } from '../src/validatorIndex.js';

const makeValidator = getImplementation();

// Don't work on local machine
// test("validator's main flow", () => {
//     const validator = makeValidator();
//     expect(validator.addCheck()).toBe(true);
// })

test('main flow', () => {
    const validator = makeValidator();
    validator.addCheck((v) => v > 5);
    expect(validator.isValid(6)).toBe(true);
});

test('less', () => {
    const validator = makeValidator();
    validator.addCheck((v) => v > 5);
    expect(validator.isValid(5)).toBe(false);
});

// test('isEmpty', () => {
//     const validator = makeValidator();
//     // Since no checks have been added, any value is correct
//     validator.isValid('some value');
// });