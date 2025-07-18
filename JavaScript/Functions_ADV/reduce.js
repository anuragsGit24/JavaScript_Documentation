//Reduce

//if i dont specify initial value then acc is first val of arr and then curr is second val
const arr = [1, 2, 3, 4, 5];
const reducerfunc = (acc, curr) => acc + curr;  
//const reducerfunc = (acc, curr) => acc * curr;  
// 0 + 1 = 1 --> acc 
// curr = 2
//1 + 2 = 3 --> acc
//curr = 3
//3 + 3 = 6 --> acc
//curr = 4
//6 + 4 = 10 --> acc
//curr = 5
//10 + 5 = 15 --> acc
const output = arr.reduce(reducerfunc, 1);
console.log(output);