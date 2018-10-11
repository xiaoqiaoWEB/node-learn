
// interface Person01{
//     [attr:string] :any
// }

// class Person01 {
//     constructor (public username:string,public age:number){

//     }
// }

// let p2 : Person01 = new Person01('xiaoqiao',15);

// function SuperMan01(obj:Person01){
//     obj.fly = function () {
//         console.log('fly');
//     }
// }
/*
// function getPersonObj(constructor: Person01){// 我想约束传入的必须是一个构造函数
//      // Person 表示这个类型对应的对象，我们这里要的Person的构造函数，不是他的对象
//     //return new constructor();
// }
*/

// function getArray (constructor: {new():Array<string>}){
//     return new constructor();
// }

// getArray(Array);

// // Person01类的对象
// let a : Person01;
// let fn1 : { new() : Person01};


// interface window {
//     [attr:string]:any
// }

// window.mm = 1;