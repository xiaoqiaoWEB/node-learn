class DB {
    static getInstance(){ //静态方法
        if(!DB.inStamce){
            DB.inStamce = new DB();
        }
        return DB.inStamce;
    }

    constructor(){
        console.log('实例化会触发构造函数')
    }
    contact(){
        console.log('数据库连接')
    }
    find(){
        console.log('查找')
    }

}

var b1 = DB.getInstance();
b1.contact();
b1.find();
