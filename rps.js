
//buttons
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

//score
const divscore = document.querySelector('#divscore');
const pscore = document.createElement('p');
pscore.classList.add('pscore');
pscore.style.cssText = 'color: blue;' 
divscore.appendChild(pscore);

//results
const divresults = document.querySelector('#divresults');
const presults = document.createElement('p');
presults.classList.add('presults');
presults.style.cssText = 'color: red;' 
divresults.appendChild(presults);

// final results
const divfresults = document.querySelector('#divfresults');
const pfresults = document.createElement('p');
pfresults.classList.add('pfresults');
pfresults.style.cssText = 'color: green;' 
divfresults.appendChild(pfresults);


//computer picks weapon
function computerPlay()
{
//Make an array of the three weapons and then return computerSelection as a random selection of one of them.
let weapons = ['rock','paper','scissors'];
return (weapons[Math.floor(Math.random() * (3))]);
}

var playerSelection;
var computerSelection;

var computerScore=0;
var playerScore=0;






//play one round of game
buttons.addEventListener("click", function() {playRound(playerSelection,computerSelection);});
    
rock.addEventListener('click', () => {
    playerSelection="rock";
    console.log(playerSelection);
});

paper.addEventListener('click', () => {
    playerSelection="paper";
    console.log(playerSelection);
});

scissors.addEventListener('click', () => {
    playerSelection="scissors";
    console.log(playerSelection);
});

const playRound = function() {

    computerSelection = computerPlay(); //run computerPlay for computer to select weapon
 
if (playerSelection === "rock") {
    if (computerSelection === "rock") {
        presults.textContent = "Computer chose rock. It's a tie.";
        console.log("Computer chose rock. It's a tie."); 
    } else if (computerSelection === "paper") {
        presults.textContent = "Computer chose paper. You lose. Paper covers rock.";
        console.log("Computer chose paper. You lose. Paper covers rock."); 
        computerScore++;
    } else if (computerSelection === "scissors") {
        presults.textContent = "Computer chose scissors. You win. Rock crushes scissors.";
        console.log("Computer chose scissors. You win. Rock crushes scissors."); 
        playerScore++;
    }

} else if (playerSelection === "paper") {
  if (computerSelection === "rock") {
    presults.textContent = "Computer chose rock. You win. Paper covers rock.";
    console.log("Computer chose rock. You win. Paper covers rock.");
       playerScore++;
    } else if (computerSelection === "paper") {
        presults.textContent = "Computer chose paper. It's a tie.";
        console.log("Computer chose paper. It's a tie");
    } else if (computerSelection === "scissors") {
        presults.textContent = "Computer chose scissors. You lose. Scissors cut paper.";
        console.log("Computer chose scissors. You lose. Scissors cut paper.");
        computerScore++;
    }

} else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
        presults.textContent = "Computer chose rock. You lose. Rock crushes scissors.";
        console.log("Computer chose rock. You lose. Rock crushes scissors.");
        computerScore++;
        console.log(`Computer: ${computerScore} You: ${playerScore}`);
        pscore.textContent = `Computer: ${computerScore} You: ${playerScore}`;
    } else if (computerSelection === "paper") {
        presults.textContent = "Computer chose paper. You win. Scissors cut paper.";
        console.log("Computer chose paper. You win. Scissors cut paper.");
        playerScore++;
        console.log(`Computer: ${computerScore} You: ${playerScore}`);
        pscore.textContent = `Computer: ${computerScore} You: ${playerScore}`;
    } else if (computerSelection === "scissors") {
        presults.textContent = "Computer chose scissors. It's a tie";
        console.log("Computer chose scissors. It's a tie"); 
 
    }

} else {

    presults.textContent = "That is not a valid choice. Please try again.";
}

if (playerScore < 5 && computerScore < 5) {
console.log(`Computer: ${computerScore} You: ${playerScore}`);
        pscore.textContent = `Computer: ${computerScore} You: ${playerScore}`;
        pfresults.textContent = ""; 


} else if (playerScore >= 5) {
    pscore.textContent = `Computer: ${computerScore} You: ${playerScore}`;
    pfresults.textContent = "You win!";
    computerScore = 0;
    playerScore = 0;
    } else  {
        pscore.textContent = `Computer: ${computerScore} You: ${playerScore}`;
        pfresults.textContent = "You lose!"; 
        computerScore = 0;
        playerScore = 0;
    }


}





