// Write a function toWeirdCase that accepts a string, and returns the same
// string with all even indexed characters in each word upper cased, and all odd indexed
// characters in each word lower cased. The indexing just explained is zero based, so the zero-ith
// index is even, therefore that character should be upper cased.
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
// be present if there are multiple words. Words will be separated by a single space(' ').

function toWeirdCase(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        let letters = words[i].split('');
        for (let j = 0; j < letters.length; j++) {
            letters[j] = (j%2 === 0) ? letters[j].toUpperCase() : letters[j].toLowerCase();
        }
        words[i] = letters.join('');
    }
    return words.join(' ');
}


/*
// Tests
console.log(toWeirdCase( "String")); // returns "StRiNg"
console.log(toWeirdCase("Weird string case")); // returns "WeIrD StRiNg CaSe"
*/
