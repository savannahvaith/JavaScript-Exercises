// Destructing 
// convenient method to extract data from obejcts and arrays

let var1, var2, var3;

[var1, var2, var3] = ['I', 'LOVE', 'JS!'];

console.log(var1); // I
console.log(var2); // Love
console.log(var3); // JS

let [var4, var5 = 7] = [1, 5];

console.log(var4); // 1
console.log(var5); // Default unless specified otherwise!

// destructuring objects
// Assigning the variable to the obekct; the name have to be the same!!
let myobj = { var6: 'Salt', var7: 'pepper' };
let { var6, var7 } = myobj;

console.log(var6);
console.log(var7);

// Rename them: 
let myobject = { var1: 'Salt', var2: 'pepper' };
let { var1: condament1, var2: condament2 } = myobject;

console.log(condament1);
console.log(condament2);

let myobj1 = { variable: 'Salt' };
let { variable = 'Ketchup', variable2 = 'Mustard' } = myobj1;

// let variable = "ketchup"; 
// variable = myobj1.variable 
// console.log(variable); // salt


console.log(variable); // salt
console.log(variable2); // mustard
