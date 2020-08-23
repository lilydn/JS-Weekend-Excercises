// Take 2 strings s1 and s2 including only letters from a to z.
// Return a new sorted string, the longest possible, containing distinct letters, 
// each taken only once - coming from s1 or s2.

function organizeStrings(s1,s2) {
    const charCountObj = s1.toLowerCase().split('').reduce(charCount, {});
    s2.toLowerCase().split('').reduce(charCount, charCountObj);
    return(Object.keys(charCountObj).sort((a, b) => a.localeCompare(b)).join('')); 
}


function charCount(charCountObj, current) {
    charCountObj[current] = charCountObj[current] + 1 || 1;
    return charCountObj;
}



/*
// Tests
let a = "cfh";
let b = "beeegi";
console.log(organizeStrings(a, b)); // output: "bcefghi"
a = "xyaabbbccccdefww";
b = "xxxxyyyyabklmopq";
console.log(organizeStrings(a, b)); // output: "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz";
console.log(organizeStrings(a, a)); // output "abcdefghijklmnopqrstuvwxyz"
*/