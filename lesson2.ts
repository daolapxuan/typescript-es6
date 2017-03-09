// Lesson 2: Hoisting
function xPerson(name) {
    if (name === "Xuan") {
        x = "Hello Xuan! :)";
    }
    else {
        x = "Hi Vi! :)";
    }
    console.log(x);
    var x; // hoisting
}

xPerson("Xuan");