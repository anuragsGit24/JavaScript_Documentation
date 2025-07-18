//const studentIds = new Array();

// studentIds.push(1);
// studentIds.push(2);
// studentIds.push(1);

// console.log((studentIds));

const studentIds = new Set();
studentIds.add(1);
studentIds.add(2);
studentIds.add(1);
console.log((studentIds));
//no indexing in set
//for indexing we can use map by using key and value pair

//you can convert a set into array and viceaversa
const studentIds1 = [1, 2, 3, 4, 4, 4];
const uniqueStudentIds = new Set(studentIds1);
const newStudentIds = [...uniqueStudentIds];
console.log(newStudentIds);
console.log(uniqueStudentIds);

const newList = new Set();
newList.add(1);
newList.add(2);
// newList.clear();
newList.delete(2);
newList.delete(2);
newList.add(3);
console.log(newList.has(1));
console.log(newList.has(5));
console.log(newList);


newList.forEach((value) => {
  console.log({value})
})

