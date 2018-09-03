/*
    1.cookie保存在浏览器客户端

    2.可以让我们用同一个浏览器访问同一个域 名的时候共享数据


/*
    1、保存用户信息
    2、浏览器历史记录
    3、猜你喜欢的功能
    4、10天免登陆
    5、多个页面之间的数据传递
    6、cookie实现购物车功能

 ctx.cookies.set('userinfo','zhangsan',{
    maxAge:60*1000*60   //cookie 过期时间
    // path:'/news',    /*配置可以访问的页面*/
    //domain:'.baidu.com'  /*正常情况不要设置 默认就是当前域下面的所有页面都可以方法*/
    //httpOnly:false,  //true表示这个cookie只有服务器端可以访问，false表示客户端（js），服务器端都可以访问
/*
    a.baidu.com
    b.baidu.com  共享cookie的数据


    //中文 cookie 设置 利用 内置 Buffer 进行转换
    console.log(new Buffer('张三').toString('base64'));// 转换成 base64 字符
    //5byg5LiJ
    console.log(new Buffer('5byg5LiJ', 'base64').toString());// 还原 base

* */

const Koa = require('koa');
const router = require('koa-router')();
const render = require('koa-art-template');
const path = require('path');

const app = new Koa();

//配置模板 中间件
render(app, {
    root: path.join(__dirname, 'views02'),   // 视图的位置
    extname: '.html',  // 后缀名
    debug: process.env.NODE_ENV !== 'production'  //是否开启调试模式

});


router.get('/',(ctx)=>{

    ctx.cookies.set("username","xiaoqiao",{
        maxAge:10000  //过期时间
    })

    let userinfo=new Buffer('张三').toString('base64');

    ctx.cookies.set('userinfo',userinfo,{
        maxAge:10000
    })

    ctx.body='home'
})


router.get('/news',(ctx)=>{

   let name = ctx.cookies.get('username');

   //中文cookie
    var data=ctx.cookies.get('userinfo');

    var userinfo= new Buffer(data, 'base64').toString();

   ctx.body = data

    console.log(userinfo)
    console.log(name)

})



app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(8000);

