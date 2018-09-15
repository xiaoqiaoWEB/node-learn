(async function(){
    /**
     * ORM
     *  对象关系映射
     *  把js中的对象与数据库进行关联（映射），后期通过操作对来来操作数据库
     *
     * sequelize依赖了mysql2，但是没有默认安装，需要手动安装mysql2
     */
    const Sequelize = require('sequelize'); //class
    const mysql = require('mysql2');

    //链接数据库
    const sequelize = new Sequelize('swx','root','',{
        // 其他的数据库连接配置
        // host: '127.0.0.1',
        // port: 3306,

        dialect: 'mysql', //使用的数据库
        timezone: 'Asia/Shanghai'    //当我们向数据库中写入时间的时候，默认会根据系统当前所在时区进行设置
    });

    // 测试：如果Promise有可能抛出的错误，那么一定要捕获错误
    try {
        sequelize.authenticate();
        console.log('链接数据成功！');
    } catch (e) {
        console.log('链接失败！')
    }

    /**
     * 数据库连接完成以后，需要确定操作的表
     * 使用orm，不需要通过sql来操作表，而是通过对象来操作
     * 给每一个要操作的表定义一个对象 - 模型 Model
     */

    const userModel = sequelize.define('User',{
        // 描述表中对应的字段信息
        // 对象的key默认对应着表的column，字段
        id:{
            // 每一个字段的信息
            type:Sequelize.INTEGER(10),
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        username:{
            type:Sequelize.STRING(255),
            allowNull:false,
            defaultValue: ''
        },
        age:{
            type:Sequelize.TINYINT(10),
            allowNull:false,
            defaultValue: 0
        },
        gender:{
            type:Sequelize.ENUM(['男','女','保密']),
            allowNull:false,
            defaultValue: '保密'
        }
    },{
        // 用来设置字段以外的其他信息
        timestamps: false,
        paranoid: false,
        freezeTableName: true,
        tableName: 'user',
        indexes: [ //索引
            {
                name: 'uname',
                fields: ['username']
            },
            {
                name: 'age',
                fields: ['age']
            }
        ]
    })

    /**
     * 模型类 -> 表
     * 模型创建出来的对象 -> 表中某条记录
     */

    //let kim = new userModel()  //创建了一个User的记录

    //添加
    /*
    let kim = userModel.build({
            username :'kim',
            age:'30',
            gender:'男'
        });
    // 通过new或者build出来的对象不会立即同步到数据库中，需要使用后续的一些方法来同步
    await kim.save();
    */
    //console.log(kim)  // === INSERT INTO `user` (`id`,`username`,`age`,`gender`) VALUES (DEFAULT,'kim','30','男');

    //修改

    let xiugai = await userModel.findById(1);
    // xiugai.set('username','xiaoqiao');
    // xiugai.save();

    // update = set + save
   // await xiugai.update({'gender':'女'})  //==UPDATE `user` SET `gender`='女' WHERE `id` = 1



})()
