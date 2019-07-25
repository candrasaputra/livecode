function isSave(board) {
    let bKolom, bBaris;

    for (let i = 0; i < board.length; i++) { // kolom
        for (let j = 0; j < board[i].length; j++) { // baris
            if (board[i][j] === 'B') {
                bKolom = i;
                bBaris = j;
            }
        }
    }

    // cek baris
    for (let i = 0; i < board.length; i++) {
        if (board[i][bKolom] === 'P') {
            return false;
        }
    }
    // cek kolom
    for (let i = 0; i < board[bBaris].length; i++) {
        if (board[bBaris][i] === 'P') {
            return false;
        }
    }
    return true;
}

console.log(isSave(
    [
        [' ', ' ', ' '],
        [' ', 'B', ' '],
        [' ', ' ', 'P']
    ]
)) // true

console.log(isSave(
    [
        [' ', ' ', ' '],
        [' ', 'B', ' '],
        [' ', 'P', '']
    ]
)) // false

console.log(isSave(
    [
        [' ', ' ', ' '],
        [' ', 'B', 'P'],
        [' ', ' ', ' ']
    ]
)) // false