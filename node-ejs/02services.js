const http = require('http');
const url = require('url');
const path = require('path');
const ejs = require('ejs');

//路由:指的就是针对不同请求的 URL，处理不同的业务逻辑。
http.createServer((req,res)=>{

    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});

    var pathname=url.parse(req.url).pathname;

    if(pathname=='/login'){

        var msg = "这里是后台数据";
        var list = ['A','B','C','D'];
        var h2 = "<p>这里是p标签</p>"

        //把数据库的数据渲染到模板上面
        ejs.renderFile('views/login.ejs',{
            msg,
            list,
            h2
        },(err,data)=>{
            res.end(data);
        })

        res.end('login');

    }else if(pathname=='/register'){

        res.end('register');
    }else if(pathname=='/order'){

        res.end('order');

    }else{

        res.end('index');
    }

}).listen(8000);
