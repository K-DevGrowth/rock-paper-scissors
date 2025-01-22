let humanScore = 0;
let computerScore = 0;
const validChoices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
    return validChoices[Math.floor(Math.random() * 3)];
}

const getHumanChoice = () => {
    let choice;
    do {
        choice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
    } while (!validChoices.includes(choice));
    return choice;
}

const playRound = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        console.log( `It's a tie! Both chose ${userChoice}`);
    }
    else if (userChoice === "rock" && computerChoice === "scissors"
        || userChoice === "paper" && computerChoice === "rock"
        || userChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log(`You win! ${userChoice} beats ${computerChoice}`);
    }
    else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${userChoice}`);
    }
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}



const playGame = () => {
    let round = 1;
    while (round <= 5) {
        console.log(`\nRound: ${round}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        round++;
    }
    
    if (humanScore > computerScore) {
        console.log("You win the game!");
    }
    else if (computerScore === humanScore) {
        console.log("The game is tie!");
    }
    else {
        console.log("Computer wins the game!");
    }
}

playGame();