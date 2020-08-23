// Your task is to create a function that does four basic.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, num1, num2) {
    if(operation === '+') return num1+num2;
    if(operation === '-') return num1-num2;
    if(operation === '*') return num1*num2;
    if(operation === '/') return num1/num2;
}




/*
// Tests
console.log(basicOp('+', 4, 7));  // Output: 11
console.log(basicOp('-', 15, 18));  // Output: -3
console.log(basicOp('*', 5, 5));  // Output: 25
console.log(basicOp('/', 49, 7));  // Output: 7
*/