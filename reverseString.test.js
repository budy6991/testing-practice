const reverseString = require('./reverseString')

test('Takes one string and reverses it', () => {
    expect(reverseString('hola')).toBe('aloh')
})