/**
 * 1.js 其实就是一个独立的模块文件
 * 每一个模块（文件）都会有自己的独立作用域 - 模块作用域
 * require(模块id/模块的路径);
 *
 * node.js实现这套模块系统方案（一个文件就是一个模块，有模块作用域、导入导出规则）
 *  - 规范：commonjs
 *  当然：完整的commonjs规范不止这一些，还包括了其他的一些规则，还要提供一个常用模块化，比如filesystem
 */
var a = 10;
//console.log(a)

// 导入了2.js模块，该方法的返回值其实就是被导入模块的exports对象

var m1 = require('./2')

//console.log(m1)

/**
 * 当我们导入的模块名称是一个文件夹的时候
 *  1. 读取该文件夹下的package.json文件
 *  2. 导入package.json文件中main选项指定的文件
 *  3. 如果不存在package.json或者main指定的文件，这默认自动导入模块文件夹下的index.js
 */

var m2 = require('./mq');
//console.log(m2)


/**
 * 如果我们导入的模块是在node_modules目录下的，又会有另外的一种规则
 *
 * 如果模块的加载是以 ./ ../ / 开始的，那么就是路径模块加载模式
 * 不以 ./ ../ / 开始的模块，按照另外一种加载机制进行加载
 *      require()方法其实是module.require()
 *      当非路径加载模式的时候，会按照如果下规则进行模块的查找
 *          在module对象有一个属性，paths，是一个数组，里面保存的就是这种非路径加载
 *          模式需要查找的路径列表
 *
 * 非路径模块加载，其实还有其他的几种情况
 */


//var test1 = require('./node_modules/test');

var test2 = require('test');

console.log(test2)

// 如果自己定义的模块与核心模块冲突了，那么默认加载的是核心模块
// let fs = require('fs');
// console.log(fs);

var m3 = require('m2');


console.log(module)
