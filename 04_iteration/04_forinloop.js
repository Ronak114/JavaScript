//forin Loop on object
const myObj = {
    'game1': "FootBall",
    'game2': "Basketball",
    'game3': "Cricket",
    'game4': "Chess",
}
for (const key in myObj) {
//    console.log(key);
//    console.log(myObj[key]);
   console.log(`${key} - ${myObj[key]} `);
}

//forin loop on arrays
const programming = ["html","css","js","java"]
for (const i in programming) {
        console.log(i);
        console.log(programming[i]);
}

//forin loop -> keys
//forof loop -> values

// //forin loop on maps.
// const map = new Map()
// map.set('IN', "India")
// map.set('SL', "Sri Lanka")
// map.set('IN', "India")
// console.log(map); // OP -> Obj

// for (const i in map) {
//         console.log(map[i]);
// }
// NO ERROR but not iterable.