# Callback functions

A callback function is a function that is passed as an argument to another function and is invoked or called by that function at a certain point in time. The main purpose of a callback function is to allow asynchronous processing or non-blocking behavior in programming languages that support it. Callback functions are commonly used in event handling, such as when responding to user actions or when performing operations that require significant time to complete. They are also used in higher-order functions that take other functions as arguments, such as map(), filter(), and reduce() function in JavaScript.

let us try to understand with the help of the example 

<pre>
function outer(wrapper){
 console.log("Outer function is called");
 wrapper();
}
function callback(){
  console.log("function b is called");
}
outer(callback);
</pre>

Output
Outer function is called
function b is called
 

It is important to remember that the execution of the callback function depends upon the execution of the function, which the callback is passed to.

Let us understand how callback functions are useful for async Programming.

Take an example of setTimeout method  - It is a method used to execute a piece of code after a certain delay.

<pre>
console.log("hello");
setTimeout(function callback(){
  console.log("Delayed by 4 seconds ");
​
},4000)
</pre>
Output
hello
Delayed by 4 seconds 
Here the callback function passed to setTimeout executes after a delay of 4 seconds hence it is useful in async Programming.

Another example of a callback function could be the use case of fetch.

<pre>
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .catch(error => console.error(error));
</pre>

Here we are making a network call to fetch some data from the JSON placeholder and we are waiting for the response to come back, once we receive the response our callback function is executed which is passed as an argument to the then method. In case Our response fails, our callback function for the catch method is called.
Without the concepts of Callback Functions ,async Programming could not be possible.