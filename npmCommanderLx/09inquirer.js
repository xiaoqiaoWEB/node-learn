const inquirer = require('inquirer');
// 提问用户，与用户进行命令行的交互
// prompt数组中存放一个指定格式的对象，我们称为question对象
inquirer.prompt([
    {
        type:'input',
        name:'name',
        message:'请输入应用名称',

        //对用户输入的信息进行验证
        validate(val){
            if(val.trim() == ''){
                return '应用名称不能为空'
            }
            return true;
        },
        //对用户输入的信息进行处理
        filter(val){
            if(val == 'app'){
                return '又是app就不能换一个';
            }
            return true
        }
    },
    {
        type:'confirm',
        name:'node',
        message:'是否启动node',
        default:true
    },
    {
        type:'list',
        name:'lan',
        message:'请选择你的语言',
        choices:['css','html','js','php'],
        default:2
    },
    {
        type :'checkbox',
        name :'tools',
        message:'请选择你的开发工具',
        choices: [
            {
                name :'使用webpack',
                value:'webpack',
                checked:true
            },{
                name:'使用bable',
                value:'bable',
            }
        ]
    }
]).then(answers => {
    console.log(answers)
})

