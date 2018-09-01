const url = require('url');
const path = require('path');
const fs = require('fs');

//staticPath 静态文件托管
module.exports.statics = function(req,res,staticPath){

    //解析路径
    let pathName = url.parse(req.url).pathname; //得到get 传值
    //console.log(pathName)

    //文件的后缀名
    let extname = path.extname(pathName);

    //默认加载首页
    if(pathName == '/'){
        pathName = '/index.html';
    }

    //过滤请求
    if(pathName != '/favicon.ico'){
        //console.log(pathName);

        //读取文件
        fs.readFile(staticPath+'/'+pathName,(err,data)=>{
            //判断文件是否存在
            if(err){
                console.log(404);
                //如果不存在返回 404
                fs.readFile(staticPath+'/404.html',function(error,data404){
                    if(error){
                        console.log(error);
                    }
                    res.writeHead(404,{"Content-Type":"text/html;charset='utf-8'"});
                    res.write(data404);
                    res.end(); /*结束响应*/
                })
            }else{
                //文件存在
                getMime(extname,(filetype)=>{ //添加回调 解决异步

                    res.writeHead(200,{"Content-Type":""+filetype+";charset='utf-8'"});
                    res.write(data);
                    res.end(); /*结束响应*/

                });//获得文件类型

            }
        })
    }
}

//获取文件类型  私有
getMime = function (extname,callback) {

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
