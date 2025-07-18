//return and undefined

function calculatesum(x, y){
  let total = 0;
  total = x + y;
  return total;
  console.log('hey') // unreachable code return ends the code. code doesnt go ahead of it.
}

console.log(calculatesum(12, 15));
const result = calculatesum(24, 15);
console.log(result);

//pure functions - one who excepts the parameter and doesnt change the parameter returns the value and doesnt change the value of datatype it has accepted
