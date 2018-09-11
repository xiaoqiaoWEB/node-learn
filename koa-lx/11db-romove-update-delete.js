const Koa = require('koa');
const router = require('koa-router')();
const render = require('koa-art-template');
const path = require('path');
const bodyParser=require('koa-bodyparser');
const DB = require('./module/db.js');


const app = new Koa();
//配置post 中间件
app.use(bodyParser());
//配置模板 中间件
render(app, {
    root: path.join(__dirname, 'views03'),   // 视图的位置
    extname: '.html',  // 后缀名
    debug: process.env.NODE_ENV !== 'production'  //是否开启调试模式

});

//显示列表
router.get('/',async (ctx)=>{

    //得到列表数据
    let result = await DB.find('admin',{});
    //console.log(result)
    await ctx.render('index.html',{result})
})

//添加用户
router.get('/add',async (ctx)=>{

    await ctx.render('add.html')
})

//执行添加用户
router.post('/doAdd',async (ctx)=>{
    //获得post 传值
    let postData = ctx.request.body;
    //提交数据到数据库
    let data = await DB.insert('admin',postData)

    try{
        if(data.result.ok){
            ctx.redirect('/');
        }
    }catch (err) {
        console.log(err);
        return;
        ctx.redirect('/add');
    }

})

//修改数据
router.get('/edit',async (ctx)=>{
    //得到get 传值
    let id = ctx.query.id;
    //查找数据
    let data = await DB.find('admin',{"_id":DB.getObjectId(id)});

    console.log(data[0])

    try{
        if(data){
            ctx.render('edit.html',{list:data[0]});
        }
    }catch (err) {
        console.log(err);
        return;
        ctx.redirect('/');
    }
})
//执行修改
router.post('/doEdit',async (ctx)=>{

    let id = ctx.request.body.id;
    let name = ctx.request.body.name;
    let vip = ctx.request.body.vip;

    //修改数据

    let data = await DB.update('admin',{"_id":DB.getObjectId(id)},{
        name,vip
    })

    try{
        if(data.result.ok){
            ctx.redirect('/');
        }
    }catch (err) {
        console.log(err);
        return;
        ctx.redirect('/add');
    }
})

//删除数据
router.get('/delete',async (ctx)=>{
    let id = ctx.query.id;

    console.log(id)

    let data = await DB.remove('admin',{"_id":DB.getObjectId(id)})

    try{
        if(data.result.ok){
            ctx.redirect('/');
        }
    }catch (err) {
        console.log(err);
        return;
        ctx.redirect('/');
    }

})


app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(8005);
