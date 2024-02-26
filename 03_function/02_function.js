//Shopping cart..(where we don't know no. of parameters)

function calCartPrice1(...num1) { // rest operator
    return num1
}
console.log(calCartPrice1(200, 400, 600))
// OP -> array

function calCartPrice(val1, val2, ...num1) {
    return num1
}
console.log(calCartPrice(200, 400, 600, 2000))
// OP -> [ 600, 20000 ]

//function with objects
const user = {
    username: "Ronak",
    price: 200,
}
function handleObj(anyobject) {
    console.log(`Username : ${anyobject.username} and price : ${anyobject.price}`);
}
handleObj(user)

handleObj({
    username: "Teja",
    price: 299,
})

//function with array
const newArr = [100, 200, 300]

function retSecVal(getArr) {
    return getArr[1]
}

console.log(retSecVal(newArr))
console.log(retSecVal([700, 800, 900, 300]))