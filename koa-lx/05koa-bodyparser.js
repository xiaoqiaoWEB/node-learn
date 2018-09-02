const Koa = require('koa');
const router = require('koa-router')();
const views = require('koa-views');
const bodyParser = require('koa-bodyparser');
const ejs = require('ejs');

/*
 Koa 中 koa-bodyparser 中间件获取表单提交的数据

    1.npm install --save koa-bodyparser

    2.引入var bodyParser = require('koa-bodyparser');

    3.app.use(bodyParser());

    4.ctx.request.body;  获取表单提交的数据
* */

let app = new Koa();

//配置模板引擎
app.use(views("views"),{
    extension:'ejs' /*应用ejs模板引擎*/
})

//配置post bodyparser的中间件
app.use(bodyParser());


router.get('/',async (ctx)=>{
    await ctx.render('form.ejs')
})

router.post('/addpost',async (ctx)=>{

    //得到 post 传值
    let data = ctx.request.body;
    console.log(data)

    ctx.body = data
})


app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(8000);
