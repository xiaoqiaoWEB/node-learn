/*
1.npm install koa-session  --save

2、const session = require('koa-session');

3、app.keys = ['some secret hurr'];

 const CONFIG = {
    key: 'koa:sess',
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: false,
};

app.use(session(CONFIG, app));


设置 session
ctx.session.username = "张三"

获取 session
 ctx.session.username
* */

const Koa = require('koa');
const router = require('koa-router')();
const session = require('koa-session');

const app = new Koa();

//配置seeion
app.keys = ['some secret hurr'];   /*cookie的签名*/
const CONFIG = {
    key: 'koa:sess', /** 默认 */
    maxAge: 10000,  /*  cookie的过期时间        【需要修改】  */
    overwrite: true, /** (boolean) can overwrite or not (default true)    没有效果，默认 */
    httpOnly: true, /**  true表示只有服务器端可以获取cookie */
    signed: true, /** 默认 签名 */
    rolling: true, /** 在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false） 【需要修改】 */
    renew: false, /** (boolean) renew session when session is nearly expired   会话即将到期时更新会话   【需要修改】*/
};

app.use(session(CONFIG, app));


//配置路由
router.get('/',(ctx)=>{

    //设置session
    ctx.session.username = "食为先"

    ctx.body = 'home'
})

router.get('/news',(ctx)=>{

    //获取session
    let username = ctx.session.username
    console.log(username)

    ctx.body = 'news'
})

app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(8000);


