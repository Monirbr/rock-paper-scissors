let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_scan = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function game (userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }
}



function convertWord(letter) {
        if(letter === "r") return "Rock";
        if(letter === "p") return "Paper";
        return "Scissors";
}
    
function win(userChoice,computerChoice){
   userScore++;
   userScore_span.innerHTML = userScore;
   compScore_scan.innerHTML = compScore;
   const smalluser = "user".fontsize(3).sup();
   const smallcomp = "comp".fontsize(3).sup();
   const userChoice_div = document.getElementById(userChoice);
   result_p.innerHTML = `${convertWord(userChoice)}${smalluser} beats ${convertWord(computerChoice)}${smallcomp}".you win! "`;
   userChoice_div.classList.add('green-glow');
   setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 300);
}

function lose(userChoice,computerChoice){
   compScore++;
   userScore_span.innerHTML = userScore;
   compScore_scan.innerHTML = compScore;
   const smalluser = "user".fontsize(3).sup();
   const smallcomp = "comp".fontsize(3).sup();
   const userChoice_div = document.getElementById(userChoice);
   result_p.innerHTML = `${convertWord(userChoice)}${smalluser} loses to ${convertWord(computerChoice)}${smallcomp}".you lost!! "`;
   userChoice_div.classList.add('red-glow');
   setTimeout(function() {userChoice_div.classList.remove('red-glow')}, 300);
}


function draw(userChoice,computerChoice){
   const smalluser = "user".fontsize(3).sup();
   const smallcomp = "comp".fontsize(3).sup();
   const userChoice_div = document.getElementById(userChoice);
   result_p.innerHTML = `${convertWord(userChoice)}${smalluser} equals ${convertWord(computerChoice)}${smallcomp}".Its a draw! "`;
   userChoice_div.classList.add('grey-glow');
   setTimeout(function() {userChoice_div.classList.remove('grey-glow')}, 300);
}

function getComputerChoice(){
    choices = ['r','p','s']
    const randomNumber = Math.floor(Math.random() *3);
    return choices[randomNumber];
}


function main(){
rock_div.addEventListener('click',function() {
  game("r");
});
paper_div.addEventListener("click" , function(){
    game("p");
});
scissors_div.addEventListener("click" , function(){
    game("s");
});
}
main();
