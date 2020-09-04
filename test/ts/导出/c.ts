import {newStringValidator } from './b'

class A  implements newStringValidator{
     isAcceptable(s: string): boolean {

        return false
    }
}

var a = new A()
console.log(a.isAcceptable('aaa'))

// export * from "module"

