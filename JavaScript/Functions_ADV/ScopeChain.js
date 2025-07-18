/**
 * Scope and Scope Chain
 */

let a = 3;   //this is now global
let b = 5;
let c = 7;

function x(){
  console.log({a});
  function y(){ //inner function of x
    console.log({b});
    function z(){
      console.log({c});
    }
    z();
  }
  y();
}
x();
//y();  //this will give error as it is declared inside parent function x. It checks its own function and then searches in its parent function and checks if its present and then searches in its grandparent
//z();

//lexical enviornment is the reason for the scope chain 
//check in its own lexical env lexical env contains env variables and reference to outer lexcial env.
//so it will refer to its parent if var isnt found in its own lexical enviornment