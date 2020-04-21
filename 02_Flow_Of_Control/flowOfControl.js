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
// let greeting = "Good" + ((now.getHours() > 17) ? " evening. " : " day.");
// console.log(greeting);


// Do while will always run atleast once, then it checks the condition 
let y = 11;
do {
    console.log(++y);
} while (y < 10);


let counter = 5;
let loopcount = 0;

while (counter < 1000) {
    counter *= counter;
    loopcount++;
    console.log(`Total: ${counter} Loop count: ${loopcount}`);
}

// FOR loops 
for (let i = 0; i < 5; i++) {
    console.log(i);
}


let day = now.getDay();
switch (day) {
    case 0:
        console.log(`It's sunday`);
        break;
    case 6:
        console.log(`It's saturday`);
        break;
    case 1:
        console.log(`It's monday`);
    case 2:
    case 3:
    case 4:
    case 5:
        console.log(`It's a weekday!`);
        break;
    default:
        console.log(`Invalid range`);
        break;

}