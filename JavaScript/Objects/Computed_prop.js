
const readlinesync = require("readline-sync");
const key = readlinesync.question("What do you want to know about the student? (name/age/city/state) - ")

const course = readlinesync.question("Which course you want to learn? (html/css/js/react/redux) - ");

const obj = {
  name : "Anurag",
  age : 19,
  [course]: "Courses not available"   //course is actually a variable and then the readline sync intput will be actually the key
}

obj.city = "Mumbai"
obj.state = "Maharashtra" 


console.log(obj["name"]);    //name is key but course is var which takes key as input
console.log(obj[course]);   // in computing properties we use [] 


