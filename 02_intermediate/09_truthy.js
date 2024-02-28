// falsy value
// false , 0 , -0 , BigInt 0n , null , defined , NAN ,""

// truthy value 
// "0", 'false' , " " , [] , {} , function(){}

// false==0 , false =="" , 0 =='' ...true

const email = "abc@gmail.com"

if (email) { // assumed the value is true
    console.log("Got email");
} else {
    console.log("Don't have email");
}

// To check empty array
const arr = []
if (arr.length === 0) {
    console.log("Array is empty");
} else {
    console.log("Array is not empty");
}

// To check empty object
const obj = {}
if (Object.keys(obj.length == 0)) {
    console.log("Object is empty");
} else {
    console.log("Object is not empty");
}

// Nullish Coalescing Operator (??) : null undefined.
// For the safety of code.

let val1;
// val1 = 5 ?? 10 // OP -> 5
// val1 = null ?? 10 // OP -> 10
// val1 = undefined ?? 10 // OP -> 10 
// val1 = null ?? 10 ?? 15 // OP -> 10

console.log(val1);

//Ternary Operator
//  condn ?  true : false
 
 const price =500
 price >= 1000 ? console.log("Expensive") : console.log("Cheaper");