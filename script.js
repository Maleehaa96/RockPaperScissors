
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
pChoice = document.querySelector('.pContainer');
let pPrev = document.createElement('div');
pPrev.textContent =" ";
pPrev.style.textAlign="center";
pChoice.append(pPrev);

//comp choice update
cChoice = document.querySelector('.cContainer');
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

function updateComputerChoiceUI(compChoice) {
     
     let current = document.createElement('div');

        
     switch (compChoice) {
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

function deleteChildren(parent){

    while (parent.firstChild) {
        
        parent.removeChild(parent.firstChild);
    }
 
    
    
   

}

function clearGame(){

    //reset score
    cScore.textContent = 0;
    pScore.textContent = 0;

    //clear playerChoices
    deleteChildren(pChoice);
    pPrev.textContent = "";
    pChoice.append(pPrev);

    //clear compChoices
    deleteChildren(cChoice);
    cPrev.textContent = "";
    cChoice.append(cPrev);

    playerStreak = 0;
    compStreak = 0;

    

}

function checkGameWinner(){

    let win=0;
    
    if(playerStreak >= 3) {
        alert("THE PLAYER WINS!!");
        win = 1;
    }
    
    if(compStreak >= 3) {
        alert("THE COMPUTER WINS!!");
        win = 1;
    }

    if(win){
        clearGame();
    }

}

function updatePlayerScoreUI(){
    pScore.textContent = playerStreak;
    checkGameWinner();

}

function updateComputerScoreUI(){
    cScore.textContent = compStreak;
    checkGameWinner();
}

function getComputerChoice(){
    let result = Math.floor(Math.random() * 3); // results in 0,1,2
    if(result == 0){
       
    }
    else if (result == 1){
       

    }
    else if(result == 2){
       
    }
    else{
        
    }

    return result;
}


function getPlayerChoice(response){
       
        if(response =="rock") {
              
                return 0
        }
        if(response == "paper") {
               
                return 1;
        }
        if (response ==  "scissor") {
              
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
                alert("COMP: ROCK \n PLAYER: SCISSOR \n COMPUTER WINS");
                compStreak++;
                updateComputerScoreUI();
                return;
            }  
            break;
        case 1:
            if(playerSelection == 0){
                alert("COMP: PAPER \n PLAYER: ROCK \n COMPUTER WINS");
                compStreak++;
                updateComputerScoreUI();
                return;
            } 
            break;  
        case 2: 
            if(playerSelection == 1){
                alert("COMP: SCISSOR \n PLAYER: PAPER \n COMPUTER WINS");
                compStreak++;
                updateComputerScoreUI();
                return;
            }
            break;
    }

    switch (playerSelection){
        case 0:
            if(compSelection == 2){
                alert("COMP: SCISSOR \n PLAYER: ROCK \n PLAYER WINS");
                playerStreak++;
                updatePlayerScoreUI();
                return;
            }
            break;
        case 1:
            if(compSelection == 0){
                alert("COMP: ROCK \n PLAYER: PAPER \n PLAYER WINS");
                playerStreak++;
                updatePlayerScoreUI();
                return;
            }
            break;
        case 2:
            if(compSelection == 1){
              alert("COMP: PAPER \n PAPER: SCISSOR \n PLAYER WINS");
              playerStreak++;
              updatePlayerScoreUI();
              return;
            }
            break;

    }

    playerSelection = "";
    compSelection = "";

}


