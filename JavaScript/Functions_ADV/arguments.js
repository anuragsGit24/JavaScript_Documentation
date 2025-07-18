/**
 * Arguments Object is Non-arrow function
 * --arguments object is an array like object present locally inside a function and it contains value of all the arguments passed to a function
 */

function calculateTotal(){
  // arguments[0] = 10;
  // console.log(arguments);
  let total = 0;
  console.log(arguments.length);
  for(let val of arguments){
    // console.log(val);
    total += val;
  }
  console.log(total);
  const arr = [...arguments];  //spread operator
  console.log(arr);
  console.log(arguments);
}

calculateTotal(4, 5, 3, 7, 8, 9);

function myfun(a = 10){   // this is default when we update the arguments itdoesnt change and shows 4 only.but if i dont have a default value then it is possible to update arguments[0] = 9;
  a = 100;
  console.log(a);
  console.log(arguments);
  arguments[0] = 9;   //changing the argument changes the argument but doesnt change the argument that u passed
  console.log(arguments);
  console.log(a);
}


//myfun(); //if we dont pass any value then it will take default value
myfun(4);