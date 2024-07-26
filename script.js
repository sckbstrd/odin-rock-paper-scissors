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



function playGame() {
	let humanScore = 0; 
	let computerScore = 0; 

	function playRound() {
		let humanSelection = getHumanChoice();
		let computerSelection = getComputerChoice();

		console.log("You: " + humanSelection + "\nComputer: "  + computerSelection)

		if (humanSelection == computerSelection) {
			humanScore += 1;
			computerScore += 1;
			return "It's a tie!";
		}
	
		if (humanSelection == "rock") {
			if (computerSelection == "scissors") {
				humanScore += 1;
				return "You won! Rock beats scissors."
			} else {
				computerScore += 1;
				return "You lost! Paper beats rock."
			}
		} 
	
		if (humanSelection == "paper") {
			if (computerSelection == "rock") {
				humanScore += 1;
				return "You won! paper beats rock."
			} else {
				computerScore += 1;
				return "You lost! Scissors beats paper."
			}
		} 
	
		if (humanSelection == "scissors") {
			if (computerSelection == "paper") {
				humanScore += 1;
				return "You won! Scissors beats paper."
			} else {
				computerScore += 1;
				return "You lost! Rock beats scissors."
			}
		} else {
			return "I"
		} 
		
		
	}

	console.log(playRound());
	console.log(playRound());
	console.log(playRound());
	console.log(playRound());
	console.log(playRound());
	console.log("Human: " + humanScore + "\nComputer: " + computerScore)
	if (humanScore > computerScore) {
		alert("You won!");
	} else {
		alert("You lost!");
	}

}

playGame();