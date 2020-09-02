function proxy (source, target, key) {
  for (const key in target) {
    if (target.hasOwnProperty(key)) {
      Object.defineProperty(source, key, {
        get () {
          return target[key]
        },
        set (val) {
          target[key] = val
        }
      })
    }
  }
}

var data = {
  name: 'Tom',
  sex: 'man'
}

var mydata = {}

proxy(mydata, data)

console.log(mydata)
console.log(mydata.name)
console.log(mydata.sex)
mydata.name = 'Marry'
console.log(mydata.name)
console.log(data.name)
