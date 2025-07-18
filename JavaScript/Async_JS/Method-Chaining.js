function payment(hotelId){
  return new Promise((resolve) => resolve("payment successful"));
}

let hotel = bookHotel(hotelName);
hotel
  .then((hotelId) => {
    console.log({hotelId});
    return hotelId;
  })  //1
  .catch((err) => console.log(err))
  .then(function(hotelId){
    return payment(hotelId);
  })
  .catch((err) => console.log(err))
  .then((response) => console.log(response))  //3
  .catch((error) => console.log(error.message));