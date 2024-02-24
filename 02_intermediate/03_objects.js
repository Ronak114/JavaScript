//declare --> 1.literals  2.constructor

//singleton-->whenever a constructor is made it is singleton
// literals --> no singleton whereas constructor --> singleton

//Object literals
const sym = Symbol("Key1")
const newSymbol = Symbol("Key100")

//declaration
const user = {
    name: "Ronak",
    "full name": "Ronak Pawar",
    age: 21,
    isLoggesIn: false,
    lastLoginDays: ["Mon", "Sat"],
    sym: "key2",
    [newSymbol]: "key200", //imp
}

//Access
console.log(user.name);
console.log(user["name"]); //"" ->it consider it as string
console.log(user["full name"]); //cannot access through (.)
console.log(user.sym); //op key2
console.log(typeof (user.sym)); //op string but we want symbol
console.log(user[newSymbol]);

//To modify
user.age = 100;
console.log(user.age);

// //To freeze obj
// Object.freeze(user)
// user.age = 165;
// console.log(user);

//function
user.greeting = function(){
    console.log("hello there");
}
user.greeting2 = function(){
    console.log(`hello ${this.name}. Good morning!`);
}

// console.log(user.greeting); // funtn --> anonymous
console.log(user.greeting());
console.log(user.greeting2());