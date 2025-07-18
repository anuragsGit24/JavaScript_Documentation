//object literal  - key : value pair 
const personobj = {
  name : "Anurag",     //property
  age : 19,
  job : "Student",
  courses : ["html", 'css', 'js'],
  "is Admin" : "true"
};  

console.log(personobj["name"]);  // OR console.log(personobj.name);
console.log(personobj.age);

console.log(personobj["job"]);
// console.log(personobj.is Admin);
console.log(personobj["is Admin"])  //square bracket since many words and we can access it. Key should be in string. 
