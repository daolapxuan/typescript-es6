// Arrow Function:
// Using to collapse the traditional function has type of return

let year = function() {
    return 2017;
}
console.log(year());

// Arrow type
let yearArrow = () => 2017;
console.log(yearArrow());

//Calculation: x and y
let x, y: number;
// Addition: x + y
let add = (x, y) => x + y;

// Subtraction: x - y 
let sub = (x, y) => x - y;

// Multiplication: x * y 
let mul = (x, y) => x * y;

// Division: x / y 
let divi = (x, y) => x / y;

console.log(add(5,10));
console.log(sub(100,10));
console.log(mul(5,5));
console.log(divi(20,4));