const program = require('commander');
const fs = require('fs');

program.option('-p --path [path]','要查看的目录',__dirname);

program.action(()=>{

    let f = fs.readdirSync(program.path);

    console.log(f)

})


program.parse(process.argv);
