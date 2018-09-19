# sequlize-cli 数据迁移
    就像git一样，我们可以使用Sequelize迁移来帮助我们跟踪数据库的更改，并在各个不同时期的数据库状态之间进行切换

    使用Sequelize迁移，需要安装 sequelize-cli 工具
    	安装
    		npm i sequelize-cli
    		npm i sequelize	注意：cli依赖sequelize
    初始化
    	sequelize init
    	初始化sequelize项目，该命令将创建如下目录：

    		- config：包含配置文件，它告诉CLI如何连接数据库
    		- models：包含您的项目的所有模型
    		- migrations：包含所有迁移文件
    		- seeders：包含所有种子文件

            初始化
            config/config.json
            {
              "development": {
                "username": "root",
                "password": null,
                "database": "database",
                "host": "127.0.0.1",
                "dialect": "mysql"
               },
              "test": {},
              "production": {}
            }

    init子命令
    		:config：初始化配置
    		:migrations：初始化迁移文件
    		:models：初始化模型文件
    		:seeders：初始化种子文件

    创建数据库
    		db:create
    			根据配置创建数据库
    删除数据库
    		db:drop
    			根据配置删除数据库
    创建模型
    		model:generate / model:create
    			创建一个模型文件
    			-- name：模型名称，必须
    			-- attributes：字段列表，必须
    	示例
    		model:create --name User --attributes id:INTEGER

       		运行 model:generate / model:create 命令以后，会：
       			- 在 models 文件夹中创建了一个 user 模型文件（供程序使用）
       			- 在 migrations 文件夹中创建了一个名字像 XXXXXXXXXXXXXX-create-user.js 的迁移文件（供迁移使用）

    执行迁移
    		所谓迁移，就是对数据库进行结构的创建，升级（修改）等操作
    		db:migrate
    			- 会在数据库中创建一个 SequelizeMeta 表，用于记录每次的迁移记录
    			- 执行 migrations 文件下的满足条件（SequelizeMeta表）的脚本

            执行迁移
            		迁移脚本
            			module.exports = {
            				up(queryInterface, Sequelize) => {//迁移脚本}
            			}

            		传递的 queryInterface 对象可以用来修改数据库。
            		Sequelize 对象存储可用的数据类型，如 STRING 或 INTEGER。 函数 up 或 down 应该返回一个 Promise

            撤销迁移
            		db:migrate:undo
            			- 撤销上一次的迁移操作
            		db:migrate:undo:all
            			- 撤销所有的迁移操作
            		db:migrate:undo --name 具体迁移脚本

                    执行迁移
                    		撤销脚本
                    			module.exports = {
                    				down(queryInterface, Sequelize) => {//迁移脚本}
                    			}
                    			queryInterface

    种子文件
    		迁移文件是用来构建数据库以及表结构的，种子文件是用来构建数据的
    		seed:generate --name demo-user

    		种子文件脚本与迁移脚本类似，由up于down函数组成，传入的参数也是一致的

            种子文件
            		db:seed 指定种子文件
            			运行指定种子文件
            		db:seed:all
            			运行所有种子文件
            存储记录
            		"seederStorage": "json",
            		"seederStoragePath": "sequelizeData.json",
            		"seederStorageTableName": "sequelize_data"

    存储记录
    		默认情况下seed不记录过程，如果需要记录则需要单独设置，在配置文件中增加
    		seederStorage
    			存储引擎：none、json、mongodb、sequelize
    		seederStoragePath
    			存储路径（json有效）
    		seederStorageTableName
    			存储表名，mongodb和sequelize有效

    		种子文件
            		db:seed:undo --seed 指定种子文件
            			撤销指定种子文件
            		db:seed:undo:all
            			撤销所有种子文件

