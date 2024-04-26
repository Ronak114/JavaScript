let myName = "ronak     "
let mychannel = "chai   "
console.log(myName.length); // op : 10
console.log(myName.trim()); // op : ronak
console.log(myName.trim().length); // op : 5

//Task : trueLength should provide me true length of myName.
// method : trueLength , property : trueLength()
// console.log(myName.trueLength);



// Concept
let myHeros = ["thor", "spiderman","ironman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    ironman: "jarvis",

    getSpiderPower: function(){
        console.log(`Spidy power : ${this.spiderman}`);
    }
}

Object.prototype.ronak = function(){
    console.log(`ronak is present in all objects`);
}

Array.prototype.heyronak = function(){
    console.log(`ronak says hello`);
}

heroPower.ronak()  // funtn - obj.
myHeros.ronak() // arrays - obj.  
myHeros.heyronak() // array ko diya
// heroPower.heyronak() // error




/******** inheritance **********/

const User = {
    name: "ronak",
    email: "ronak@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    
    // Old-way
    __proto__: TeachingSupport // TA will have properties of TeachingSupport.
}

Teacher.__proto__ = User

// modern syntax : New way
Object.setPrototypeOf(TeachingSupport, Teacher)




// task soln: 
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

myName.trueLength()
"pawar".trueLength()
"iceTea".trueLength()