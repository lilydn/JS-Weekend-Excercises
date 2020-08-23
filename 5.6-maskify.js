// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(mask) {
    return mask.split('').map((char,index) => char = (index < mask.length-4) && '#' || char).join('');
}





// Tests
console.log(maskify("4556364607935616"));  // "############5616"
console.log(maskify("64607935616"));  // "#######5616"
console.log(maskify("1"));  // "1"
console.log(maskify(""));  // ""
console.log(maskify("Skippy")); // "##ippy"

