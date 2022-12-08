/**Wait for the DOM to finish loading before running the game
 * Get the button elements and add event listeneres to them*/
document.addEventListener("DOMContentLoaded", function() {
   let buttons = document.getElementsByTagName("button");
})

const launchButton = document.getElementById("launch-game-btn");
const introPage = document.getElementById("intro-page");
const gameArea = document.getElementById("game-area");
const choicesContainer = document.getElementById("choices-container");
const possibleChoices = document.querySelectorAll(".choice");
const battleContainer = document.getElementById("battle-container");
const playerChoiceDisplay = document.getElementsByClassName("player-choice");
const computerChoiceDisplay = document.getElementsByClassName("computer-choice");
const resultMessage = document.getElementsByClassName("result-message");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let playerChoice
let computerChoice


/**Event Listener for Launch Game Button */
launchButton.addEventListener("click", launchGame);

for (let choice in possibleChoices) {
    possibleChoices[choice].addEventListener("click", possibleChoice)
}



function launchGame() {
    introPage.style.display = 'none';
    gameArea.style.display = 'block';
}

function possibleChoice (event) {
    playerChoice = event.target.className;
    playerChoiceDisplay[0].innerHTML = playerChoice;

    choicesContainer.style.display = 'none';
    battleContainer.style.display = 'flex';

    createComputerChoice();
}

function createComputerChoice () {
    let randomNumber = Math.floor(Math.random() * possibleChoices.length) +1;
    
    switch (randomNumber) {
        case 1:
            computerChoice = "the-rock";
            break;
        case 2:
            computerChoice = "paper-airplane";
            break;
        case 3:
            computerChoice = "edward-scissorhands";
    }

    computerChoiceDisplay[0].innerHTML = computerChoice;

    createResults();
}

function createResults () {
    let result;

    switch (playerChoice + computerChoice) {
        case "the-rockthe-rock":
        case "paper-airplanepaper-airplane":
        case "edward-scissorhandsedwardscissorhands":
            result = "IT'S A DRAW!";
            break;
        case "the-rockedward-scissorhands":
        case "edward-scissorhandspaper-airplane":
        case "paper-airplanethe-rock":
            result = "YOU WIN!";
            addPlayerScore ();
            break;
        case "the-rockpaper-airplane":
        case "edward-scissorhandsthe-rock":
        case "paper-airplaneedward-scissorhands":
            result = "YOU LOSE!";
            addComputerScore ();
            break;
    }

    resultMessage[0].style.display = 'flex';
    
    resultMessage[0].innerHTML = 
        `<h3>${result}</h3>
         <button id="next-round-btn">NEXT ROUND</button>` ;

    let nextRoundButton = document.getElementById("next-round-btn");
    nextRoundButton.addEventListener("click", nextRound);
}

function addPlayerScore () {
    let oldScore = parseInt(playerScore.innerText);
    playerScore.innerText = ++oldScore;
}

function addComputerScore () {
    let oldScore = parseInt(computerScore.innerText);
    computerScore.innerText = ++oldScore;
}

function nextRound () {
    battleContainer.style.display = 'none';
    choicesContainer.style.display = 'flex';
    resultMessage[0].style.display = 'none';
    checkScore();
}


function checkScore () {
    if (playerScore.innerText === 5) {
        console.log("YOU WIN!")
    }
    if (computerScore.innerText === 5) {
        console.log("YOU LOSE")
    }
}