  interface Person {
      firstName: string;
      lastName: string;
      age?:number
  }

  function printInfo (p:Person):void {
    console.log(p.firstName+'--'+p.lastName)
    if(p.age) {
      console.log('age:',p.age)
    }
  }

printInfo({ firstName: 'xu', lastName: 'yongchao' })
printInfo({ firstName: 'xu', lastName: 'yongchao', age: 20 })