/**
 * 类装饰器
 *   1.类装饰器表达式会在运行时昂做函数被调用，累的构造函数作为其唯一的参数
 *   2.如果类装饰器返回一个值，它会使用提供的构造函数来替换累的声明
 * 
 * 相当于创建了子类，然后返回了
 */


 function log(target:any) {
   console.log(target)


   return class  extends target {
    apiUrl:string = '我是修改后的url'

    constructor () {
      super()
      console.log('hello kitty')
    }

     getData () {
       console.log('我是修改后的getData')
     }
   }
   
 }


@log
class HttpClient {
  apiUrl:string = '我是构造函数里面的url'
  constructor() {
    console.log(this.apiUrl) 
  }

  getData () {
    console.log(this.apiUrl)
  }
}

var h:any = new HttpClient()

h.getData()