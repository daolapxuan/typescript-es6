// Basic Type

let isDone: boolean = false;
console.log(isDone);

let myAge: number = 24;
console.log(myAge);

let myName: string = "Xuan";
console.log(myName);

let myText: string = `
    Hello, my name is ${ myName }.
    I'll be ${ myAge + 1 } years old next year.
`
console.log(myText);

enum Animals {Rabbit, Chicken, Turtle, Tiger};
let animal: Animals = Animals.Chicken; // take position of a element
console.log(animal);