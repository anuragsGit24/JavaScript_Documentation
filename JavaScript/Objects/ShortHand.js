function getobjs(name, city){
  return{
    // name: name,
    // city: city
      name,
      city
  }
}

const std1 = getobjs("Anurag", "Mumbai");
console.log(std1);

const std2 = getobjs("Alok", "Banglore");
console.log(std2);

//shorthand means values are actually the variables
const Mentor = 'Prakash';
const course = 'redux';

console.log({Mentor, course});
