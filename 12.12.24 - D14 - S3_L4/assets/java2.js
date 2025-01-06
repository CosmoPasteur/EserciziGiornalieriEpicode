function createMainBoard(num) {
    let mainBoard = document.querySelector("main-board")
    for(let i=0; i<num; i++) {
        let div = document.createElement("div")
        div.classList.add("cell");
        div.innerText = i + 1;
        mainBoard.appendChild(div)
    }
}

function generateRandomNumber(num) {
    let numRand = Math.round(Math.random()* num)
}

createMainBoard (76)