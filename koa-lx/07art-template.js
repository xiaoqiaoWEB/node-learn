/*
 http://aui.github.io/art-template/koa/

 1、

 npm install --save art-template
 npm install --save koa-art-template


 2、const render = require('koa-art-template');


 3、


 render(app, {
     root: path.join(__dirname, 'view'),   视图的位置
     extname: '.art', 后缀名
     debug: process.env.NODE_ENV !== 'production'  是否开启调试模式

 });
4、
 await ctx.render('user');
* */
const Koa = require('koa');
const router = require('koa-router')();
const render = require('koa-art-template');
const path = require('path');

const app = new Koa();

//配置 koa-art-template模板引擎
render(app, {
    root: path.join(__dirname, 'views01'),   // 视图的位置
    extname: '.html',  // 后缀名
    debug: process.env.NODE_ENV !== 'production'  //是否开启调试模式

});


router.get('/',async (ctx)=>{
    let list={

        name:'张三',
        h:'<h2>这是一个h2</h2>',
        num:10,
        data:['11111111','2222222222','33333333333']
    }
    await ctx.render('index.html',{list})
})


app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(8000);

