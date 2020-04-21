let x = 10;
let y = 30;
let result = x + y;
console.log(result);
// BODMAS / BIDMAS!
console.log(10 + 10 / 2 * 5 - 10); // 25
console.log((10 + 10) / 2 * 5 - 10); // 40

let incrementX = 10;
console.log(incrementX++); // returns x first then adds 1 -- 10 
console.log(incrementX); // value it holds is 11 
console.log(++incrementX); // returns 12

// Short hand operations
x -= 5; // x = x - 5;
x += 5;
x /= 5;

// Relational and boolean 
x = 100;
console.log(x > 8); // true
console.log(x < 50); // false
console.log(x == 10); //false
console.log(x != 10); // true


// check if x is greater than 50 AND y is greater than -1 
// return true if both conditions are true
console.log(x > 50 && y > 1); // && - logical AND 

// Logical OR 
// If either statement is true
console.log(x > 50 || y > 1);


// Type Checking: 

let aType = 2; // Number
let bType = "2"; // String
let cType = "two"; // String

console.log(aType === bType); // false

console.log(aType * aType); // 4
console.log(aType + cType); // 2two
console.log(aType * bType); //  4 

// Type conversion
// To convert a string into an integer
let s = "50.89";
let num = 5;
console.log(num + parseInt(s)); // 55 
// ParseFloat() to return a floating point number, preserves the numeric values after a decimal point.
console.log(num + parseFloat(s)); // 55.89

x = .1;
y = .2;
console.log(`${(x * 10 + y * 10) / 10}`);