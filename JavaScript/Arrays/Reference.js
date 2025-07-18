let arr1 = [1, 2, 3];
let arr2 = arr1;  //Shallow Copy

console.log(arr1);
console.log(arr2);

arr2.push(4);

console.log("Updated arr2: ", arr2);
console.log("Updated arr1: ", arr1);     //here the arr1 is also updated due to array referencing 


//arr1 and arr2 points/refers to same memory location. 


/** To avoid this we use spread operator */
let arr3 = [...arr1];
console.log("Arr3 : ", arr3);

arr3.push(5);
console.log("Updated Arr3 : ", arr3);
console.log("Updated Arr1: ", arr1); 



/** Making a copy using for loops - this is how the spread actually works internally */

let arr4 = [1, 2, 3, 4];
let arr5 = [];
for(let num of arr4)
{
  arr5.push(num);
}

console.log("Arr4 : " , arr4);
console.log("Arr5 : " , arr5);

arr5.push(5);
console.log("Updated Arr4 : " , arr4);
console.log("Updates Arr5 : " , arr5);


let str = "Anurag";
let arrofalph = [...str];

console.log(arrofalph);