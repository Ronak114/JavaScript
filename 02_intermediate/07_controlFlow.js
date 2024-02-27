// if(false){
//     //it will not enter in th block
// }

//Comparison
// < ,> ,<=,>= ,== ,!= ,=== (check datatype) , !==

let age =22
if(age >= 18){
    console.log("Can vote");
}
else{
    console.log("Can't vote");
}
console.log("Always executed");

// Block Scope Error

// let score =200
// if(score >= 100){
//     let power = "fly"
//     console.log(`Power : ${power}`);
// }
// console.log(`Power : ${power}`);

// Implicite return

const balance = 1000
if(balance > 500) console.log("pass"),console.log("pass2");
// ; ->must , unreadable

// Nested condn
// if( condn 1 && condn2 ){ //both true o/w false

// }else if( condn 1 || condn2 ){ //eitherone is true

// }else{

// }