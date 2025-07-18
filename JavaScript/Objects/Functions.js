const obj = {
  name : "Anurag Singh", 
  greetMessage : function(){
    console.log(`Hello ${this.name} Welcome`);
  },
  bye() {//: function(){
    console.log("Bye Bye");
  }
}

console.log(obj);
obj.bye();
obj.greetMessage();