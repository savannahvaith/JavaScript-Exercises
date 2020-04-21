// let, var and const

// LET is what we should be using!

// Implicit declaration - DON'T USE!!!!!!
a = 10;
console.log(a);

// var 
var b;

//LET without assignment: block scope lettible
// undefined is not NULL! 
let c;
console.log(c); // undefined
c = 15; // assign me a value
console.log(c); // 15

// LET with assignment 
let d = 15.0;
console.log(d);

// CONST - same as let, must be initialised during declaration, and cannot be reassigned 
// Use upper case for constants

const POSTCODE = "NN11 2LL";
console.log(POSTCODE);
// POSTCODE = 21; // this will throw an error!
// console.log(POSTCODE);

// Use const where you can; and use LET when you want to change the value of the variable!

// TYPE OF OPERATOR
let myLet = 0;
console.log(myLet);
console.log(typeof myLet);
console.log(typeof POSTCODE);

// Undefined VS NULL
// Undefined is the value of a UNINTIALISED VARIABLE

// Null is not defined - explicit keyword that tells the runtime it is 'empty'
// NULL is a value we can assign to represent objects that don't exist


let userID = null;
let password;

console.log(userID); // NULL
console.log(password); // UNDEFINED
// double equals - checks the value 
console.log(userID == password);
console.log(userID = password);
// triple equal - check the value && the type
console.log(typeof userID);
console.log(typeof password);
console.log(userID === password);


// Boolean type
let loggedOn = false;
console.log(typeof loggedOn);

console.log(0 == loggedOn); // checking if value is the same - TRUE
console.log(0 === loggedOn); // checking if value & type is the same - FALSE 

// Number type

let x1 = 34.057586596;
let x2 = 34;
console.log(x1);
console.log(typeof x1);
console.log(typeof x2);

// Number properties 
const maxvalue = Number.MAX_VALUE;
console.log(maxvalue);

// Check if it is NOT a number - returns boolean!
let num = isNaN(124);
console.log(num);
let hello = isNaN("hello");
console.log(hello);

// Number of digits after the decimal place
let dp = x1.toFixed(2);
console.log(dp);


// String Type
let name = 'Savannah';
let name2 = "Savannah";

// Backslash to escape special characters
let answer = "We are the \"Vikings\" from the north!";
let answer2 = "We are the 'Vikings' from the north ";
let answer3 = 'We are the "Vikings" from the north ';

console.log(answer);


// 5+3 = 8
// String concatenation and interpolation 
let str1 = '5 + 3 = ';
let value = 5 + 3;
let str2 = str1 + value;
console.log(str2);

// Template literals - introduced in ES2015; allow for strings to be declared with JS expressions
// ${}
let done = "weout";

let str3 = `5 + 3 = ${5 + 3} there you go computation is doneeee ${done}`;
console.log(str3);


// String functions

//.length()
console.log(str3.length);
//charAt()
let char = done.charAt(5);
console.log(char);
//.substring()
let subst = done.substring(1, 3);
console.log(subst);