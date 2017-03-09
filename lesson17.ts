// Inheritance in class

// Father class
class Vihicle {

    constructor(type) {
        console.log('constructor of Vihicle: ' + type);
    }

    action(distance, time) {
        return distance / time;
    }
}

// Child class
class Bicycle extends Vihicle {

    constructor(type, name) {
        super(type);
        console.log("constructor of Bicycle: " + type + " - " + name);
    }

    action(distance, time) {
        return super.action(distance, time);
        
    }
}

// Object of father class
let vihicle = new Vihicle("car");
console.log(vihicle.action(500, 10));

// Object of child class
let bi = new Bicycle("bicycle", "Topographic");
console.log(bi.action(500, 20));