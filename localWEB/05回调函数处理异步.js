const fs = require('fs');

function getMine (callBack){

    fs.readFile('./mime.json',(err,data)=>{
        if(err){
            console.log(err);
        }

        callBack(data);
    })

}

getMine((data)=>{
    console.log(data)
})
