//check whether character is present in string 
//returns boolean value unlike the indexOf method which returns -1 or index.

const displaymsg = "qwrtyA";
console.log(displaymsg.includes("dark"));
console.log(displaymsg.includes("light"));

// if(displaymsg.includes("dark"))
// {
//   console.log("Person loves to code in dark mode");
// }else{
//   console.log("Person loved to code in light mode");
// }

const checkstr = (text) => displaymsg.includes("dark") ? "Person loves to code in dark mode" : "Person loved to code in light mode";

const result = checkstr("I love to code in dark mode");
console.log(result);

const vowels = "aeiou";
let flag = false;      //since we are going to update the flag later so we took it as let and not const

for(let char of displaymsg){
  if(vowels.toLowerCase().includes(char.toLowerCase()))
  {
    console.log(`${char} is a vowel`);
    flag = true;
    break;
  }//else{
  //   console.log(`${char} is not a vowel but is a consonant`);
  // }
  else{
    flag = false;
  }
}

if(flag){
  console.log("The String has a vowel");
}else{
  console.log("The String doesnt have a vowel");
}
