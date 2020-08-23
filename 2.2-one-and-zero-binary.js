// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

function binaryToInteger(a) {
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        result = (a[i] === 1 && result + Math.pow(2,a.length-i-1)) || result;     
    }
    return result;
}

/* - - Another Soltion - - - */

function binaryToIntegerV2(a) {
    return a.reduce((acc, curr, idx) => curr===1 ? acc + Math.pow(2,a.length-idx-1) : acc, 0);
}


/*
// Test
console.log(binaryToInteger([1, 0, 0, 1])); // 9
console.log(binaryToIntegerV2([1, 0, 1, 1, 1])); // 23
*/ 


