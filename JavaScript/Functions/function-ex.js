//sum of numbers from 1 to 20

const sum = (x) => x * (x + 1) / 2;

const total = function(min, max){
  let total = 0;
  for(let i = min; i <= max; i++)
  {
    total += i;
  }
  return total;
}

console.log(total(1, 20));
console.log(total(20, 100));
console.log(sum(20));