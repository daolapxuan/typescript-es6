// Declaring method in class

class Animal {

    // Method 1: constructor
    constructor(kind) {
        this.kind = kind;
        console.log("constructor: " + this.kind);
    }

    // Method 2: static
    static speak() {
        console.log("this is static method");
    }

    // Method 3: normal
    action(fuck) {
        let run = "run";
        console.log("this is normal method: " + run + fuck);
    }
 }

 let aL16 = new Animal("Chicken"); // constructor

 Animal.speak(); // static

 aL16.action("chịch"); // normal
 