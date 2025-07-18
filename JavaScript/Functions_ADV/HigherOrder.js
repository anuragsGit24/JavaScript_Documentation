/**
 * Higher Order Function : 
 * A function that accepts another function as an argument or returns a function or does both us called H.O.F
 */

//HOF-01
function wrapper(){
  return "Welcome to JS!";
}

function greetmsg(wrapper){
  console.log("Anurag", wrapper());
}
greetmsg(wrapper);


//HOF-02
function displaymsg(){
  return function(){
    console.log("Hello from the inner function");
  }
}
//displaymsg()(); OR
var output = displaymsg();
output();


//pure function 
// const arr = [1, 2, 3, 4, 5];
// function squareofnums(arr){
//   let sqnum = [];
//   for(let num of arr)
//   {
//     sqnum.push(num**2);
//   }
//   return sqnum;
// }

// function cubeofnums(arr){
//   let cubnum = [];
//   for(let num of arr)
//   {
//     cubnum.push(num**3);
//   }
//   return cubnum;
// }

// const res = squareofnums(arr);
// console.log(res);

// const res1 = cubeofnums(arr);
// console.log(res1);


//HOF - 03
const arr = [1, 2, 3, 4, 5];
function squareofnums(num){
  return num ** 2;
}

function cubeofnums(num){
  return num ** 3;
}

function fourpow(num){
  return num ** 4;
}

function calculatepow(wrapper, arr){
  let temp = [];
  for(let num of arr){
    temp.push(wrapper(num));
  }
  return temp;
}

const square = calculatepow(squareofnums, arr);
const cube = calculatepow(cubeofnums, arr);
const fourth = calculatepow(fourpow, arr);

console.log(square);
console.log(cube);
console.log(fourth);