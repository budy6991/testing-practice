const analyzeArray = require ('./analyzeArray')

test('Returns the average of the numbers', () => {
    expect(analyzeArray(1,8,3,4,2,6)).toBe(4)
})