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
        /**
         * 查询数量限制
         * LIMIT - top 10
         * 查询偏移
         * OFFSET
         *
         * 分页:
         *  把一定的数据按照每页固定的条数去显示，我们需要首先定义每页显示多少
         *
         * 每页显示3条
         *  1 : 0 - 2
         *  2 : 3 - 5
         *  3 : 6 - 8
         * 每页显示 -> LIMIT
         * 当前的页码 -> OFFSET
         *
         * 如果页码从1开始算，那么对应的记录应该    LIMIT 3 OFFSET (页码-1 * 3)
         *
         * 总页码
         */
        let page = ctx.query.page || 1; //这个page其实应该由前端来决定是多少
        page = Number(page);
        let prepage = ctx.query.prepage || 4;
        prepage = Number(prepage);
        let type = ctx.query.type;

        let where = '';

        if (type) {
            where = 'WHERE done=' + type;
        }

        // 查询总的记录条数
        const sql = `SELECT id,title,done FROM todos ${where}`;
        const [todosAll] = await connection.query(sql);
        // 总的数据量 / 每页显示条数，注意：小数
        const pages = Math.ceil(todosAll.length / prepage);

        // const sql2 = `SELECT id,title,done FROM todos LIMIT ${prepage} OFFSET ${(page-1)*prepage}`;

        // const sql2 = `SELECT id,title,done FROM todos ${where}  LIMIT ${prepage} OFFSET ${(page-1)*prepage}`;

        // console.log(sql2)

        // where ??=?  :  ?? 表示字段或表名，? 表示值
        const sql2 = `SELECT id,title,done FROM todos ${where} LIMIT ? OFFSET ?`;

        const [data] = await connection.query(sql2, [prepage, (page-1)*prepage]);

        ctx.body = {
            code: 0,
            data: {
                page,
                prepage,
                pages,
                data
            }
        }
    })


    router.post('/add', async ctx => {

        const  title = ctx.request.body.title || '';

        if(title == ''){
            ctx.body = {
                code:1,
                data:'title title不能为空'
            }
            return
        }

        //let sql = 'INSERT INTO todos (title) VALUES ('+title+')';

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

    router.post('/toggle', async ctx=>{
        let id = ctx.request.body.id || 0;
        let done = ctx.request.body.todo || 0;

        id = Number(id);
        done = Number(done);

        let sql = `UPDATE todos SET ??=? WHERE ??=?`;
        let [rs] = await connection.query(sql, ['done', done, 'id', id]);

        console.log(rs)

        if (rs.affectedRows > 0) {
            ctx.body = {
                code: 0,
                data: '修改成功'
            }
        } else {
            ctx.body = {
                code: 2,
                data: '修改失败'
            }
        }

    })

    router.post('/remove', async ctx => {
        let id = Number(ctx.request.body.id) || 0;

        let sql = "DELETE FROM todos WHERE ??=?";

        let [rs] = await connection.query(sql, ['id', id]);

        if (rs.affectedRows > 0) {
            ctx.body = {
                code: 0,
                data: '删除成功'
            }
        } else {
            ctx.body = {
                code: 2,
                data: '删除失败'
            }
        }
    });

    app.use( router.routes() );
    app.listen(8050);
})()



