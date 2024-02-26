//Nested Scope.

function one() {
    const username = "Ronak"

    function two() {
        const website = "Github"
        console.log(username);
    }
    //console.log(website);
    two()
}
one()

//inside if else condn
if (true) {
    const uname = "Ronak"
    if (uname == "Ronak") {
        const website = " github"
        console.log(uname + website)
    }
    // console.log(website);
}
// console.log(uname);

/******** EXTRA ********** */
console.log(addone(5))

function addone(num) {
    return num + 1
}

/***********hoisting*********** */
// console.log(addTwo(5)) // error

//Expression
const addTwo = function (num) {
    return num + 2
}
console.log(addTwo(5))