let UserScore=0;
let CompScore=0;

//(1)get users choice(accessing)
const choices=document.querySelectorAll(".choice")
const mesg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");




//(2)Adding event listner :jaise hi kisi choice ko click kare uski id aa jaye aur use user choice me daal de
//for each loop:--> for adding event listner to every loop
choices.forEach((choice) => {
    
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id")
       
    playgame(userChoice)
    })
});

//generate random number
const genCompChoice=()=>{
    const options=["rock","paper","scissor"]
    const rdmIdx=Math.floor(Math.random()*3)
    return options[rdmIdx]
}


//arrow function if the game draw
const drawgame=()=>{
    console.log("Game draw");
    mesg.innerText="Game draw better luck next Time!";
    mesg.style.backgroundColor="#081b31";
}


//arrow function for choosing winner
const winner=(userwin,userChoice,compChoice)=>{
    if (userwin===true) {
        console.log("You win!");
        mesg.innerText=`You win! ${userChoice} beats ${compChoice}`;
        mesg.style.backgroundColor="green";
        UserScore++;
        userScorepara.innerText=UserScore;
    } else {
        console.log("You lose");
        mesg.innerText=`You lose ${compChoice} beats ${userChoice} `;
        mesg.style.backgroundColor="red";
        CompScore++;
        compScorepara.innerText=CompScore;
        
    }
    
}
//(3)Play Game using if else
const playgame=(userChoice)=>{
    console.log("userchoice=",userChoice);
    //to generate comp choice
    const compChoice=genCompChoice();
    console.log("compChoice=",compChoice)
    
    //giving result based on choices:

    if (userChoice==compChoice) {
        drawgame();
        
    } else {
        let userwin=true;
        if(userChoice==="rock"){
            //compchoice scisssor,paper otherwise it draw
           userwin= compChoice==="paper"?false:true;
        }
        else if(userChoice=="paper"){
            //rock,scissor ho skta hai
            userwin=compChoice==="rock"?true:false;
        }
        else{
            //rock,paper
            userwin=compChoice==="rock"?false:true;
        }

        winner(userwin,userChoice,compChoice);
    }
    

}




