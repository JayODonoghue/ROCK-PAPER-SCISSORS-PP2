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

/**First function called into action when the launch-game-btn is clicked.
 * Transitions from the intro page to the game area.
 */ 
function launchGame() {
    introPage.style.display = 'none';
    gameArea.style.display = 'block';
}

/**This function is called upon when the user makes their selection from the 3 choices made available.
 * Once the user selects their choice the createComputerChoice is called upon.
 * Also once the selection is made, the battle container is called upon and the players choice is used for display.
 */
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

/**This function randomly chooses the computers choice from an array and the selection is then also used for the battle container.
 * This then calls upon the create results function.
 */
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

/**Checks to determine who is the winner of the round using string concatenation. 
 * Result displays stating the verdict.
 * Once the reults message is displayed it calls the on the score functions.
 * The next round button is also called and when clicked calls upon the nextRound function.
 */
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

/**This function adds a score to the user if they win the round */
function addPlayerScore () {
    let oldScore = parseInt(playerScore.innerText);
    playerScore.innerText = ++oldScore;
}

/**This function adds a score to the computer if they win the round */
function addComputerScore () {
    let oldScore = parseInt(computerScore.innerText);
    computerScore.innerText = ++oldScore;
}

/**This function reverts back to battle container with the updated scores now implemented.
 * It also calls upon the checkScore function.
 */
function nextRound () {
    battleContainer.style.display = 'none';
    choicesContainer.style.display = 'flex';
    resultMessage[0].style.display = 'none';
    checkScore();
}

/**This function results in a modal popping up when either the player or compueter reach a score of 5.
 * This modal oinclides a new game button and when it is clicked it calls the newGame function.
 */
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

/**This function returns the user to the battle container with the scores refreshing to 0 */
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

