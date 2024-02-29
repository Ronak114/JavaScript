const lang = ["html", "css", "js", "java", "python"]

// lang.forEach(function (item) {
//     console.log(item);
// })

// //Using arrow funtn
// lang.forEach((item) => {
//     console.log(item);
// })

//Using arrow funtn
lang.forEach((item,index,arr) => {
    console.log(item,index,arr);
} )

// // By reference
// function printMe(val) {
//     console.log(val);
// }
// lang.forEach(printMe)

const sample =[
{
    state : "Maha",
    city : "Mumbai",
},
{
    state : "TN",
    city : "Chennai",
},
{
    state : "Goa",
    city : "Panaji",
},
]

sample.forEach((item) => {
    console.log(item.state);
})