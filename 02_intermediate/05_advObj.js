//De-structuring of object.
const student = {
    name : "Ronak",
    RegNo : 100,
    branch : "IT",
}
// console.log(student.branch) // normal structure

const {RegNo : RollNo} = student;
// console.log(RegNo);
console.log(RollNo);