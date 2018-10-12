/**
 * 类接口
 *      使用接口让某个类去符合某种契约
 *
 * 类可以通过 implements 关键字去实现某个接口
 *      - implements 某个接口的类必须实现这个接口中确定所有的内容
 *      - 一个类只能有一个父类，但是可以implements多个接口，多个接口使用逗号分隔
 */
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
var Man = /** @class */ (function () {
    function Man(name) {
        this.name = name;
    }
    return Man;
}());
var SuperMan = /** @class */ (function (_super) {
    __extends(SuperMan, _super);
    function SuperMan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SuperMan.prototype.fly = function () {
        console.log('A');
    };
    return SuperMan;
}(Man));
var Cat = /** @class */ (function () {
    function Cat() {
    }
    return Cat;
}());
var SuperCat = /** @class */ (function (_super) {
    __extends(SuperCat, _super);
    function SuperCat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SuperCat.prototype.fly = function () {
        console.log('B');
    };
    return SuperCat;
}(Cat));
var tomo = new SuperMan('name');
