const fruits = ["Apple", "Orange", "Cherry", "Banana", 'Berry'];
fruits.sort();
//inplace sorting not makes a new copy 
console.log(fruits);

const numbers = [1, 23, 12, 3, 0, -1, 33, 100, -2];
console.log(numbers.sort());  //checks the UTF-16/8 Pattern and then sort according to string

function sortInAscending(a, b)
{
  return a - b;
}

function sortInDescending(a, b)
{
  return b - a;
}

numbers.sort(sortInAscending);
console.log("Ascending order: " ,numbers);

numbers.sort(sortInDescending);
console.log("Descending order: " ,numbers);