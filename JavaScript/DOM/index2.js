let buttonContainer = document.querySelector("#btn-container");

buttonContainer.addEventListener("click", (event)=>{
  let btntxt = event.target.innerText;
  if(btntxt === "Red"){
    event.target.classList.toggle("btn-red");
  }
  else if(btntxt === "Green"){
    event.target.classList.toggle("btn-green");
  }
  else if(btntxt === "Yellow"){
    event.target.classList.toggle("btn-yellow");
  }
  else if(btntxt === "Blue"){
    event.target.classList.toggle("btn-blue");
  }
  else if(btntxt === "Magneta"){
    event.target.classList.toggle("btn-magneta");
  }
})