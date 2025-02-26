let player = "X"
let cells = document.querySelectorAll(".cells")
allCells = Array.from(cells)

let info = document.querySelector("p")

allCells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (cell.innerText != "" || win){
            return
        }
        cell.innerText = player

        player = player == "X" ? "O" : "X"
        info.textContent = `It is now ${player}'s turn`

        checkScore()
    })
})

let win = false

function checkScore(){
    const winningCombos = [
        [0,1,2] , [3,4,5] , [6,7,8] ,
        [0,3,6] , [1,4,7] , [2,5,8] ,
        [0,4,8] , [2,4,6] 
    ]

    winningCombos.forEach(array => {
        if (array.every(x => cells[x].innerText === "X")){
            win = true
        }

        else if (array.every(x => cells[x].innerText === "O")){
            win = true
        }
    })

    if(win){
        info.textContent = `~ ${player == "X" ? "O" : "X"} WINS ~ Hit restart to play again`
    }

    else if (allCells.every(cell => cell.innerText === "X" || cell.innerText === "O")){
        info.textContent = "It's a draw! Hit restart to play again"

    }
}

document.querySelector("button").addEventListener("click", restart)

function restart(){
    win = false
    allCells.forEach(cell => cell.innerText = "")
    info.textContent = "Player 1: Begin selecting a cell. Player 2: You're next ~"
}