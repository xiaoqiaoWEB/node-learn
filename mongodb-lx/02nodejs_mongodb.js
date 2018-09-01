var http=require('http');
var ejs=require('ejs');
var url=require('url');

//引入路由 模块
var app=require('./model/express-route.js');
http.createServer(app).listen(3000);

//引入
var MongoClient = require('mongodb').MongoClient;

// // 连接数据库的地址
var DBUrl = 'mongodb://localhost:27017/swx';


app.get('/',function(req,res){


    MongoClient.connect(DBUrl,(err,db)=>{
        if(err){
            console.log('链接失败')
            return
        }

        var list = [];

        //从数据库查询数据
        var result = db.collection('admin').find({});

        result.toArray((err,doc)=>{
            if(err){
                console.log(err)
            }else{
                console.log(doc);
                list = doc;
                ejs.renderFile('views/index.ejs',{list},(error,data)=>{
                    res.send(data);
                })

            }
        })

    })





    // ejs.renderFile('views/index.ejs',{msg},(err,data)=>{
    //     res.send(data);
    // })

})

