// Loop we've seen before 
let my1995Array = [1, 2, 3, 4];
console.log("length: " + my1995Array.length);
for (let i = 0; i < my1995Array.length; i++) {
    console.log(my1995Array[i]); // Prints: 1,2,3,4
}
console.log(" ********* ");
// For each loop 
my1995Array.forEach(function (elm) {
    console.log(elm); // prints: 1,2,3,4
});

console.log(" ********* ");
// for of loop
for (el of my1995Array) {
    if (el === 3) {
        break; // Break out of loop
    }
    console.log(el); // Prints 1,2
}




