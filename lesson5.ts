// const
/*
let number;
const numberOne = 10;

number = 2; // can
numberOne = 1; // cannot
*/

const obj = {
    name: "DLX"
}
obj.name = "Vi";
// obj = { name: "Vi" }; // Wrong, because obj is defined const

console.log(obj.name);