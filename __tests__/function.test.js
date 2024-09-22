// Lesson 10. Code Coverage with Tests

// @ts-check

import getImplementation from '../implementations/indexFunction.js';

const getDaysInMonth = getImplementation();

test('testing function getDaysInMonth()', () => {
  expect(getDaysInMonth(4, 2023)).toBe(30);
  expect(getDaysInMonth(2, 2024)).toBe(29);
  expect(getDaysInMonth(2, 2023)).toBe(28);
  expect(getDaysInMonth(0, 2024)).toBe(null);
  expect(getDaysInMonth(13, 2024)).toBe(null);
  expect(getDaysInMonth(12, 2024)).toBe(31);

  // BEGIN (write your solution here)
  
  // END
});

// npm test -s -- --coverage function.test.js
//  PASS  __tests__/function.test.js
//  ✓ testing function getDaysInMonth() (2 ms)

// -|---------|----------|---------|---------|-------------------
// | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
// -|---------|----------|---------|---------|-------------------
// |      50 |    38.46 |      50 |      50 |                   
//  |      50 |    38.46 |      50 |      50 | 4-5,12,16-20,27   
// -|---------|----------|---------|---------|-------------------
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.711 s