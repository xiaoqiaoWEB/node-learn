/**
* 如果我们想把一个模块中的私有数据导出到外部使用，那么我们可以把这个数据挂载
* 到一个 exports 的对象下面
*/


var b = 10;

module.exports.b = b;
module.exports.obj = {
    left:100,
    top:100
}
