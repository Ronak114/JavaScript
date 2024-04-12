const random = (parseInt(Math.random() * 100 + 1))

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let preGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
        console.log(guess)
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("enter valid number");
    }
    else if (guess < 1) {
        alert("enter a more than 1")
    }
    else if (guess > 100) {
        alert("enter a no less than 100")
    }
    else {
        preGuess.push(guess);
        if (numGuess == 11) {
            displayGuess(guess);
            displayMsg(`game over.Random No was ${random}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess == random) {
        displayMsg("Guessed right");
        endGame();
    }
    else if (guess < random) {
        displayMsg("Guessed no is TOO low");
    }
    else if (guess > random) {
        displayMsg("Guessed no is TOO high");
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMsg(messgae) {
    lowOrHi.innerHTML = `<h2>${messgae}</h2>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disable', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
    random = (parseInt(Math.random() * 100 + 1));
    preGuess = []
    numGuess = 1
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    
    playGame = true;
})
}

