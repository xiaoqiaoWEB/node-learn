class Person1 {

   public username : string = 'xiaoqiao';
   private _age : number = 10;

    getAge():number{
        return this._age;
    }

    setAge(age:number):void{
        if(age>0 && age<150){
            this._age = age;
        }
    }


}

let p01 : Person1 = new Person1();
p01.setAge(30);
console.log(p01.getAge())