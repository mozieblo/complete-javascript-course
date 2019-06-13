/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activPlayer;

scores = [0,0];
roundScore = 0;
activPlayer = 0;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


function resetScore(){

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').style.marginBottom = '130px';
    document.getElementById('score-1').style.marginBottom = '130px';
    scores = [0, 0];
    roundScore = 0;
    activPlayer =0;
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', resetScore);

document.querySelector('.btn-roll').addEventListener('click', function(){

    var dice = Math.floor(Math.random() * 6) +1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    if (dice !== 1){
            roundScore += dice;
    } else {
            roundScore = 0;
    }
    document.getElementById('current-' + activPlayer).textContent = roundScore;

});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (activPlayer === 0) {
        scores[0] += roundScore;
        document.getElementById('score-' + activPlayer).textContent = scores[0];
        roundScore = 0;
    } else {
        scores[1] += roundScore;
        document.getElementById('score-' + activPlayer).textContent = scores[1];
        roundScore = 0;
    }
    document.getElementById('current-' + activPlayer).textContent = roundScore;
    if (scores[0] >= 100){
        document.getElementById('score-0').style.marginBottom = '35px';
        document.getElementById('score-0').innerHTML = scores[0] + '<br>WINNER!</br>';
    } else if (scores[1] >=100){
        document.getElementById('score-1').innerHTML = scores[1] + '<br>WINNER!</br>';
        document.getElementById('score-1').style.marginBottom = '35px';
    } else {

    }

});

function changeActivPlayer(){
    switch (true) {
        case roundScore === 0 && activPlayer === 0:
            activPlayer = 1;
            break;
        case roundScore === 0 && activPlayer === 1:
            activPlayer = 0;
            break;
        default:
            break;
    }
}

document.querySelector('.btn-roll').addEventListener('click', changeActivPlayer);
document.querySelector('.btn-hold').addEventListener('click', changeActivPlayer);



//document.querySelector('#current-' + activPlayer).textContent = dice;
//document.querySelector('#current-' + activPlayer).innerHTML = "<em><b>" + dice + "</b></em>";
//var x = document.querySelector('#score-1').textContent;
//console.log(x);