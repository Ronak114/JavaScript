//this inside object
// this --> current contex
const user = {
    uname: "Ronak",
    age: 21,

    welMsg: function () {
        console.log(`Welcome ${this.uname} !!`); // this --> current contex
        console.log(this);
    }
}
user.welMsg()
user.uname = "Sam" //here contex get changed
user.welMsg()
console.log(this); // OP {} ..bcz global contex is empty but this works for browser.

// this inside function
function sample() {
    let name = "Ro"
    console.log(this.name); // OP undefined
}
sample()
// we can't use this inside a function


// const sample =function() {
//     let name = "Ro"
//     console.log(this.name); // OP undefined
// }
// sample()

// this inside arrow funtn
const sample1 = () => {
    let name = "Ro"
    console.log(this.name); // OP undefined
    console.log(this); // OP {}
}
sample1()

// Arrow Function
//Explicite return ..return statement
// const addTwo = (a,b) => {
//     return a+b
// }
// console.log(addTwo(5,4));

//Implicite return...no return statement
// const addTwo = (a, b) => a + b
// const addTwo = (a, b) => (a + b)

//Implicite return in objects
const addTwo = (a, b) => ({username : "Ronak"})

console.log(addTwo(5, 4));

// Arrow functn in array
const arr =[2,3,4,5,6]
arr.forEach(function() {} )
arr.forEach(() => {} )