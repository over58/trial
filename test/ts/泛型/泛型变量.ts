
function getData<T>(value:T):T {
  
  return value
}


console.log(
  getData<number>(123)
);


console.log(
  getData<string>('12323534')
);