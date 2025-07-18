let displaymsg = 'I am Anurag';
let count = 0;

for (let char of displaymsg){
  if(char == "a" || char == "A")
    count++;
  // else{
  //   console.log(char);
  // }
}

console.log(count);

// console.log(displaymsg[1]);
// console.log(displaymsg[0]);

for(let i = 0; i < displaymsg.length; i++)
{
  if(displaymsg[i] == "n")
  {
    console.log(i);
    break;
  }
  else{
    console.log(displaymsg[i]);
  }
}