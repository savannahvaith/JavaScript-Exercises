// Function Declaration; named function 
let sName = 'Peter';

function sayHello(name, title) {
    // return "Hello" + title + " " + name; 
    return `Hello ${title} ${name}`;
}

console.log(sayHello(sName, "Mr"));
console.log(sayHello("Savannah", "Miss"));

// Annonymous function 
let sayHelloAnon = function (name, title) {
    return `Hello my friend ${title} ${name}`;
}

console.log(sayHelloAnon('Savannah', 'miss'));

