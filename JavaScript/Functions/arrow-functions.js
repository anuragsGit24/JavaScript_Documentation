//Arrow functions

const calculatesum = function(x, y){
  return x + y;
}

const addsum = (x, y) => {
  return x + y;
}

const calculation = (x, y) => {
  if(x > y)
  {
    return x + y;
  }
  else{
    return x - y;
  }
}

const sum = (x, y) => (x > y) ? x + y : x - y;

const subtractsum = (x, y) => x - y;

console.log(sum(11, 13));
console.log(subtractsum(22, 20));
console.log(subtractsum(22, 20));
console.log(calculatesum(12, 4));
console.log(addsum(12, 18));
console.log(calculation(11, 13));
console.log(calculation(31, 13));