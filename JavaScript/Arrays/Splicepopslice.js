/**
 * pop, slice, splice 
 */

let courses = ['HTML', 'CSS', 'JS', 'REACT', 'JQUERY'];
console.log("COURSES : ", courses);

// let removed = courses.pop();
// console.log("RI : ", removed);

let removed = courses.slice(0, 4);
console.log("RI : ", removed);
console.log("COURSES UPDATED : ", courses);

let username = "anurag";
let firstUppercasechar = username[0].toUpperCase();

let capitalname = firstUppercasechar + username.slice(1).toLowerCase();
console.log(capitalname);



let course = ['HTML', 'CSS', 'JS', 'REACT', 'JQUERY', 'python', 'Angular'];

course.splice(3, 0, "Cloud");
course.splice(4, 2, "DevOps");
console.log(course);