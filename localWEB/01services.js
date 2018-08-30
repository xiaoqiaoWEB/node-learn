const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req,res)=>{

    let pathName = req.url;

    //默认加载首页
    if(pathName == '/'){
        pathName = '/index.html';
    }

    //过滤请求
    if(pathName != '/favicon.ico'){
        //console.log(pathName);

        //读取文件
        fs.readFile('static/'+pathName,(err,data)=>{
            //判断文件是否存在
            if(err){
                console.log(404);
            }else{
                //文件存在
                res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
                res.write(data);
                res.end(); /*结束响应*/
            }
        })
    }
}).listen(8000)
