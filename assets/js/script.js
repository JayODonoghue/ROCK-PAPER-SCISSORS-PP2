/**Wait for the DOM to finish loading before running the game
 * Get the button elements and add event listeneres to them*/
document.addEventListener("DOMContentLoaded", function() {
   let buttons = document.getElementsByTagName("button");
})

const launchButton = document.getElementById("launch-game-btn");
const introPage = document.getElementById("intro-page");
const gameArea = document.getElementById("game-area");
const choicesContainer = document.getElementById("choices-container")
const possibleChoices = document.querySelectorAll(".choice");
let userChoice

/**Event Listener for Launch Game Button */
launchButton.addEventListener("click", launchGame);

possibleChoices[0].addEventListener("click", possibleChoice)
possibleChoices[1].addEventListener("click", possibleChoice)
possibleChoices[2].addEventListener("click", possibleChoice)

function launchGame() {
    introPage.style.display = 'none';
    gameArea.style.display = 'block';
}

function possibleChoice () {
    choicesContainer.style.display = 'none';
}
