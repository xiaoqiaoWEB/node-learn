const fs = require('fs');

//流的方式读取文件

let read = fs.createReadStream('1.txt');

let str = '';
let num = 0;

//读取文件
read.on('data',(chunk)=>{
    str += chunk;
    num++;
})

//读取完成
read.on('end',()=>{
    console.log(str);
    console.log(num);
})

//读取失败
read.on('error',(err)=>{
    console.log(err)
})
