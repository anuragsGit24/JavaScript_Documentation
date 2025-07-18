/**
 * FirstClass function : 
 * A programming language is said to have first class functions if functions in that language are treated like other variables. so the functions can be assigned to any other variable or passed as an argument or can be returned by another function.
 */

//01 - assigning function to a variable
const myfunction = function() {
  console.log("Hello Anurag Singh");
}

myfunction(); //calling the function


//02 - passing the function as arguments
function wrapper() {
  return "Welcome to JS";
}

function greetMsg(inner, name){
  console.log(name, inner());
}

greetMsg(wrapper, "Anurag");

//03 - we can return the function 
function greetmsg(name){
  function wrapper(){
    let name = "Anurag";
    console.log(name, 'Welcome to JS!');
  }
  return wrapper;
}

// const output = greetmsg();  //storing wrapper return value to a output func.
// output();

greetmsg()();