/**
 * Hoisting is a process whereby you can access the value of a variable or function even before it is initialized
 */

console.log(age);
var age = 100; //if i comment this then this error else it is not a error it is undefined.
console.log(age);

console.log(getusername); //this shows undefined when we intialized it with var. 
showName();// we were getting the desired output without using var.

//console.log(showname); //this starts giving error

var getusername = function showname(){
  console.log("Anurag Singh");
}

function showName(){
  console.log("Anurag Singh");
}