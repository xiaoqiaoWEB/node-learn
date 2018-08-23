/**
 * usage : node 4case app -i
 *  4case : 我们的脚本文件
 *  app : 要生成的项目的名称
 *  -i : 参数，表示要同时产生index.html文件
 */


const fs = require('fs');

let filname = process.argv[2];

let rootfile = __dirname + '/' + filname;

if(fs.existsSync(rootfile)){
    console.log('项目已经存在了，请勿重复创建！');
   process.exit();
}

fs.mkdirSync(rootfile);
fs.mkdirSync(rootfile + '/img');
fs.mkdirSync(rootfile + '/css');
fs.mkdirSync(rootfile + '/js');

// 判断是否存在 -i 的选项
if ( process.argv.includes('-i') ) {
    fs.writeFileSync(rootfile + '/index.html', `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>App</title>
</head>
<body>
    <h1>App</h1>
</body>
</html>
    `);
}


console.log('scuss')
