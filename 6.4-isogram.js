// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
    const charCountObj = str.toLowerCase().split('').reduce(charCount, {});
    //returns true if at least one element in the array passes a test:
    const moreThanOne = Object.values(charCountObj).some(val => val > 1); 
    return(!moreThanOne);
}

function charCount(charCountObj, current) {
    charCountObj[current] = charCountObj[current] + 1 || 1;
    return charCountObj;
}




/*
// Tests
console.log(isIsogram("Dermatoglyphics"));  // returns true
console.log(isIsogram("aba"));  // returns false
console.log(isIsogram("moOse"));  // returns false -- ignore letter case
*/