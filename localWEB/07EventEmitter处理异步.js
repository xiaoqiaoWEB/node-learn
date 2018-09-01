

/*

 Node.js 事件循环:

 Node.js 是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高。
 Node.js 的每一个 API 都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发。

 Node.js 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件，

 如下实例：

* */

const fs = require('fs');
const events = require('events');

//console.log(events)

var EventEmitter = new events.EventEmitter();

EventEmitter.on('data',(su)=>{
    console.log(su)
})


setTimeout(()=>{
    EventEmitter.emit('data','我回来了')
},1000)


