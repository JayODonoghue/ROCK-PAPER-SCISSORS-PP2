/**List of global variables required throughout */
const launchButton = document.getElementById("launch-game-btn");
const introPage = document.getElementById("intro-page");
const gameArea = document.getElementById("game-area");
const choicesContainer = document.getElementById("choices-container");
const possibleChoices = document.querySelectorAll(".choice");
const battleContainer = document.getElementById("battle-container");
const imagesOfOpponents = document.getElementsByClassName("images-of-opponents");
const playerChoiceDisplay = document.getElementsByClassName("player-choice");
const computerChoiceDisplay = document.getElementsByClassName("computer-choice");
const resultMessage = document.getElementsByClassName("result-message");
const newGameButtons = document.querySelectorAll(".new-game-btn");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let playerChoice
let computerChoice
let winnerModal
let loserModal


/**Event Listener for Launch Game Button */
launchButton.addEventListener("click", launchGame);

/**Event Listener for when user clicks which their selection */
for (let choice of possibleChoices) {
    choice.addEventListener("click", possibleChoice)
}


function launchGame() {
    introPage.style.display = 'none';
    gameArea.style.display = 'block';
}

function possibleChoice (event) {
    playerChoice = event.target.className;
    
    switch (playerChoice) {
        case "the-rock": 
            playerChoiceDisplay[0].innerHTML = imagesOfOpponents[0].children[0].outerHTML;
        break;
        case "edward-scissorhands": 
            playerChoiceDisplay[0].innerHTML = imagesOfOpponents[0].children[1].outerHTML;
        break;
        case "paper-airplane":
            playerChoiceDisplay[0].innerHTML = imagesOfOpponents[0].children[2].outerHTML
    }

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

    switch (computerChoice) {
        case "the-rock": 
            computerChoiceDisplay[0].innerHTML = imagesOfOpponents[0].children[0].outerHTML;
        break;
        case "edward-scissorhands": 
            computerChoiceDisplay[0].innerHTML = imagesOfOpponents[0].children[1].outerHTML;
        break;
        case "paper-airplane":
            computerChoiceDisplay[0].innerHTML = imagesOfOpponents[0].children[2].outerHTML
    }

    createResults();
}

function createResults () {
    let result;

    switch (playerChoice + computerChoice) {
        case "the-rockthe-rock":
        case "paper-airplanepaper-airplane":
        case "edward-scissorhandsedward-scissorhands":
            result = "IT'S A DRAW!";
            break;
        case "the-rockedward-scissorhands":
        case "edward-scissorhandspaper-airplane":
        case "paper-airplanethe-rock":
            result = "YOU WIN!";
            addPlayerScore ();
            checkScore ();
            break;
        case "the-rockpaper-airplane":
        case "edward-scissorhandsthe-rock":
        case "paper-airplaneedward-scissorhands":
            result = "YOU LOSE!";
            addComputerScore ();
            checkScore ();
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
    let winnerModal = document.getElementById("winner-modal")
    let loserModal = document.getElementById("loser-modal")

    if (playerScore.innerText === "5") {
       winnerModal.style.display = "block"
    }
    if (computerScore.innerText === "5") {
        loserModal.style.display = "block"
    }

    newGameButtons[0].addEventListener("click", newGame);
    newGameButtons[1].addEventListener("click", newGame);

}


function newGame () {
    let winnerModal = document.getElementById("winner-modal")
    let loserModal = document.getElementById("loser-modal")
    loserModal.style.display = "none";
    winnerModal.style.display = "none";
    battleContainer.style.display = 'none';
    choicesContainer.style.display = 'flex';
    resultMessage[0].style.display = 'none';
    playerScore.innerText = "0";
    computerScore.innerText = "0";
}

