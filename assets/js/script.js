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
    let result
    if (playerChoice === computerChoice) {
        result = "IT'S A DRAW!";
    }
    if (playerChoice === "the-rock" && computerChoice === "paper-airplane") {
        result = "YOU LOSE!";
        addComputerScore ();
    }
    if (playerChoice === "the-rock" && computerChoice === "edward-scissorhands") {
        result = "YOU WIN!";
        addPlayerScore ();
    }
    if (playerChoice === "paper-airplane" && computerChoice === "edward-scissorhands") {
        result = "YOU LOSE!";
        addComputerScore ();
    }
    if (playerChoice === "paper-airplane" && computerChoice === "the-rock") {
        result = "YOU WIN!";
        addPlayerScore ();
    }
    if (playerChoice === "edward-scissorhands" && computerChoice === "the-rock") {
        result = "YOU LOSE!";
        addComputerScore ();
    }
    if (playerChoice === "edward-scissorhands" && computerChoice === "paper-airplane") {
        result = "YOU WIN!";
        addPlayerScore ();
    }

    
    let resultMessage = document.createElement('div');
    
    gameArea.appendChild(resultMessage);
    gameArea.insertBefore(resultMessage, gameArea.children[3]);
    
    resultMessage.outerHTML = 
        `<div class="result-message">
            <p>${result}</p>
            <button id="next-round-btn">NEXT ROUND</button>
        </div>` ;

    let nextRoundButton = document.getElementById("next-round-btn");
    nextRoundButton.addEventListener("click", nextRound);

    if (nextRoundButton.event === "click") {
    resultMessage.style.display = 'none'; }
}

function addPlayerScore () {
    let oldScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++oldScore;
    
}

function addComputerScore () {
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;

}

function nextRound () {
    //let nextRoundButton = document.getElementById("next-round-btn");
    battleContainer.style.display = 'none';
    choicesContainer.style.display = 'flex';

    
}