# CallStack : 
In order to manage Different Execution Contexts, we have something called as CallStack present in the javascript runtime. The job of the call stack is to manage and run execution contexts created while executing the code. Let's try to understand this with the help of an example.




<!-- var x = 5 ; // Line 1
function getSum(num){
 var y=7 ;
 var total = num + y ;
 return total ;
​
}
​
var result1 = getSum(x); // Line 9
var result2 = getSum(9); // Line 10 -->

 

Once the code execution starts, the Global execution context is created and it will sit on the top Callstack . Once the code execution reaches Line 9  new Function execution context is created for the getSum and now it will sit on the top of Callstack . Similarly, this function will get executed line by line, and once finished it will be popped out of the Callstack then execution for GEC will resume and once it gets finished it will also be popped out of the stack.

In order to see how does this call stack looks like Go to Devtools => Sources => CallStack
Put a debugger at line 1 and you will see anonymous inside CallStack Tab.