// Complete the findNextSquare method that finds the next integral perfect square after the one
// passed as a parameter. 
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. 
// You may assume the parameter is positive.

function findNextSquare(n) {
    return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
}


/*
//test
console.log(findNextSquare(144)); //169
*/