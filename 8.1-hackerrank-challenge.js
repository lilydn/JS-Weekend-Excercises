//Code to Fix 
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
process.stdin.on('data', function (data) {
    console.log('a');
    input_stdin += data;
});

process.stdin.on('end', function () {
    console.log('b');
    input_stdin_array = input_stdin.split("\n");
    main();    
});  

function readLine() {
    return input_stdin_array[input_currentline++];
} 

function solveMeFirst(a, b) {
        return a + b;
}

function squared(n) {
    return n * n;
}

function findPerimeter(a, b) {
    return solveMeFirst(a,a) + solveMeFirst(b,b);
}


function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());
    var res = solveMeFirst(a, b);
    console.log(res);
    console.log(findPerimeter(20,10));
}


// - - - - - - - - - - - - - - - - - - - - - - - //

/* Interview Questions (objects, arrays, numbers) */


//What would be the output of following code?
var arrA = [0,1,2,3,4,5];
var arrB = arrA;
arrB[0] = 42;
console.log(arrA); // => [42,1,2,3,4,5]

//What would be the output of following code?
var arrA = [0,1,2,3,4,5];
var arrB = arrA.slice(); //new array
arrB[0] = 42;
console.log(arrA); // => [0,1,2,3,4,5]

//What would be the output of following code?
var arrA = [{prop1: "value of array A!!"},  {someProp: "also value of array A!"},3,4,5];
var arrB = arrA;
arrB[0].prop1=42;
console.log(arrA); // arrA changed => [{prop1: 42} ,{someProp: 'also value of array A!'}, 3, 4, 5]

//What would be the output of following code?
var arrA = [{prop1: "value of array A!!"}, {someProp: "also value of array A!"},3,4,5]; 
var arrB = arrA.slice(); //new array
arrB[0].prop1=42; //changes also prop1 of arrA
arrB[3] = 20; 
console.log(arrA); // => [{prop1: 42} ,{someProp: 'also value of array A!'}, 3, 4, 5]




// - - - - - - - - - - - - - - - - - - - - - - - //

// Linear Search 

function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === x) return i;
    }
    return -1;
}


// - - - - - - - - - - - - - - - - - - - - - - - //

// Binary Search 
// Given a sorted array of numbers, search a given element in the array using Binary search.

function binarySearch(arr, x) {
    return binarySearchIn(arr, x, 0, arr.length-1);
}

function binarySearchIn(arr, x, left, right) {
    let mid = Math.floor((left + right)/2);
    if (left === right) return 'Element not found!';
    if (arr[mid] === x) return 'Element found!';
    if (arr[mid] < x) return binarySearchIn(arr, x, mid+1, right);
    return binarySearchIn(arr, x, left, mid-1);
}



// - - - - - - - - - - - - - - - - - - - - - - - //


console.log(linearSearch([10, 20, 80, 30, 60, 50, 110, 100, 130, 170],110)); // returns 6
console.log(binarySearch([1,3,5,7,8,9],6)); // returns 'Element not found!'
console.log(binarySearch([1,3,5,7,8,9],5)); // returns 'Element found!'







