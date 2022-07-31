
//0 = rock
//1 = paper
//2 = scissor 


let winner = false;
let playerStreak = 0;
let compStreak = 0;

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

function getPlayerChoice(){
       let validResponse = "";
       let response;
       
      while(validResponse != "q"){
        response = prompt("Enter Rock, Paper, or Scissor");
        response = response.toLowerCase();

        if(response =="rock"){
                console.log("you entered rock");
                return 0
            }
            else if(response == "paper"){
                console.log("you entered paper");
                return 1;
            }
            else if (response ==  "scissor"){
                console.log("you entered scissor");
                return 2;
            }
            else{
                alert("Retry. Enter a valid response or press q to quit");

            }

      }
      
        

}

function decideWinner(){
    let playerSelection  = getPlayerChoice();
    let compSelection = getComputerChoice();
    if(playerSelection == compSelection){
        alert ("This round is a tie!");
        return;
    }
    
    //rock beats paper 0 1
    switch(playerSelection){
        case 0:
            if(compSelection == 2){
                alert("You selected rock and Computer selected scissor..you WIN this round! :)");
                playerStreak++;
                return;
            }
            
        case 1:
            if(compSelection == 0){
                alert("You selected paper and Computer selected rock..you WIN this round! :)");
                playerStreak++;
                return;
            }   
        case 2: 
            if(compSelection == 1){
              alert("You selected scissor and Computer selected paper..you WIN this round! :)");
              playerStreak++;
              return;
            }
    }

    switch(compSelection){
        case 0:
            if(playerSelection == 2){
                alert("You selected scissor and Computer selected rock..you LOSEE this round! :(");
                compStreak++;
            }
            return;
        case 1:
            if(playerSelection == 0){
                alert("You selected rock and Computer selected paper..you LOSEE this round! :(");
                compStreak++;
                return;
            }   
        case 2: 
            if(playerSelection == 1){
              alert("You selected paper and Computer selected scissor..you LOSEE this round! :(");
              compStreak++;
              return;
            }
    }

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


game();

//need to keep track of when there is a win
//use a win 