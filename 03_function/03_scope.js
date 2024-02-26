// {} comes with function,if else -->Scope
// {} with obj -->obj declaration
// node and browser scope are diff.

let a = 1
const b = 2
var c = 3
console.log(a)
console.log(b)
console.log(c)

//*******************var******* */
var f = 300
//global scope

if (true) {
    //block scope
    var f = 30
}
console.log(f)

/*******let******** */
let d = 300

if (true) {
    let d = 10
    console.log(d) 
}
console.log(d)




// console.log(d)
// console.log(e)