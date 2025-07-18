const displaymsg = "I am AnuraG";

console.log(displaymsg.charAt(2));
console.log(displaymsg.charAt());     //Default is the first index
console.log(displaymsg.length);
console.log(displaymsg.charAt(100));    //Empty string
console.log(displaymsg);
const index = 10;
//ASCII
//charCodeAt - gives ASCII code

let asciicode = displaymsg.charCodeAt(index);
console.log(`The ASCII code of ${displaymsg.charAt(index)} is ${asciicode}`);


//exercis to encode
//geeks - iggmu

let str = "geeks";
let asciival = new Array();
for(let i = 0; i < str.length; i++)
{
  asciival[i] = str.charCodeAt(i) + 2;
}

let encode = String.fromCharCode(...asciival);
console.log(encode);