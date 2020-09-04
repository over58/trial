interface Arr{
    [index:number]:string
}

// wrong
// var arr:Arr = ['aaa', 12]
var arr:Arr = ['aaa', 'bbb']

console.log(arr[0]);
console.log(arr[1]);

