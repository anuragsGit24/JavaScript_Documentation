let sizes = ['S', 'M', 'L', 'XL', 'XS', 'XXL', 'XXXL'];

const readlineSync = require("readline-sync");
const usersize = readlineSync.question("Which size of shirt do you want (S/M/L/XL/XS/XXL/XXXL)");

const isavailable = sizes.includes(usersize);
if(isavailable)
{
  console.log("Size is available");
}else{
  console.log("Size is unavailable");
}
// console.log(isavailable);