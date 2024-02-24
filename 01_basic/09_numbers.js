// Number

const score = 400
console.log(score); // automatically detected

const balance = new Number(100)
console.log(balance);

console.log(balance.toString()); // convert to string 
console.log(balance.toString().length); // length of string
console.log(balance.toFixed(2)); // after pt 2 decimal

const otherNum = 23.89654
console.log(otherNum.toPrecision(3)); // in total 3 no.

const hundreds = 1000000
console.log(hundreds.toLocaleString());

// In console -> prototype other methods.