var MyArray = /** @class */ (function () {
    function MyArray() {
        this._data = [];
    }
    MyArray.prototype.mypush = function (v) {
        this._data.push(v);
        return this._data.length;
    };
    return MyArray;
}());
// 对于arr对象这个实例来讲，里面的T就是string
var arr = new MyArray();
arr.mypush('1');
// 对于arr对象这个实例来讲，里面的T就是number
var arr1 = new MyArray();
arr1.mypush(2);
