const Koa = require('koa');
const router = require('koa-router')();
const views = require('koa-views');
const ejs = require('ejs');
const static = require('koa-static');


let app = new Koa();

//配置模板引擎
app.use(views("views"),{
    extension:'ejs' /*应用ejs模板引擎*/
})

//配置静态web服务的中间件
//app.use(static('./static'));

app.use(static(__dirname+'/static'));

router.get('/',async (ctx)=>{
    await ctx.render('static.ejs')
})


app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(8000);
