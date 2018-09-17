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

    //添加/
    // let kim = userModel.build({
    //         username :'kim02',
    //         age:'18',
    //         gender:'男'
    //     });
    // // 通过new或者build出来的对象不会立即同步到数据库中，需要使用后续的一些方法来同步
    // await kim.save();
    //
    // console.log(kim.dataValues)

    //console.log(kim)  // === INSERT INTO `user` (`id`,`username`,`age`,`gender`) VALUES (DEFAULT,'kim','30','男');

    //修改

    //let xiugai = await userModel.findById(1);
    // xiugai.set('username','xiaoqiao');
    // xiugai.save();

    // update = set + save
   // await xiugai.update({'gender':'女'})  //==UPDATE `user` SET `gender`='女' WHERE `id` = 1

    /**
     * fineOne
     */

    // let rs = await userModel.findOne({
    //     where: {
    //         username: '小乔'
    //     }
    // });
    // console.log(rs);

    /**
     * findAll
     */

   // let rs = await userModel.findAll();
   // console.log(rs.map(r => r.get('username')));

    // let rs = await userModel.findAll({
    //         where: {
    //             //username:'小乔'   //username='小乔'
    //            // username: {         //和上面一致
    //            //     [Sequelize.Op.eq]:'小乔'
    //            // }
    //            //  age: {
    //            //      [Sequelize.Op.gte]:20   //》=20
    //            //  }
    //
    //             // age: {
    //             //     [Sequelize.Op.gt]:20  //>20
    //             // }
    //
    //             // 多条件
    //
    //             [Sequelize.Op.or]: {
    //                 age: {
    //                     [Sequelize.Op.gt]:20
    //                 },
    //                 gender: {
    //                     [Sequelize.Op.eq]:'女'
    //                 }
    //             }
    //         }
    //     });
    //console.log(rs)

    /**
     * limit
     */
    // let rs = await userModel.findAll({
    //     limit:2
    // })
    // console.log(rs.map(r => r.get('username')))

    /**
     * offset
     */
    // let rs = await userModel.findAll({
    //     limit:2,
    //     offset:2
    // })
    // console.log(rs.map(r => r.get('id')))

    /**
     * order
     */
    // let rs = await userModel.findAll({
    //     order:[
    //         ['id','desc']
    //     ]
    // })
    // console.log(rs.map(r => r.get('id')))

    /**
     * count
     */
    // let rs = await userModel.count({
    //     where: {
    //         gender:'男',
    //         age:{
    //             [Sequelize.Op.gt]:20
    //         }
    //     }
    // });
    // console.log(rs)

    /**
     * findAndCountAll
     */
    // let rs = await userModel.findAndCountAll({
    //         limit:3
    // });
    // console.log(rs);


    /**
     * sum
     */
    // let rs = await userModel.sum('age',{
    //         where:{
    //             gender:'男'
    //         }
    //     });
    // console.log(rs);

    //定义 msg 表
    const msgModel = sequelize.define('Message',{
            id:{
                // 每一个字段的信息
                type:Sequelize.INTEGER(10),
                allowNull:false,
                primaryKey:true,
                autoIncrement:false
            },
            uid:{ // 其他的表的字段，把当前字段定义为外键---- uid ->userModel->id
                type:Sequelize.INTEGER(10),
                allowNull:false,
                primaryKey:true,
                autoIncrement:false,
                defaultValue: 0,
                references: {
                    model: userModel,
                    key: 'id'
                }
            },
            msg:{
                type:Sequelize.STRING(255),
                allowNull:false,
                defaultValue: ''
            }
        },{
            timestamps: false,
            paranoid: false,
            freezeTableName: true,
            tableName: 'msg',
        })

    /**
     * 关联查询
     */
    // 获取某条留言的所有数据：留言本身的数据+该留言的用户数据
    let data = {};

    // let msg = await msgModel.findById(1);
    // let user = await userModel.findById(msg.get('uid'));
    // Object.assign(data,{
    //     id:msg.get('id'),
    //     uid:msg.get('uid'),
    //     username:user.get('username'),
    //     age:user.get('age'),
    //     gender:user.get('gender'),
    //     msg:msg.get('msg')
    //
    // })
    // console.log(data)

    msgModel.belongsTo(userModel, { //唯一关联
        foreignKey: 'uid'
    });

    // let data2 = await msgModel.findById(1, {
    //     include: [userModel]
    // });
    //
    // console.log(data2)

    userModel.hasMany(msgModel, { //一对多
        foreignKey: 'uid'
    });

    let data3 = await userModel.findById('2',{
        include:[msgModel]
    })
    console.log(data3)

})()
