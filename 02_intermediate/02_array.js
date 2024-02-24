const num1 = [1, 2, 3, 4]
const num2 = [5, 6, 7, 8]

// num1.push(num2)
// console.log(num1); //array inside array
// console.log(num1[4]);

// const allnum = num1.concat(num2)
// console.log(allnum); //same as abv
// //in concat num1 already has num 1 and num2 now again it will add num2 
// //concat gives the proper/reuired op

const newNum = [...num1, ...num2]
console.log(newNum);

const anotherArr = [1, 2, [3, 4, 5], [6, [7, 8]], 9];
const realArr = anotherArr.flat(Infinity)
console.log(realArr);

console.log(Array.isArray("Ronak"));
console.log(Array.from("Ronak")); // convert it into array
console.log(Array.from({ name: "Ronak" }))

let a = 100
let b = 200
let c = 300

console.log(Array.of(a,b,c));