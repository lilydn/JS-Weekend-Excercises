// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and
// numeric digits that occur more than once in the input string. 
// (How many different characters that occur more than once are there)
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) 
// and numeric digits.

function duplicateCount(text){
    const charCount = text.toLowerCase().split('').reduce((acc, char) => {
        acc[char] = acc[char] + 1 || 1; 
        return acc;
    }, {});
    console.log(charCount);
    console.log(Object.keys(charCount));
    return Object.values(charCount).reduce((acc, curr) => curr > 1 ? acc+1 : acc, 0);
}


// Tests
// console.log(duplicateCount("abcde")); // -> 0 # no characters repeats more than once
// console.log(duplicateCount("aabbcde")) // -> 2 # 'a' and 'b'
// console.log(duplicateCount("aabBcde")) // -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// console.log(duplicateCount("indivisibility")) // -> 1 # 'i' occurs six times
 console.log(duplicateCount("Indivisibilities")) // -> 2 # 'i' occurs seven times and 's' occurs twice
// console.log(duplicateCount("aA11")) // -> 2 # 'a' and '1'
// console.log(duplicateCount("CABBAcC")) // -> 3 # 'A' and 'B' each occur twice, 'C' occurs 3 times