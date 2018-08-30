const {app,BrowserWindow,ipcMain} = require('electron');

app.on('ready',()=>{

    const w1 = new BrowserWindow();
    const w2 = new BrowserWindow();

    let datas = {
        name:'xiaoqiao',
        age:'18'
    }


    w1.webContents.openDevTools();
    w1.loadFile('./view/msg01.html')

    w2.webContents.openDevTools();
    w2.loadFile('./view/msg02.html')


    //监听渲染进程 发送得 请求
    ipcMain.on('getData',(e,key)=>{
        console.log(key)
        //恢复渲染进程的 请求
        e.sender.send('sendData',datas[key])
    });

    //主进程 主动发送数据到渲染进程
    setTimeout(()=>{
        w1.webContents.send('msg', 10,20,30,'swc');
        console.log(1)
    },1000)

})

app.on('window-all-closed',()=>{
    app.quit();
})
