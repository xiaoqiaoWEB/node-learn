const fs = require('fs');

//删除文件
//fs.unlinkSync('./1.txt');


//文件夹
// 创建，不会进行递归创建

//fs.mkdirSync('./b')
//fs.mkdirSync('./b/a')

//删除文件夹
//fs.rmdirSync('./b');


// 递归删除文件夹


rmdir('./发个');
// 递归删除文件夹
function rmdir(dirPath) {
    let files = fs.readdirSync(dirPath);

   files.forEach((item)=>{
        let itemPath = dirPath + '/' + item;
        // 当前item可能是文件也有可能是文件夹
        if(fs.statSync(itemPath).isDirectory() ){
            //当时item为文件夹再次调用redir
            rmdir(itemPath);
        }else{
            //不是文件夹时直接删除文件
            fs.unlinkSync(itemPath);
        }
   })
    //删除文件夹
    fs.rmdirSync(dirPath);
    console.log('删除成功');
}
