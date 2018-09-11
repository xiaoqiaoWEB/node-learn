(async function(){
    const mysql = require('mysql2/promise');

    const connection = await mysql.createConnection({ //链接数据库
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'swx' //数据库名称
    });

    //查询数据可
    let [arr] = await connection.query("select username,age,gender from user");

    arr.forEach(item => {
        console.log(item.username +":" + item.age +":" + item.gender)
    })

})()
