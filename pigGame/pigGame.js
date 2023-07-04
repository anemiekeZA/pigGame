'use strict';

// selecting Elements
let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById ('score--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');

let diceEl = document.querySelector('.dice');
let btnNew = document.querySelector('.btn.btn--new');
let btnRoll = document.querySelector('.btn.btn--roll');
let btnHold = document.querySelector('.btn.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let playing = true;
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playerScore = 0;

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; 
    
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

};

// Rolling dice functionality
btnRoll.addEventListener('click', function() {
    if(playing)
    {        // 1. Generating a random dice roll
            const dice = Math.trunc(Math.random()* 5)+1; 

            // 2. displaly dice
            diceEl.classList.remove('hidden');
            diceEl.src = `images/dice-${dice}.png`;

            // 3. add dice to current score
            scores[activePlayer] += dice;
            document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

            if (scores[activePlayer]>= 100) {
                // finish the game
                document.getElementById(`score--${activePlayer}`).textContent = "WINNER";
                activePlayer = activePlayer === 0 ? 1 : 0; 
                document.getElementById(`score--${activePlayer}`).textContent = "LOSER";
                playing = false;
            }


            // 4. switch player at the end of a turn
            switchPlayer();}
            


});

btnHold.addEventListener('click',function () {

        // 1. Add current score to active player's score
        let scores = activePlayer =+ currentScore ;
        scores[1] = scores[1] + currentScore;

        document.getElementById(`score--${activePlayer}`).textContent = scores(activePlayer) ;

        // 2. Check if player's score is >=100
        if (scores[activePlayer]>= 100) {
            // finish the game
            playing = false;
            diceEl.classList.remove('add');
            document.querySelector(`.player--${activePlayer}`).classList.add('.player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('.player--active');
        } else {
            // switch to the next player 
            switchPlayer();
            confetti();
        }

});


btnNew.addEventListener('click',function(){

    // 1. Reset all variables to their intial values
    playing = true;
    score0El.textContent = 0;
    score1El.textContent = 0;
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0; 
})