const myNum = [1, 2, 3]

//Reduce by function
const myTotal = myNum.reduce(function (acc, curr_val) {
    console.log(`acc: ${acc} and curr val: ${curr_val}`);
    return acc + curr_val
}, 0) // 0 val of acc

console.log(myTotal);

// Reduce by arrow funtn
const Total = myNum.reduce((acc, curr) => acc + curr, 0)

console.log(Total);

// Ex: Shopping cart

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);