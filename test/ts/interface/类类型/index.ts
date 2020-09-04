interface Animal {
    eat (food:string):void
}

class  Dog implements Animal{
    eat (food:string) {
        console.log('吃食物', food)
    }
}

var dog = new Dog()
dog.eat('肉')

