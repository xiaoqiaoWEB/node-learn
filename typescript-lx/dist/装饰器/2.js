var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 我希望装饰出来的age属性的值不是固定的
// 装饰器函数不是我们主动调用的
// 如果我们希望传入构造值，那么就得使用 ： 闭包
// Age就不能直接作为装饰器函数
// 该函数执行完成以后需要返回一个函数，这个返回的函数将作为实际的装饰器函数
function Size(v) {
    return function (constructor) {
        var PerCat = /** @class */ (function (_super) {
            __extends(PerCat, _super);
            function PerCat() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.age = v;
                return _this;
            }
            return PerCat;
        }(constructor));
        return PerCat;
    };
}
var cat = /** @class */ (function () {
    function cat() {
        this.username = 'xiaoqiao';
    }
    cat = __decorate([
        Size(10)
    ], cat);
    return cat;
}());
var cat01 = /** @class */ (function () {
    function cat01() {
        this.username = 'xiaoqiao';
    }
    cat01 = __decorate([
        Size(12)
    ], cat01);
    return cat01;
}());
var pp1 = new cat();
var pp2 = new cat01();
console.log(pp1);
console.log(pp2);
