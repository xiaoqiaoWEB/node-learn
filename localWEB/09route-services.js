const http = require('http');

let router = require('./model/router');

console.log(EventEmitter)

http.createServer((req,res)=>{

    router.statics(req,res,'static');

}).listen(8012)
