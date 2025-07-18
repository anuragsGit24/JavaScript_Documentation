//Anonymous function & function expression

// anonymousFunction(); - cant be accessed before initialization. // you cant write it as var too and when u do it gives undefined and hence its not a function according to the js.


//let and var both works
var anonymousFunction = function(){  //also called function expression
  console.log("Hello from Anurag");
}

//Named function expression
var anonymousFunction = function greetMesssge(){  
  console.log("Hello from Anurag");
  console.log(typeof greetMesssge) //This is known only in the function declaration and not outside unlike the anonymousFunction.
}

anonymousFunction();
console.log(typeof anonymousFunction); 

//greetMesssge(); // error of not defined you need to access with the variable name here anonymous function.