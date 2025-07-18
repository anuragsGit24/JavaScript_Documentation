//const allTheModules = require("./utils.js");
//allTheModules.print(allTheModules.greet("Anurag"));
//console.log(allTheModules);

// import {greet, print} from "./utils.js";
// const {greet, print} = modules;
// print(greet("Anurag"));

import {greet, print} from "./utils.js";
//const {greet, print} = modules;
print(greet("Anurag"));



//dynamic imports 
const isMathrequired = true;  //when required then only it will load math.js file else it wont when we need to make admin and user profiles.

if(isMathrequired){
  const {add} = await import("./math.js");
  console.log(add(2, 2));
}