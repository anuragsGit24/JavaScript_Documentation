//setTimeOut 

//setInterval
console.log("Greet was executed 2s ago");

function greet(){
  console.log("Welcome to Website");
}

setTimeout(greet, 1000*2);

//setInterval
let val = 0;
let IntervalId = null;
function counter(){
  val += 1;
  console.log({counter:val});

  if(val === 10){
    clearInterval(IntervalId);
  }
}

IntervalId = setInterval(counter, 1000);

let timeoutid = null;
function execution(){
  console.log("Executed Successfully");
}

timeoutid = setTimeout(execution, 1000);
clearTimeout(timeoutid);


setTimeout(() => console.log('Hello'), 0);
console.log('World');//this first prints world and then hello