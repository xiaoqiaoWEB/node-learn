const program = require('commander');
const fs = require('fs');

program.version('1.0.0','-v,--versoin')

program.option('-n --name [val]','设置名称','')

program.command('create <app-name>')
    .description('appName')
    .alias('c')
    .usage('使用说明')
    .action((e)=>{
        //console.log(e)
        //fs.mkdirSync(e);
        console.log('Hello' + ' /n'+ e)
    })


program.parse(process.argv);
