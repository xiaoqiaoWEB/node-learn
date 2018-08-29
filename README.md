# node-learn
# 环境搭建
	安装 Node.js 解析器
	    - 解析执行 Node.js 代码（类似浏览器的 JS 解析器）

# 执行环境 - CLI & REPL
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

#Event-模块
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

#Process
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

#Stream
	流（stream）是一种在 Node.js 中处理流式数据的抽象接口。 stream 模块提供了一些基础的 API，用于构建实现了流接口的对象，
	Node.js 中许多的对象都是提供了流的实现：fs文件操作、net、dgram、http、https等
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

#Buffer
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

# FileSystem
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


# commander.js  --- 命令行开发工具

    通过option设置的选项可以通过program.chdir或者program.noTests来访问。
    通过command设置的命令通常在action回调中处理逻辑。

    version
        用法： .version('x.y.z')

        用于设置命令程序的版本号，

    option
        用户：.option('-n, --name <name>', 'your name', 'GK')

        第一个参数是选项定义，分为短定义和长定义。用|，,，连接。
        参数可以用<>或者[]修饰，前者意为必须参数，后者意为可选参数。
        第二个参数为选项描述
        第三个参数为选项参数默认值，可选。

    command
        用法：.command('init <path>', 'description')

    command的用法稍微复杂，原则上他可以接受三个参数，第一个为命令定义，第二个命令描述，第三个为命令辅助修饰对象。
        第一个参数中可以使用<>或者[]修饰命令参数
        第二个参数可选。
        当没有第二个参数时，commander.js将返回Command对象，若有第二个参数，将返回原型对象。
        当带有第二个参数，并且没有显示调用action(fn)时，则将会使用子命令模式。
        所谓子命令模式即，./pm，./pm-install，./pm-search等。这些子命令跟主命令在不同的文件中。
        第三个参数一般不用，它可以设置是否显示的使用子命令模式。

    description
        用法：.description('command description')

        用于设置命令的描述

    action
        用法：.action(fn)

         用于设置命令执行的相关回调。fn可以接受命令的参数为函数形参，顺序与command()中定义的顺序一致。

    parse
        用法：program.parse(process.argv)

        此api一般是最后调用，用于解析process.argv。

    outputHelp
        用法：program.outputHelp()

        一般用于未录入参数时自动打印帮助信息。

# chalk
    安装
    	npm i chalk / yarn add chalk

    使用
    	const chalk = require('chalk')
    	得到一个 chalk 对象，通过这个对象，我们就可以给控制台中的文字加上各种样式了，就像css一样

    chalk.<style>[.<style>...](string, [string...])

    	Styles
    		Modifiers 文字修饰：
    		bold Colors 文字颜色：red、green、yellow、blue、cyan
    		Background colors 背景颜色：bgRed、bgGreen、bgYellow、bgBlue、bgCyan

        Colors
        	.hex('#DEADED')
        	.keyword('orange')
        	.rgb(15, 100, 204)
        Background colors
        	.hex('#DEADED')
        	.keyword('orange')
        	.rgb(15, 100, 204)

# Inquirer
	交互式命令，提问用户，收集用户输入数据
	安装
		npm i inquirer
	使用
		require('inquirer')

		inquirer.prompt(questions).then(answers=>{
		})

    questions
    	type：提问类型，input, confirm, list, rawlist, expand, checkbox, password, editor
    	name：问题名称，供程序后续使用
    	message：问题文字，给用户看的
    	default：默认值
    	choices：选项
    	validate：输入验证
    	filter：数据过滤

        input
        	提出问题，用户输入答案
        	可用选项：type, name, message[, default, filter, validate, transformer]

        confirm
        	提出选择，用户选择 Y or N
        	可用选项：type, name, message, [default]
        	default如果提供，必须是 boolean 类型

        list
        	单选
        	可用选项：type, name, message, choices[, default, filter]
        	choices为一个数组，数组中可以是简单的字符串，也可以是一个包含了name和value属性的对象
        	默认选中项为数组中某条数据的下标

        rawlist
        	单选
        	可用选项：type, name, message, choices[, default, filter]
        	choices为一个数组，数组中可以是简单的字符串，也可以是一个包含了name和value属性的对象
        	默认选中项为数组中某条数据的下标

        checkbox
        	多选
        	可用选项：type, name, message, choices[, filter, validate, default]
            choices 为一个对象数组，对象中 checked 属性 为 true 的表示选中项

        validate方法
        	对用户输入或选择的内容进行验证，返回boolean值，确定提问是否继续
        	可以返回字符串作为验证失败的提示


# GUI
	图形用户界面（Graphical User Interface，简称 GUI，又称图形用户接口）是指采用图形方式显示的计算机操作用户界面
	与 CLI 相比，图形界面对于普通用户在视觉和操作上更加容易接受

# 基于Node.js的GUI框架
	NW.JS（Node-Webkit）
	Electron

	使用HTML、CSS、JavaScript来构建 UI、处理与用户的交互，同时不约而同的使用了开源浏览器 Chromium
	使用 Node.js 来访问 浏览器 之外的内容，比如系统、文件、网络等等……

# Electron
	使用 JavaScript, HTML 和 CSS 构建跨平台的桌面应用
	当前最新版本：2.0.8
	Node版本：8.9.3
	Chromium：61.0.3163.100

	构建项目
		npm init
		设置项目入口文件：
			“main”: “index.js”
			项目入口文件是 Electron 第一个加载的文件，是整个项目的入口

	主进程与渲染进程
	在 Electron 中，被 Electron 直接运行的脚本（package.json 中指定的 main 脚本）被称为主进程
	在 Electron 中用来展示界面的 web 页面都运行在一个独立的，属于它自己的渲染进程中
	我们可以通过主进程来创建 web 页面，但一个 web 页面被销毁的时候，对应的渲染进程也会被终止
	主进程管理所有的 web 页面和它们对应的渲染进程
	一个应用程序有且仅有一个主进程

	在 Electron 中，Electron 同时为 主进程 与 渲染进程暴露了 Node.js 的所有接口，也就是说，我们可以在 Electron 的主进程 与 渲染进程 中使用 Node.js 的 API

	在 Electron 中使用 Node.js API

	同时，在 Electron 中，也提供了大量的 API 去帮助我们开发桌面应用程序，我们可以通过 require('electron') 来引入它们，需要注意的是，
	API 是区分进程类型的，也就是有的 API 只能在特定（主进程或渲染进程中进行使用）

	安装
		npm i electron
		require('electron')

	app 对象
		该对象提供了一系列的事件用来控制整个应用程序的生命周期，从打开到关闭，如：
			ready、window-all-closed、quit……
		同时也提供了一些方法来管理应用程序的状态与行为，如：
		quit()、relaunch()、hide()、show()……

	BrowserWindow 类
		创建和控制浏览器窗口

		new BrowserWindow( [options] )
		options：窗口选项 -
		https://electronjs.org/docs/api/browser-window

	BrowserWindow 对象
		每一个 BrowserWindow 对象的实例都是一个独立的渲染进程，同时该对象也提供了各种用于操控的 API，包括：事件、属性、方法

		实例事件
			close、closed、focus、blur、show、hide……

		实例属性
			webContents：窗口包含的内容对象
			id：窗口的唯一 ID

		实例方法
			close()、show()、hide()、maximize()、unmaximize()、setSize()、getSize()、setPosition()、getPosition()、setTitle()、getTitle()
			loadFile() ： 加载页面（这就是我们要显示的内容了），页面地址使用相对路径，相对路径相对于应用程序根目录
			loadURL() : 使用 URL 协议加载文件，可以是 http 协议，也可以是 file 协议

		窗口
			一般窗口
			无边框窗口
				BrowserWindow 的 options
					frame ： false
			透明窗口
				BrowserWindow 的 options
					transparent ： true
			父子窗口
				BrowserWindow 的 options
					parent： 父窗口对象
				子窗口永远显示在父窗口的前面
			模态窗口
				BrowserWindow 的 options
					parent： 父窗口对象
					modal : true
				子窗口会禁用父窗口

		菜单
			创建原生应用菜单和上下文菜单

		Menu 类
			创建新菜单
			new Menu()

		添加菜单项目
			添加菜单项到应用程序菜单和上下文菜单中

		MenuItem 类
			new MenuItem( [options] )
				options : https://electronjs.org/docs/api/menu-item

		添加菜单项目
		注意事项：
			当菜单有子菜单的时候，父菜单的 type 应设置为 submenu

		添加菜单项目到指定菜单
			菜单实例.append(菜单项)
			菜单实例.insert(位置, 菜单项)


		把菜单添加到应用程序顶层
			Menu.setApplicationMenu(menu对象)

		作为右键（上下文）菜单
			菜单实例.popup(options)
				options：
					window：指定窗口
					x/y : 位置
					callback : 关闭后的回调
			菜单实例.closePopup()
				关闭上下文菜单

		快速构建菜单项
			Menu.buildFromTemplate(template)
				template：
					template是一个数组，用于快速构建 MenuItem

    数据共享
        通过浏览器 API
            Storage API
		IndexedDB

		通过 Electron 提供的API
        	remote 对象
        		在渲染进程中使用主进程模块
        		const {remote} = require('electron')
        		remote.getGlobal('key')

        	IPC - 进程间通信
            	ipcRenderer
            		.send(channel[, arg1][, arg2][, ...])
            	ipcMain
            		.on(channel, listener)
            		  listener(e, ...data) : 监听
                        e.sender.send() : 回复

            主进程主动发送消息到渲染进程
            		win.webContents.send()
