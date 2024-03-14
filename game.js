// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
// Generate two random numbers between 0 and 100
const number1 = Math.floor(Math.random() * 101);
const number2 = Math.floor(Math.random() * 101);

// Display the generated numbers
document.getElementById('number1').textContent = number1;
document.getElementById('number2').textContent = number2;

// Iteration 3: Creating variables required to make the game functional
let operator = ''; // Variable to store the selected operator
let result = 0; // Variable to store the result of the operation
let timerSeconds = 60; // Initial timer value
let timerInterval; // Variable to store the interval ID for the timer

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let number3; // Variable to store the third number
const number3Element = document.getElementById('number3');

// Iteration 5: Creating a randomise function to make the game functional
function randomize() {
    number3 = Math.floor(Math.random() * 101); // Generate a random number between 0 and 100 for number3
    number3Element.textContent = number3; // Display the generated number
}

// Iteration 6: Making the Operators (button) functional
// Add event listeners to the operator buttons
document.getElementById('plus').addEventListener('click', () => {
    operator = '+';
    calculateResult();
});

document.getElementById('minus').addEventListener('click', () => {
    operator = '-';
    calculateResult();
});

document.getElementById('mul').addEventListener('click', () => {
    operator = '*';
    calculateResult();
});

document.getElementById('divide').addEventListener('click', () => {
    operator = '/';
    calculateResult();
});

document.getElementById('modulus').addEventListener('click', () => {
    operator = '%';
    calculateResult();
});

// Function to calculate the result based on the selected operator
function calculateResult() {
    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        case '%':
            result = number1 % number2;
            break;
        default:
            result = 0;
    }
    checkResult();
}

// Iteration 7: Making Timer functional
document.addEventListener("DOMContentLoaded", function() {
    // Get the timer element
    const timerElement = document.getElementById("timer");
  
    // Set the initial time
    let timeLeft = 60; // Change 60 to set the duration of the timer in seconds
  
    // Update the timer every second
    const timerInterval = setInterval(function() {
      if (timeLeft > 0) {
        timerElement.textContent = `Time Left: ${timeLeft} seconds`;
        timeLeft--;
      } else {
        clearInterval(timerInterval);
        timerElement.textContent = "Time's up!";
        // You can add your logic for what to do when the time is up
      }
    }, 1000); // Update every second (1000 milliseconds)
  });