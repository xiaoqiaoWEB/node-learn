const {app, BrowserWindow, Menu, MenuItem} = require('electron');

//当应用程序完成基础的启动的时候被触发
app.on('ready',()=>{
    //创建窗口
    let w1 = new BrowserWindow({
        width:900,
        height:600,
        title:'菜单练习'
    })

    //创建菜单对象
    let m1 = new Menu();
    //创建菜单项
    let m11 = new MenuItem({
        type:"normal",
        label:"文件"
    });
    //把菜单项添加到 菜单对象
    m1.append(m11);

    let m22 = new MenuItem({
        type:"submenu",
        label:"查看",
        submenu:[
            {
                type:"normal",
                label:"文件"
            },
            {
                type:"separator"
            },
            {
                type:"normal",
                label:"图片"
            },
            {
                type:"checkbox",
                label:"选项A",
                checked:true
            },
            {
                type:"separator"
            },
            {
                type:"checkbox",
                label:"选项B"
            },
            {
                type:"separator"
            },
            {
                type:"checkbox",
                label:"选项B"
            },
            {
                type:"separator"
            },
            {
                type:"radio",
                label:'男',
                checked: true
            },
            {
                type:"radio",
                label:'女'
            },
            {
                role:"quit",
                label:"退出！"
            },
            {
                type:"normal",
                label:"退出应用"
            }
        ]
    });

    m1.append(m22);





    // 指定该菜单显示的主体（具体哪个窗口、右键-上下文）
    /**
     * 菜单位置：
     *  1. 应用程序的顶层菜单
     *  2. 上下文菜单
     */
    // 把菜单添加到应用程序窗口最顶层
    Menu.setApplicationMenu(m1);

    w1.loadFile('./view/index.html');
})

//当所有的窗口都被关闭时触发。
app.on('window-all-closed',()=>{
    //在应用程序退出时发出
    app.quit();
})
