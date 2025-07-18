# Creating a Promise and Method Chaining
In this article, we will learn how can we create our own Promise.

We use new Promise Constructor Syntax to create a new Promise -

let promise = new Promise(function(resolve, reject) {
 // executor 
});

The executor is the function that is provided to the new Promise. When a new Promise is created, the executor is executed automatically. The callbacks, resolve, and reject, are provided by JavaScript itself, and our code is only contained within the executor. Regardless of whether the result is obtained soon or late, the executor must call either the resolve(value) callback, indicating successful completion of the job along with the result value, or the reject(error) callback, indicating an error object if an error occurred.

let us try to understand this with the help of an example 

<pre>
const isRequestSuccessfull = true;
​
let promise = new Promise((resolve,reject)=>{
  if(isRequestSuccessfull){
   resolve("promise resolved");
  }else{
   const error = new Error("Something Went Wrong");
   reject(error.message);
  }
});
​
console.log(promise);
</pre>

Output
Promise { 'promise resolved' }
As in the above code, the executor function runs immediately and calls resolve inside the if condition.If the value of isRequestSuccessfull is false then it would have called reject and with the promise state as Rejected. Now let us see how can we consume our promise code using the then and catch method.

See the code below 

<pre>
const isRequestSuccessfull = true;
​
let promise = new Promise((resolve,reject)=>{
  if(isRequestSuccessfull){
   resolve("promise resolved");
  }else{
   const error = new Error("Something Went Wrong");
   reject(error.message);
  }
});
​
promise.then(response=>console.log(response))
.catch(err=>console.log(err));
</pre>

Output
promise resolved
It is important to remember that in case the executor calls the resolve method, the value of the response parameter in the callback of then method will always be equal to the value passed in as the argument while calling the resolve method resolve(value). So then method is used to handle successful responses generally, although it is also capable of handling the reject response as well.

Now let us see what happens in case the promise is Rejected.
<pre>
const isRequestSuccessfull = false;
​
let promise = new Promise((resolve,reject)=>{
  if(isRequestSuccessfull){
   resolve("promise resolved");
  }else{
   const error = new Error("Something Went Wrong");
   reject(error.message);
  }
});
​
promise.then(response=>console.log(response))
.catch(err=>console.log(err));
</pre>
Output
Something Went Wrong
Here we can see that the output is "Something Went Wrong" because the promise was rejected catch method callback was fired and the value of the err is equal to the argument passed into the reject() method inside the executor function.

Now let us see how can we handle multiple chaining using then method.

Promise Chaining: Promise Chaining is a simple concept by which we may initialize another promise inside our .then() method and accordingly we may execute our results. The function inside then captures the value returned by the previous promise

The syntax for using promise chaining is as follows.

<pre>
let promise = new Promise((resolve, reject) => {
    resolve("Hello JavaScript");
    });
     
    promise
    .then( function (result1){
        console.log(result1);
        return new Promise((resolve,reject) =>{
            resolve("JS is awesome");
        })
    })
    .then((result2) => {
        console.log(result2);
    });
</pre>
Output
Hello JavaScript
JS is awesome
Lets see another example:

<pre>
function asyncOperation(value) {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const result = value * 2;
      resolve(result);
    }, 1000);
  });
}
​
// Chain multiple 'then' methods
asyncOperation(3)
  .then(result1 => {
    console.log(`Step 1: ${result1}`);
    return result1 + 5;
  })
  .then(result2 => {
    console.log(`Step 2: ${result2}`);
    return result2 * 3;
  })
  .then(finalResult => {
    console.log(`Final Result: ${finalResult}`);
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });
</pre>
Output:

Step 1: 5

Step 2: 0

Final Result: 0


# Promise API'S - promise.all(), Promise.allSettled(), Promise.race() v/s Promise.any()

The  Promise API comprises a collection of JavaScript functionalities that facilitate the handling of asynchronous code in a more graceful and comprehensible manner. Essentially, a Promise is an object that denotes a value that might not be accessible immediately but will be resolved eventually.
We will cover Promise.all() ,Promise.allSettled(), Promise.race() v/s Promise.any() in this article .

- ### Promise.all()

Consider a scenario where we have to execute multiple promises in parallel and wait until all of them are ready. For instance, download several URLs in parallel and process the content once they are all done.

The syntax is:
let promise = Promise.all(); 
Let us Try to Understand this with an example.
 
<pre>
let promise1 = new Promise(resolve => setTimeout(() => resolve(1), 3000));
let promise2 = new Promise(resolve => setTimeout(() => resolve(2), 2000)); // 2
let promise3 = new Promise(resolve => setTimeout(() => resolve(3), 1000)); // 3
​
let finalPromise = Promise.all([promise1,promise2,promise3]);
finalPromise.then(res=>console.log(res)).catch(err=>console.log(err));
</pre>
Output
[ 1, 2, 3 ]
Here You can see that the result Promise gives an array consisting of resolved promises value.

Please note that the order of the resulting array members is the same as in its source promises. Even though the first promise takes the longest time to resolve, it’s still first in the array of results.
It is important to observe that the sequence of elements in the resulting array corresponds to that of the source promises. This implies that although the initial promise may take the most time to resolve, it will still be the first member in the outcome array.

let us Look at another example in which we are fetching different url of different GitHub profiles.

<pre>
const urls = [
  'https://api.github.com/users/prakashsakari',
  'https://api.github.com/users/AshishJangra27',
];
const requests = urls.map(url => fetch(url));
Promise.all(requests)
  .then(responses => responses.forEach(
    response => console.log(`${response.url}: ${response.status}`)
  )).catch(err => console.log(err.message));
</pre>

The output of the above code will be 
https://api.github.com/users/anuragsingh: 200
https://api.github.com/users/alokkumar: 200

- ### Promise.allSettled()

Promise.all rejects as a whole if any promise rejects. That’s good for “all or nothing” cases when we need all results successful to proceed.Promise.allSettled just waits for all promises to settle, regardless of the result. 
The resulting array will be -
{status: "fulfilled", value: result} for successful responses 
{status: "rejected", reason: error} for errors

look at the code below to understand better.

<pre>
let urls = [
  'https://api.github.com/users/prakashsakari',
  'https://api.github.com/users/AshishJangra27',
  'https://no-such-url'
];
Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => { // (*)
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        console.log(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status == "rejected") {
        console.log(`${urls[num]}: ${result.reason}`);
      }
    });
  });
</pre>

The output of the above code will be 
[
 {status: 'fulfilled', value: ...response...},
 {status: 'fulfilled', value: ...response...},
 {status: 'rejected', reason: ...error object...}
]
We can see even when the third promise is rejected the overall result of the promise is not rejected  but it gives the successful response of the first two promises and only shows rejected for the promise that was rejected unlike promise.all .

- ### Promise.race()

This function is like Promise.all, but instead of waiting for all promises to settle, it only waits for the first one to settle and retrieves its result or error.

<pre>
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(res => console.log(res))  // 1
</pre>

Since the initial promise was the quickest to settle, it became the final outcome. Once the first promise is settled and emerges as the winner, any subsequent results or errors are disregarded.

- ### Promise.any()

<pre>
Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(res=>console.log(res)); // 1
</pre>

Although the initial promise was the quickest, it was rejected, and as a result, the second promise became the outcome. Once the first promise that was fulfilled wins the race, any additional outcomes are disregarded.

So What is the difference between Promise. any and promise. race ?
Here's an example: imagine you have three promises that represent different tasks you want to do simultaneously. Promise 1 represents checking your email, Promise 2 represents making a phone call, and Promise 3 represents sending a text message.

If you use Promise.race(), the method will return the result of the first promise that finishes, whether it was successful or not. So, if Promise 1 finishes first but it's a rejection (e.g., you couldn't log in to your email), the Promise.race() method will immediately return the rejection value without waiting for Promise 2 or Promise 3 to finish.

If you use Promise.any(), the method will return the first promise that finishes successfully (i.e., it gets resolved). So, if Promise 2 finishes first and it's successful (e.g., you finished your phone call), Promise. any() will return that result and Promise 1 and Promise 3 will stop executing. However, if none of the promises get resolved and they all reject, then Promise.any() will throw an error.