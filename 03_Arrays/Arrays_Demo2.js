let fruits = new Array(5);
fruits[0] = 'Banana';
fruits[1] = 'Tomato';
fruits[2] = 'Apple';
fruits[3] = 'Watermelon';
fruits[4] = 22;

console.log(fruits);

console.log(fruits.sort()); // Sorts in alphabetical order
console.log(fruits.reverse()); // Sorts z - a
console.log(fruits.join('----'));

let num = new Array(5);
num[0] = 23;
num[1] = 12;
num[2] = 2;
num[3] = 9;
num[4] = 22;
console.log(num.sort()); // [ 12, 2, 22, 23, 9 ]

// Push() Method
// Adds an element to the END of the array 
console.log(fruits.push('Pineapple'));
console.log(fruits);

// Pop()
// REMOVES an element from the END of the array 
console.log(fruits.pop());
console.log(fruits);

// Unshift() 
// ADDS a new element to START of the array 
console.log(fruits.unshift('Pineapple'));
console.log(fruits);

// Shift() 
// Removes the FIRST element from the array 
console.log(fruits.shift());
console.log(fruits);