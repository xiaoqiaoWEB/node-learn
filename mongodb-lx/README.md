# mongodb

    mongod --dbpath url 开启数据库
    mongo 管理数据

    show dbs 查看所有数据库列表

    创建 使用数据库
    use student

    在数据库中创建一个集合 插入值
    db.student.insert({"name":"swx"})

    查看当前数据的所有集合
    show collections

    删除数据库
    db.dropDatabase()

    删除当前数据中的 student 集合
    db.student.drop()

#查找数据
    1.查找所有记录
        db.student.find()

    2.查询 "age" = "22" 的记录
        db.student.find({"age":"22"})

    3.查询 age > 22 的记录
        db.student.find({"age":{$gt:"22"}})

    4.查询 age < 22 的记录
        db.student.find({"age":{$lt:"22"}})

    5.查询 age >= 22 的记录
        db.student.find({"age":{$gte:"22"}})

    6.查询 age <= 22 的记录
        db.student.find({"age":{$lte:"22"}})

    7.查询 age < 40 && age >20 的记录
        db.student.find({"age":{$lt:"40",$gt:"20"}})

    8.查询 name 中 包含 mongo 的记录
        db.student.find({"name":/mongo/})

    9.查询 name 中 以 ^mongo 开头 的记录
        db.student.fins({"name":/^mongo/})

    10.查找指定 name age 的数据
        db.student.find({"name":1,"age":1})

        name 值也可以为 true = 1

    11.查找指定 name age && age >25 的记录
        db.student.find({{"name":1,"age":1},{"age":{$gt:"25"}}})

    12.按照age 排序 查找
        db.student.find().sort(age:1)
            age:1   升序
            age:-1  降序

    13.查找 name = "swx" && age = 28 的记录
        db.student.find({name:"swx",age:28})

    14查询前5条记录
        db.student.find().limit(5)

    15查询 10 条以后 的 5条记录
        db.student.find().skip(10).limit(5)

    16 or 查询
        db.student.find({$or:[{age:22},name:"xiaoqiao"]})

    17查找记录数量
        db.student.find().count()

#修改数据
    查找名字叫 小明 吧 年龄 改为 45
        db.student.update({"name":"小明"},{$set:{"age":"45"}})

#删除数据

       db.student.remove({"name":"xiaoqiao"})

    只删除一条
        db.student.remove({"name":"xiaoqiao"},{justOne:true})


#索引 和 explain

    创建索引
        给 name 创建索引
        db.student.ensureIndex({"name":1})

    查看索引
        db.student.getIndexes();

    删除索引
        db.student.dropIndex({"name":1})

    创建复合索引
        db.student.ensurreIndex({"name":1,"age":-1})

    创建唯一索引
        db.student.ensureIndex({"name":1},{"unique":true})

        唯一所以得 value 必须是唯一

------------------------------

#在node 中使用 mongodb

    安装，命令npm install mongodb

    #链接数据库
        var MongoClient = require('mongodb').MongoClient;
        var url = 'mongodb://localhost:27017/dbname';
        MongoClient.connect(url, function(err, db) {
            if(err){
                console.error(err);
                return;
            }else{
                console.log("Connected correctly to server");
                db.close();
            }
        });

    #获得Collection
       var collection = db.collection('collectionName');

    #添加记录
     调用collection的insert|insertMany方法添加记录。

         collection.insert[|insertMangy]({name:"myName",age:"myAge"},function(err,result){
            if(err){
                console.error(err);
            }else{
                console.log("insert result:");
                console.log(result);
            }
         })

     #更新 修改数据
     调用collection的updateOne方法更新单个记录。

          collection.updateOne({ a : 2 }, { $set: { b : 1 } }, function(err, result) {
            if(err){
                console.error(err);
            }else{
                console.log("update result:");
                console.log(result);
            }
          });

     #删除数据
     调用collection的deleteOne方法更新单个记录。

          collection.deleteOne({ a : 3 }, function(err, result) {
              if(err){
                  console.error(err);
              }else{
                  console.log("delete result:");
                  console.log(result);
              }
            });

     #查询数据
     调用collection的find方法查找记录,find方法的参数为查找条件。

          collection.find({}).toArray(function(err, docs) {
              if(err){
                  console.error(err);
              }else{
                  console.log("find result:");
                  console.log(result);
              }
            });
