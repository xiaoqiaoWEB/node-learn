const program = require('commander')

//添加版本号
program.version('v1.0.0','-v,--version')


// 设置其他option，--name 后面的 [val] 是当前这个选项的参数值
// []表示可选，<>表示必填
// 如果第三个参数是一个函数的话，那么该函数会接受来自用户输入的值
// 并返回一个值作为 最后 这个选项实际的值
program.option('-n --name [xiaoqiao]','设置名称','')

program.option('-a --age <val>','设置年龄',function(val){
    console.log(val)
})

program.command('click')

program.action(()=>{
        console.log('Hello')
})

// 解析来自process.argv上的数据，会自动帮助我们添加一个 -h 的解析
program.parse(process.argv)
