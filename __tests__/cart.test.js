// @ts-check

import getImpelementation from '../implementations/index.js';

const makeCart = getImpelementation();

// BEGIN (write your solution here)

test("cart's main flow", () => {
    const cart = makeCart();
    // Add item to the cart
    cart.addItem({ name: 'car', price: 3}, 5);
    expect(cart.getItems().length).toEqual(1);
    // Check that it doesn't always return 1
    cart.addItem({ name: 'house', price: 10}, 2);
    expect(cart.getItems().length).toEqual(2);
    expect(cart.getCount()).toEqual(7);
    expect(cart.getCost()).toEqual(35);
});

test('isEmpty', () => {
    const cart = makeCart();
    expect(cart.getCount()).toEqual(0);
    expect(cart.getCost()).toEqual(0);
});


// END
