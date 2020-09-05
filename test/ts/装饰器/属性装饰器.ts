/**
 * 属性装饰器
 *   属性装饰器表达式会在运行时当做函数被调用，传入下列2个参数
 * 
 *   1.对于静态成员来说是类的构造函数，对于实例成员是累的原型对象
 *   2.成员的名字
 * 
 */


 function log(value:any) {


   return function (target:any, key:string) {
     console.log(target, key, value);
     console.log(target[key]);
     
     target[key] = value
   }
   
 }



class HttpClient {


  @log('http://www.baidu.com')
  public url:any = '我是构造函数里面的url'

  constructor() {
    // console.log(this.url) 
  }

  getData () {
    console.log(this.url)
  }
}

var h:any = new HttpClient()

h.getData()
console.log(h);

