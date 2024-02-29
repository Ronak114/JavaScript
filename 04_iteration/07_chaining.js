const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = myNumers.map( (n) => { return n + 10})
console.log(newNum);

// Chaining
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1) // updated val of num
                .filter( (num) => num >= 40)
console.log(newNums);