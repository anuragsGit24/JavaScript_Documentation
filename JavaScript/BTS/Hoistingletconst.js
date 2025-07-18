/** Hoisting - let and const */

console.log(x);  //this gives error. it gives error which means it is not hoisted but that is not the case. here the error is that it is not initialized not ki x is not defined
//this means it is hoisted but it is in temporal dead zone.
//(TDZ) temporal dead zone starts when it is hoisted and till the time it is actually assigned/initialized with a value. it is actually hoisted but in another memory space. but it is temporarily hoisted.

//console.log(a)
// like it gives in this it gives not defined which means no hoisting
const x = 9;
let y = 10;
console.log(y);
console.log(x);


