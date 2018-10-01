// /**
//  * 单例
//  */
// /**
//  * 通过某种方法控制系统同时只有一个Mysql的对象在工作
//  * 通过口头去约定是不靠谱的
//  */

class Mysql {

    public static instance;

    host:string;
    port:string;
    username:string;
    password:string;
    dbname:string;

    private constructor(host='127.0.01',port='3306',username='root',password='',dbname='')
    {
        this.host = host;
        this.port = port;
        this.username = username;
        this.password = password;
        this.dbname = dbname;
    }

    public static getInstance () {
        if(!Mysql.instance){
            Mysql.instance = new Mysql();
        }
        return Mysql.instance;
    }
    
}

//let db = new Mysql();

console.log(Mysql.instance);