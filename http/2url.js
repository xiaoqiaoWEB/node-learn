const http = require('http');
const url = require('url');

http.createServer((req,res)=>{

    //req.url  获取浏览器url输入的信息

    if(req.url!='/favicon.ico'){

        //url.parse(req.url,true) //第一个参数是地址    第二个参数是true的话表示把get传值转换成对象
        let result = url.parse(req.url,true);
        console.log(result.query);//*获取url的get传值*/
    }



    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});

    res.write('<h1>hello node,js</h1>');

    res.end();
}).listen(8001)
