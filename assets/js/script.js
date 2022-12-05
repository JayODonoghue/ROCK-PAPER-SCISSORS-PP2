/**Wait for the DOM to finish loading before running the game
 * Get the button elements and add event listeneres to them*/
document.addEventListener("DOMContentLoaded", function() {
   let buttons = document.getElementsByTagName("button");
})

const launchButton = document.getElementById("launch-game-btn")
const introPage = document.querySelectorAll("#intro-page");

launchButton.addEventListener("click", launchGame);


function launchGame() {
    launchButton.style.display = 'none'
}
