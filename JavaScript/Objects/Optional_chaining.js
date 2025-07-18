const user = {
  name: "Anurag",
  age : 19,
  address : {
    //city : "Mumbai",
    state : "Maharashtra"
  },
  likes : "EATING",
  getdislaymsg: function(){
    console.log("Welcome Anurag!");
  }
}

// console.log(user.hobbies);    //hobbies
// console.log(user.address.city);   //cannot read properties of undefined


//Sol 1:
if(user.address !== undefined)
{
  console.log(user.address.city);
}else{
  console.log("address not found");
}

//Sol 2:  optional chaining used for nested properties
console.log(user.address?.city);   //if address is undefined then it returns undefined without checking city. 
user.getdislaymsg();
console.log(user.getdislayadd?.());  //this will not show undefined. So we check with "?." if getdisplayadd is a valid method or not

