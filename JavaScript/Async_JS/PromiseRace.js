/**
 * Promise.race(arrofpromises)
 */


let promise1 = new Promise(resolve => setTimeout(()=> resolve("Promise1 resolved"), 1000));

let promise2 = new Promise((_, reject) => setTimeout(()=> reject("Promise2 rejected"), 2000)); 

let promise3 = new Promise((_, reject) => setTimeout(()=> reject("Promise3 rejected"), 1000));

let arrofpromise = [promise1, promise2, promise3];

let promise = Promise.race(arrofpromise);  // the first settled first it will give output for that. Settled means give the resolve/reject first
promise.then((res) => console.log(res));

let promiseany = Promise.any(arrofpromise);
console.log(promiseany);
//if two end at same time the corrected one will be printed in the output