// interface IFn {
//     (x:number,y:number):number;
// }

// let fn :IFn = function (x,y){
//     return x+y;
// }

// 泛型类型
// let fn : <T>(x:T,y:T) => number = function (x,y) {
//     return Number(x) + Number(y);
// }
// fn<number>(1,2)
// fn<string>('1','3');


// 泛型接口
// interface IFn <T> {
//     (x:T,y:T):number
// }
// let fn : IFn <number> = function (x,y){
//     return x+y;
// }
// fn(1,2)

// let fn1 : IFn <string> = function (x,y) {
//     return Number(x) + Number(y);
// }
// fn1('2','5');