let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");

const genrateCompChoie = () =>{
    //rock paper sisscors
    const options = ["rock", "papaer","scissors"]
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];



}

const drawGame = () =>{
    msg.innerText = "Game was Draw.Play again";
    msg.style.backgroundColor = "#3f3e3e"
};

const showWinner = (userWin,compChoice,userChoice) =>{
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beates ${compChoice}`;
        msg.style.backgroundColor = "green"
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose ${compChoice} beates Your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}

const playGame =(userChoice)=>{
    //genrate compuetr choice
    const compChoice = genrateCompChoie();

    if (userChoice === compChoice){
        //draw game
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissprs, paper

            userWin = compChoice === "paper" ? false : true;


        }else if(userChoice === "paper"){
            //r, s
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //r,p
            compChoice === "rock" ? false :true;

        }
        showWinner(userWin,compChoice,userChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);

    })
})
