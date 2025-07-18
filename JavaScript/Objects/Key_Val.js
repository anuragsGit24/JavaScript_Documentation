const obj =  {
  name : "Anurag",
  age : 99,
  city : "Mumbai"
}

const entries = Object.entries(obj);
console.log(entries);

const keys = Object.keys(obj);
console.log(`The entries are ${keys}`);

//const values = Object.values(obj);
//console.log(`The entries are ${values}`);


const obj1 = {
  x : 1,
  y : 2,
  z : 17,
};

const values = Object.values(obj1);
console.log(values);

let sum = 0;
for(let num of values)
{
  sum += num;
}

console.log(`The sum of values is ${sum}`);