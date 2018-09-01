const fs = require('fs');

fs.appendFile('login.txt','xiaoqiao',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('A')
})
