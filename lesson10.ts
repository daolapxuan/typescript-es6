// Rest Parameters

//let displayAnimals = function(...animals) {
let displayAnimals = function(a = 'hihi', ...animals) {
    
    // Javascript:
    /*
    for (let anm in arguments) {
        console.log(arguments[anm]);
    }
    */

    // Typescript: add a parameter to function: ...animals
    console.log(a);
    console.log(animals);
    /*for (let anm in animals) {
        console.log(animals[anm]);
    }*/
}

displayAnimals('Dog');
displayAnimals('Dog', 'Cat');
displayAnimals('Dog', 'Cat', 'Pig');
// displayAnimals(1, 3, 5);
// displayAnimals(13, 'Cu', 'Chim');