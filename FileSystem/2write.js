const fs = require('fs');

fs.writeFile('1.txt','xiaoqiao',(err)=>{
    if(err){
        console.log('writte fail');
    }else {
        console.log('write sucss')
    }
})

// 追加内容
// fs.appendFileSync('./1.txt', '我是追加的内容');

fs.appendFile('./1.txt','swx',(err)=>{
    if(err){
        console.log('writte fail');
    }else {
        console.log('write sucss')
    }
})

let a = fs.readFileSync('1.txt')

//console.log(a)



