// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).

function toCamelCase(str) {
    let words = str.split(/[-|_]+/g); 
    for (let i = 1; i < words.length; i++) {
        words[i] = `${words[i].charAt(0).toUpperCase()}${words[i].slice(1).toLowerCase()}`;
    }
    return words.join('');
}



// Tests
console.log(toCamelCase("the-stealth-warrior"));  // returns "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior"));  // returns "TheStealthWarrior"
