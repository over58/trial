import { readonly } from "vue"

  interface Person {
      firstName: string;
      lastName: string;
      readonly age:number
  }

  function printInfo (p:Person):void {
    console.log(p.firstName+'--'+p.lastName)
    if(p.age) {
      console.log('age:',p.age)
      p.age = 38
    }
  }

printInfo({ firstName: 'xu', lastName: 'yongchao', age: 20 })