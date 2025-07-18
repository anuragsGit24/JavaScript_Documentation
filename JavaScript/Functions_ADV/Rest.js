//Rest Parameters --> ...rest/...args

function myfun(a, b, c, ...args){
  console.log(a, b);
  //console.log(rest);
  console.log(args);
}

myfun(4, 5, 6, 7, 9, 2, 5);
calculateTotal(4, 5, 6, 7, 9, 2, 5);

function calculateTotal(...rest){
  let total = 0;
  for(let val of rest){
    total += val;
  }
  console.log(total);
}