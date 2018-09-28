#TypeScript 学习记录
安装 TypeScript 编译器
- npm i typescript / npm i -g typescript

TypeScript 文件
	TypeScript 文件默认以 .ts 为后缀
	TypeScript 是 JavaScript 的扩展，所以 TypeScript 代码要在 浏览器/Node 环境下运行，需要把 TypeScript 代码编译为 JavaScript 代码

#编译
- tsc 命令
- tsc 要编译的ts文件 [编译后输出目录及文件]

#tsconfig.json
- 当使用 tsc 并不指定 要编译的ts文件 的情况下，会从当前运行命令所在的目录开始逐级向上查找 tsconfig.json 文件
- tsconfig.json 文件用来配置 tsc 的编译配置选项
-我们也可以通过 --project（-p） 来指定一个包含 tsconfig.json 文件的目录来进行编译

#tsconfig.json 基本配置
*compilerOptions：编译相关设置
        module：指定编译后的代码要使用的模块化系统
        target：指定编译后的代码对应的ECMAScript版本
        outDir：指定编译后的代码文件输出目录
        outFile：将输出文件合并成一个文件（合并的文件顺序为加载和依赖顺序）
*include：指定要包含的编译文件目录
        []：目录数组，使用 glob 模式
        * 匹配0或多个字符（不包括目录分隔符）
	? 匹配一个任意字符（不包括目录分隔符）
	**/ 递归匹配任意子目录
*exclude：指定不要包含的编译文件目录
	[]：设置同 include ，默认会排除 node_modules 和 <outDir> 指定的目录

#类型系统
- 类型注解（类型声明、类型约束）
- JavaScript 是动态语言，变量随时可以被赋予不同类型的值，变量值的类型只有在运行时才能决定
- 在编码（编译）阶段无法确定数据类型，会给程序在实际运行中带来极大的隐患
- 不利于编码过程中的错误排查
使用类型注解能够在变量声明的时候确定变量存储的值的类型，用来约束变量或参数值的类型，这样在编码阶段就可以检查出可能出现的问题，避免把错误带到执行期间

#语法
- let 变量: 类型
当变量接收了与定义的类型不符的数据会导致编译失败（警告）

#类型
TypeScript 定义的类型包括：
- 数字、字符串、布尔值
- null、undefined
- 数组、元组、枚举
- void、any、Never

- string、number、boolean：基本类型
- String、Number、Boolean：对象类型
        注意：
	        基本类型可以赋值给对应包装对象
		包装对象不可以赋值给对应基本类型

#数组
数组声明语法
        基本语法：
	let list: number[];
	 泛型方式：
	let list: Array<number>;
#注意
	具有相同类型的一组有序数据的集合
	声明数组同时要确定数组存储的数据的类型
	同一个数组中的数据只能有一种类型


#元组
	元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
	对于下标内的数据，数据顺序必须与声明中的类型一一对应
	对于越界下标数据，使用联合类型
	联合类型：声明类型的集合

#联合类型
	多个类型中的一个，或的关系
		let v: string|number|boolean

#交叉类型
	多个类型的叠加，并且的关系
		let v:string&number&boolean	

	