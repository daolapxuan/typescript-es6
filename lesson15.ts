// Declare a class 

// a function supports hoisting but a class doesnt
// so we only can declare an object below class
class Person {

    name = 'Xuan';
    action() {
        console.log('Exercise');
    }
}

let p1 = new Person();

console.log(p1.action === Person.prototype.action);
console.log(p1.name === Person.prototype.name);