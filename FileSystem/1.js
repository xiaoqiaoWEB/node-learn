const fs = require('fs');

// write

// 写入数据到文件
// fs.writeFile(file, data[, options], callback)
// 如果文件不存在，则创建
// 如果目录不存在，创建文件就会失败
// First Error : node中一种约定，如果一个回调可能有错误发生，那么约定回调函数的第一个参数专门用来提供错误对象。

// fs.writeFile('1.txt','xiaoqiao',()=>{
//     console.log(arguments[0])
// })

//let res = fs.writeSync('a/2.txt','xiaoqiao');
//console.log(res)

//同步 try catch 来捕获错误
// try{
//     fs.writeSync('a/2.txt','xiaoqiao');
//     console.log('scuess')
// }catch (err) {
//     console.log('fail')
// }

//获取文件信息
var info = fs.statSync('./1.txt')
console.log(info)
console.log(info.isFile())
