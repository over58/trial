interface Animal {
    eat (food:string):void
}

class Person implements Animal{ 
    eat(food: string) {
        console.log('吃食物', food)
    }
    coding ():void {
        console.log('coding')
    }
}


class  Web extends Person{

    work ():void {
        console.log('working');
    }
}




var p = new Web()
p.eat('肉')
p.coding()
p.work()


