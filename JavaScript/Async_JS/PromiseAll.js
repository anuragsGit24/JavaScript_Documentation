/**
 * Promise.allSet(arrofpromises)
 */


let promise1 = new Promise(resolve => setTimeout(()=> resolve("Promise1 resolved"), 3000));

let promise2 = new Promise((_, reject) => setTimeout(()=> reject("Promise2 rejected"), 2000)); 

let promise3 = new Promise((_, reject) => setTimeout(()=> reject("Promise3 rejected"), 1000));

let arrofpromise = [promise1, promise2, promise3];

let promise = Promise.allSettled(arrofpromise);
promise.then((response) => response.forEach((data) => console.log(data)));