let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let message = document.querySelector("p");
let turnO = true;

const winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }    
    }

const enableBoxes = () => {
     for (let box of boxes){
        box.disabled = false;
        box.innerHTML="";
    }    
}


boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if(turnO){
            box.textContent = "O";
            turnO = false;
        }
        else{
            box.textContent = "X";
            turnO = true;
        }
        box.disabled = true;
        confirmWinner();
    })
});

const confirmWinner = () => {
    for (let pattern of winningPattern){
        let pos1Val = boxes[pattern[0]].textContent;
        let pos2Val = boxes[pattern[1]].textContent;
        let pos3Val = boxes[pattern[2]].textContent;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner is", pos1Val);
                disableBoxes();
                showWinner(pos1Val);
                reset.textContent = "New Game";
            }
        }
    }
};

const showWinner = (winner) => {
    message.innerHTML = `Congratulation, Winner is ${winner}`;
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    message.innerText = "";
    reset.innerHTML = "Reset Game!"
}

reset.addEventListener("click", resetGame);


