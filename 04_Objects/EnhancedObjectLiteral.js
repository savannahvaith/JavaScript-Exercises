let power = 200;

let myCar = {
    power
};

console.log(myCar);

/* Define methods

    Because we're using the THIS keyword within the method it belongs to the myCar2 object
    This keyword:
    In a method – This refers to the owner object
    In a function – This refers to the global object
    Alone – refers to the global object
*/

let power = 200;
let myCar = {
    speed: 0,
    power,
    accelerate() { this.speed = this.power / 2 }
}

console.log(myCar.speed);
myCar.accelerate();
console.log(myCar.speed);

// Creating dynamic properties:
n = 0;
let myCar2 = {
    power,
    ["prop_" + ++n]: n,
    ["fizz_" + ++n]: n
}

console.log(myCar2)


// Assign method() 
let obj1 = { a: 1 }
let obj2 = { b: 2 }
let obj3 = { c: 3 }

Object.assign(obj1, obj2, obj3);
console.log(obj1);

let obj2 = Object.assign({}, myCar);
console.dir(obj2);
