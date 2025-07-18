const nums = [1, 2, 3];

const[a, b , c] = [1, 2, 3];
console.log(a);
console.log(b);
console.log(c);

// const[, , , courses, x] =[1, 2, 4, ['html', 'css', 'js'], 5, 6];
const arr =[['html', 'css', 'js'],1, 2, 3, 4, 5, 6];

// const[courses, ...rest] = arr;
//rest has to be last element in arr const([courses, ...rest, a , b] = arr; ) is not valid 

const[courses,x, y, ...rest] = arr;
console.log(rest);
console.log(courses);

/** Swap Numbers */

let m = 5;
let n = 10;

[m, n] = [n, m];

console.log("M - ", m);
console.log("N - ", n);


