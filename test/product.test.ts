import {Product} from '../src/Product'

test('Test product price', () => {
    const product1 = new Product("Apple", 5);
    const price = product1.getPrice();
    expect(price).toEqual(5);
})

test('Test product price is zero', () => {
    const product1 = new Product("Apple", -5);
    const price = product1.getPrice();
    expect(price).toEqual(0);
})