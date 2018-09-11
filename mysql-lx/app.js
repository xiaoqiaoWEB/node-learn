(async function(){
    const Koa = require('koa');
    const router = require('koa-router')();
    const Bodyparser = require('koa-bodyparser');
    const fs = require('fs');
    const mysql = require('mysql2/promise');
    const Static = require('koa-static-cache');

    const app = new Koa();

    //配置 static
    app.use( Static('./static', {
        prefix: '/static',
        gzip: true
    }) );

    //链接数据库
    const connection = await mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'swx'
    });

    //接收 post 传值
    app.use( Bodyparser() );

    router.get('/', ctx => {
        const content = fs.readFileSync('./static/index.html');
        ctx.body = content.toString();
    });

    router.get('/todos',async (ctx)=>{

        let [data] = await connection.query("SELECT id,title,done FROM todos ORDER BY id DESC");

        ctx.body = {
            code: 0,
            data
        }
    })




    router.post('/add', async ctx => {
        const  title = ctx.request.body.title || '';

        if (title == '') {
            ctx.body = {
                code: 1,
                data: 'title不能为空'
            }
            return;
        }

        // console.log("INSERT INTO todos (title, done) VALUES ('"+ title +"', 0)")

        const [rs] = await connection.query("INSERT INTO todos (title, done) VALUES ('"+ title +"', 0)");

        if (rs.affectedRows > 0) {
            ctx.body = {
                code: 0,
                data: '添加成功'
            }
        } else {
            ctx.body = {
                code: 2,
                data: '添加失败'
            }
        }
    });



    app.use( router.routes() );

    app.listen(8050);
})()



