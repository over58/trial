interface DBI<T>{
  add(info:T): boolean;
  update(info:T,id:number):boolean;
  delete(id:number):boolean;
  get(id:number):T[]
}

class MySQL<T> implements DBI<T> {
  public list:T[] = []  
  constructor() {
    this.list = [] 
  }
  add(info: T): boolean {
    this.list.push(info)
    return true
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: any): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): T[] {
    return this.list
  }
}

class User {
  username:string|undefined
  password:string|undefined
  constructor(params: {
    username:string|undefined,
    password?:string|undefined
  }) {
    const {username, password} = params
    this.username = username
    this.password = password
  }
}


var u = new User({username: 'Tom'})

var my = new MySQL<User>()

my.add(u)

console.log(

  my.get(123)
)