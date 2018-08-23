const EventEmitter = require('events');

//console.log(EventEmitter)

class Person extends EventEmitter{
    constructor(name){
        super();
        this.name = name;
        this.age = 0;

        this.getAge();
    }

    getAge(){
        setInterval(()=>{
            this.age ++;
            this.emit("getAge");
        },1000)
    }
}

let p1 = new Person('xiaoqiao');

p1.addListener("getAge",()=>{
    console.log('123')
})
