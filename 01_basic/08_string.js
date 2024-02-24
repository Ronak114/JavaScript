//String --> Object

//Declaration.
const name = "ronak"
const count = 50
// console.log(name + count); //outdated
console.log(`Hello I am ${name} and my repo count : ${count}`)

const anotherName = new String(`Ronak Pawar`);
console.log(name[0]);
console.log(name.__proto__); 
//To know any method/function of string by using console.

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(3));
console.log(name.indexOf('a'));

//slicing(last idx not included)
const newString = name.substring(0,2);
console.log(newString);
//In substring cannot provide neg val(it will ignore it and start from 0)

//start from last
const anotherString = name.slice(-1,0);
console.log(anotherString);

const newStringOnr = "   Roo   "
console.log(newStringOnr);
console.log(newStringOnr.trim());// remove spaces

//Go through documentation

const url = "https://ronak.com/abc%20xyz" //if spaces covert it into %20
url.replace('%20','-');
console.log(url);
console.log(url.replace('%20','-'));

console.log(url.includes('Roo'));

//To convert it into array
const Name ="Ronak-Dipak-Pawar";
console.log(Name.split("-"));