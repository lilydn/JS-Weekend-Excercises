// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.

function summation(num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result += i;
    }
    return result;
}



/* - - - - */

// The sum of the members of a finite arithmetic progression
const summation2 = (num) => ((num + 1)*num)/2;



/*
//Test
console.log(summation2(8)); //36
*/