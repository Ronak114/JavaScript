// arrays

//()-->parenthesis []-->bracket {}-->braces

const arr = [0, 1, "ronak", 3, true, 5]
//resizable . mix of datatypes . only accessible through index . 0 based indexing
// array-copy operation create shalllow copies.(same reference pt means original copy pan change hnr)
//deep copies.(do not have same reference pt means original copy change nhi hnr)

const myArr = new Array(0, 1, "ronak", 3, true, 5)
console.log(myArr[2]);

//methods
myArr.push(6) //add at the end
console.log(myArr);
myArr.pop() //remove from end
console.log(myArr);
myArr.unshift(10) // add in beg (need to shift whole array :. bekar)
console.log(myArr);
myArr.shift()//remove 1st element
console.log(myArr);
console.log(myArr.includes(188));
console.log(myArr.indexOf(1));

const newArr = myArr.join() // convert it into string
console.log(newArr);
console.log(" ");
//slice , splice

console.log("A", myArr); // original array

const mynewArr1 = myArr.slice(1, 3); // does not include 3
console.log(mynewArr1);
console.log("B", myArr); //whole array is printed

const mynewArr2 = myArr.splice(1, 3); // include 3
console.log(mynewArr2);
console.log("c", myArr); //only remaining array is printed