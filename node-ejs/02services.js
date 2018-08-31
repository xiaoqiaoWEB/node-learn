const http = require('http');
const url = require('url');
const path = require('path');

//路由:指的就是针对不同请求的 URL，处理不同的业务逻辑。
http.createServer((req,res)=>{

    var pathName = url.parse(req.url).pathname;

    var pathname=url.parse(req.url).pathname;

    if(pathname=='/login'){

        res.end('login');

    }else if(pathname=='/register'){

        res.end('register');
    }else if(pathname=='/order'){

        res.end('order');

    }else{

        res.end('index');
    }

}).listen(8000);
