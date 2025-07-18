/**
 * MAP - Filter
 */

//Method - 01
const arr = [1, 2, 3, 4, 5];

function squareofnums(num){
  return num ** 2;
}
const output = arr.map(squareofnums);
console.log(output);


//Method - 02
//const sqnums = arr.map((number) =>  number ** 2); //OR
const sqnums = arr.map((number, index) => {
  console.log(index);
  return number ** 2}); //--- since single line function so no need of return 

console.log(sqnums);
// console.log(sqnums1);







// function squareofnums(arr){
//   let temp = [];
//   for(let num of arr){
//     temp.push(num ** 2);
//   }
//   return temp;
// }

// console.log(squareofnums(arr));