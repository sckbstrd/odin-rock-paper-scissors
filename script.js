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

