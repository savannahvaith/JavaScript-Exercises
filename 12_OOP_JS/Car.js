class Vehicle {
    constructor(wheels, power) {
        this._wheels = wheels;
        this._power = power;
        this._speed = 0;
    }

    accelerate(time) {
        this._speed = this._speed + 0.5 * this._power * time;
    }
}
class Car extends Vehicle {
    constructor(wheels, power) {
        super(wheels, power); //call parent constructor
        this._gps = true; 	   //GPS as standard
    }
}


const myCar = new Car(4, 20);
myCar.accelerate(50);
console.log(myCar._speed);