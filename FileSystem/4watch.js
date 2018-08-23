const fs = require('fs');

// 当文件发生改变的时候，触发回调
// fs.watchFile('.b/1.css',e=>{
//     console.log(e)
// })

//监控文件夹
fs.watch('./b',(evenType,filename)=>{
    console.log(evenType,filename)
})
