// Basic Type
var isDone = false;
console.log(isDone);
var myAge = 24;
console.log(myAge);
var myName = "Xuan";
console.log(myName);
var myText = "\n    Hello, my name is " + myName + ".\n    I'll be " + (myAge + 1) + " years old next year.\n";
console.log(myText);
var Animals;
(function (Animals) {
    Animals[Animals["Rabbit"] = 0] = "Rabbit";
    Animals[Animals["Chicken"] = 1] = "Chicken";
    Animals[Animals["Turtle"] = 2] = "Turtle";
    Animals[Animals["Tiger"] = 3] = "Tiger";
})(Animals || (Animals = {}));
;
var animal = Animals.Chicken; // take position of array
console.log(animal);
//# sourceMappingURL=lesson6.js.map