let sum = 0

function analyzeArray ([...numbers]) {
    
    for (let i = 0; i<numbers.length; i++) {
        sum += numbers[i]
    }
    let length = numbers.length
    let average = sum / length

    const max = numbers.reduce(function(a,b){
        
        return Math.max(a,b)
    })

    const min = numbers.reduce(function(a,b){
        return Math.min(a,b)
    })

    const obj = {
        average: average,
        max : max,
        min: min,
        length: length
    }
    
    return obj
    
}

module.exports = analyzeArray