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

    var msg='123'

    ejs.renderFile('views/index.ejs',{msg},(err,data)=>{
        res.send(data);
    })

})

//添加数据
app.get('/add',(req,res)=>{

    //链接数据库
    MongoClient.connect(DBUrl,(err,db)=>{
        if(err){
            console.log(err);
            console.log("数据链接失败");
            return
        }

        //增加数据
        db.collection('admin').insertOne({"name":"这里是测试03","vip":"0"},(error,result)=>{
            if(error){
                console.log("添加数据失败！")
                return
            }
            res.send("数据添加成功");
            db.close();
        })
    })

})

//修改 跟新数据
app.get('/edit',(req,res)=>{

    MongoClient.connect(DBUrl,(err,db)=>{
        if(err){
            console.log(err)
            return
        }

        db.collection('admin').updateOne({"name":"laozhai"},{$set:{"age":"这里是测试"}},(error,result)=>{
            if(error){
                console.log(err)
                return
            }
            res.send("xiu gai succ");
            db.close();
        })

    })

})


//删除数据
app.get('/delete',(req,res)=>{

    MongoClient.connect(DBUrl,(err,db)=>{
        if(err){
            console.log(err)
            return
        }

        db.collection('admin').deleteOne({"name":"xulei"},(error,result)=>{
            if(error){
                console.log(err)
                return
            }
            res.send("succ");
            db.close();
        })

    })

})

