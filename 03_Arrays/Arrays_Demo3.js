// New Array methods in ES2015;

// Array.from() 
// Creates a real array our of array-like objects

let myArr = Array.from('BEHAPPY');
console.log(myArr);// ['B', 'E', 'H','A', 'P', 'P','Y']

// Map function 
let myArr2 = Array.from([1, 2, 3], x => x + 50);
console.log(myArr2); // [51,52,53]

// Find() 
// Return the first element in which the callback returns true
// Find() returns the first element in the array that satisfies a testing condition - else undefined
let arr = [5, 12, 8, 130, 44];
let found = arr.find(function (element) {
    return element > 10;
});
console.log(found); // expected: 12

// FindIndex() 
// Returns the INDEX of the first matching element in that array 
// that satifies the testing function 
// If unfound, it returns -1
let foundIndex = arr.findIndex(function (element) {
    return element > 13;
});
console.log(foundIndex); // 3