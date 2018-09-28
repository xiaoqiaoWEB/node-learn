//获取 input value值
let input : HTMLInputElement = document.querySelector('.input');
let btn : HTMLButtonElement = document.querySelector('button');

btn.onclick = function(){
    let value:number = Number(input.value) + 10;
    console.log(value);
}

// let a: string;

// a = 'miaov';
// a = 1;

// let b: string = 'miaov';
// let c: String = 'miaov';    //可以把基本类型数据赋值给对应的包装对象类型
// let d: String = new String('miaov');
// let e: string = new String('miaov');//不可以把包装对象类型赋值给基本类型

