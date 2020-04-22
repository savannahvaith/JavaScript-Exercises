let surname;

function hello() {
    name = "Savannah";  // this variable is only available within its scope 
    surname = "vaith";
    return `${name} ${surname}`;
}
console.log(name); // name isn't defined - error 
console.log(hello()); // prints savannah vaith
