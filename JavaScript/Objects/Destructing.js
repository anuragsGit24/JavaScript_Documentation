const obj = {
  name: "Anurag",
  age : 19,
  address : {
    city : "Mumbai",
    state : "Maharashtra",
    locality: "Bhandup"
  },
  courses : ['html', 'css', 'js', 'react', 'redux']
}

//let {name, address, courses} = obj;
// console.log(name);
// console.log(address);

// let numbers = [1, 2 , 3];
// let [a, b, c] = numbers;
// console.log(a);

// let{name, ...rest} = obj;
// console.log(name);
// console.log(rest);

//reassigning variables
let{name: username, address : useradd} = obj;
console.log(username);
console.log(useradd);


// let{address: {city}} = obj;
// console.log(city);

let{address:{city, locality, state}, courses} = obj;

//console.log(address); // wont work
console.log(city);
console.log(locality);
console.log(state);
console.log(courses);

/** employee - main prop
 * engineer , youtube, placement - sub prop
 * em1 , em2 - sub prop of engineer
 * id, name, occupation - sub prop of em1/em2
 */
const employee = {
  engineers : {
    em1 : {
      id : 1,
      name : "Prakash",
      occupation : "Frontend"
    },
    em2 : {
      id : 2,
      name : "Ashish",
      occupation : "Data Science"
    }
  },

  placement : {
    em3 : {
      id : 3,
      name : "Sakshi",
      occupation : "Sr Exec",
      achievements : {
        first_quarter : "best exec",
        second_quarter : "best employee"
      }
    }
  },
  
  YouTube : {
    em4:{
      id: 4,
      name : "Jay",
      occupation : "Manager"
    }
  }
}

let {engineers} =employee;
console.log(engineers);

let {YouTube} =employee;
console.log(YouTube);

let {placement} =employee;
console.log(placement);

let {engineers : {em2}} =employee;
console.log(em2);
let {engineers : {em1 : {name, occupation}}} = employee;
console.log(name);
console.log(occupation);

let{placement : {em3 : {achievements : {first_quarter}}}} = employee;
console.log(first_quarter);