let isGameOver = false;
let player = "X"
let count = 0;
const GameMode = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]
function playGame(cell) {
    if (isGameOver) {
        document.getElementById("gameover").innerText = "Game Over!"
        return;
    }
    let row = cell.parentNode.rowIndex;
    let col = cell.cellIndex;

    if (GameMode[row][col] === "") {
        GameMode[row][col] = player;
        cell.innerText = player;
        count++;
        if (checkWinner()) {
            document.getElementById("player").innerHTML = `${player} Won the game!`
        }
        else if (Tie()) {
            document.getElementById("player").innerHTML = "Game Tie"
        }
        else {
            if (player === "X") {
                player = "O"
            }
            else {
                player = "X"
            }
            document.getElementById("player").innerHTML = `Turn for ${player}`
        }
    }
}

function checkWinner() {
 
    for (let i = 0; i < 3; i++) {
        if (GameMode[i][0] === player && GameMode[i][1] === player && GameMode[i][2] === player) {
            isGameOver = true;
            return true;
        }
    }

    for (let i = 0; i < 3; i++) {
        if (GameMode[0][i] === player && GameMode[1][i] === player && GameMode[2][i] === player) {
            isGameOver = true;
            return true;
        }
    }
   
    if (GameMode[0][0] === player && GameMode[1][1] === player && GameMode[2][2] === player) {
        isGameOver = true;
        return true;
    }
   
    if (GameMode[0][2] === player && GameMode[1][1] === player && GameMode[2][0] === player) {
        isGameOver = true;
        return true;
    }
}
function Tie() {
    if(count == 9){
        return true;
    }
    return false;
}

function gameRestart(){
    location.reload();
}