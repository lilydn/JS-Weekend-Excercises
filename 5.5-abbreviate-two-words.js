// Write a function to convert a name into initials. 
// This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F


function abbrevName(name){
    let names = name.toUpperCase().split(' ');
    return `${names[0].charAt(0)}.${names[1].charAt(0)}`
}


/*
// Tests
console.log(abbrevName('Patrick Feeney')); 
console.log(abbrevName('Sam Harris')); 
*/