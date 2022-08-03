let sum = 0

function analyzeArray ([...numbers]) {
    
    for (i = 0; i<numbers.length; i++) {
        sum += numbers[i]
    }
    let length = numbers.length
    let average = sum / length

    
    const obj = {
        average: average
    }
    console.log(obj)
    

}


// module.exports = analyzeArray