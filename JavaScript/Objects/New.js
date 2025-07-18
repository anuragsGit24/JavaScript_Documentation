/**
 * Constructor functions technically are regular functions.They have 2 conventions though
 * 1. they are named with capital letters first
 * 2. they should be executed only with new operators.
 */

function User(name, age){
  (this.name = name),
  (this.age = age);
}

const user1 = new User("Anurag", 19);
const user2 = new User("Alok", 21);

// console.log(user.name);
// console.log(user.age);
// console.log(this);
// console.log(user1);

console.log(user1);
console.log(user2);