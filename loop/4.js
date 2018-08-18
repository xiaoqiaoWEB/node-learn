setTimeout(()=>{

    // 宏任务
    new Promise(resolve => {
        console.log('promise')
        resolve();
    }).then(() => {
        //微任务
        console.log('then')
    });

    // 宏任务
    console.log('A');
    // 宏任务
    setTimeout(() => {

        console.log('B')

    }, 1000);



},100)
