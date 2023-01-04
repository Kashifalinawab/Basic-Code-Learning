let myArry = ["rock", "paper", "scissor"];
let pcRndmArry = Math.floor(Math.random() * myArry.length)
console.log(pcRndmArry);


let rck = 1;//1>0=tie,1=1=you lose, 1<2=you win
let ppr = 1;//1>0=u win,1=1=tie, 1<2=y lose
let scisr = 1;//1>0=y lose,1=1=you lose, 1<2=tie
function rockBtn() {
    if (rck > pcRndmArry) {
        alert(" Tie ");
        document.write("Your give value rock is same as the computer given value rock .so Its a Tie");
    }
    else if (rck == pcRndmArry) {
        alert("Computer Win You Loose")
    } else if (rck < pcRndmArry) {
        alert(" You Win Computer Loose")

    }
}

function paperBtn() {
    if (ppr > pcRndmArry) {
        alert(" You Win ")
    }
    else if (rck == pcRndmArry) {
        alert("Tie")
    } else if (rck < pcRndmArry) {
        alert("  Computer Win  You Loose")

    }
};


function scissorBtn() {
    if (scisr > pcRndmArry) {
        alert("Computer Win You Loose")
    }
    else if (rck == pcRndmArry) {
        alert("You Win Computer Loose")
    } else if (rck < pcRndmArry) {
        alert(" Tie")

    }
};


