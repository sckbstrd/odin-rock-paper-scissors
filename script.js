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
        .forEach( x=> x.setAttribute("style","display: block; margin-bottom: 2vw; width:35vw; height:10vh; font-size: 4vw;"))

const results = document.getElementById('results');
results.setAttribute('style', 'display: flex; flex-flow: column wrap; align-items: center;')



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

function getHumanChoice(event) {
	return event.target.id;
}



function playGame(times=5) {
	let humanScore = 0; 
	let computerScore = 0; 

	containerDiv.addEventListener('click', function playRound (event) {
		
		let humanSelection = getHumanChoice(event);
		let computerSelection = getComputerChoice();

		if (humanSelection == computerSelection) {
			humanScore += 1;
			computerScore += 1;
			const result = document.createElement("p");
			result.textContent = humanSelection + " vs " + computerSelection + " -> Tie ";
			results.appendChild(result);
		}

		else if (humanSelection == "rock") {
			if (computerSelection == "scissors") {
				humanScore += 1;
				const result = document.createElement("p");
				result.textContent = "rock vs scissors -> rock wins!";
				results.appendChild(result);
			} else {
				computerScore += 1;
				const result = document.createElement("p");
				result.textContent = "rock vs paper -> rock loses!";
				results.appendChild(result);
			}
		} 

		else if (humanSelection == "paper") {
			if (computerSelection == "rock") {
				humanScore += 1;
				const result = document.createElement("p");
				result.textContent = "paper vs rock -> paper wins!";
				results.appendChild(result);
			} else {
				computerScore += 1;
				const result = document.createElement("p");
				result.textContent = "paper vs scissors -> paper loses!";
				results.appendChild(result);
			}
		} 

		else if (humanSelection == "scissors") {
			if (computerSelection == "paper") {
				humanScore += 1;
				const result = document.createElement("p");
				result.textContent = "scissors vs paper -> scissors win!";
				results.appendChild(result);
			} else {
				computerScore += 1;
				const result = document.createElement("p");
				result.textContent = "scissors vs rock -> scissors lose!";
				results.appendChild(result);
			}
		} else {
			alert("Press on the buttons!")
		} 			
		
		if (computerScore == times || humanScore == times) {
			containerDiv.removeEventListener('click', playRound);
			if (humanScore > computerScore) {
				alert(`You: ${humanScore}\nComputer: ${computerScore}\nCongratulations! You won! Hebele hübele!`);
			} else if (humanScore < computerScore) {
				alert(`You: ${humanScore}\nComputer: ${computerScore}\nOh no! You lost!`);
			} else {
				alert(`You: ${humanScore}\nComputer: ${computerScore}\nWow! It's a tie!`);
			}
			 
		}
	});
		

}

playGame();
