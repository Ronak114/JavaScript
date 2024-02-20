//******js --> statically or dynamically typed??

//Typescript
//const score:number = 100 //provide safety to var

//2 types of datatypes --> primitive and non-premitive.
//Difference 1.how they store value 2.how they call ..call by val or call by reference

// 1.Primitive..call by val(original data is copied)
// 7 type : String, Number, boolean, null(empty but not 0), undefined (var declared but val is not assign), Symbol(to make unique), BigInt




//symbol
const id = Symbol("1234")
const anotherId = Symbol("1234")
console.log(id == anotherId);

//Reference(Non Primitive)
// Array, Objects, Functions

//Array
const heros =["Ironman","Captain America","Spiderma"]

//Objects
let myObj={
    name : "Ronak",
    age : 21,
}

//function

const myFun =function(){
    console.log("Hello world");
}

//To check datatypes
console.log(typeof(id));

//check for every datatype..will ask in interview