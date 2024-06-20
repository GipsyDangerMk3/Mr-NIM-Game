'use strict';

let playerWins = Number(document.querySelector('.playerWins').textContent);
let nimWins = Number(document.querySelector('.nimWins').textContent);
let currentBalls = randomGenerator ();
document.querySelector('.numBalls'). textContent = currentBalls;

//Button Clicks
document.querySelector('.btn1').addEventListener('click', (e) => {
    currentBalls--;
    document.querySelector('.numBalls'). textContent = currentBalls;
    if (!playerWinCheck()) {
        nimTurn();
    }
})
document.querySelector('.btn2').addEventListener('click', (e) => {
    currentBalls -= 2;
    document.querySelector('.numBalls'). textContent = currentBalls;
    if (!playerWinCheck()) {
        nimTurn();
    }
})
document.querySelector('.btn3').addEventListener('click', (e) => {
    currentBalls -= 3;
    document.querySelector('.numBalls'). textContent = currentBalls;
    if (!playerWinCheck()) {
        nimTurn();
    }
})
document.querySelector('.reset').addEventListener('click', (e) => {
    currentBalls = randomGenerator();
    document.querySelector('.numBalls'). textContent = currentBalls;
    document.querySelector('.heading').textContent = "Number of Balls Left";
    document.querySelector('.message').textContent = "Mr. NIM is waiting..."

})

//Nim Decisions
function nimTurn () {
    if (currentBalls >= 4) {
        //Decide to corner player
        if (currentBalls % 4 === 3) {
            currentBalls -= 3;
            document.querySelector('.numBalls').textContent = currentBalls;
            document.querySelector('.message').textContent = "Mr. NIM takes 3 Balls...";
        } else if (currentBalls % 4 === 2) {
            currentBalls -= 2;
            document.querySelector('.numBalls').textContent = currentBalls;
            document.querySelector('.message').textContent = "Mr. NIM takes 2 Balls...";
        } else if (currentBalls % 4 === 1) {
            currentBalls--;
            document.querySelector('.numBalls').textContent = currentBalls;
            document.querySelector('.message').textContent = "Mr. NIM takes 1 Ball...";
        } else {
            //Decide to rely on player being dumb
            let randomBalls= (Math.trunc(Math.random()*3) + 1);
            currentBalls -= randomBalls;
            document.querySelector('.numBalls').textContent = currentBalls;
            document.querySelector('.message').textContent = `Mr. NIM takes ${randomBalls} Balls...`;
        }
    } else {
        //Decide to win
        if (currentBalls % 3 === 0) {
            currentBalls -= 3;
            document.querySelector('.numBalls').textContent = currentBalls;
            document.querySelector('.message').textContent = "Mr. NIM takes 3 Balls...";
            nimWinCheck();
        } else if (currentBalls % 3 === 2) {
            currentBalls -= 2;
            document.querySelector('.numBalls').textContent = currentBalls;
            document.querySelector('.message').textContent = "Mr. NIM takes 2 Balls...";
            nimWinCheck();
        } else {
            currentBalls--;
            document.querySelector('.numBalls').textContent = currentBalls;
            document.querySelector('.message').textContent = "Mr. NIM takes 1 Ball...";
            nimWinCheck();
        }
    }

}
//Win Checks
function nimWinCheck (){
    if (currentBalls === 0) {
        console.log("Mr.NIM WINS")
        document.querySelector('.heading').textContent = "YOU LOSE!";
        nimWins++;
        document.querySelector('.nimWins').textContent = nimWins;
    }
}
function playerWinCheck () {
    if (currentBalls === 0) {
        console.log("PLAYER WINS")
        document.querySelector('.heading').textContent = "YOU WIN!";
        playerWins++;
        document.querySelector('.playerWins').textContent = playerWins;
    } else {
        return false
    }
}
//RNG
function randomGenerator () {
    return Math.trunc(Math.random() * (21 - 12)) + 12;
}