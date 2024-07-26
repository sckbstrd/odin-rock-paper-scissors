// Global Variables 

let humanScore = 0; 
let computerScore = 0; 

// Functions

function getComputerChoice() {
	let n = Math.floor(Math.random() * 99);
	let choice;
	if (n <= 32) {
		choice = "rock";
	}	 
	else if (n <= 65) {
		choice = "paper";
	} else {
		choice = "scissors";
	}

	return choice;
}	

function getHumanChoice() {
	let choice = prompt("Rock? Paper? Scissors?: ").toLowerCase();
	return choice;
}

function playRound(humanChoice, computerChoice) {
	console.log("You: " + humanChoice + "\nComputer: "  + computerChoice)
	if (humanChoice == computerChoice) {
		return "It's a tie!";
	}

	if (humanChoice == "rock") {
		if (computerChoice == "scissors") {
			return "You won! Rock beats scissors."
		} else {
			return "You lost! Paper beats rock."
		}
	} 

	if (humanChoice == "paper") {
		if (computerChoice == "rock") {
			return "You won! paper beats rock."
		} else {
			return "You lost! Scissors beats paper."
		}
	} 

	if (humanChoice == "scissors") {
		if (computerChoice == "paper") {
			return "You won! Scissors beats paper."
		} else {
			return "You lost! Rock beats scissors."
		}
	} 

	
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));