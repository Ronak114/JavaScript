/************ Obj literal - literally a obj********** */
const user = {
    // Properties
    username: "ronak",
    loginCount: 10,
    signedIn: true,

    //method
    getUserDetails: function () {
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`); // this is used for curr contex
        console.log(this); // will provide curr contex
    }
}

console.log(user.username)
console.log(user.getUserDetails());
console.log(this); // o/p : {} ...global contex is empty but inside browser bht saara.



/*******Constructor funtn (new) - allow us to craete multiple instance from one obj.******* */

function User(username, loginCount, isLoggedIn){
    
    //Properties
    this.username = username; // this.username = myusername (var)
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    //Method
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}
// const userOne = User("ronak", 12, true)
// console.log(userOne); // ronak
// const userTwo = User("js", 11, false)
// console.log(userOne); // js therefore overriding

/* use NEW KEYWORD.
 1. empty obj created - instance.
 2. construction fun call hota hai.
 3. this - argu injected. */

const userOne = new User("ronak", 12, true)
const userTwo = new User("js", 11, false)
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);
