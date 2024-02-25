// funtn defination
function printName() {
    console.log("R");
    console.log("0");
}
// printName --> funtn reference. printName() --> funtn execution
printName() //calling a funtn

function addTwoNO(a, b) { // parameters
    console.log(a + b);
}
addTwoNO(5, 4) // arguments

// const result = addTwoNO(5, 4)
// console.log("Result: ", result); //OP ->undefined

/************* how should we declare funtn ***** */
function mulTwoNO(a, b) {
    // let prod = a * b
    // return prod
    return a * b
    console.log("HII") //unreachable code
}
const prodt = mulTwoNO(5, 4)
console.log("Result: ", prodt);
/********This shows return and console.log works differently***** */

function loginUserMessgae(username) {
    return `${username} just logged in`;
}
console.log(loginUserMessgae("Ronak"))
console.log(loginUserMessgae()) // OP-->undefined