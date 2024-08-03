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

function getHumanChoice(choice) {
	return choice;
}



function playGame() {
	let humanScore = 0; 
	let computerScore = 0; 

	function playRound() {
		containerDiv.addEventListener('click', (event) => {

			const results = document.getElementById('results');
			results.setAttribute('style', 'display: flex; flex-flow: column wrap; align-items: center;')
			let humanSelection = event.target.id;
			let computerSelection = getComputerChoice();
			console.log("You: " + humanSelection + "\nComputer: "  + computerSelection)	
			
			
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
				return "Invalid input"
			} 
				
		});
	
	}

	let times = 1;

	for (i = 0; i < times; i++)
		{
			console.log(playRound());
		}
	
}

playGame();