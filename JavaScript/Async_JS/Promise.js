/**
 * Promise - It is an object that has the status of an async operation and its corresponding value
 */

// let promise = bookHotelAPI(hotelId);
// {
//   stateRequest --> pending / fulfilled / rejected
//   response --> value / error
// }


const URL = "https://mockdata.prakashsakari.repl.co/users";
let promise = fetch(URL);
console.log(promise);
promise.then(function(response){
  return response.json();
})
.then(function(data){
  console.log(data);
})
.catch(function(){
  console.log("ERROR OCCURED!");
})  //when promise is resolved it(.then()) is used to handle the response
//.then is a callback function 
// .catch() is used when promise is rejected