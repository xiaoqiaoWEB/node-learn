const Koa = require('koa');
const router = require('koa-router')();
const ejs = require('ejs');
const views = require('koa-views');

const common = require('./module/common');

const app = new Koa();

//配置模板引擎中间件  --第三方中间件
//app.use(views('views', { map: {html: 'ejs' }}));   //这样配置也可以  注意如果这样配置的话 模板的后缀名是.html
app.use(views("views"),{
    extension:'ejs' /*应用ejs模板引擎*/
})


//home
router.get('/',async (ctx)=>{

    await ctx.render('form.ejs')
})

router.post('/addpost',async (ctx)=>{

    let data = await common.getPostdata(ctx);
    console.log(data);

    ctx.body = data

})


app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(8000);

