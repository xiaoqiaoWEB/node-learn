const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

//获取后缀名
//console.log(path.extname('index.js'))

const Miemodel = require('./model/getmimeCallback.js');


http.createServer((req,res)=>{

    //解析路径
    let pathName = url.parse(req.url).pathname;
    //console.log(pathName)

    //拿到文件的后缀名
    let extname = path.extname(pathName);

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
                //如果不存在返回 404
                fs.readFile('static/404.html',function(error,data404){
                    if(error){
                        console.log(error);
                    }
                    res.writeHead(404,{"Content-Type":"text/html;charset='utf-8'"});
                    res.write(data404);
                    res.end(); /*结束响应*/
                })
            }else{
                //文件存在
                let filetype = Miemodel.getMime(extname,(filetype)=>{ //添加回调 解决异步

                    res.writeHead(200,{"Content-Type":""+filetype+";charset='utf-8'"});
                    res.write(data);
                    res.end(); /*结束响应*/

                });//获得文件类型

            }
        })
    }
}).listen(8001)
