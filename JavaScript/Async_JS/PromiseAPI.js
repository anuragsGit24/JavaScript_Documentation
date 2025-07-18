/**
 * Promise.all([arrayOfPromise])
 * https://api.github.com/users/anuragsingh
 */

let promise1 = new Promise(resolve => setTimeout(()=> resolve("Promise1 resolved"), 3000));

let promise2 = new Promise((_, reject) => setTimeout(()=> reject("Promise2 rejected"), 2000));  //when we dont want to pass anything then we can just put underscore. if any one promise of all promises is rejected then the output will be rejected

let promise3 = new Promise((_, reject) => setTimeout(()=> reject("Promise3 rejected"), 1000));

let arrofpromise = [promise1, promise2, promise3];
let promise = Promise.all(arrofpromise);
// console.log(promise);
promise.then((res) => console.log(res)).catch((err) => console.log(err));

// promise1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));
// promise3.then((res) => console.log(res));


let users = ["anuragsingh", "alokkumar"];

// let promise4 = fetch("https://api.github.com/users/anuragsingh");
// let promise5 = fetch("https://api.github.com/users/alokkumar");

let arrayOfPromise = users.map((user) =>{
  fetch(`https://api.github.com/users/${user}`)
});
console.log(arrayOfPromise);

let promise11 = Promise.all(arrayOfPromise);
promise.then((res) => res.forEach((data) => console.log(data.url))).catch((err) => console.log(err));