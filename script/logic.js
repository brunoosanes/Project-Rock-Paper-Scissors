let playerScore = Number(document.querySelector(".playerScore").textContent);
let computerScore = Number(
  document.querySelector(".computerScore").textContent
);
console.log(playerScore);

// storing the player choice
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

function playerSelectionRock() {
  playerSelection = "ROCK";
  game();
}
function playerSelectionPaper() {
  playerSelection = "PAPER";
  game();
}
function playerSelectionScissors() {
  playerSelection = "SCISSORS";
  game();
}

let playerSelection = "";
rockButton.addEventListener("click", playerSelectionRock);
paperButton.addEventListener("click", playerSelectionPaper);
scissorsButton.addEventListener("click", playerSelectionScissors);

// generating computer choice
let computerSelection = "";
function computerPlay() {
  computerSelection = Math.floor(Math.random() * 3);
  switch (computerSelection) {
    case 0:
      computerSelection = "ROCK";
      return computerSelection;
    case 1:
      computerSelection = "PAPER";
      return computerSelection;
    case 2:
      computerSelection = "SCISSORS";
      return computerSelection;
  }
}

// playing one round
let message = document.querySelector('.message');
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = "tie";
    message.classList.add('tieRound')
    message.classList.remove('wonRound')
    message.classList.remove('lostRound')
    message.textContent = 'I\'s a tie!'
    return roundWinner;
  }
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    roundWinner = "player";
    message.classList.add('wonRound')
    message.classList.remove('tieRound')
    message.classList.remove('lostRound')
    message.textContent = 'You won this round :)'
    return roundWinner;
  }
  if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER")
  ) {
    roundWinner = "computer";
    message.classList.add('lostRound')
    message.classList.remove('tieRound')
    message.classList.remove('wonRound')
    message.textContent = 'Computer won this round :('
    return roundWinner;
  }
}

// storing score based on round winner
function score() {
  if (roundWinner === "player") {
    playerScore += 1;
    document.querySelector(".playerScore").textContent = playerScore;
  } else if (roundWinner === "computer") {
    computerScore += 1;
    document.querySelector(".computerScore").textContent = computerScore;
  } else {
  }
}

// update current score image to current selection
function updateImgs() {
  let currentPlayerSelectionImg = document.querySelector(
    ".currentPlayerSelectionImg"
  );
  let currentComputerSelectionImg = document.querySelector(
    ".currentComputerSelectionImg"
  );
  document.querySelector(".currentPlayerSelectionImg").src =
    currentPlayerSelectionImg.src.replace(
      currentPlayerSelectionImg.src,
      `img/${playerSelection}.svg`
    );
  currentComputerSelectionImg.src = currentComputerSelectionImg.src.replace(
    currentComputerSelectionImg.src,
    `img/${computerSelection}.svg`
  );
}
// function that plays the game once the player click one of the 3 buttons
function removeEventListeners() {
  rockButton.removeEventListener('click', playerSelectionRock)
  paperButton.removeEventListener('click', playerSelectionPaper)
  scissorsButton.removeEventListener('click',playerSelectionScissors)
}
function game() {
  computerPlay();
  playRound(playerSelection, computerSelection);
  score();
  updateImgs();

  if (playerScore === 5) {
    message.classList.remove('wonRound')
    message.classList.remove('tieRound')
    message.classList.remove('lostRound')
    message.classList.remove('lostGame')
    message.classList.add('wonGame')
    message.textContent = 'Congratulations, you did it!'
    removeEventListeners()
  }
  if (computerScore === 5) {
    message.classList.remove('wonRound')
    message.classList.remove('tieRound')
    message.classList.remove('lostRound')
    message.classList.remove('wonGame')
    message.classList.add('lostGame')
    message.textContent = 'You got beat by the machine...'
    removeEventListeners()
  }
  console.log(playerSelection);
  console.log(computerSelection);
  console.log(roundWinner);
  console.log(playerScore);
  console.log(computerScore);
}


// restartGame sets score back to zero and replace question-mark images
playAgainBtn = document.querySelector('.playAgainBtn');
playAgainBtn.addEventListener('click', restartGame)

function addEventListeners() {
  rockButton.addEventListener('click', playerSelectionRock)
  paperButton.addEventListener('click', playerSelectionPaper)
  scissorsButton.addEventListener('click',playerSelectionScissors)
}
function restartGame() {
  document.querySelector(".playerScore").textContent = 0;
  document.querySelector(".computerScore").textContent = 0;
  playerScore = 0;
  computerScore = 0;
  let currentPlayerSelectionImg = document.querySelector(
    ".currentPlayerSelectionImg"
  );
  let currentComputerSelectionImg = document.querySelector(
    ".currentComputerSelectionImg"
  );
  document.querySelector(".currentPlayerSelectionImg").src =
    currentPlayerSelectionImg.src.replace(
      currentPlayerSelectionImg.src,
      'img/question-mark.jpg'
    );
  currentComputerSelectionImg.src = currentComputerSelectionImg.src.replace(
    currentComputerSelectionImg.src,
    'img/question-mark.jpg'
  );
  message.classList.remove('wonRound')
  message.classList.remove('tieRound')
  message.classList.remove('lostRound')
  message.classList.remove('wonGame')
  message.classList.remove('lostGame')
  message.textContent = 'Choose your weapon below!'
  addEventListeners()
}

