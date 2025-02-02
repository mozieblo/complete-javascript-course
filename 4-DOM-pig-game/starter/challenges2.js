/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn.
 (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score
of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of
them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
var scores, roundScore, activPlayer, gamePlaying;

init();

function init(){
    scores = [0, 0];
    roundScore = 0;
    activPlayer =0;
    gamePlaying = true;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';
}

document.querySelector('.btn-new').addEventListener('click', init);

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        var dice = Math.floor(Math.random() * 6) +1;
        var dice2 = Math.floor(Math.random() * 6) +1;
        var diceDOM = document.querySelector('.dice');
        var dice2DOM = document.querySelector('.dice2');
        diceDOM.style.display = 'block';
        dice2DOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        dice2DOM.src = 'dice-' + dice2 + '.png';
        if (dice !== 1 && dice2 !== 1){
            roundScore += dice + dice2;
            if (dice === 6 && dice2 === 6){
                scores[activPlayer] = 0;
                roundScore = 0;
                document.getElementById('score-' + activPlayer).textContent = scores[activPlayer];
            }
        } else {
            roundScore = 0;
        }
        document.getElementById('current-' + activPlayer).textContent = roundScore;
        changeActivPlayer();
    }
});


document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying){
        scores[activPlayer] += roundScore;
        document.getElementById('score-' + activPlayer).textContent = scores[activPlayer];
        roundScore = 0;
        var input = document.querySelector('.final-score').value;
        var winningScore;

        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        document.getElementById('current-' + activPlayer).textContent = roundScore;
        if (scores[activPlayer] >= winningScore) {
            document.getElementById('name-' + activPlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activPlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activPlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            changeActivPlayer();
        }
    }
});

function changeActivPlayer(){
    switch (true) {
        case roundScore === 0 && activPlayer === 0:
            activPlayer = 1;
            document.querySelector('.player-1-panel').classList.toggle('active');
            document.querySelector('.player-0-panel').classList.toggle('active');
            // document.querySelector('.player-0-panel').classList.remove('active');
            // document.querySelector('.player-1-panel').classList.add('active');
            break;
        case roundScore === 0 && activPlayer === 1:
            activPlayer = 0;
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            // document.querySelector('.player-1-panel').classList.remove('active');
            // document.querySelector('.player-0-panel').classList.add('active');
            break;
        default:
            break;
    }
}

//document.querySelector('#current-' + activPlayer).textContent = dice;
//document.querySelector('#current-' + activPlayer).innerHTML = "<em><b>" + dice + "</b></em>";
//var x = document.querySelector('#score-1').textContent;
//console.log(x);