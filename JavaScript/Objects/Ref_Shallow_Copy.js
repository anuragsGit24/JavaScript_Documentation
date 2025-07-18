const person1 = {
  name: "Anurag",
  age : 19,
  address : {
    city : "Mumbai",
    state : "Maharashtra"
  }
}

//console.log(person1);
//const person2 = person1;   //objects are copied by reference and not value. so a copy is formed and both are refering to same object/memory space. so they update the same object

//this is a shallow copy - changes are made in original copy when we update the copy.
//opposite of this is the deep copy.

// person2.name = "Alok";
// person1.age = 111;
// console.log(person1);
// console.log(person2);


const person2 = Object.assign({}, person1);

person2.name = "Alok";
//this is also not a deep copy. since when we change the nested properties they change in both the persons.They work fine with normal properties.
person2.address.city = "Banglore";
person1.age = 111;
console.log(person1);
console.log(person2);

