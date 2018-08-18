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
