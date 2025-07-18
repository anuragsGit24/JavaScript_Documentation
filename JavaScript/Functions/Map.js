// key types
// key order
// size
// iteration
// performance(insertion, deletion)

const newmap = new Map();

newmap.set(10, 'value will be here');
console.log(newmap.get(10));
newmap.delete(10);
newmap.set('id', 3);
newmap.set('name', 'Anurag');
newmap.set('age', 19);
newmap.set(2, 5);

console.log(newmap.size);
console.log(newmap);
newmap.forEach((value) => {
  console.log(value)
})

console.log(newmap.has(2));
console.log(newmap.has(7));