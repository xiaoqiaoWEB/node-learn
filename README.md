# node-learn
环境搭建
	安装 Node.js 解析器
	    - 解析执行 Node.js 代码（类似浏览器的 JS 解析器）

执行环境 - CLI & REPL
	CLI : 命令行接口
		windows : cmd、power shell
		macOS : 终端（terminal）

	node 命令
		输入 node 命令，进入REPL 环境（类似浏览器控制台）
		Read Eval Print Loop
            REPL - 命令
            	.break
            	.clear
            	.exit
            	.help
            	.save
            	.load
            	.editor

命令行工具
	解析指定文件
	node [options] [V8 options] [script.js | -e "script" | -] [--] [arguments]
	options：选项
	V8 options：V8（node.js的javascript解析引擎）相关选项
	[script.js | -e "script" | -]：要执行的脚本文件或内容
	arguments：参数
	https://nodejs.org/dist/latest-v8.x/docs/api/cli.html

命令行工具
	环境变量
		windows
			查看：set
			设置：set 环境变量名称=值
		Linux/macOS
			查看：echo  $环境变量名称
			设置：export 环境变量名称=值

全局对象 - global
		- 类似浏览器全局对象 window，但是 node（ECMAScript） 环境中是没有window的（本质上，浏览器的window 其实就是扩展自ECMAScript中的 global）
    console 对象
    __dirname 属性、__filename 属性
    setTimeout()/clearTimeout()、setInterval()/clearInterval()、setImmediate()/clearImmediate()
    module、exports、require()
    process
    Buffer

    console
    	Console 模块提供了一个简单的调试控制台，类似于 Web 浏览器提供的 JavaScript 控制台
    	.log([data][, ...args])
    	.info([data][, ...args]) -> .log()的别名
    	.debug(data[, ...args]) -> .log()的别名
    	.error([data][, ...args]) -> 与 .log() 类似
    	.warn([data][, ...args]) -> .error()的别名
    	.trace([message][, ...args])

    __dirname
    	当前文件（模块）所在目录

    __filename
    	当前文件（模块）的文件名称（包含文件绝对路径）


EventLoop
	process.nextTick()
	setTimeout()/clearTimeout()
	setInterval()/clearInterval()
	setImmediate()/clearImmediate()

	Timer
    	处理所有 setTimeout 和 setInterval 的回调

    Pending I/O Callback
    		执行 I/O 回调，文件操作、网络操作等
    	Idle, Prepare
    		内部使用
    	Poll
    		轮询 I/O 操作，是否有 I/O callback，如果没有这会阻塞（有超时和基本检测）一段时间
        Check
        		只处理 setImmediate 的回调函数
        	Close Callback
        		专门处理一些 close 类型的回调，如关闭网络连接等

    宏任务
    	主体script，setTimeout，setInterval
    微任务
    	Promise.then，process.nextTick


模块化
	模块化用来分割，组织和打包软件。每个模块完成一个特定的子功能，所有的模块按某种方法组装起来，成为一个整体，完成整个系统所要求的功能
	模块化系统：
	1. 定义模块
	2. 模块导入（依赖）
	3. 模块导出

	node
	1. 一个文件就是一个独立的模块
    2. 模块加载采用同步模式
    3. 通过 require 函数导入、exports 对象导出

    作用域
    	一个文件就是一个独立模块
    	每个模块都有自己独立的作用域

    导出
    	exports 对象
    导入
    	require方法
    		require(模块id/路径)
    		返回被导入模块的 exports 对象

    module对象
    	id
    	filename
    	parent
    	children
    	loaded
    	paths

    模块化 - 分类
    	File Modules
    	Folders as Modules
    		node_modules Folders
    		global folders
    	Core Modules    核心模块

    模块加载机制
    	路径加载模式
    		/
    		./
    		../
    	非路径加载模式
    		node_modules
    		全局目录
    		核心模块

        模块加载机制（后缀）
        	模块文件后缀处理机制
        		文件->.js->.json->.node

    ECMAScript6 模块系统
    	开启支持
    		--experimental-modules
    		.mjs 后缀
    	export
    		http://www.ecma-international.org/ecma-262/#table-42
    	import
    		http://www.ecma-international.org/ecma-262/#table-40

Event-模块
	事件是整个 Node.js 的核心，Node.js中大部分模块都使用或继承了该模块（类似 WebAPI 中的EventTarget）。
	使用：
		require('event')

		EventEmitter 类
        	.emit(eventName[, ...args])
        	.addListener(eventName, listener)
        	.on(eventName, listener)
        	.off(eventName, listener)
        	.removeListener(eventName, listener)
        	……

Process
	process 对象是一个全局变量，它提供当前 Node.js 进程的有关信息，以及控制当前 Node.js 进程
	使用
		全局对象，不需要 require
	API
		.argv
		.env
		.exit([code])

	process.stdout
    	标准输出流
    	.write(data[, encoding][, callback])
    process.stdin
    	标准输入流
    	事件：
    		'data'

Stream
	流（stream）是一种在 Node.js 中处理流式数据的抽象接口。 stream 模块提供了一些基础的 API，用于构建实现了流接口的对象，Node.js 中许多的对象都是提供了流的实现：fs文件操作、net、dgram、http、https等
	使用
		require('stream')

	流的基本类型
    	Writable - 可写入数据的流（例如 fs.createWriteStream()）
    	Readable - 可读取数据的流（例如 fs.createReadStream()）
    	Duplex - 可读又可写的流（例如 net.Socket）
    	Transform - 在读写过程中可以修改或转换数据的 Duplex 流（例如 zlib.createDeflate()）
    Writable属性方法
    	.write(chunk[, encoding][, callback])
    	.end([chunk][, encoding][, callback])
    	.setDefaultEncoding(encoding)
    	Writable事件
    Readable属性方法
    	.setEncoding(encoding)
    	.read([size])
    	.pipe(destination[, options])
    	.pause()
    	.resume()
    	Readable事件

Buffer
	用于操作二进制数据的类
		- 类似数组
		- 长度固定
		- 只能操作二进制数据
	Buffer 类在 Node.js 中是一个全局变量，因此无需使用 require

	Buffer.alloc(size[, fill[, encoding]])
    		分配一个大小为 size 字节的新建的 Buffer 。 如果 fill 为 undefined ，则该 Buffer 会用 0 填充，encoding默认为 'utf8'
    	Buffer也有下标，可以通过 buf[index] 进行操作
    	length：字节长度（非字符长度）

    buf.fill(value[, offset[, end]][, encoding])
    buf.write(string[, offset[, length]][, encoding])
    buf.includes(value[, byteOffset][, encoding])
    buf.indexOf(value[, byteOffset][, encoding])
    buf.equals(otherBuffer)
    buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
    buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]])
    Buffer.byteLength(string[, encoding])
    Buffer.compare(buf1, buf2)
    Buffer.concat(list[, totalLength])
    Buffer.from(array)
    Buffer.isBuffer(obj)
    Buffer.isEncoding(encoding)
    	ascii、utf8、utf16le、ucs2、base64、latin1、binary、hex

FileSystem
	fs模块提供了一些与文件系统进行交互的 API
	require('fs')
	数据的基本操作：CURD
		Create、Update、Read、Delete
    fs.ReadStream 类
    		fs.createReadStream(path[, options])
    fs.WriteStream 类
    		fs.createWriteStream(path[, options])
    fs.Stats 类
    		fs.stat(path[, options], callback)
    fs.FSWatcher 类
    		fs.watch(filename[, options][, listener])
    		fs.watchFile(filename[, options], listener)
