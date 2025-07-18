//Recursion - Programming term where the function is called from itself

function calculateTotal(x){
  if(x === 0) {
      return x;
  }
  return x + calculateTotal(x - 1);
}

const readlinesync = require('readline-sync');
let num = parseInt(readlinesync.question("Enter the number for checking factorial/Sum - "));

const res = calculateTotal(num);
console.log(`The sum of ${num} numbers is ${res}`);

function factorial(x){
  if(x === 1) return x;
  return x * factorial(x - 1);
}

const res1 = factorial(num);
console.log(`The factorial of ${num} is ${res1}`);