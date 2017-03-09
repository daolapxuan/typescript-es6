// Spread Parameter
var showNames = function () {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    for (var name_1 in names) {
        console.log(names[name_1]);
    }
};
var someName = ['a', 'b'];
var someName2 = "loved";
var someNames = ['Diem', 'Dung', 'Ngoc', 'Tu', 'Vi'];
showNames.apply(void 0, [someName[1], someName2].concat(someNames));
var showNames1 = function (someName1, names) {
    for (var name_2 in names) {
        console.log(names[name_2]);
    }
};
var someName1 = "Xuan";
var someNames1 = ['Diem', 'Dung', 'Ngoc', 'Tu', 'Vi'];
showNames1(someName1, someNames1);
//# sourceMappingURL=lesson11.js.map