/**
 * Global and Local Variables
 * Global, Local and Block Scope
 */

// var x = 3;

// function shownumber(){
//   var y = 5;
//   console.log({x});
//   console.log({y});
// }

// function f1(){
//   console.log({x});
// }

// shownumber();
// //console.log(y); // this cant access y var inside the function
// f1();


//Block scope
let c = 6;  //this is in script as it is not in global scope 
if(true){  //if this is a function we cant access it outside the function
  var a = 2;
  var b = 5;
  // console.log(a);
  // console.log(b);
}
console.log(a);   //this will work with only var but not with let and const declaration.
console.log(b);
console.log(c);


//variables when declared with var has a global scope except when it is inside a function
//variable when declared with let and const have block or local scope

function x(){
  var m = 3;   // m and n are in local scope as it is declared inside a function
  var n = 5;
}

x();
// console.log(m);  //this is giving error as m, n are defined in function x 
// console.log(n);
