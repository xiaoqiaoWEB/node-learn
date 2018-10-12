/**
 * 函数
 *      函数声明
 *      函数表达式
 *
 * 类型约束
 *      函数参数
 *      函数返回值
 *
 * 如果函数没有返回值，使用 void，不是undefined
 */
//函数声明
// function fn(x:number,y:number):number{
//     return x+y;
// }
// fn(1.2,3);
//函数表达式
// let fn1 = function(x:number,y:number):number{
//     return x+y;
// }
// let fn2:(x:number,y:number) => number = function(x:number,y:number){
//     return x+y;
// }
// let fn2:(x:number,y:number) => number = function(x,y){
//     return x+y;
// }
//可选参数 ?
function fn3(x, y) {
    console.log(y);
}
//可选 默认值 =
function fn4(x, y) {
    if (y === void 0) { y = 1; }
    console.log(y);
}
// 剩余参数 any[]
// function fn4(...args: any[]) {
//     console.log(args);
// }
