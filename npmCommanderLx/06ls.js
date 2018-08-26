const program = require('commander');
const fs = require('fs');

program.version('1.0.0','-v --version');

program.option('-p --path [path]','要查看的目录', __dirname);
program.option('-l --list','以列表的形式显示')

program.action(()=>{

    let f = fs.readdirSync(program.path);

    if (program.list){
        let ll = f.map( item=>`${item}\r\n`).join('');
        console.log(ll);
    }else{
        console.log(f);
    }


})

program.parse(process.argv);
