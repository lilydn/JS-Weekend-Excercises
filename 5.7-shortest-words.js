// Given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(str){
    const newStr = str.split(' ');
    let shortest = newStr[0].length;
    newStr.forEach(word => shortest = (word.length < shortest) && word.length || shortest);
    return shortest;
}



/*
// Test
console.log(findShort('you do not need to account for')); // returns 2
console.log(findShort('account different data types')); // returns 4
*/