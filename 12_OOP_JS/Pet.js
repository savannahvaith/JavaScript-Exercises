class Pet {
    constructor(name) {
        this.name = name;
        this.eaten = false;
    }

    hasEaten() {
        // ternary if 
        // () ? 'valueiftrue' : 'valueifFalse'
        (!this.eaten) ? console.log(`${this.name} hasn't eaten`) : console.log(`${this.name} has eaten`);
    }
    eating() {
        console.log(`${this.name} is eating - nommmmmmmm`)
        this.eaten = true;
    }

    speak() {
        console.log(`${this.name} is calling you`);
    }
}

let pet = new Pet('Milo');
pet.hasEaten();
pet.eating();
pet.hasEaten();


// If there is a constructor in the parent, then we need to call super BEFORE using this
class Dog extends Pet {
    constructor(name, tricks) {
        super(name); // calls the super constructor and assigns the attribute
        this.tricks = tricks;
    }

    play() {
        console.log(`${this.name} wants to show you his tricks!!`);
    }
    fetch() {
        console.log(`${this.name} can do a ${this.tricks}`);
    }
    speak() {
        super.speak(); // Parent's version of the speak method! ( this.name is calling you )
        console.log(`woooooof`);
    }
}

let d = new Dog("Sir barks alot", "backflip");
d.hasEaten();
d.eating();
d.play();
d.fetch();
d.speak();

