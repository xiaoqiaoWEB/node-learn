const http = require('http');
const url = require('url');
const path = require('path');
const ejs = require('ejs');
const fs = require('fs');


//路由:指的就是针对不同请求的 URL，处理不同的业务逻辑。
http.createServer((req,res)=>{

    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});

    var pathname = url.parse(req.url).pathname;

    var method = req.method.toLowerCase();

    if(pathname=='/login') { //显示登录页面

        ejs.renderFile('views/form.ejs',{

        },(err,data)=>{
            res.end(data);
        })
    }else if(pathname == '/dologin' && method == 'get'){ //get
        res.end('dologin');
        console.log(url.parse(req.url,true).query);

    }else if(pathname == '/dologin' && method == 'post'){ //post

        var postStr = ''; //post 传值

        req.on('data',(chunk)=>{
            postStr += chunk;
        })

        req.on('end',()=>{

            fs.appendFileSync('login.txt',postStr+'\n')

        })
        res.end("<script>alert('登录成功');history.back();</script>")
    }else{
        ejs.renderFile('views/index.ejs',{

        },function(err,data){

            res.end(data);

        })
    }


}).listen(8001);
