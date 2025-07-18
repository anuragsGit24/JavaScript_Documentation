const arr = [1, 2, 3, 4, 5];
console.log("Array - ", arr);
console.log(...arr);


const arr2 = [6, 7, 8, 9];

const arr3 = [...arr, ...arr2, 10, 11];
console.log(arr3);

console.log(arr);