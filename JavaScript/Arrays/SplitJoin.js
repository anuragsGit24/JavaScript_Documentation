const input = "madam";

let reversed = input.split("").reverse().join("");

if(reversed == input)
{
  console.log("Yes");
}else{
  console.log("No");
}

const msg = "May I come in?";
const arrofchar = msg.split("");
const arrofword = msg.split(" ");

console.log(arrofchar);
console.log(arrofword);

console.log(arrofchar.reverse().join(""));
console.log(arrofword.reverse().join(""));