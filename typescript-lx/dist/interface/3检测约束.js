// /**
//  * 如果我们希望检测不必要这么复杂
//  *      - 如果我们希望某些时候，只要包含其中一些规则即可
//  *          - 通过可选 ? 来实现
//  *          - 通过 as 断言
//  *          - 通过变量转换
//  */
// interface Opts {
//     width:number,
//     height:number,
//     color:string
// }
// function fn (opt:Opts) {}
// 告知ts检测，我传入的就是一个Options
// fn({
//     width:100,
//     height:200
// }as Opts);
// 先赋值给一个变量，也可以绕开 检测
// let objts = {
//     height:200,
//     width:300,
//     color:'res',
//     left:500
// }
// fn( objts );
