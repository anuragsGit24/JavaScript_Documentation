/**
 * Pure function : 
 * 1. takes an argument
 * 2. it should return something
 * 3. for same input u should get same output
 * 4. result is not influenced by outer parameters
 * 5. it should not mutate the original argument
 */

//pure function : 
function getdoublevalue(number){
  return number * 2;
}
const res = getdoublevalue(5);
console.log(res);

//impure : arr is getting updated we can do it by newarr
function appendnum(arr){
  //arr.push(5, 6);
  newarr = [];  //this ensures the original arr is not mutated. 
  newarr.push(...arr, 5, 6);
  return newarr;
}


const result = appendnum([1, 2, 3, 4]);
console.log(result);