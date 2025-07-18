/**
 * Promise
 */

const isReqSuccess = false;
const db = [
  {
    id : 1,
    name : "Anurag"
  },
  {
    id : 2,
    name : "Alok"
  }
]

let promise = new Promise((resolve, reject) => {
  if(isReqSuccess){
    // resolve("promise resolved")
    setTimeout(() => resolve(db), 3000);
  }else{ 
    const error = new Error("Something went Wrong");
    reject(error.message);
  }
});

promise
  .then((response) => console.log(response))
  //.catch((err) => console.log(err)); //OR
  .catch(function(err){
    console.log(err);
  })
// console.log(promise);

