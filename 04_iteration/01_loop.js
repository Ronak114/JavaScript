// For loop
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log("best no");
    }
    console.log(element);
}

// Nested for loop
for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop : ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner loop : ${j}`);
    }   
}

//Loop on array
let myArr = ["a","b","c","d"]
console.log(myArr.length);
for (let i = 0; i < myArr.length; i++) { //no concept of outOfBound
    console.log(myArr[i]);
}

// Break
for (let i = 1; i <= 10; i++) {
    if( i == 5){
        console.log("found 5");
        break;
    }
    console.log(i)
}

// Continue
for (let i = 1; i <= 10; i++) {
    if( i == 5){
        continue;
    }
    console.log(i)
}