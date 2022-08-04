const analyzeArray = require ('./analyzeArray')

// test('Returns the average of the numbers', () => {
//     const average = analyzeArray([1,8,3,4,2,6]).average
//     expect(average).toEqual(4)
// })

// test('Returns the min of the numbers', ()=>{
//     const min = analyzeArray([1,8,3,4,2,6]).min
//     expect(min).toEqual(1)
// })

// test('Returns the max of the numbers', ()=>{
//     const max = analyzeArray([1,8,3,4,2,6]).max
//     expect(max).toEqual(8)
// })

// test('Returns the length of the numbers array', () => {
//     const length = analyzeArray([1,8,3,4,2,6]).length
//     expect(length).toEqual(6)
// })

test('Adding numbers', ()=> {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4,  min: 1,  max: 8,  length: 6})
})