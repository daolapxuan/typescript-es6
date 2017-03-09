// Declare a class 
// a function supports hoisting but a class doesnt
// so we only can declare an object below class
var Person = (function () {
    function Person() {
        this.name = 'Xuan';
    }
    Person.prototype.action = function () {
        console.log('Exercise');
    };
    return Person;
}());
var p1 = new Person();
console.log(p1.action === Person.prototype.action);
console.log(p1.name === Person.prototype.name);
//# sourceMappingURL=lesson15.js.map