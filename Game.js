const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const disableBoxes = () =>
{
    for(let box of boxes)
        box.disabled = true;
}
const enableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText="";
    }
}
const resetGame = () =>
{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count =  0;
}
const showWinner = (winner) =>
{
    msg.innerText =`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const gameDraw = () =>
{
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () =>{
    for(let pattern of winpatterns)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1 == pos2 && pos2==pos3)
            {
                console.log("Winner",pos1);
                showWinner(pos1);
                return true;
            }
        }
    }
}
let count = 0;
let turnO = true;
let boxes = document.querySelectorAll(".box");
let resetButton = document.getElementById("resetbutton");
let msgContainer = document.querySelector(".msg-container");
let newGame = document.getElementById("newgame");
let msg = document.querySelector(".msg");
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("Box was clicked");
        if(turnO == true)
        {
            box.innerText ="O";
            turnO = false;
        }
        else
        {
            box.innerText ="X";
            turnO = true;
        }
        count++;
        const isWinner = checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
        }
        box.disabled = true;
    });
});
newGame.addEventListener("click", resetGame);
resetButton.addEventListener("click",resetGame);
