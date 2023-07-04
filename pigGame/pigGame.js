'use strict';

// selecting Elements
let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById ('score--1');
let current0 = document.getElementById('current--0');
let current1 = document.getElementById('current--1');

let diceEl = document.querySelector('.dice');
let btnNew = document.querySelector('.btn.btn--new');
let btnRoll = document.querySelector('.btn.btn--roll');
let btnHold = document.querySelector('.btn.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let playing = true;
let scores = [99, 0];
let currentScore = 0;
let activePlayer = 1;
let playerScore = 0;
let dice= 0;
let turnOver = false;



const switchPlayer = function () {
    activePlayer = activePlayer === 0 ? 1 : 0; 
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    turnOver = false;

};

// Rolling dice functionality
btnRoll.addEventListener('click', function() {
    switchPlayer();
    if(playing){
            // 1. Generating a random dice roll
            dice = Math.trunc(Math.random()* 5)+1; 

            // 2. displaly dice
            diceEl.classList.remove('hidden');
            diceEl.src = `images/dice-${dice}.png`;

            // 3. add dice to current score
            document.getElementById(`current--${activePlayer}`).textContent=dice;

    }
            


});

btnHold.addEventListener('click',function () {
     if(!turnOver){
        turnOver = true;
        scores[activePlayer]+=dice;
        document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer]
        }
    if (scores[activePlayer]>= 100) {
        // finish the game
        document.getElementById(`score--${activePlayer}`).innerHTML =
        "<p>&#128513</p>";
        activePlayer = activePlayer === 0 ? 1 : 0; 
        document.getElementById(`score--${activePlayer}`).innerHTML = 
        "<p>&#128557</p>";
        playing = false;
    }
    // 1. Add current score to active player's score

});


btnNew.addEventListener('click',function(){

    // 1. Reset all variables to their intial values
    playing = true;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0; 
})

