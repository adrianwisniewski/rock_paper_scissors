let userScore = 0;
let computerScore =0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scored-board")
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
 

function getComputerChoice(){
    const choices = ['r', 'p', 's']
    const randomNumer = Math.floor(Math.random() * 3);
    return choices[randomNumer];
}

function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    console.log(userChoice);
    console.log(computerChoice);
}

function lose(){
    console.log("LOSE");
}

function draw(){
    console.log("DRAW");
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