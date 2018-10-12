// 我希望装饰出来的age属性的值不是固定的
// 装饰器函数不是我们主动调用的
// 如果我们希望传入构造值，那么就得使用 ： 闭包
// Age就不能直接作为装饰器函数
// 该函数执行完成以后需要返回一个函数，这个返回的函数将作为实际的装饰器函数
function Size(v:number){
    return function <T extends {new(...args:any[]):{}}> (constructor:T):T {
        class PerCat extends constructor {
            age: number = v
        }
        return PerCat
    }
}

@Size (10) 
class cat {
    username = 'xiaoqiao'
}

@Size (12) 
class cat01 {
    username = 'xiaoqiao'
}

let pp1 = new cat();
let pp2 = new cat01();

console.log(pp1)
console.log(pp2)