/* Rock Paper Scissors
    objective: to create a game which the player can input his choice and see if it beats or not the computers choice
    . create variables for rock, paper and scissors
    . ask for user input
    . store user input in a variable in order to compare it with pcs choice later
    . generate pc choice
    . store pc choice in a variable
    . create a function that checks if choices are equal or diferent, and if different compare which one wins
    . display the result
    . run a function that plays 5 round and keep track of the game score and show a message about the game result at the end
    */
   
    // create variables for player and computer selection
    let playerSelection;
    let computerSelection;

    // create a function that picks randomly either rock, paper or scissors...
    function computerPlay() {
        let number = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        if (number === 1) {
            return 'rock'
        } else if (number === 2) {
            return 'paper'
        } else {
            return 'scissors'
        }
    }
    
    // stores the computer choice 
    computerSelection = computerPlay();

    // console.log just to check if everything is displaying correctly
    console.log('Player: ' + playerSelection)
    console.log('Computer: ' + computerSelection)

    // create a function that compares human input with pc's random choice and return the result (win, draw, loss...)
    function gameResult(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return `It's a draw!`
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            return `Congratulations, you won!`
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            return 'You lost!'
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            return 'Congratulations, you won!'
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            return 'You lost!'
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            return 'You lost!'
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            return 'Congratulations, you won!'
        } else {
            return 'Please enter a valid choice!'
        }
    }


    // create a function game() to play a 5 round game that returns the current score of the game and reports a winner or loser msg at the end

    function game() {

        let playerScore = 0;
        let computerScore = 0;
        let result = `You ${playerScore} vs ${computerScore} Computer.`


        playerSelection = prompt('Chose between Rock, Paper or Scissors').toLowerCase();
        computerPlay();
        computerSelection = computerPlay();
        alert(`Computer chose ${computerSelection}. ${gameResult(playerSelection, computerSelection)}`);
        if (gameResult(playerSelection, computerSelection) === 'Congratulations, you won!') {
            playerScore = playerScore + 1;
        } else if (gameResult(playerSelection, computerSelection) === 'You lost!') {
            computerScore = computerScore + 1;
        } else if (gameResult(playerSelection, computerSelection) === `It's a draw!`){
            playerScore = playerScore + 1;
            computerScore = computerScore + 1;
        } else {
            playerScore = playerScore + 0;
            computerScore = computerScore + 0;
        }
        alert(`You ${playerScore} vs ${computerScore} Computer.`);


        playerSelection = prompt('Chose between Rock, Paper or Scissors').toLowerCase();
        computerPlay();
        computerSelection = computerPlay();
        alert(`Computer chose ${computerSelection}. ${gameResult(playerSelection, computerSelection)}`);
        if (gameResult(playerSelection, computerSelection) === 'Congratulations, you won!') {
            playerScore = playerScore + 1;
        } else if (gameResult(playerSelection, computerSelection) === 'You lost!') {
            computerScore = computerScore + 1;
        } else if (gameResult(playerSelection, computerSelection) === `It's a draw!`){
            playerScore = playerScore + 1;
            computerScore = computerScore + 1;
        } else {
            playerScore = playerScore + 0;
            computerScore = computerScore + 0;
        }
        alert(`You ${playerScore} vs ${computerScore} Computer.`);

        playerSelection = prompt('Chose between Rock, Paper or Scissors').toLowerCase();
        computerPlay();
        computerSelection = computerPlay();
        alert(`Computer chose ${computerSelection}. ${gameResult(playerSelection, computerSelection)}`);
        if (gameResult(playerSelection, computerSelection) === 'Congratulations, you won!') {
            playerScore = playerScore + 1;
        } else if (gameResult(playerSelection, computerSelection) === 'You lost!') {
            computerScore = computerScore + 1;
        } else if (gameResult(playerSelection, computerSelection) === `It's a draw!`){
            playerScore = playerScore + 1;
            computerScore = computerScore + 1;
        } else {
            playerScore = playerScore + 0;
            computerScore = computerScore + 0;
        }
        alert(`You ${playerScore} vs ${computerScore} Computer.`);


        playerSelection = prompt('Chose between Rock, Paper or Scissors').toLowerCase();
        computerPlay();
        computerSelection = computerPlay();
        alert(`Computer chose ${computerSelection}. ${gameResult(playerSelection, computerSelection)}`);
        if (gameResult(playerSelection, computerSelection) === 'Congratulations, you won!') {
            playerScore = playerScore + 1;
        } else if (gameResult(playerSelection, computerSelection) === 'You lost!') {
            computerScore = computerScore + 1;
        } else if (gameResult(playerSelection, computerSelection) === `It's a draw!`){
            playerScore = playerScore + 1;
            computerScore = computerScore + 1;
        } else {
            playerScore = playerScore + 0;
            computerScore = computerScore + 0;
        }
        alert(`You ${playerScore} vs ${computerScore} Computer.`);


        playerSelection = prompt('Chose between Rock, Paper or Scissors').toLowerCase();
        computerPlay();
        computerSelection = computerPlay();
        alert(`Computer chose ${computerSelection}. ${gameResult(playerSelection, computerSelection)}`);
        if (gameResult(playerSelection, computerSelection) === 'Congratulations, you won!') {
            playerScore = playerScore + 1;
        } else if (gameResult(playerSelection, computerSelection) === 'You lost!') {
            computerScore = computerScore + 1;
        } else if (gameResult(playerSelection, computerSelection) === `It's a draw!`){
            playerScore = playerScore + 1;
            computerScore = computerScore + 1;
        } else {
            playerScore = playerScore + 0;
            computerScore = computerScore + 0;
        }
        if (playerScore > computerScore) {
            alert(`You ${playerScore} vs ${computerScore} Computer.` + ' Congratulations, you beat the machine!');
        } else if (playerScore < computerScore ) {
            alert(`You ${playerScore} vs ${computerScore} Computer.` + ' I\'m sorry, you lost. Did you really thought you could beat a machine?!');
        } else {
            alert(`You ${playerScore} vs ${computerScore} Computer.` + ' It\'s a draw! You\'re good, but not good enought to beat a machine.');
        }



    

    }

    // run the function game()

    game();