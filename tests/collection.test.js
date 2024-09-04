// Write tests for the function get(obj, key, defaultValue)
// This function retrieves a value from an object provided the key exists
// Otherwise, defaultValue is returned

// @ts-check
import getFunction from '../functions.js';

const get = getFunction();

// BEGIN (write your solution here)

if (get({ hello: 'world' }, 'hello') !== 'world') {
    throw new Error('The function is not working correctly');
}

if (get({}, 'hello', 'kitty') !== 'kitty') {
    throw new Error('The function is not working correctly');
}

if (get({ hello: 'world' }, 'hello', 'kitty') !== 'world') {
    throw new Error('The function is not working correctly');
}

// END