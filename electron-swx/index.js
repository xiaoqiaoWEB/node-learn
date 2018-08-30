const {app,BrowserWindow} = require('electron');

//当应用程序完成基础的启动的时候被触发
app.on('ready',()=>{
    //创建窗口
    let w1 = new BrowserWindow({
        width:900,
        height:600,
        title:'小乔好帅?',
        //无边窗口
        //frame:false
    })

    let w2 = new BrowserWindow({
        width:600,
        height:600,
        title:'真的好帅',
        //设置父级窗口
        parent:w1,
        //模态窗口- true
        modal:true
    })


    // 与窗口有关的浏览器中的内容都是通过下面的属性类操作的
    // w1.webContents;
    //开发者工具
    //w1.webContents.openDevTools();
    //w1.id
    //窗口的id
    //console.log(w1.id)

    // 加载指定的页面到窗口中，支持绝对路径，但是推荐使用相对
    // 路径，而且路径在解析的时候会被处理，相对路径默认指向
    // 应用程序的根目录
    w1.loadFile('./view/index.html');

    // 支持加载远程文件，支持http协议，也支持file协议
    w2.loadURL('http://cn.swxpx.net');

})

//当所有的窗口都被关闭时触发。
app.on('window-all-closed',()=>{
    //在应用程序退出时发出
    app.quit();
})
