const calculator = require('./calculator')

test('Properly adds two numbers', () => {
    expect(calculator.add(2,3)).toBe(5)
})