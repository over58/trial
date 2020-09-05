// 装饰器工厂（可以传参）, 很搞笑
function log(params:string) {
  return function (target:any) {
    console.log(target);
    console.log(params);
  
    target.prototype.run = function () {
      console.log('running');
      
    }
  }

}

@log('hello')
class HttpClient {
  constructor() {
    
  }
}


var a:any = new HttpClient()
a.run()