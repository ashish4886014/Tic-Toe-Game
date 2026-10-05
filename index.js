let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]

];

let container = document.querySelector(".container");
let boxes = document.querySelectorAll(".box")
let winner = document.querySelector(".winner");
let newGame = document.querySelector(".newGame")
let resetGame = document.querySelector(".resetGame")
let maring = document.querySelector(".maring")

let reGame = () => {
    play = true;
    enbleboxes();
    winner.classList.add("hide");

}
let disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
let enbleboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.textContent = "";
    }

}

let showWinner = (winners) => {
    winner.textContent = `Congratulation ${winners} is Winner`;
    winner.classList.remove("hide");
    disabledboxes();
}


let play = true;
boxes.forEach((box) => {
    box.addEventListener('click', () => {

        if (play) {
            box.textContent = "O";
            box.setAttribute("style", "font-size : 2rem; color: red ; font-weight:700")

            play = false;
        }
        else {
            box.textContent = "X";
            box.setAttribute("style", "font-size : 2rem; color: blue ; font-weight:700")
            play = true;
        }
        box.disabled = true
        checeked();


    })


})

let checeked = () => {
    for (let p of winPatterns) {
        let pal1value = boxes[p[0]].textContent;
        let pal2value = boxes[p[1]].textContent;
        let pal3value = boxes[p[2]].textContent
        if (pal1value != "" && pal2value != "" && pal3value != "") {
            if (pal1value === pal2value && pal2value === pal3value) {
                // console.log("aur you winner");
                showWinner(pal1value);
            }
        }

    }
}

newGame.addEventListener('click' , () =>{
    reGame();
})
resetGame.addEventListener('click' ,() =>{
    reGame();
})