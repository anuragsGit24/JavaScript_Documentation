//Filter

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const output = arr.filter(number => number <= 5);
const output1 = arr.filter(number => number % 2 == 0);

//OR
//const output1 = arr.filter(number => {
//  return number > 5;
// })

console.log(output);
console.log(output1);

// function filernums(arr){
//   let temp = [];
//   for(let num of arr){
//     if(num > 5)
//     {
//       temp.push(num);
//     }
//   }
//   return temp;
// }
// console.log(filernums(arr));