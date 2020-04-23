class Circle {
    constructor(radius, centre) {
        this.radius = radius;
        this.centre = centre;
    }
    // Static method don't allow for instantiated calls!!
    static area(circle) {
        return Math.PI * Math.pow(circle.radius, 2);
    }
}

const MY_CIRCLE = new Circle(5, [0, 0]);

// console.log(MY_CIRCLE.area(MY_CIRCLE)); // CANNOT DO THIS!!!
console.log(Circle.area(MY_CIRCLE)) // 78.53981633974483