/**
 * In JavaScript, the scenario where the code becomes densely nested and challenging to read due to the overuse of callbacks is referred to as "callback hell." When using asynchronous actions, like network requests or file operations, where the code must wait for a response before continuing, this can happen. It can be difficult to handle the code and to keep track of the execution flow when several callbacks are chained together and nested inside one another. For developers, this can result in bugs, mistakes, and a great deal of stress.
 * Problems related to callbacks:
 * 1.CallBack hell
 * 2.Pyramid of doom
 * 3.Inversion of control - basically if the first(bookHotel) api takes a lot of time to respond then the next callback function(API/proceedPayment) cannot be executed as this is inversion of control. As, the first api depends on the next but it cant be executed as it is inideal state.
 */

//bookHotel --> proceedPayment --> showBookingStatus --> updateBookingHistory  (APIS)

bookHotel(hotelId, function(){  //callback function-01
  if(error()){
    handleError
  }else{
    proceedPayment(hotelId, function(){   //02
      if(error){
        handleError
      }else{
        showBookingStatus(user, function(){  //03
          if(error){
            handleError
          }else{
            updateBookingHistory(function(){  //04
              if(error){
                handleError
              }else{
                console.log("Suceesfully booked");
              }
            })
          }
        })
      }
    })
  }
})

// On a hotel booking website, the general flow to booking a hotel is this - :
// First API is called to book a hotel then an API is called to Proceed To Payment then after that, an API is called to showBookingStatus then internally an API is called to updateBookingHistory at the server side. Now let's try to implement this in a piece of code 
// If you take a look at the above code it is clear that our code is expanding in the horizontal direction instead of the vertical direction which is considered a bad practice in programming as it makes the code less readable and difficult to identify bugs as well.

// The second Problem with this callback style of Programming is the inversion of control, the callback function's actual control is given to the function that it is being passed as an argument into so suppose our API gets into the ideal State i.e we get no response from the server our callback function will never be executed 

// In order to resolve these issues we use promises and the async-await style of async programming