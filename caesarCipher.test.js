const caesarCipher = require('./caesarCipher')

test('Properly encrypts a word', () => {
    expect(caesarCipher('hello')).toBe('ifmmp')
})