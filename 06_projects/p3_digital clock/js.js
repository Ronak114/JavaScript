// Set interval will run the code after given interval.
// setInterval(function(){},1000);...Syntax

setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// const clock = document.getElementById('clock')
// const clockk = document.querySelector('#clock')