// console.log(1);
//
// setTimeout(()=>{
//     console.log(3)
// },200)
//
// setTimeout(()=>{
//     console.log(4)
// },1000)
//
// setTimeout(()=>{
//     console.log(5)
// },300)
//
// console.log(2);



console.log('script start');

new Promise((resolve)=>{
    console.log('promise start')
    setTimeout(()=>{
        resolve();
        console.log('promise setTimeout')
    },0)
})

.then(()=>{
    console.log('promise1')
}).then(()=>{
        console.log('promise2')
    })

setTimeout(()=>{
    console.log('setTimeout')
},200)

console.log('script end');

//script start
//promise start
//script end
//setTimeout
//promise1
//promise2
