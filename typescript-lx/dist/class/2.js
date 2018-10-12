var Person1 = /** @class */ (function () {
    function Person1() {
        this.username = 'xiaoqiao';
        this._age = 10;
    }
    Person1.prototype.getAge = function () {
        return this._age;
    };
    Person1.prototype.setAge = function (age) {
        if (age > 0 && age < 150) {
            this._age = age;
        }
    };
    return Person1;
}());
var p01 = new Person1();
p01.setAge(30);
console.log(p01.getAge());
