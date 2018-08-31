
const fs = require('fs');


module.exports.getMime = function (extname,callback) {

    //异步读取文件
    fs.readFile('./mime.json',(err,data)=>{
        if(err){
            console.log('文件不存在');
            return false;
        }
        let mime = JSON.parse(data.toString());
        let result = mime[extname]

        //利用回调解决异步
        callback(result);
    })

}

