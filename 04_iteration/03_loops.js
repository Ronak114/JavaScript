// forof loop on array
const myArr = ["a", "b", "c", "d"]
for (const i of myArr) {
    console.log(i);
}

const msg = "Hello world!"
for (const i of msg) {
    console.log(i);
}

//Maps..unique value/object/same seq
const map = new Map()
map.set('IN', "India")
map.set('SL', "Sri Lanka")
map.set('IN', "India")
console.log(map); // OP -> Obj

//forof loop on map
for (const i of map) {
    console.log(i); // OP -> array
}

//another way
for (const [key, value] of map) {
    console.log(key, '-', value);
}

// //forof Loop on object
// const myObj = {
//     'game1': "FootBall",
//     'game2': "Basketball",
// }

// for (const i of myObj) {
//     console.log(i);
// }
// //Error : Not iterable