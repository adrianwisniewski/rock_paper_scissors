let userScore = 0;
let computerScore =0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scored-board")
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
 
function convertToWord(letter) {
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scissors"
}

function getComputerChoice(){
    const choices = ['r', 'p', 's']
    const randomNumer = Math.floor(Math.random() * 3);
    return choices[randomNumer];
}

function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(5);
    const smallComputerWord = "comp".fontsize(5);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallComputerWord} You win`;
}

function lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(5);
    const smallComputerWord = "comp".fontsize(5);
    result_p.innerHTML = `${convertToWord(computerChoice)}${smallComputerWord}  beats ${convertToWord(userChoice)}${smallUserWord}  Computer win`;
}

function draw(userChoice,computerChoice){
    computerScore++
    userScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(5);
    const smallComputerWord = "comp".fontsize(5);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equal ${convertToWord(computerChoice)}${smallComputerWord} so,its a draw`;
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case("rs"):
        case("sp"):
        case("pr"):
        win(userChoice,computerChoice);
        break;
        case("rp"):
        case("sr"):
        case("ps"):
        lose(userChoice,computerChoice);
        break;
        case("rr"):
        case("ss"):
        case("pp"):
        draw(userChoice,computerChoice);
        break;
    }

}


rock_div.addEventListener('click', function(){
    game("r");
})
paper_div.addEventListener('click', function(){
    game("p");
})

scissors_div.addEventListener('click', function(){
    game("s");
})


main();