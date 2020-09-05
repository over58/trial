class List<T> {
  public list:T[] = []
  

   add (value:T) {
    this.list.push(value)
   }

   print() {
     this.list.forEach(item =>{
        console.log(item)
     })
   }
}


var a = new  List<number>()
a.add(1)
a.add(34)
a.print()

var b = new  List<string>()
b.add('hello')
b.add('world')
b.print()



