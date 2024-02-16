let score = "33"; //string

console.log(typeof score); // OP - string
// console.log(typeof (score));

let valInNumber = Number(score); //like typecasting
console.log(typeof valInNumber); // OP - number
console.log(" ");

let score1 = "33abc";
console.log(typeof score1); // OP - string

let valInNumber1 = Number(score1); 
console.log(typeof valInNumber1);
console.log(valInNumber1); // OP - NAN
console.log(" ");
//Note : always typecast

let score2 = null;
console.log(typeof score2); // OP - object

let valInNumber2 = Number(score2); 
console.log(typeof valInNumber2);
console.log(valInNumber2); // OP - 0
console.log(" ");

let score3 = undefined;
console.log(typeof score3); // OP - undefined

let valInNumber3 = Number(score3); 
console.log(typeof valInNumber3);
console.log(valInNumber3); // OP - Nan
console.log(" ");

let score4 = true;
console.log(typeof score4); // OP - boolean

let valInNumber4 = Number(score4); 
console.log(typeof valInNumber4);
console.log(valInNumber4); // OP - 1
console.log(" ");

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log(" ");

let isLoggedInn = ""
let booleanIsLoggedInn = Boolean(isLoggedInn)
console.log(booleanIsLoggedInn);
console.log(" ");

let isLoggedIn2 = "Ronak"
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2);
console.log(" ");

//Summary
//"33"-->33
//"33abc"-->NAN
// true -->1 ; false -->0 or vicecers
// "Ronak"--1 ; empty -->0
