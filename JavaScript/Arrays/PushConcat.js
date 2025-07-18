//Mutable object - can be changed or 
//Immutable object - cannot be changed.

//Array is mutable

let fruits = ["Apple", "Orange", "Banana"];
console.log(fruits);

fruits.push("Mango");
console.log(fruits);

fruits.push("Melons", "Berries");
console.log(fruits);


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let arr4 = arr1.concat(arr2);
let arr5 = arr2.concat(arr1);
let arr6 = arr1.concat(arr2, arr3);

console.log(arr6);
console.log(arr4);
console.log(arr5);