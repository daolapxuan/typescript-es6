// Declaring method in class
var Animal = (function () {
    // Method 1: constructor
    function Animal(kind) {
        this.kind = kind;
        console.log("constructor: " + this.kind);
    }
    // Method 2: static
    Animal.speak = function () {
        console.log("this is static method");
    };
    // Method 3: normal
    Animal.prototype.action = function (fuck) {
        var run = "run";
        console.log("this is normal method: " + run + fuck);
    };
    return Animal;
}());
var aL16 = new Animal("Chicken"); // constructor
Animal.speak(); // static
aL16.action("chịch"); // normal
//# sourceMappingURL=lesson16.js.map