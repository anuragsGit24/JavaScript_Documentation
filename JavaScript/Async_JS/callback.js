function a(wrapper){
  console.log("Hello");
  wrapper();
}

function b(){
  console.log("World");
}

a(b);  //callback because execution of b depends on function a

setTimeout(function callback(){
  console.log("Executed after a 4s delay")
}, 4000);

fetch("https://...").
  then(function(){
    //response logic- here the function is waiting for response form the api which we just fetched and hence it is a async operation this is also callback function
})

