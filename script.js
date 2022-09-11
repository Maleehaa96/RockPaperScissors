
//0 = rock
//1 = paper
//2 = scissor 


let winner = false;
let playerStreak = 0;
let compStreak = 0;

//score update
let cScore = document.querySelector('.compScore');
cScore.textContent = 0;

let pScore = document.querySelector('.playerScore');
let parent = document.querySelector('.pscore')
pScore.textContent = 0;



//button
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissor = document.querySelector('.scissor');
rock.addEventListener("click",e => Button(e));
paper.addEventListener("click",e => Button(e));
scissor.addEventListener("click",e => Button(e));



// player choice update
pChoice = document.querySelector('.pChoice');
let pPrev = document.createElement('div');
pPrev.textContent =" ";
pPrev.style.textAlign="center";
pChoice.append(pPrev);

//comp choice update
cChoice = document.querySelector('.cChoice');
let cPrev = document.createElement('div');
cPrev.textContent = " ";
cPrev.style.textAlign="center";
cChoice.append(cPrev);

let response = ""


function Button (e ){

    let response = e.srcElement.className;
    let playerResponse = getPlayerChoice(e.srcElement.className);
    let computerResponse = getComputerChoice();
    updatePlayerChoiceUI(playerResponse);
    updateComputerChoiceUI(computerResponse);
    decideWinner(playerResponse, computerResponse);
    

}


function updatePlayerChoiceUI(playerChoice){
   
    let current = document.createElement('div');
    switch (playerChoice){
        case 0:
            current.textContent = "Rock";
            break;
        case 1:
            current.textContent = "Paper";
            break;
        case 2:
            current.textContent = "Scissor";
            break;
     }
    
    current.style.textAlign="center";
    pChoice.insertBefore(current,pPrev);
    pPrev = current;
}

function updateComputerChoiceUI(compChoice){
     
     let current = document.createElement('div');

     switch (compChoice){
        case 0:
            current.textContent = "Rock";
            break;
        case 1:
            current.textContent = "Paper";
            break;
        case 2:
            current.textContent = "Scissor";
            break;
     }

    current.style.textAlign = "center";
    cChoice.insertBefore(current,cPrev);
    cPrev = current;

     
}

function updatePlayerScoreUI(){
    pScore.textContent = playerStreak;

}

function updateComputerScoreUI(){
    cScore.textContent = compStreak;
}

function getComputerChoice(){
    let result = Math.floor(Math.random() * 3); // results in 0,1,2
    if(result == 0){
        console.log("Computer chose  rock");
    }
    else if (result == 1){
        console.log("Computer chose paper");

    }
    else if(result == 2){
        console.log("Computer chose scissor");
    }
    else{
        console.log("Oops something went wrong!");a
    }

    return result;
}


function getPlayerChoice(response){
       
        if(response =="rock"){
                console.log("you entered rock");
                return 0
        }
        if(response == "paper"){
                console.log("you entered paper");
                return 1;
        }
        if (response ==  "scissor"){
                console.log("you entered scissor");
                return 2;
        }
 
}

function decideWinner(playerSelection, compSelection){
    
    if(playerSelection == compSelection){
        alert ("This round is a tie!");
        return;
    }

    switch(compSelection){
        case 0:
            if(playerSelection == 2){
                alert("You selected scissor and Computer selected rock..you LOSEE this round! :(");
                compStreak++;
                updateComputerScoreUI();
                return;
            }  
        case 1:
            if(playerSelection == 0){
                alert("You selected rock and Computer selected paper..you LOSEE this round! :( + !!compSelect " + compSelection + "Playerselect "+playerSelection);
                compStreak++;
                updateComputerScoreUI();
                return;
            }   
        case 2: 
            if(playerSelection == 1){
                alert("You selected paper and Computer selected scissor..you LOSEE this round! :(");
                compStreak++;
                updateComputerScoreUI();
                return;
            }
    }

    switch (playerSelection){
        case 0:
            if(compSelection == 2){
                alert("You selected rock and Computer selected scissor..you WIN this round! :)");
                playerStreak++;
                updatePlayerScoreUI();
                return;
            }
        case 1:
            if(compSelection == 0){
                alert("You selected paper and Computer selected rock..you WIN this round! :)");
                playerStreak++;
                updatePlayerScoreUI();
                return;
            }
        case 2:
            if(compSelection == 1){
              alert("You selected scissor and Computer selected paper..you WIN this round! :) + playerSelect " + playerSelection  + " computerSelect " +compSelection);
              playerStreak++;
              updatePlayerScoreUI();
              return;
            }




    }

    /*
    switch(playerSelection){
        case 0:
            if(compSelection == 2){
                alert("You selected rock and Computer selected scissor..you WIN this round! :)");
                playerStreak++;
                updatePlayerScoreUI();
                break;
            }
        case 1:
            if(compSelection == 0){
                alert("You selected paper and Computer selected rock..you WIN this round! :)");
                playerStreak++;
                updatePlayerScoreUI();
                break;
            }  
        case 2:
            if(compSelection == 1){
              alert("You selected scissor and Computer selected paper..you WIN this round! :) + playerSelect " + playerSelection  + " computerSelect " +compSelection);
              playerStreak++;
              updatePlayerScoreUI();
              break;
            }
    }
    */

    playerSelection = "";
    compSelection = "";

}

function playRound(){

    while(playerStreak < 3 & compStreak <3){
        
        decideWinner();
        
        
        if(playerStreak ==3){
            alert("WINNER WINNER CHICKEN DINNER!!");

        }
        if(compStreak == 3){
            alert("She was looking kinda dumb with a shape of an L on her forehead")
        }


    }

}

function game(){

    playRound();
}


//game();

//need to keep track of when there is a win
//use a win 