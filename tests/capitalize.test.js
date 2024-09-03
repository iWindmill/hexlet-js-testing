import { capitalize } from '../src/capitalize.js'

if (capitalize('hello') !== 'Hello') {
    throw new Error('The function does not work correctly!')
}

if (capitalize('') !== '') {
    throw new Error('The function does not work correctly!')
}

console.log('All tests passed!');
