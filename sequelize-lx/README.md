# Sequelize
    Sequelize 是一个基于 promise 的 Node.js ORM, 目前支持 Postgres, MySQL, SQLite 和 Microsoft SQL Server. 它具有强大的事务支持, 关联关系, 读取和复制等功能
    安装
    	npm i sequelize
    使用
    	const Sequelize = require('sequelize')

    连接数据库
    	const sequelize = new Sequelize(database: String, username: String, password: String, options: Object)
    	    database：数据库名称
    	    username：数据库用户名
    	    password：数据库密码
    		options:
    			host：主机，默认localhost
    			port：端口，默认3306
    			dialect：数据库类型，默认mysql，必填
    			timezone：时区，影响数据库日期时间格式的值，格式：+08:00 或 字符串格式（http://php.net/manual/zh/timezones.php）

    ---连接数据库----
    		数据库的连接也可以使用 uri
    		数据库驱动://用户名:密码@主机:端口/数据库名称

    	测试数据库连接
    		.authenticate().then().catch()

    ORM
    	对象关系映射：Object Relational Mapping
    		通过对象来映射和操作数据库
    	模型
    		用来表述（描述）数据库表字段信息的对象，每一个模型对象表示数据库中的一个表，后续对数据库的操作都是通过对应的模型对象来完成的


    定义模型
    	public define(modelName: String, attributes: Object, options: Object): Model
    	modelName：模型名称，自定义
    	attributes：模型中包含都数据，每一个数据映射对应表中都每一个字段
    	options：模型（表）的设置

