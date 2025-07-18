const displaymsg = "I am Anurag";

console.log(displaymsg.indexOf("a"));
console.log(displaymsg.indexOf("a", 3));
// second argument (ie. 3) tells me from where i should start checking as indexof only gives me the first char occurence of any number

console.log(displaymsg.indexOf("b"));   //-1 returns that means there is no b present in the string

// function findchar(text, char){
//   const index = text.indexOf(char);
//   if(index == -1)
//   {
//     console.log("Character not found");
//   }
//   else{
//       console.log(`Character found at index ${index}`);
//   }
// }

const findchar = (text, char) => text.indexOf(char) == -1 ? "Char not found" : "Char found";

const text = "I am Anurag";
const ans1 = findchar(text, "I");
const ans2 = findchar(text, "a");
const result = findchar("I am Anurag", "c");
console.log(result);
console.log(ans1);
console.log(ans2);


