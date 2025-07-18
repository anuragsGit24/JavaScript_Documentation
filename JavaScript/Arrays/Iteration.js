// Array - non primitive type

// let stds = ["Anurag", "Alok", "Akhilesh", "Manju", 1 , 2 , 3 , 4, ["HTML", "CSS", "JS"], {collegeName : "SPIT"}];

let stds = ["Anurag", "Alok", "Akhilesh", "Manju"];
console.log(stds.length);

//if we use <= then for length > arr.length it will print undefined
for(let i = 0; i <= stds.length; i++)
{
  console.log(stds[i]);
}

// console.log(stds[0]);


//for let of - strings array - gives element in array

for(let name of stds)
{
  console.log(name);
}


//for let in  - gives the index in arrays
for(let index in stds)
{
  console.log(index);
}