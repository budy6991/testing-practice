const capitalize = require('./capitalize')

test('Capitalizes the first letter', ()=> {
    expect(capitalize('hola')).toBe('Hola')
})