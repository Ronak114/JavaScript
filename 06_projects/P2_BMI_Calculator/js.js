// form
const form = document.querySelector('form');
// this use case will give you empty value
// const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Enter valid height`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Enter valid weight`;
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        // show the result
        results.innerHTML = `<span> ${bmi} </span>`;
    }
});
// form is submitted by post type or get type.
// when submitted val jati hai server ke pass(.: need to stop)
//need to add eventlistener

//print underweight aand all