// Default values
// provide a value for the argument if none is passed to the function 
// Else, it will use the default

function doSomething(arg1, arg2, arg3 = 5) {
    return arg1 + arg2 + arg3;
}

console.log(doSomething(5, 5)); // 15
console.log(doSomething(5, 5, 10)); // 20! 
console.log(doSomething(5, 5, "hello")); // 10hello


// Prefix the last named argument with a spread operator '...' 
// all further values to the function will be captured as an array 

function multiply(arg1, ...args) {
    args.forEach(function (arg, i, array) {
        array[i] = arg1 * arg;
    });
    return args;
}

console.log(multiply(5, 2, 5, 10));
// Expected output: [10,25,50]


// Arrow function - provide cleaner code 

function multiply1(arg1, ...args) {
    args.forEach((arg, i, array) => array[i] = arg1 * arg);
    return args;
}

console.log(multiply1(5, 2, 5, 10));