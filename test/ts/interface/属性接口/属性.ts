  interface Person {
      firstName: string;
      lastName: string;
  }

  function printInfo (p:Person):void {
    console.log(p.firstName+'--'+p.lastName)
  }

printInfo({ firstName: 'xu', lastName: 'yongchao' })
// 这个方式不行
// printInfo({ firstName: 'xu', lastName: 'yongchao', age: 20 })

var info = { firstName: 'xu', lastName: 'yongchao', age: 20 }
printInfo(info) 