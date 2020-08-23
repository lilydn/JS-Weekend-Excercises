// Implement the following methods -
// Filter, ForEach, Map
// Using only for(), array and objects (without other js methods)


// - Filter
Array.prototype.myFilter = function(condition) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        if (condition(this[i])) {
            res.push(this[i]);
        }
    }
    return res;
}

// - ForEach
Array.prototype.myForEach = function(userFunc) {
    for (let i = 0; i < this.length; i++) {
        this[i] = userFunc(this[i]);
    }
    return this;
}

// - Map
Array.prototype.myMap = function(userFunc) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        res.push(userFunc(this[i]));
    }
    return res;
}






// Tests
const arr = [1,2,3,4,5];
// Filter
console.log('- Filter -');
console.log(arr);
console.log(arr.impFilter(num => num > 3)); 
// ForEach
console.log('- ForEach -');
console.log(arr);
console.log(arr.impForEach(num => num + 3)); 
// Map
console.log('- Map -');
console.log(arr);
console.log(arr.impMap(num => num + 100)); 