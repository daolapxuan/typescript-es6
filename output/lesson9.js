// Default value of function's parameter
var number = function () { return 3; };
var calculation = function (numberOne, numberTwo, numberThree) {
    if (numberOne === void 0) { numberOne = 1; }
    if (numberTwo === void 0) { numberTwo = numberOne * 2; }
    if (numberThree === void 0) { numberThree = numberOne * number(); }
    console.log(numberOne + numberTwo);
    //console.log(numberOne + numberTwo - numberThree);
    //console.log(numberThree / numberOne);
};
calculation();
calculation(2);
calculation(4, undefined, 5);
calculation(undefined, 0, 1);
//# sourceMappingURL=lesson9.js.map