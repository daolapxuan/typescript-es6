// Default value of function's parameter

let number = () => 3;
let calculation = function(numberOne = 1, numberTwo = numberOne*2, numberThree = numberOne*number()) {
    console.log(numberOne + numberTwo);
    //console.log(numberOne + numberTwo - numberThree);
    //console.log(numberThree / numberOne);
};

calculation();
calculation(2);
calculation(4, undefined, 5);
calculation(undefined, 0, 1);