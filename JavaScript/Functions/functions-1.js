greetMesssge();

//Function declaration/statement
function greetMesssge(name, city){   //name is parameter
  console.log(`${name}, Welcome to my Js`);
  console.log(`Thank You for joining from ${city}`)
}

//Calling the functions
greetMesssge("Anurag", "Mumbai");   //Anurag is argument 
greetMesssge("Jai", "Banglore");


function sum(min, max){
    let total = 0;
    for(let i = min; i < max; i++)
    {
       total += i;
    }
    return total;
}

console.log(sum(2, 10));