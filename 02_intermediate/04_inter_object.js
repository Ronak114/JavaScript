//

// same same but diff.
// const instaUser = new Object(); // singleton
const instaUser ={} // non singleton
instaUser.id = "#abc123";
instaUser.name = "Paxton";
console.log(instaUser);

const anotherUser = {
    email : "pax@gmail.com",
    fullName : {
        fname : "Paxton",
        lname : "Yoshida"
    }
}

console.log(anotherUser);
console.log(anotherUser.fullName);

//combine 2 objects
const obj1 ={ 1 : "a" , 2 : "b", 3 : "c"}
const obj2 ={ 4 : "d" , 5 : "e", 6 : "f"}

const obj3 = {obj1 , obj2}
console.log(obj3); //obj inside obj

const obj4 =Object.assign(obj1,obj2)
console.log(obj4);

const obj5 =Object.assign({},obj1,obj2) //{}-->target ,other as source
console.log(obj5);

const obj6 ={...obj1 , ...obj2} //spread and combine
console.log(obj6);

//datatype -->array
console.log(Object.keys(instaUser))
console.log(Object.values(instaUser))
console.log(Object.entries(instaUser))

console.log(instaUser.hasOwnProperty('name'))