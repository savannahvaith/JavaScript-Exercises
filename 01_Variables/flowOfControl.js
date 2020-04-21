let now = new Date();
let greeting = "Good";

if (now.getHours() > 17) {
    greeting += " evening";
} else {
    greeting += " day";
}

console.log(greeting);

// Ternary if 
// syntax: (condition) ? valueiftrue : valueiffalse; 

let greeting = "Good" + ((now.getHours() > 17) ? " evening. " : " day.");
console.log(greeting);

