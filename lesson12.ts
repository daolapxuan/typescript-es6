// Destructing Array

var arrays = ['A', 'B', 'C', 1, 2];

// We can use new variable names to assign elements in arrays 
// let [a1, a2, a3, a4, a5] = arrays;
let [a1, ...a2] = arrays;

console.log(a1);
console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);