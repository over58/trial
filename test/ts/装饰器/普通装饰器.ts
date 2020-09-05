
// 普通装饰器无法传参
function log(params:any) {
  console.log(params)

  params.prototype.apiUrl = 'xxx'
  params.prototype.run = function (){
    console.log('runing')
  }
}

@log
class HttpClient {
  constructor() {
    
  }
}


var h:any = new HttpClient()
console.log(h.apiUrl);

h.run()
