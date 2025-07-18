/**
 * A closure is the combination of a function bundled together with references to its lexical enviornment
 * 
 * In other words, a closure is a function that remembers its outer variables and can access them.
 */

function x(){
  let a = 5;
  function y(){
    console.log(a);  //function y is forming closure with variable a which is present in function x
    //let a;  //its in TDZ so it gives error that it is not initialized since its declared as let.
    var a = 7;  //this gives undefined as var is global
    // let b = 7;
    // function z(){
    //   console.log({b});
    // }
    // z();
  }
  y();
}
x();
// let z = x();
// console.log(z);
// z();