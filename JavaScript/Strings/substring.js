const username = "Anurag Akhilesh Singh";

let n = username.length;
const firstname = username.substring(0, 7);
const middlename = username.substring(7, 15);
const lastname = username.substring(16, n);;

console.log(`The firstname of the user is ${firstname}`);
console.log(`The middlename of the user is ${middlename}`);
console.log(`The lastname of the user is ${lastname}`);

console.log(firstname + "....");