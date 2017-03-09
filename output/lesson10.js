// Rest Parameters
//let displayAnimals = function(...animals) {
var displayAnimals = function (a) {
    // Javascript:
    /*
    for (let anm in arguments) {
        console.log(arguments[anm]);
    }
    */
    if (a === void 0) { a = 'hihi'; }
    var animals = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        animals[_i - 1] = arguments[_i];
    }
    // Typescript: add a parameter to function: ...animals
    console.log(a);
    console.log(animals);
    /*for (let anm in animals) {
        console.log(animals[anm]);
    }*/
};
displayAnimals('Dog');
displayAnimals('Dog', 'Cat');
displayAnimals('Dog', 'Cat', 'Pig');
// displayAnimals(1, 3, 5);
// displayAnimals(13, 'Cu', 'Chim'); 
//# sourceMappingURL=lesson10.js.map