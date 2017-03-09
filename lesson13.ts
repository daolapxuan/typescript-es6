// Destructing an Object

// Declare an object:
let obPerson = {

    nameob: 'Xuan',
    hightob: 1.82,
    ageob: 24
}

// We cant use new property names, have to use property in object, which needs to destruct
let {nameob, hightob, ageob} = obPerson;
console.log(nameob);
console.log(hightob);
console.log(ageob);

// We can call a new property names, use sign ":"
let {nameob: n, hightob: h, ageob: ag} = obPerson;

console.log(n);
console.log(h);
console.log(ag);