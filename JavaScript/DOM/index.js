//01 - DOM
// // console.log('Hello Anurag');

//const { startTransition } = require("react");

let startbtn = document.getElementById("btn-start");
// console.log(startbtn);
let stopbtn = document.getElementById("btn-stop");
// console.log(stopbtn);
let input = document.querySelector(".input");

// let startbtn = document.querySelector(".btn-start");  //get element by classname
// console.log(startbtn);

// let resetbtn = document.querySelector("#btn-reset"); //get element by id
// console.log(resetbtn);


// let button = document.querySelectorAll(".button");   //gives array in order 
// console.log(button[0]);
// console.log(button[2]);


//02-Event Listener-01
// let startButton = document.querySelector(".start");
// // console.log(startButton);
// let countButton = document.querySelector(".count");
// let stopButton = document.querySelector(".stop");

// function showmsg(){
//   console.log("Button Clicked");
// }

// // startButton.addEventListener("click", () => {
// //   if(startButton.innerText === "START"){
// //     startButton.innerText = "BEGIN";
// //   }else{
// //     startButton.innerText = "START";
// //   }
// // })

// startButton.addEventListener("click", () => {
//   if(startButton.innerText === "START"){
//     startButton.innerText = "STOP";
//     startButton.classList.toggle("btn-red");
//   }else{
//     startButton.innerText = "START";
//   }
// })

// let count = 0;
// countButton.addEventListener("click", () => {
//   if(countButton.innerText === "INCREASE"){
//     countButton.innerText = "DECREASE"
//     count++;
//     console.log(count);
//   }else if(countButton.innerText === "DECREASE"){
//     countButton.innerText = "INCREASE"
//     count--;
//     console.log(count);
//   }
// });

// stopButton.addEventListener("click", () => {
//   // stopButton.classList.add("btn-red");
//   stopButton.classList.toggle("btn-red");
// })

/**
 * 03-EventListener-02
 */

// let input = document.querySelector(".input");

// // input.addEventListener("change", () => {
// //   console.log(input.value);  //when we click somewhere eelse then we can see the input 
// // })

// // input.addEventListener("input", () => {
// //   console.log(input.value);  //we can see output in realtime
// // })

// input.addEventListener("focus", () => {
//   console.log(input.value);  //we can see output only when we write the input and then click the iput box again then it gives the value
// })

// input.addEventListener("keyup", () => {
//   console.log(input.value); 
// })

// input.addEventListener("keydown", () => {
//   console.log(input.value); 
// })




/**
 * 04-EventListener-03 
 * TOPIC - MOUSE EVENTS
 */

// input.addEventListener("mousedown", (event) => {
//   console.log(event.button);
// })

// input.addEventListener("mousedown", (event) => {
//   // let xcor = event.pageX;
//   // let ycor = event.pageY;  //gives for the entire part 
//   let xcor = event.clientX;   //only for visible part
//   let ycor = event.clientY;
//   let cors = `X cor - ${xcor}, Y cor - ${ycor}`
//   console.log(cors);
// })

// document.body.addEventListener("mousedown", (event) => {
//   let xcor = event.clientX;   //only for visible part
//   let ycor = event.clientY;
//   let cors = `X cor - ${xcor}, Y cor - ${ycor}`
//   console.log(cors);
// })




/**
 * Event Bubbling and Capturing
 */

let form = document.querySelector("#form");
let div = document.querySelector("#div");
let para = document.querySelector("#p");

//when not mentioned then click is the event on clicking 
//bubbling means if i click on the para tag then it shows para tag then div tag and then form tag it bubbles upward because the value is false.default in js is false
//capturing is opposite of that value is true and then it shows first form then div and then para tag if i click para

//capture- is more priority compared to bubbling
para.addEventListener("click", () => {
  alert("para tag");
},true);

div.addEventListener("click", () => {
  alert("div tag");
}, true);

form.addEventListener("click", () => {
  alert("form tag");
}, true);

//bubble
para.addEventListener("click", () => {
  alert("para tag");
});

div.addEventListener("click", () => {
  alert("div tag");
});

form.addEventListener("click", () => {
  alert("form tag");
});