// Lesson 4: let in loop
for (var i = 1; i <= 7; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
var _loop_1 = function (j) {
    setTimeout(function () {
        console.log(j);
    }, 1000);
};
for (var j = 1; j <= 7; j++) {
    _loop_1(j);
}
//# sourceMappingURL=lesson4.js.map