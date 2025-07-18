// Call and apply are methods of function
//Interview
const user1 = {
  name: "Anurag",
  age : 20,
};

const user2 = {
  name: "Alok",
  age : 21,
  sayHi(){
     console.log(this.name);    //implicit binding - this will refer to this object
  },
};

const user3 = {
  name: "manju",
  age : 22,
};

function sayHi(degree, year){
    console.log(this.name, degree, year);
}

sayHi.call(user1, "Btech", 2027);   //value of this is user1
sayHi.call(user2, "BE", 2026);   //value of this is suer2



sayHi.apply(user1, ["Btech", 2027]);  //array contains the parameter of the function.
sayHi.apply(user2, ["BE", 2026]);



//call, apply, bind -- explicit binding/function borrowing.  using method of function to bind the object to the function

//bind returns the function 
const result = sayHi.bind(user3, "Btech", 1994);
result();


//arrow function -- this refers to window object