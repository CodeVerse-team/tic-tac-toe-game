let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msg = document.querySelector(".msg-cont");
let msgtext = document.querySelector(".msg.hide");
let turnO = true; // playerX , playerO

const winRules = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6] 
];

const resetGame = ()=> { 
    let turnO = true;
    for (let box of boxes){
        box.disabled = false;
        enabledboxes();
        msgtext.classList.add("hide");
    }
};
const showwinner = (winner) => {
    msgtext.innerText = `Congratulations "${winner}" Is The Winner`; 
    msgtext.classList.remove("hide");
    disabledboxes();
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("The Box Are Clicked");
        if (turnO === true) {
            box.innerText = "O";
            box.style.color = "red";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "blue";
            turnO = true;
        }
        box.disabled = true;
        checkWinner(); 
    });
});
const disabledboxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}
const enabledboxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const checkWinner = () => { 
    for (let pattern of winRules) { 
        let plot1 = boxes[pattern[0]].innerText;
        let plot2 = boxes[pattern[1]].innerText;
        let plot3 = boxes[pattern[2]].innerText;

        if (plot1 !== "" && plot2 !== "" && plot3 !== "") {
            if (plot1 === plot2 && plot2 === plot3) {
                console.log("winner", plot2);
                showwinner(plot2);
            }
        }
    }
};

newbtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
