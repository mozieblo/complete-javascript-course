
/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
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
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        if (dice !== 1){
            roundScore += dice;
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

        document.getElementById('current-' + activPlayer).textContent = roundScore;
        if (scores[activPlayer] >= 100) {
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