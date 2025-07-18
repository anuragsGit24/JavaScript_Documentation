const obj = {
  name : "Anurag",
  displaymsg : function(){
    console.log(`Hello ${this.name}`);  //Implicit binding
  },
};

console.log(obj);
obj.displaymsg();


function calculatesum() {
  console.log(this);
}

calculatesum();


const user1 = {
  name : "Anurag",
  showName : () => {
    console.log(this.name);
  },
};

const user2 = {
  name : "Alok",
  showName : () => {
    console.log(this);
  },
};

const user3 = {
  name : "ABC",
  showName : function() {
    console.log(this.name);
  },
};


//when this is inside a function then function is part of object then its not a function it is a method

user1.showName();
user2.showName();
user3.showName();


/** Explcit Binding : make a external function and all function can borrow that function
 * call
 * apply
 * bind
 */


