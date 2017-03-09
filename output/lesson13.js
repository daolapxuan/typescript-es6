// Destructing an Object
// Declare an object:
var obPerson = {
    nameob: 'Xuan',
    hightob: 1.82,
    ageob: 24
};
// We cant use new property names, have to use property in object, which needs to destruct
var nameob = obPerson.nameob, hightob = obPerson.hightob, ageob = obPerson.ageob;
console.log(nameob);
console.log(hightob);
console.log(ageob);
// We can call a new property names, use sign ":"
var n = obPerson.nameob, h = obPerson.hightob, ag = obPerson.ageob;
console.log(n);
console.log(h);
console.log(ag);
//# sourceMappingURL=lesson13.js.map