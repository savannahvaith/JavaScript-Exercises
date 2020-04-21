// Part 1 Creating and Managing Arrays

// Instruction 1 - declare an array
let quote = ["I", "am", "your", "friend"];

console.log(quote);

// Instruction 2 - access array element
console.log(quote[2]);

// Instruction 3 - pop
quote.pop();

// Instruction 4 - push
quote.push("father");

// Instruction 5
console.log(quote);

// Instruction 6 - unshift
quote.unshift("Luke");

// Instruction 7
console.log(quote);

console.log(quote.toString());

// Instruction 11
let erroneousWord = "Luke";

// Instruction 12
let lukeIsHere = quote.find(n => {
    return n === erroneousWord
});

// Instruction 13
let lukeIsAt;

// Instruction 24
if (lukeIsHere) {
    lukeIsAt = quote.findIndex(n => {
        return n === erroneousWord
    });
    // Instruction 25
    quote[lukeIsAt] = "No";
}

// Instruction 
console.log(quote);

// Instruction 7
let output = '';

// Instruction 18
for (let i = 0, j = quote.length; i < j; i++) {
    if (i === j - 1) {
        output += quote[i] + '!';
    } else if (quote[i] === 'No') {
        output += quote[i] + ', ';
    } else {
        output += quote[i] + ' '
    }
}

// Instruction 19
console.log(output);