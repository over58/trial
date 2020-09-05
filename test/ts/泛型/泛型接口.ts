interface Configfn<T>{
  (value:T):T
}

var getData:Configfn<number> = function (num:number) {
  return num*num
}

console.log(
  getData(10)
)