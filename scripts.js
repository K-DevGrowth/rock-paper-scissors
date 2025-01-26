let humanScore = 0;
let computerScore = 0;

const validChoices = ["rock", "paper", "scissors"];
const getComputerChoice = () => {
    return validChoices[Math.floor(Math.random() * 3)];
}

const paper = document.createElement("button");
const rock = document.createElement("button");
const scissors = document.createElement("button");

const buttons = [paper, rock, scissors];
buttons.map((button) => {
    buttons[0].value = "paper";
    buttons[1].value = "rock";
    buttons[2].value = "scissors";
    button.textContent = `${button.value}`;
    document.querySelector("body").appendChild(button);
    button.addEventListener("click", () => {
        playRound(`${button.value}`, getComputerChoice());
    })
    button.style.margin = "10px";
    button.style.padding = "10px";
    button.style.fontSize = "18px";
    button.style.cursor = "pointer";
})

const scoreContainer = document.createElement("div");
const displayHumanScore = document.createElement("p");
const displayComputerScore = document.createElement("p");

const updateScore = () => {
    displayHumanScore.textContent = `Human score: ${humanScore}`;
    displayComputerScore.textContent = `Computer score: ${computerScore}`;
    scoreContainer.appendChild(displayHumanScore);
    scoreContainer.appendChild(displayComputerScore);
}
document.querySelector("body").appendChild(scoreContainer);

const history = document.createElement("div");

const playRound = (userChoice, computerChoice) => {
    const para = document.createElement("p");
    if (userChoice === computerChoice) {
        para.textContent += `It's a tie! Both chose ${userChoice}`;
    }
    else if (userChoice === "rock" && computerChoice === "scissors"
        || userChoice === "paper" && computerChoice === "rock"
        || userChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        para.textContent += `You win! ${userChoice} beats ${computerChoice}`;
    }
    else {
        computerScore++;
        para.textContent += `You lose! ${computerChoice} beats ${userChoice}`;
    }
    
    history.appendChild(para);
    playGame();
    updateScore(); 
}

const popup = document.createElement("div");
const deletePopup = document.createElement("button");
deletePopup.textContent = "X";
deletePopup.style.float = "right";
deletePopup.style.backgroundColor = "red";
deletePopup.style.border = "1px solid black";
deletePopup.style.color = "#f0f0f0";
deletePopup.style.cursor = "pointer";
popup.appendChild(deletePopup);
popup.setAttribute("style", 
    `border: 1.5px solid black;
    text-align: center;
    position: absolute;
    display: none;
    background-color: #00beef;
    color: #f2f2f2;
    top: 50%;
    width: 400px;
    border-radius: 5px;`);
document.querySelector("body").appendChild(popup);
document.querySelector("body").appendChild(history);

deletePopup.addEventListener("click", () => {
    popup.style.display = "none";
    popup.removeChild(h2);
    buttons.map(button => {
        button.disabled = !button.disabled;
    })
    document.querySelector("body").style.backgroundColor = "#fff";
    reset();
    updateScore();
})

const h2 = document.createElement("h2");
const playGame = () => {
    
    h2.textContent = "";
    if (humanScore === 5) {
        h2.textContent = "You win the game!";
    }
    if (computerScore === 5) {
        h2.textContent = "Computer wins the game!";
    }
    if (humanScore === 5 || computerScore === 5) {
        popup.style.display = "block";
        popup.appendChild(h2);
        document.querySelector("body").style.backgroundColor = "gray";
        buttons.map(button => {
            button.disabled = !button.disabled;
        })
    }
}

const reset = () => {
    scoreContainer.textContent = "";
    history.textContent = "";
    humanScore = 0;
    computerScore = 0;
}



updateScore();