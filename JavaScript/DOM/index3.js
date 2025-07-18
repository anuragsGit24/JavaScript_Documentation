const parentElement = document.getElementById("parent-container");
const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");

//creating card image element
const cardImageElement = document.createElement("img");
cardImageElement.classList.add("image");

cardImageElement.setAttribute("src", "https://www.simplyneo.com/wp-content/uploads/2018/08/A-journey-of-a-thousand-miles-begins-with-a-single-step.jpg");
cardImageElement.setAttribute("alt", "Travel-card");
//creating card text element
const cardtextelement = document.createElement("span");
cardtextelement.innerText = "The journey of a thousand miles begins with a single step";
const cardButton = document.createElement("button");
cardButton.innerText="Start";
cardContainer.appendChild(cardButton);
cardContainer.appendChild(cardImageElement);
//cardcontainer is parent in that element we need to add the child which is cardImageElement.
cardContainer.appendChild(cardtextelement);
parentElement.appendChild(cardContainer);

