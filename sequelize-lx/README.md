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

        attributes 设置
        	attributes是一个对象，里面包含了对应的表中的字段信息
        	key表示字段名称
        	值是字段的具体描述

        字段值描述：
        	type：字段类型，String|DataTypes
        	allowNull：是否允许为空，默认为true
        	defaultValue：默认值，默认为null
        	unique：值唯一，默认为false
        	primaryKey：是否为主键，默认为false
        	field：数据库中字段的实际名称
        	autoIncrement：是否自增，默认false

        	get：字段的getter，函数
        	set：字段的setter，函数
        	validate：对象，当当前字段值发生改变的时候进行验证

        options：模型（表）的设置
        	timestamps：是否给每条记录添加 createdAt 和 updatedAt 字段，并在添加新数据和更新数据的时候自动设置这两个字段的值，默认为true
        	paranoid：设置 deletedAt 字段，当删除一条记录的时候，并不是真的销毁记录，而是通过该字段来标示，即保留数据，进行假删除，默认为false

        freezeTableName：禁用修改表名;
            默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数。 默认为false
        tableName：手动设置表的实际名称

        定义表索引
        	indexes：Array<Object>


        options：模型（表）的设置
        	每个索引对象可以设置的值
        	name：索引名称，默认模型名称+字段
        	fields: Array<string>，索引字段
        	unique：唯一索引，默认false

     创建模型实例对象
        一个模型类对应一个表，
        一个模型实例对象就是一条对应的表记录，
        通过操作这个对象来关联操作对应的表中的数据，
        操作模型类就是操作表，
        操作模型类对象就是操作该表中的某条记录

               模型类 - 表
               模型实例 - 记录

    创建模型实例对象
    		public static build(options: Object): Model | Model[]
    		options：一个对象，对应的就是表中的字段（模型中定义的属性），
    		需要注意的是对该对象的操作不会立即反应到实际的数据库中，需要通过后续的操作进行同步

        模型对象.get(key: String)
        获取某个属性（字段）的值
        模型对象.set(key: String, value: any)
        设置某个属性（字段）的值
        模型对象.validate()
        验证模型数据
        模型对象实例操作
        模型对象.save()
        验证该实例，如果通过验证，则持久化到数据库中
        模型对象.update(updates: Object)
        updates：要更新的字段，调用该方法等同于调用.set()然后.save()
        模型对象.destroy()
        销毁该实例（假删除或真删除）

        除了通过模型创建出来的实例对单条数据进行操作，也可以通过模型类对整个对应的表进行操作
        模型.findById(id: Number | String | Buffer)
        根据主键搜索单条记录

        模型.findOne(options: Object)
        根据条件搜索一条记录
            options.where：搜索条件
            Op操作

        模型.findOrCreate(options: Object)
        搜索特定记录或创建它（如果没有对应记录）
            options.where：搜索条件

        模型.findAll(findOptions: Object)
        	在数据库中搜索多个记录，返回数据和总计数
        		findOptions.where：搜索条件
        		findOptions.limit：记录条数限制
        		findOptions.offset：记录偏移
        		findOptions.order：记录排序方式

        模型.findAndCountAll(findOptions: Object)
        		在数据库中搜索多个记录，返回数据和总计数
        		findOptions.where：搜索条件
        		findOptions.limit：记录条数限制
        		findOptions.offset：记录偏移
        		findOptions.order：记录排序方式
        		与findAll类似，但是返回值包含 count 属性 - 返回数据与总计数

        复合过滤 / OR / NOT 查询
        		Sequelize.Op
        		实例：
        			.findOne({
        				where: {
        					field: val,
        					field: {[Op.eq]: val}
        					[Op.or]: [
        						{field: [1,2,3]},
        						{field: {[Op.gt]: 10}}
        					]
        				}
        			})

        限制，偏移，顺序和分组操作数据集
        		.findOne({
        			where:...,
        			limit: n,
        			offset: n,
        			order: [ [field, type], [field, type]... ],
        			group: [field, field,...]
        		})

        统计等操作
        		.count({
        			where: {}
        		})
        		.max(field, {where:{}})
        		.min(field, {where:{}})
        		.sum(field, {where: {}})

        关联查询与预加载
        		HasOne ：model1.hasOne(model2)
        		HasMany ：model1.hasMany(model2)
        		BelongsTo ：model1.belongsTo(model2)
        		BelongsToMany ：model1.belongsToMany(model2)

        		model1.findOne({include[model2]})

        关联查询与预加载
        		1. 首先给关联的字段定义外键关系
        			references: {
        				model: 关联的外键表，如User
        				key: 关联的外键表的字段，如id
        			}
        		2. 在调用hasOne或hasMany等方法的时候，通过第二个参数设置对象：{foreignKey: 当前关联表的字段,如uid}
        		3. 在查询中使用 include 去设置关联的外键表模型，如：include: [MessageModel]
