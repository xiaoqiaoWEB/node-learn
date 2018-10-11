class MyArray <T> {
    private _data:T[] = [];

    constructor () {

    }

    public mypush(v:T) : number {
        this._data.push(v);
        return this._data.length;
    }
}

// 对于arr对象这个实例来讲，里面的T就是string
let arr :MyArray <string> = new MyArray();
arr.mypush('1');

// 对于arr对象这个实例来讲，里面的T就是number
let arr1 : MyArray <number> = new MyArray();
arr1.mypush(2);