// this

var person = {
    name: "DLX",
    age: "24",
    showInfo: function() {
        console.log("your name: " + this.name +"\nyour age: " + this.age);
    }
}
person.showInfo();

/*
let worldOfAnimal = {
    type: "human",
    showInfo: function() {
        setTimeout(function() {
            console.log(this.type);
        }, 1000);
    }
};
worldOfAnimal.showInfo(); // result: undefined
*/

// when we use setTimeout() and using this in which
// this "this" in local scope of setTimeout, not this global scope
// So, to fix it, we use a new varriable instead this global scope

let worldOfAnimal = {
    species: "primate",
    type: "human",
    showInfo: function() {
        // method 1:
        let that = this; // assign this
        setTimeout(function() {
            console.log(that.type); // instead this as that
        }, 1000);

        // method 2: or can use arrow:
        setTimeout(() => console.log(this.species), 1000);
    }
};
worldOfAnimal.showInfo();