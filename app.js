
// Iteration 1: Make the Play button functional.
document.addEventListener("DOMContentLoaded", function() {
    // Get the play button element
    const playButton = document.getElementById("play-button");
  
 
    playButton.addEventListener("click", function() {
      
      console.log("Play button clicked!");
      window.location.href = "game.html"; 
    });
  });
// Description: When the Play button is clicked the game page should be displayed.
