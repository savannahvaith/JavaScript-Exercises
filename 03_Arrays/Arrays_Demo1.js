// Creating Arrays

// Method 1
let array1 = Array(); // Array with no data 
console.log(array1); // []

// Method 2 - Creating with a specified size
let array2 = Array(10);
console.log(array2); // [ <10 empty items>]

// Method 3
let array3 = Array('Rob', 'Bob', 'Tom');
console.log(array3); // [ 'Rob', 'Bob', 'Tom' ]

// Method 4 - best practise 
let array4 = ['Savannah', 'London', 1998, true];
console.log(array4); // [ 'Savannah', 'London', 1998, true ]

// Classroom 
let classroom = new Array(5);
classroom[0] = 'Someone';
classroom[0] = 'who';
classroom[2] = 'is';
classroom[3] = 'important';
classroom[4] = 'yoooohooo';
console.log(classroom);

// Acessing arrays 
console.log(classroom[1]); // undefined
console.log(classroom[4]); // yooohooooo

for (let i = 0; i < classroom.length; i++) {
    console.log(classroom[i]); // prints all of the elements within
}