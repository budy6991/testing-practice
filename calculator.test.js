const calculator = require('./calculator')

test('Properly adds two numbers', () => {
    expect(calculator.add(2,3)).toEqual(5)
})
test('Properly substracts two numbers', () => {
    expect(calculator.subtract(5,2)).toEqual(3)
})
test('Properly divides two numbers', () => {
    expect(calculator.divide(6,2)).toEqual(3)
})
test('Properly multiplies two numbers', () => {
    expect(calculator.multiply(2,3)).toEqual(6)
})