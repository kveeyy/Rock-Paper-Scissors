// Get elements
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultElement = document.getElementById('result');

// Event listeners for each button
rockButton.addEventListener('click', function() {
    playGame('rock');
});

paperButton.addEventListener('click', function() {
    playGame('paper');
});

scissorsButton.addEventListener('click', function() {
    playGame('scissors');
});

// Function to play the game
function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Determine the result
    let result;
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }

    // Display the result
    resultElement.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
}
