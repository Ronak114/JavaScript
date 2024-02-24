// *********** Dates **************

let date = new Date();
console.log(date);
console.log(date.toString()); // day mm dd yy hh:mm:ss 
console.log(date.toLocaleString()); // dd/mm/yy ,hh:mm:ss am
console.log(date.toISOString()); // yy-mm-dd time
console.log(date.toJSON()); // yy-mm-dd time

console.log(typeof date ); // Obj

let mydate = new Date(2023,0,23,5,3); //month start from 0.
console.log(mydate.toLocaleString()); //yy mm dd hr mm

let newDate = new Date("2023-01-14");
// let newDate = new Date("01-14-2023");
console.log(newDate.toLocaleString());
console.log(newDate.getMonth() + 1); //similar other methods 
console.log(" ")

// *************** Time ***************
let timeStamp =  Date.now();
console.log(timeStamp); //ms
console.log(newDate.getTime());//time from given date

// To convert in sec
console.log(Math.floor(Date.now()/1000));