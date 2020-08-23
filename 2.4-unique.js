// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// It’s guaranteed that array contains at least 3 numbers.
// Return the uniqe number

function findUniqeV1(arr) {
    // index 0 is the uniqe
    if (arr[0] !== arr[1] && arr[0] !== arr[2]) return arr[0];
    // index 1 is the uniqe
    if (arr[0] !== arr[1] && arr[0] === arr[2]) return arr[1];
    // any other index 
    for (let i = 2; i < arr.length; i++) {
        if ((arr[i] !== arr[i-2]) && (arr[i] !== arr[i-1])) 
            return arr[i];
    }
}



// solution 2
function findUniqeV2(arr) {
    return arr.find((el,index,arr) => {
        return (el !== arr[index-1] && el !== arr[index+1] && index !== 0)}) || arr[0];
}





// solution 3
function findUniqeV3(arr) {
    const countRepeats = arr.reduce(reducer, {});
    console.log(countRepeats); 
    return Object.keys(countRepeats).find(key => countRepeats[key] === 1);
}

const reducer = (accKeys, curr) => {
    accKeys[curr] = accKeys[curr] + 1 || 1; 
    return accKeys;
}







//Tests
//console.log(findUniqeV2([0,0,0,8,0]));
//console.log(findUniqeV2([0,0,0.55,0,0]));
console.log(findUniqeV3([0,7,0,0,0,0])); 
console.log(findUniqeV3(['b','b','b',2,'b'])); 
