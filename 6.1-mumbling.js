// write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(str) {
    return str.split('').map((char, index) => 
    `${char.toUpperCase()}${char.toLowerCase().repeat(index)}`).join('-');
}

/*
// Tests
console.log(accum('cwD')); // C-Ww-Ddd
console.log(accum("RqaEzty")); // R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy
*/