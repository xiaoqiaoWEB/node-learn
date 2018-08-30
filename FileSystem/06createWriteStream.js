const fs = require('fs');

let data = "我是要写入的数据\n"

let writeStream = fs.createWriteStream('2.txt');

//写入数据
for(var i=0; i<200; i++){
    writeStream.write(data,'utf-8');
}


//标记写入完成
writeStream.end();


writeStream.on('finish',function(){

    console.log('写入完成');
})

//失败
writeStream.on('error',function(){

    console.log('写入失败');
})
