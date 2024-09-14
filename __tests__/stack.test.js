import { makeStack } from '../src/stack.js'

test("stack's main flow", () => {
    const stack = makeStack();
    // Add two items to the stack
    stack.push('one');
    stack.push('two');
    // Retrieve two items from the stack
    expect(stack.pop()).toEqual('two');
    expect(stack.pop()).toEqual('one');
});

test('isEmpty', () => {
    const stack = makeStack();
    expect(stack.isEmpty()).toBe(true);
    stack.push('two');
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
})

test('pop in empty stack', () => {
    const stack = makeStack();
    // The pop method call is wrapped in a function
    // This allows the matcher to catch the exception
    expect(() => stack.pop()).toThrow();
});
