// /**
//  * 单例
//  */
// /**
//  * 通过某种方法控制系统同时只有一个Mysql的对象在工作
//  * 通过口头去约定是不靠谱的
//  */
var Mysql = /** @class */ (function () {
    function Mysql(host, port, username, password, dbname) {
        if (host === void 0) { host = '127.0.01'; }
        if (port === void 0) { port = '3306'; }
        if (username === void 0) { username = 'root'; }
        if (password === void 0) { password = ''; }
        if (dbname === void 0) { dbname = ''; }
        this.host = host;
        this.port = port;
        this.username = username;
        this.password = password;
        this.dbname = dbname;
    }
    Mysql.getInstance = function () {
        if (!Mysql.instance) {
            Mysql.instance = new Mysql();
        }
        return Mysql.instance;
    };
    return Mysql;
}());
//let db = new Mysql();
console.log(Mysql.instance);
