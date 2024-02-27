// Immediately Invoked Function Expressions(IIFE)
// To prevent pollution from global var and to call it immediately

(function sample() {
    console.log(`Hello`);
})();
// (defination) (execution call)

(() => {
    console.log('Hello');
})();
// error ..corrected by ;

(function example() {
    //named IIFE
    console.log('Hello all')
})();
// Again error..actually they don't know where to stop the execution.Therefore add ;

//To pass the arguments
((name) => {
    // Simple IIFE
    console.log(`Hello ${name}`)
})("Ronak");