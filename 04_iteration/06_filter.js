const num = [1, 2, 3, 4, 5, 6, 7]

//filter
const newNum = num.filter((n) => n > 4) //takes call back
console.log(newNum);

// another way
// const newNum = num.filter((n) => {
//     return n > 4 //return ->scope
// }
// )

// foreach
const new_Num = []
num.forEach((i) => {
    if (i > 4) {
        new_Num.push(i)
    }
});
console.log(new_Num)

// Filter
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === 'History')
console.log(userBooks);

userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})//return -> scope
console.log(userBooks);