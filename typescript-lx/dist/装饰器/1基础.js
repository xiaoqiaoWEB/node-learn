// function Age <T extends {new(...args: any[]): {}}>(constructor: T): T {
//     console.log(1)
//     class Person006 extends constructor {
//         age: number = 10
//     }
//     return Person006
// }
// Age是一个装饰器函数，该函数会自动调用，不需要加()调用，调用的时候会传入下面这个对应
// 的class的构造函数
// @Age
// class Person005 {
//     username:string = "xiaoqiao"
// }
// let p3 = new Person005();
// console.log(p3)
