// 

const containerDiv = document.getElementById("container");



const buttonRock = document.createElement("button");
buttonRock.setAttribute('id', "rock");
buttonRock.textContent = "rock";

const buttonPaper = document.createElement("button");
buttonPaper.setAttribute('id', "paper");
buttonPaper.textContent = "paper";


const buttonScissors = document.createElement("button");
buttonScissors.setAttribute('id', "scissors");
buttonScissors.textContent = "scissors";

containerDiv.append(buttonRock, buttonPaper, buttonScissors);

containerDiv.setAttribute('style', 'display: flex; flex-direction: column; align-items: center;')

document.querySelectorAll('button')
        .forEach( x=> x.setAttribute("style","display: block; margin-bottom: 2vw; width:35vw; height:10vh; font-size: 2vw;"))



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
			return "Invalid input"
		} 
		
		
	}

	let times = 1;

	for (i = 0; i < times; i++)
		{
			console.log(playRound());
		}
	

	console.log("Human: " + humanScore + "\nComputer: " + computerScore)
	if (humanScore > computerScore) {
		alert("You won!");
	} else if (humanScore == computerScore) {
		alert("It's a tie! Nobody won!");
	} else {
		alert("You lost!");
	}

}

playGame();