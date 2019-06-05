let game = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
let turn = 'O';

function placeMarker(boxNumber) {
    const box = document.getElementById('box'+boxNumber);
    // On the first turn, player X should put an X on the board.
    while(box.innerHTML === '-') {
        if(turn === 'O') {
            turn = 'X';
            box.innerHTML = turn;
            box.style.color = 'black';
        } else if(turn === 'X') {
            turn = 'O';
            box.innerHTML = turn;
            box.style.color = 'black';
        }
    }
}

function resetGame() {
    const box = document.getElementById('box'+boxNumber);
    if(box.innerHTML === "X") {
        box.innerHTML = '-';
    } else if (box.innerHTML === "O") {
        box.innerHTML = '-';
    } else {
        console.log("Nothing to report");
    }

}

