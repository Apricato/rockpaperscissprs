
const initializer = 0;

function getHumanChoice ()
    {

        output = window.prompt("message")
        return output.toLowerCase()
    }

function getComputerChoice()
    {
        let value =  Math.random();
        console.log(value)
        if (value >= 0 && value < 0.33){
            return "rock";
        }
        else if (value >= 0.33 && value < 0.67){
            return "paper";
        }else {
            return "scissors";
        }

        
    }





function playGame()
   {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        switch(true){
           case humanChoice === computerChoice:
              return "Its a tie!";
          
          case humanChoice === 'paper' && computerChoice === 'rock':
              humanScore++;
              return "You win! Paper beats Rock.";
          
          case humanChoice === 'scissors' && computerChoice === 'paper':
              humanScore++; 
              return "You win! scissors beats paper.";
          
          case humanChoice === 'rock' && computerChoice === 'scissors':
              humanScore++; 
              return "You win! Rock  beats scissors.";
          
      
           default:
              computerScore++;
              return `Computer wins! ${computerChoice} beats ${humanChoice}.`;
        }
      }

    for (let i = 0 ; i < 5 ; i++){
        console.log(`--------------Round: ${i+1}------------------`);

        let round = playRound(getHumanChoice(), getComputerChoice());
        console.log(round)
    }

    if ( humanScore === computerScore ){
        console.log(">>> Game ended, It is a tie!");
     
    }
        else  if (computerScore > humanScore) {
        console.log(">>> Game ended,Computer has won");
    }
    else  {
        console.log(">>>>>> Game ended , Human has won <<<<< <<<");
    }

   }



   playGame();





