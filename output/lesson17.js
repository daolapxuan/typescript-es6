// Inheritance in class
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Father class
var Vihicle = (function () {
    function Vihicle(type) {
        console.log('constructor of Vihicle: ' + type);
    }
    Vihicle.prototype.action = function (distance, time) {
        return distance / time;
    };
    return Vihicle;
}());
// Child class
var Bicycle = (function (_super) {
    __extends(Bicycle, _super);
    function Bicycle(type, name) {
        var _this = _super.call(this, type) || this;
        console.log("constructor of Bicycle: " + type + " - " + name);
        return _this;
    }
    Bicycle.prototype.action = function (distance, time) {
        return _super.prototype.action.call(this, distance, time);
    };
    return Bicycle;
}(Vihicle));
// Object of father class
var vihicle = new Vihicle("car");
console.log(vihicle.action(500, 10));
// Object of child class
var bi = new Bicycle("bicycle", "Topographic");
console.log(bi.action(500, 20));
//# sourceMappingURL=lesson17.js.map