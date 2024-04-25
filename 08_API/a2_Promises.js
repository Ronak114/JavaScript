// PROMISE : eventual completion of task
// Mostly promises are being consumed

// asyn -> wait untill ur chance comes.

// Initial days --> used blueBird afterward it integrated in nodejs.

// CREATION OF PROMISE.
// SYNTAX : const promise = new Promise(fun(resolve,reject))

const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is compelete');
        resolve() //now it is connected to "then"
    }, 5000)
})

// CONSUMPTION OF PROMISE.
promiseOne.then(function () {
    console.log("Promise consumed");
})


// another way to do.
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 5000)

}).then(function () {
    console.log("Async 2 resolved");
})


// take data.
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Ronak", email: "ronak@example.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})


// new promise created.
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "ronak", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

//consumption of promise.
//SYNTAX : promiseFour.then().catch().finally()
promiseFour
.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


// FETCHING DATA USING ASYN FUN.
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()


// SAME DONE USING FETCH IN FETCH FILE.
// FIRST - fetching THEN - promises

// // promise.all
// // yes this is also available, kuch reading aap b kro.