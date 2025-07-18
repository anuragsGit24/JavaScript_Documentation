/**
 * Async await -elegant and more widely used way of writing promises important for interview(they give u code and tell what output will be and flow of the program.
 */

// let promise = new Promise((resolve) => resolve("done"));
// promise.then((res) => console.log(res)).catch((err) => console.log(err));

async function returnsomething() {
  try{
    let promise = new Promise((_, rej) => rej("promise rejected"));
    let res = await promise;  //function execution stops here untill the promise is settled
    console.log(res);
  } catch(err){
    console.log(`Error occured - ${err}`);
  }
}

returnsomething();

// let promise = returnsomething();
// promise.then((res) => console.log(res));


//Async using arrow function
const getUserData = async () => {
  try{
    const promise = await fetch("https://mockdata.anuragsingh.repl.co/users");
    // const data = await promise;
    const response = await promise.json();
    console.log(response);
  }catch(err){
    console.log(err);
  }
}

getUserData();