
//回调函数 拿到异步中的 数据
function getData(callBack) {
    setTimeout(()=>{
        var name = 'xiaoqaio';
        callBack(name)
    })
}

getData((data)=>{
    console.log(data)
})
