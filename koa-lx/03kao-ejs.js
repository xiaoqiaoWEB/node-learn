/*
ejs模板引擎的使用：

1.npm install koa-views  --save

2.npm install ejs  --save


3.var views = require('koa-views');

app.use(views(__dirname, { extension: 'ejs' }))   //模板的后缀名是ejs


4 await ctx.render('index');



注意：我们需要在每一个路由的render里面都要渲染一个公共的数据

公共的数据放在这个里面，这样的话在模板的任何地方都可以使用


ctx.state = {   //放在中间件
    session: this.session,
    title: 'app'
};

* */

const Koa = require('koa');
const router = require('koa-router')();
const ejs = require('ejs');
const views = require('koa-views');

const app = new Koa();

//配置模板引擎中间件  --第三方中间件
//app.use(views('views', { map: {html: 'ejs' }}));   //这样配置也可以  注意如果这样配置的话 模板的后缀名是.html
app.use(views("views"),{
    extension:'ejs' /*应用ejs模板引擎*/
})


//写一个中间件配置公共的信息
app.use(async (ctx,next)=>{
    ctx.state.pubList=[
        'public one',
        'public two',
        'public three'
    ]
    await next();
})

//home
router.get('/',async (ctx)=>{

    await ctx.render('index.ejs',{
        title:"one one one one",
        list:[
            '一、Koa2中常见模板引擎的性能对比',
            '二、在Koa中使用art-template模板引擎',
            '三、art-template模板引擎语法'
        ]
    })
})

//news
router.get('/news',async (ctx)=>{
    await ctx.render('news.ejs',{
        list:[
            '一、Koa2中常见模板引擎的性能对比',
            '二、在Koa中使用art-template模板引擎',
            '三、art-template模板引擎语法'
        ]
    })
})

app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(8000);



