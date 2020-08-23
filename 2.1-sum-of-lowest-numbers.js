// Create a function that returns the sum of the two lowest positive numbers given an array of
// minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumOfTheTwoLowest(a) {
    let lowest = Number.MAX_VALUE;
    let secondLowest = Number.MAX_VALUE;
    for (let i = 0; i < a.length; i++) {
        if (a[i] < lowest) {
            secondLowest = lowest;
            lowest = a[i];
        }
        else if (a[i] < secondLowest && a[i] >= lowest) {
            secondLowest = a[i];
        }
    }
    return lowest + secondLowest;
}



// another solution but less efficient time complexity

function sumOfTheTwoLowestV2(a) {
    a.sort((a, b) => a - b);
    return a[0] + a[1];
}

